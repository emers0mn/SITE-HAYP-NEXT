import styles from "./clube.module.css"

export default function ClubeHayp() {
    return (
        <>
            <main className={styles.content}>
                <div >

                    
                        <h1 className={styles.title1}>Clube de <span className={styles.subtitle1}>desconto</span></h1>
                        
                    

                    <p>
                        Clientes da Hayp podem ganhar descontos exclusivos em vários estabelecimentos, cinemas, farmácias, lojas online e muitos outros.
                    </p>

                    <h2 className={styles.title2}>
                        Como funciona o clube de <span className={styles.subtitle2}>descontos</span> ?
                    </h2>

                    <p>
                        Simples, faremos um cadastro com seu CPF e você terá acesso a nossa página de descontos exclusivos.
                    </p>

                    <img
                        src="./assets/images/marcasWebP.webp"
                        
                    />

                    <p>
                        *acompanhe os canais oficiais <br />
                        para potênciais mudancas
                    </p>

                    <img
                        src="./assets/images/card_1WebP.webp"

                    />

                    <p>
                        Você também terá um cartão fisico e um digital para poder facilitar ainda mais o seu acesso.
                    </p>

                    <br />
                    <a target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641" className={styles.btSaibaMais}>
                        <span className={styles.link}>saiba mais</span>
                    </a>


                    <p className={styles.subtitlefooter}>
                        *Consulte condições de participação.
                    </p>

                </div>
            </main>
        </>
    )
}