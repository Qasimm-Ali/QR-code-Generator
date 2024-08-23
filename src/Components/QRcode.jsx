import QRCode from "react-qr-code";

export default function QRcode(){
    return<div className="h-screen w-screen">
        <div>
            <input type="text" />
            <button>Generate</button>
        </div>
        <div>
        <QRCode
        value=""
        />
        </div>
    </div>
}