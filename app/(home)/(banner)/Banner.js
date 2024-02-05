import Image from "next/image";
import styles from "./banner.module.css"
import exemplo2 from "../../../public/assets/images/icons/exemplo2.svg"
export default function Banner() {
    return (
        <div className={styles.container}>
            <h3>Teste de Velocidade</h3>
            <video className={styles.video} autoPlay loop muted src="/video/teste_de_velocidade.mp4" />
            
        </div>
    )
}