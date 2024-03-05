const { default: Image } = require("next/image");
import Link from "next/link";
import whatsApp from "../../../public/images/icon/whatsapp.svg";
import style from './whatsapp.module.css'

export default function WhatsApp(){
    return(
        <div className={style.whatsApp}>
            <Link href={"https://api.whatsapp.com/send?phone=551128762641"}> 
                <Image
                
                src={whatsApp}
                    width={50}
                    height={50}
                    alt="Fale com a gente pelo WhatsApp"
                />
            </Link>
            
        </div>
    )
}