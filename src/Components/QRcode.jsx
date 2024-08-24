import QRCode from "react-qr-code";
import { useState, useRef } from "react";
export default function QRcode(){
    const ref = useRef()
    const [userData, setuserData] = useState("")
    function handleClick(){
        setuserData(ref.current.value)
        ref.current.value =""
    }
    return<div className="h-screen w-screen flex justify-center items-center flex-wrap gap-5 ">
        <div className="flex flex-col items-center gap-4 ">
            <input className="border-[2px] border-black rounded-md p-1 w-[16rem] outline-none " type="text" name="text" ref={ref}  />
            <p>
            <button className="bg-neutral-700 text-neutral-400 p-2 rounded-md cursor-pointer hover:text-neutral-200" onClick={handleClick}>Generate</button>
            </p>
        </div>
        <div>
        <QRCode
        className="rounded-md"
        value={userData}
        size={220}
        />
        </div>
    </div>
}