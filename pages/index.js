import React, { useState } from "react";
const baseimg =
  "https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844";

// import { baseimg } from "../firebase/endpoints";
import mats from "../firebase/mats";

const matsUpper = mats[1].materials;
const matsLower = mats[0].materials;

export default function Home() {
  const [upper, setUpper] = useState(0);
  const [lower, setlower] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <img src={baseimg} className="static " />
          <img src={matsUpper[4].layer} className="z-0 hover:z-50 absolute top-34 left-73" />
          <img src={matsLower[2].layer} className="z-0 hover:z-50 absolute top-34 left-73" />
        </div>

    </>
  );
}

{
  /* {matsLower.map((arr) => <img src={arr.layer}/>)} */
}
