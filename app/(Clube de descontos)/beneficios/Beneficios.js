"use client";

import { useState } from "react";
import styles from "./clube.module.css"

function Beneficio({ title1, titleStrong, title2, text1, text2, image, subInfo1, subInfo2, link }) {
    return (
        <div>
            <div className={styles.titlePrincipal}>
                <h2 className={styles.title1}>{title1} <strong>{titleStrong}</strong></h2>
                <small>{subInfo1}</small>
                <p>{text1}</p>
            </div>            
            <div className={styles.imagem1}>
                <img src={`/assets/images/${image}`} alt={`Beneficio: ${title1}`} />
                <small>{subInfo2}</small>
            </div>

            <h2>{title2}</h2>
            <p>{text2}</p>
            <br />
            <br />
            <a target="_blank" href={link} className={styles.btSaibaMais}>
                <span className={styles.link}>saiba mais</span>
            </a>
        </div>
    )
}

export default function Beneficios() {

    const [clickBeneficios, setClickBeneficios] = useState(false)

    function atention() {
        return setClickBeneficios(!clickBeneficios)
    }

    function Buttons() {
        return (
            <>
                <button className={`${styles.button} ${styles[clickBeneficios ? "desativo" : "ativo"]}`} type="button" onClick={atention}>Clube de desconto</button>

                <button className={`${styles.button} ${styles[!clickBeneficios ? "desativo" : "ativo"]}`} type="button" onClick={atention}>Pacote Microsoft 365</button>
            </>
        )
    }

    return (
        <>
            <main className={styles.content}>

                <Buttons />

                <div >
                    <h1>Benefícios</h1>
                    <p>Promoções, cupons de descontos e mais...</p>
                </div>

                <div hidden={clickBeneficios}>
                    <Beneficio
                        title1="Clube de desconto"
                        titleStrong="HAYP"
                        text1="Clientes da Hayp podem ganhar descontos exclusivos em vários estabelecimentos, cinemas, farmácias, lojas online e muitos outros."
                        image="marcas2.png"
                        subInfo2=""
                        title2="Como funciona o clube de descontos ?"
                        text2="Simples, faremos um cadastro com seu CPF e você terá acesso a nossa página de descontos exclusivos."
                        link="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641"
                    />
                </div>

                <div hidden={!clickBeneficios}>
                    <Beneficio
                        title1="Pacote"
                        titleStrong="Microsoft 365"
                        subInfo1="(A partir do planos de 500 Mega)"
                        text1="Tenha acesso às ferramentas essenciais do Microsoft 365 para aumentar sua produtividade, como Word, Excel, 1 TB OneDrive e várias outras para trabalhar de forma mais eficiente."
                        image="365Icon.png"
                        subInfo2="(Programas disponiveis no Pacote 365)"
                        link="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641"
                    />
                </div>
            </main>
        </>
    )
}