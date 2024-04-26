import style from './beneficiosMovel.module.css'

export default function BeneficiosMovel() {
    return (
        <div className={style.content}>
            <div className={style.beneficios1}>
                <div className={style.title}>
                    <h2>Agora onde você estiver, a <strong>HAYP</strong> também estará com você</h2>
                    <p>Proporcionando a maior cobertura do Brasil no:</p>
                </div>
                <img
                    width={287}
                    height={251}
                    src="/img/movel/Brasil.svg"
                    alt='Maior cobertura de 5G do Brasil'
                />
                <ul className={style.list}>
                    <li>Portabilidade gratuita</li>
                    <li>WhatsApp ilimitado</li>
                    <li>E muito mais...</li>
                </ul>
                <a href={"saiba-mais"} target="_blank" className={style.button} rel="noreferrer">
                    Saiba mais
                </a>
            </div>

            <div className={style.beneficios2}>
                <h2>3 opções de tamanho com opção do <strong>eSIM</strong>:</h2>
                <img
                    width={287}
                    height={156}
                    src="/img/movel/chip.svg"
                    alt='Varios tamanhos e formatos de chip'
                />
            </div>

            <div className={style.beneficios3}>
                <h2>Baixe o nosso <span>app</span> e tenha acesso aos nossos <span>pacotes</span>.</h2>
                <div className={style.apps}>
                    <a href="/playStore">
                        <img
                            width={127}
                            height={39}
                            src="/img/movel/googleStore.svg"
                            alt='Play Store'
                        />
                    </a>
                    <a href="/appleStore">
                        <img
                            width={127}
                            height={39}
                            src="/img/movel/appleStore.svg"
                            alt='Apple Store'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}