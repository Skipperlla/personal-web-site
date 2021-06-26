import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "@uiw/react-markdown-preview/dist/markdown.css";
import { useContext } from "react";
import { Context } from "../context/Context";
import { ToastError, ToastSuccess } from "../utils/Messages";
import { v4 as uuidv4 } from "uuid";
import { storage, db, serverTimestamp } from "../firebase/client";
import { useEffect } from "react";
export default function CreateBlog() {
  const { setToast } = useContext(Context);
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
  });
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [url, setURL] = useState("");
  useEffect(() => {
    if (url) {
      try {
        db.collection("blogs").add({
          title: form.title,
          subTitle: form.subTitle,
          imageUrl: url,
          body: value,
          postedBy: "Skipperlla",
          createdAt: serverTimestamp(),
        });
        setToast(true);
        ToastSuccess("Blog Oluşturuldu");
      } catch (error) {
        setToast(true);
        ToastError("Blog Oluşturulurken Hata:", error.message);
      }
    }
  }, [url]);
  const onChangeValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const SubmitDetails = async (event) => {
    event.preventDefault();
    var uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image);
    if (!form.title || !form.subTitle || !value || !image) {
      setToast(true);
      ToastError("Lütfen hiçbir alanı boş geçmeyiniz");
    } else {
      await uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == "100") {
            setToast(true);
            ToastSuccess("Fotoğraf Yüklendi");
          }
        },
        (error) => {
          setToast(true);
          ToastError("Fotoğraf Yüklenemed", error.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            setURL(downloadURL);
          });
        }
      );
    }
  };
  return (
    <div className="mt-10">
      <div className="mb-10">
        <label>
          Title
          <input
            type="text"
            className="bg-gray-800 w-full mb-12 py-2 px-4 rounded focus:outline-none"
            name="title"
            onChange={(event) => onChangeValue(event)}
          />
        </label>
      </div>
      <div className="mb-10">
        <label>
          SubTitle
          <input
            type="text"
            className="bg-gray-800 w-full mb-12 py-2 px-4 rounded focus:outline-none"
            name="subTitle"
            onChange={(event) => onChangeValue(event)}
          />
        </label>
      </div>
      <div className="mb-10">
        <label>
          Fotoğraf
          <input
            type="file"
            className="bg-gray-800 w-full mb-12 py-2 px-4 rounded focus:outline-none"
            name="image"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </label>
      </div>
      <MDEditor height={200} onChange={setValue} />
      <button
        type="submit"
        className="py-2 px-4 rounded bg-green-600 w-full focus:outline-none font-semibold disabled:opacity-60"
        disabled={false}
        onClick={(event) => {
          SubmitDetails(event);
        }}
      >
        Gönder
      </button>
    </div>
  );
}
