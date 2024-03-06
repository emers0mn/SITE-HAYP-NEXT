'use client';

import React, { useEffect, useState } from "react";
import { PlanService } from "../../../(home)/_services/PlanService";


export default function PlanosPC() {
    const [checkbox1, setCheckbox1] = useState(true);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [desativado, setDesativado] = useState("desativado");



    const handleCheckbox1Change = () => {
        setCheckbox1(!checkbox1);
        if (checkbox2 || checkbox3) {
            setCheckbox2(false);
            setCheckbox3(false);
            setDesativado('desativado');
        } else if (checkbox1) {
            setCheckbox2(true);
            setCheckbox3(true);
            setDesativado('ativado')
        }

    };

    const handleCheckbox2Change = () => {
        setCheckbox2(!checkbox2);
        if (checkbox2 && !checkbox3) {
            setCheckbox1(true);
            setDesativado('desativado')


        } else {
            setCheckbox1(false);
            setDesativado('ativado');


        }
    };

    const handleCheckbox3Change = () => {
        setCheckbox3(!checkbox3);
        if (checkbox3 && !checkbox2) {
            setCheckbox1(true);
            setDesativado('desativado')


        } else {
            setCheckbox1(false);
            setDesativado('ativado')
        }
    };

    const {
        plans,
        handlePlans
    } = PlanService()

    useEffect(() => {
        handlePlans(0)
    }, [])

    const [plan, setPlan] = useState();

    return (
        <>

            <section className="sectionContent">
                {/*Apresentação da página*/}
                <div className="heading-title">
                    <h3>Internet <span>100%</span> Fibra Óptica</h3>
                    <div className="line-divisor"></div>
                    <p>
                        Não sabe qual é o melhor plano para sua casa?<br />Tem dúvidas de qual possa atender melhor a demanda da sua empresa?
                    </p>
                    <p><a target="_blank" rel="noreferrer" href="https://wa.me/551128762641?text=Ol%C3%A1%2C+estou+em+dúvida+de+qual+plano+escolher,+preciso+de+uma+ajuda">Mande uma mensagem</a> que vamos te ajudar a escolher o melhor plano com base no seu perfil.</p>
                </div>

                {/*Começo dos planos*/}
                <div className="conteiner-plan">
                    <div style={{ opacity: `${1}` }}>
                        <button className="button-plan-seta esquerda" onClick={() => {

                            setPlan(1);

                        }}>
                            <img
                                width={20}
                                height={30}
                                src="/images/plans/Seta-esquerda.png"
                                alt="seta para ver planos entre 100 a 400 Mega"
                                className="seta-white"
                            />

                            <img
                                width={20}
                                height={30}
                                src="/images/plans/Seta-esquerda-dark.png"
                                alt="seta para ver planos entre 100 a 400 Mega"
                                className="seta-dark"
                            />
                        </button>
                    </div>

                    <div className="box-plano">

                        {plans.map((item) => (
                            
                            <div key={item.key} className={`box-plan animation-${plan}`}>
                                <span className="icon icon-p">
                                    <img
                                        width={80}
                                        height={80}
                                        quality={10}
                                        loading="lazy"
                                        className="icon-velocidad"
                                        alt="Icone de velocidade"
                                        src={`images/another/${item.icon}`}
                                    />

                                </span>
                                <div className="iq-pricing">
                                    <div className="pricing-header">
                                        <span className="planName">{item.name}</span>
                                        {/* <span className="price-value">R$ {item.price.toFixed(2).replace('.', ',')}</span> */}
                                    </div>


                                    <div className="desc-plano-top">
                                        <ul>
                                            <li>
                                                <div className="icon-download" ></div>
                                                <p className="downloadFont">Download até {item.downSpeed} Mbps</p>
                                            </li>
                                            <li>
                                                <div className="icon-upload" ></div>
                                                <p> Upload até {item.upSpeed} Mbps</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="ulPlan">
                                        <li className="icone-benefits">
                                            <div className="icon-semFidelidade" ></div>
                                            <span>{item.description1}</span>
                                        </li>

                                        <li style={item.downSpeed === 300 ? { display: "none" } : (item.downSpeed && (item.downSpeed + (checkbox2 ? +100 : 0) + (checkbox3 ? +100 : 0)) >= 500 ? { display: "flex" } : { display: "none" })}>


                                            <div className="icon-365" ></div>
                                            <span>{item.description3}</span>
                                        </li>

                                        <li className="icone-benefits" >
                                            <div className="icon-wifi" ></div>
                                            <span>{item.description2}</span>
                                        </li>
                                        <li className="icone-benefits">
                                            <div className="icon-card" ></div>
                                            <span>{item.description4}</span>
                                        </li>
                                    </ul>
                                    <div className="line-divisor"></div>
                                    <div className="container-new-list">
                                        <div className="container-bt">
                                        </div>
                                        <ul className="list-checkbox" >
                                            <li>
                                                <div className="list-bt">
                                                    <input id="bt1Internet" type="checkbox" checked={item.downSpeed === 900 ? true : checkbox1} disabled={item.downSpeed === 900 ? true : false} onChange={handleCheckbox1Change}></input>
                                                    <span className="info-list-bt">Apenas internet</span>
                                                </div>
                                            </li>

                                            <li hidden={item.downSpeed === 900}>
                                                <div className="list-bt">
                                                    <label >
                                                        <input id="bt2Telefone" type="checkbox" name="" value="Telefone" onChange={handleCheckbox2Change} checked={checkbox2}></input>
                                                    </label>
                                                    <span className="info-list-bt">Telefone ilimitado</span>
                                                </div>
                                                (<span className="bonus">Ganhe + 100 Mega</span>)
                                            </li>

                                            <li hidden={item.downSpeed === 900}>
                                                <div className="list-bt" >
                                                    <input id="bt3Tv" type="checkbox" name="" value="Tv" onChange={handleCheckbox3Change} checked={checkbox3}></input>
                                                    <span className="info-list-bt">Tv ( + de 90 canais) <br /> + filmes e séries <br /></span>
                                                </div>
                                                (<span className="bonus">Ganhe + 100 Mega</span>)
                                            </li>
                                        </ul>

                                        <div hidden={item.downSpeed === 900 ? true : false} className={`bonus-de-mega bonus-${desativado}`}>
                                            <h3>Você irá receber:</h3>
                                            <p>
                                                {item.downSpeed + (checkbox2 ? +100 : 0) + (checkbox3 ? +100 : 0)} Mega
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="price-value2"> R$ {item.downSpeed === 900 ? ("209,90") : (item.price + (checkbox2 ? +30 : 0) + (checkbox3 ? +90 : 0)).toFixed(2).replace('.', ',')}
                                        </h4>
                                        <div className="vencimento">
                                            <p>Pagando antes do vencimento você ganha R$10 de desconto.</p>
                                        </div>
                                        <h3 className="price-value"> R$ {item.downSpeed === 900 ? ("199,90") : (item.price - item.discount + (checkbox2 ? +30 : 0) + (checkbox3 ? +90 : 0)).toFixed(2).replace('.', ',')} <span className="mes-pay">/mês</span></h3>
                                    </div>

                                    



                                    <a className="button" href={checkbox1 ? "https://wa.me/551128762641?text=Ol%C3%A1%2C+vi+este+plano+de+" + item.name + "+no+seu+site+e+gostaria+de+saber+mais" : "https://wa.me/551128762641?text=Ol%C3%A1%2C+montei+este+combo+" + item.downSpeed + (checkbox3 ? "+de+Tv" : "") + (checkbox2 ? "+com+Telefone" : "") + "+no+site+e+gostaria+de+saber+mais"} target="_blank" rel="noreferrer">
                                        Assine agora
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div style={{ opacity: `${1}` }}>
                        <button className="button-plan-seta direita" onClick={() => {

                            setPlan(2)
                        }} ><img
                                width={20}
                                height={30}
                                src="/images/plans/Seta-direita.png"
                                alt="seta para ver planos entre 500 a 900 Mega"
                                className="seta-white"
                            />

                            <img
                                width={20}
                                height={30}
                                src="/images/plans/Seta-direita-dark.png"
                                alt="seta para ver planos entre 500 a 900 Mega"
                                className="seta-dark"
                            />
                        </button>


                    </div>

                </div>
                <div className="manual-navegator" hidden>
                    <label className="manual-btn" onClick={() => {
                        setPlan(1)
                    }}></label>
                    <label className="manual-btn" onClick={() => {
                        setPlan(2)
                    }} ></label>
                </div>

                {/* Stars - Ativar ou desativar*/}
                {/* <div id="stars" />
                <div id="stars2" />
                <div id="stars3" /> */}

            </section>
        </>
    )
}