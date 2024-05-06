"use client";
import React, { useState } from "react";
import LoadingSpinner from "../../../components/spinner/LoadingSpinner";
import style from './movel.module.css'
import { Popup } from "./popup/Popup";

export function Apps({ aplicativo }) {
    return (
        <div>
            <img
                width={43}
                height={43}
                src={`/img/movel/${aplicativo}.svg`}
                alt={`App ${aplicativo}`}
            />
        </div>
    )
}


export default function PlanosMoveis() {

    const [showCep, setShowCep] = useState(false);
    const toggleSignin = () => {
        setShowCep(!showCep);
    }

    const dadosPlanos = require("../components/dados/movel.json");
    const [selectedId, setSelectedId] = useState(1); // Estado para armazenar o ID selecionado
    const [isLoading, setIsLoading] = useState(false);


    return (
        <>
            {dadosPlanos.moveis
                .filter(movel => movel.id === selectedId)
                .map(movel => (
                    <main key={movel.id}>

                        <Popup
                            isOpen={showCep}
                            toggle={toggleSignin}
                            price1={movel.revenda}
                            price2={movel.revenda + 19}
                            plano = {movel.plano + movel.portabilidade}
                        />

                        <section className={style.content}>

                            <div className={style.contentTitle}>
                                <h1>Conecte-se à velocidade do <strong>futuro com HAYP</strong>:</h1>
                                <div className={style.experiencia}>
                                    <p>a experiência acelerada do</p>
                                    <img
                                        width={127}
                                        height={39}
                                        src="/img/movel/icon-5G.svg"
                                        alt='Sinal 5G'
                                    />
                                </div>
                            </div>

                            <div>

                                <div className={(movel.plano + movel.portabilidade == 12) ? style.containerMovelAtiva : style.containerMovel}>
                                    <div className={style.container}>
                                        <div className="packages">
                                            <div >
                                                {isLoading ? <LoadingSpinner /> :
                                                    <div>
                                                        <div>
                                                            <div >
                                                                <h3 className={style.haypMovel}>HAYP Móvel</h3>
                                                                <div className={style.contentGiga}>
                                                                    <button className={(movel.plano == 5) ? style.buttonActionOpacity : style.buttonAction} onClick={() => { selectedId <= 1 ? setSelectedId(selectedId - 0) : setSelectedId(selectedId - 1) }}><img
                                                                        src="/img/movel/buttonMinus.svg"
                                                                        alt='Remover GB'
                                                                        width={50}
                                                                        height={50}
                                                                    /></button>

                                                                    <h2 className={style.giga}>{movel.plano + movel.portabilidade}GB</h2>

                                                                    <button className={(movel.plano + movel.portabilidade == 45) ? style.buttonActionOpacity : style.buttonAction} onClick={() => { selectedId < 7 ? setSelectedId(selectedId + 1) : setSelectedId(selectedId - 0) }}><img
                                                                        width={50}
                                                                        height={50}
                                                                        alt='Adiconar GB'
                                                                        src="/img/movel/buttonPlus.svg" />
                                                                    </button>

                                                                </div>

                                                                {movel.plano == 5 ? `` : <h3 className={style.haypMovel}>{movel.plano}GB + {movel.portabilidade} GB de Portabilidade</h3>}

                                                                {/* <h3 className={style.haypMovel}>{movel.plano}GB + {movel.portabilidade} GB de Portabilidade</h3> */}
                                                                <div className={style.prices}>
                                                                    <small className={style.priceOld}>De: <span>R${movel.revenda + 19},90</span></small>
                                                                    <div className={style.price}>
                                                                        <h4><span>Por: </span>R${movel.revenda},00</h4>
                                                                        <small>/mês</small>
                                                                    </div>
                                                                    <p>(Oferta exclusiva na assinatura de <strong>Internet Fixa</strong> + <strong>Móvel</strong> )</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <button href="/planos" onClick={() => { toggleSignin(); }} target="_blank" className={style.button} rel="noreferrer">
                                                                    Assine Já
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={(movel.plano + movel.portabilidade == 12) ? style.containerDestaqueAtiva : style.containerDestaque}>
                                        <h5 className={style.destaque}>Plano mais vendido</h5>
                                    </div>
                                    <div className={style.containerBeneficios}>
                                        <h5>Apps <strong>ilimitados</strong></h5>
                                        <p>Sem consumir da internet</p>

                                        <div className={style.imgBeneficios}>
                                            <Apps
                                                aplicativo={movel.bonus[0]}
                                            />
                                            <Apps
                                                aplicativo={movel.bonus[1]}
                                            />
                                            <Apps
                                                aplicativo={movel.bonus[2] == null ? "WazeOff" : movel.bonus[2]}
                                            />
                                        </div>

                                        <h5>{movel.plano <= 7 ? `Ligações ${movel.ligacoes}` : `Ligações e SMS ilimitado:`}</h5>
                                        <h5>{movel.plano <= 7 ? `${movel.sms} SMS` : <p>Não tenha limites para poder se comunicar com quem você quiser.</p>}</h5>
                                    </div>
                                </div>

                            </div>




                            <div id="stars" />
                            <div id="stars2" />
                            <div id="stars3" />
                        </section>

                    </main>
                ))}



        </>
    )
}

