import { useEffect, useState, useRef } from "react";
import publicIP from "public-ip";
import { useRouter } from "next/router";
import { auth } from "../firebase/client";

import { useContext } from "react";
import { Context } from "../context/Context";
import { ToastError, ToastSuccess } from "../utils/Messages";
import os from "os";
export default function Login({ IPAdress, mac }) {
  console.log(mac);
  const { user, setToast } = useContext(Context);
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [disable, setDisable] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmitActive = async (event) => {
    event.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      setToast(true);
      ToastSuccess("Welcome" + result.user.displayName);
    } catch (err) {
      setToast(true);
      ToastError("Böyle Bir Kullanıcı Yok");
    }
  };
  const onChangeActive = (event) => {
    if (emailRef.current.value && passwordRef.current.value.length >= 8) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    if (IPAdress != process.env.NEXT_PUBLIC_IP) {
      router.push("/404");
    } else if (user) {
      router.push("/");
    }
  }, [IPAdress, router, user]);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl">Login</h1>
        <form
          method="post"
          className="w-6/12 mt-10 flex flex-col justify-center items-center"
          onSubmit={(event) => {
            onSubmitActive(event);
          }}
        >
          <div className="w-full">
            <input
              type="email"
              className="bg-gray-800 w-full mb-12 py-2 px-4 rounded focus:outline-none"
              name="email"
              onChange={(event) => onChangeActive(event)}
              require="true"
              ref={emailRef}
            />
          </div>
          <input
            type="password"
            className="bg-gray-800 w-full mb-12 py-2 px-4 rounded focus:outline-none"
            name="password"
            onChange={(event) => onChangeActive(event)}
            require="true"
            ref={passwordRef}
          />
          <button
            type="submit"
            className="py-2 px-4 rounded bg-green-600 w-full focus:outline-none font-semibold disabled:opacity-60"
            disabled={disable}
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const IPAdress = await publicIP.v4();
  const mac = os.networkInterfaces();
  return { props: { IPAdress, mac } };
};
