import React from "react";

const Right = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl mb-5 ">My PlayList</h1>
      <div className="">
        <iframe
          src="https://open.spotify.com/embed/playlist/44STiVDiLfSuYaosdX3RC7"
          width="100%"
          height="350"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default Right;
