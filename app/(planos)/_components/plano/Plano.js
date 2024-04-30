"use client";

import React, { useEffect, useState } from "react";
import Api from "../../../../service/Api";
import LoadingSpinner from "../../../../components/spinner/LoadingSpinner";
import "../../_components/plans.css";
import BeneficiosPlanos from "../beneficios/BeneficiosPlanos";

export default function Planos() {

    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: null,
        nextArrow: null,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [plans, setPlans] = useState([]);
    const [plansAdd, setPlansAdd] = useState([]);
    const [plan, setPlan] = useState({
        name: "",
        icon: "",
        price: "",
        discount: "",
        firstDescription: "",
        secondDescription: "",
        thirdDescription: "",
        fourthDescription: "",
        downSpeed: "",
        upSpeed: "",
        turboMessageShow: "",
        addPlanIsShow: "",
        addPlanAddPackage: "",
        addPlanaddidiscount: ""
    });
    const [index, setIndex] = useState(0);
    const [isInternetOnly, setIsInternetOnly] = useState(true);
    const [variants, setVariants] = useState({
        downSpeed: 0,
        upSpeed: 0,
        price: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // setIsLoading(true);
        async function Get() {
            await Api.get("Web/GetNewPlans")
                .then((response) => {
                    setPlans(response.data.prices);
                    setPlansAdd(response.data.pricesAdd);
                    setIsLoading(false);
                })
                .catch((err) => {

                });
        }
        Get()
    }, [])

    useEffect(() => {
        toggle(false);
        // setIsInternetOnly(!isInternetOnly);

        if (index < 0)
            setIndex(0);

        if (index >= 0) {
            if (plans.length >= 0) {
                if (index <= (plans.length - 1)) {
                    setPlan(plans[index]);
                    setVariants({
                        downSpeed: plan.downSpeed,
                        upSpeed: plan.upSpeed,
                        price: plan.price
                    });
                } else {
                    setIndex(plans.length - 1);
                }
            }
        }

        // document.getElementById("isInternetOnly").checked = true;
    }, [index, plans, plan])



    const handleChange = ({ target }) => {
        if (document.getElementById("isInternetOnly").checked === true) {
            setIsInternetOnly(false);
            document.getElementById("isInternetOnly").checked = false;
        } else {
            var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

            let falseCount = 0;

            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].id !== "isInternetOnly") {
                    if (checkboxes[i].checked === true) {
                        falseCount++;
                    }

                }
            }

            if (falseCount === 0) {
                setIsInternetOnly(true);
                document.getElementById("isInternetOnly").checked = true;
            }
        }

        if (target.checked) {
            target.removeAttribute('checked');
            //    target.parentNode.style.textDecoration = "";
            ChangePlan(target.name, true);
        } else {
            target.setAttribute('checked', true);
            //    target.parentNode.style.textDecoration = "line-through";
            ChangePlan(target.name, false);
        }
    }

    const handleInternetCheckboxChange = ({ target }) => {
        if (plan.addPlanIsShow === 0) {
            document.getElementById("isInternetOnly").checked = true;
            return;
        }
        if (target.checked) {
            toggle(false);
            target.removeAttribute('checked');
            // target.parentNode.style.textDecoration = "";
            setVariants({
                downSpeed: plan.downSpeed,
                upSpeed: plan.upSpeed,
                price: plan.price
            });
        } else {
            toggle(true);
            target.setAttribute('checked', true);
            // target.parentNode.style.textDecoration = "line-through";

            let downSpeed = plan.downSpeed;
            let upSpeed = plan.upSpeed;
            let price = plan.price;

            plansAdd.forEach(x => {
                downSpeed += x.downSpeedBonus;
                upSpeed += x.upSpeedBonus;
                price += x.price;
            })

            setVariants({
                downSpeed: downSpeed,
                upSpeed: upSpeed,
                price: price
            });

        }

        setIsInternetOnly(!isInternetOnly);
    }

    function toggle(status) {
        if (plan.addPlanIsShow === 1) {
            plansAdd.forEach(x => {
                document.getElementById(x.Id).checked = status;
                // ChangePlan(x.Id, status);
            })
        }
    }

    function ChangePlan(id, status) {

        let downSpeed = variants.downSpeed;
        let upSpeed = variants.upSpeed;
        let price = variants.price;


        plansAdd.forEach(x => {
            if (x.Id === parseInt(id)) {
                if (status === true) {
                    downSpeed += plan.addPlanAddPackage === 1 ? x.downSpeedBonus : 0;
                    upSpeed += plan.addPlanAddPackage === 1 ? x.upSpeedBonus : 0;
                    price += x.price + plan.addPlanaddidiscount;
                } else {
                    downSpeed -= plan.addPlanAddPackage === 1 ? x.downSpeedBonus : 0;
                    upSpeed -= plan.addPlanAddPackage === 1 ? x.upSpeedBonus : 0;
                    price -= x.price + plan.addPlanaddidiscount;
                }
            }
        })

        setVariants({
            downSpeed: downSpeed,
            upSpeed: upSpeed,
            price: price
        });
    }

    const [indexPlano, setIndexPlano] = useState("ativo");
    const [descontoAntecipado, setDescontoAntecipado] = useState(false);
    const [btAtivo, setBtAtivo] = useState("")


    function contact() {

        let planContact = "";

        if (isInternetOnly === true) {

            planContact = "https://wa.me/551128762641?text=Ol%C3%A1%2C+vi+este+plano+de+" + plan.downSpeed + "+MEGAS+no+seu+site+e+gostaria+de+saber+mais";

        } else {
            planContact = "https://wa.me/551128762641?text=Ol%C3%A1%2C+montei+este+combo+" + plan.downSpeed + "+e+gostaria+de+saber+mais!";
        }

        return planContact;
    }



    return (
        <>
            <main className="content">

                <div className="heading-title">
                    <h1>Monte o seu plano completo</h1>

                    <p>
                        <strong>Internet 100% fibra óptica</strong>, TV, Telefone Fixo e <strong>Chip 5G</strong>.
                    </p>
                </div>

                <div className="container text-center">
                    <div className="packages">

                        <div>
                            {isLoading ? <LoadingSpinner /> :
                                <div key="plan" className="package-list center">
                                    {/* <div className="package-icon" >
                                        <img
                                            width={80}
                                            height={80}
                                            quality={50}
                                            loading="lazy"
                                            src={"/assets/images/" + plan.icon}
                                            alt="Velocimetro"
                                            className="img-fluid"
                                        />
                                    </div> */}

                                    <div className="package-info">
                                        <div className="price-plan">
                                            <img width={45} height={45} quality={50} loading="lazy" className="minus" onClick={() => setIndex(index - 1)} src="/img/movel/buttonMinus.svg"
                                                alt="dminuir a quantidade de megas" />

                                            <h1>{plan.downSpeed} Mega</h1>

                                            <img width={45} height={45} quality={50} loading="lazy" className="plus" onClick={() => setIndex(index + 1)} src="/img/movel/buttonPlus.svg"
                                                alt="adicionais mais megas" />
                                        </div>
                                        <div className={(plan.downSpeed == 400) ? `containerDestaqueAtiva` : `containerDestaque`}>
                                            <h5 className="destaque">Plano mais vendido</h5>
                                        </div>
                                        <BeneficiosPlanos />

                                        <div className="line-divisor"></div>

                                        <div className="container-new-list">
                                            <div className="container-bt">
                                            </div>
                                            <ul className="listCompleta">
                                                <li>
                                                    <div className="list-bt">
                                                        <label for="checkBoxApenasInternet">
                                                            <input id="isInternetOnly" type="checkbox" name="interNetOnly"
                                                                onChange={handleInternetCheckboxChange}
                                                                defaultChecked={isInternetOnly}
                                                                value="true">
                                                            </input>
                                                        </label>
                                                        <div>
                                                            <h2>Wi-Fi Premium</h2>
                                                            <p>(Ganhe + 100 Mega)</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="list-bt">
                                                        <label for="checkBoxApenasInternet">
                                                            <input id="isInternetOnly" type="checkbox" name="interNetOnly"
                                                                onChange={handleInternetCheckboxChange}
                                                                defaultChecked={isInternetOnly}
                                                                value="true">
                                                            </input>
                                                        </label>
                                                        <div>
                                                            <h2>HAYP Móvel</h2>
                                                            <p>(+100 Mega)</p>
                                                        </div>
                                                        <img
                                                            src="/img/movel/5g.svg"
                                                            width={40}
                                                            height={40}
                                                            alt=""
                                                        />
                                                    </div>
                                                </li>

                                                {plansAdd.map((item) => (
                                                    plan.addPlanIsShow === 1 ?

                                                        <li key={item.Id}>
                                                            <div className="list-bt">
                                                                <label for="checkBoxPlanosAdicinais">
                                                                    <input id={item.Id} type="checkbox" name={item.Id} value="false"
                                                                        onChange={handleChange}
                                                                    ></input>
                                                                </label>
                                                                <h2>{item.name}</h2>
                                                            </div>
                                                            {item.downSpeedBonus > 0 && plan.addPlanAddPackage === 1 ?
                                                                <p>(Ganhe + {item.downSpeedBonus} Mega)</p>
                                                                : <></>}
                                                        </li>
                                                        : <></>
                                                ))}


                                            </ul>
                                        </div>
                                    </div>


                                    {isInternetOnly === false ?
                                        <div className="bonusMega">
                                            <h3>Você irá receber</h3>
                                            <span style={{ fontWeight: "900", color: "var(--cor-2)", fontSize: "20px" }} className="price">{variants.downSpeed} Mega</span>
                                        </div>
                                        : <></>
                                    }

                                    <div className="package-price">
                                        <span className="sale">R$ {(variants.price - 0).toFixed(2).replace('.', ',')}</span>

                                        <p hidden={descontoAntecipado} style={{ fontWeight: "500", fontSize: "12px" }}>Pagando até o vencimento <br />  você ganha R$10 de desconto
                                        </p>

                                        <span style={{ fontFamily: "Gordita", fontWeight: "900", color: "#008D1E", fontSize: "40px" }} className="price">

                                            R${(variants.price - (variants.price > 0 ? plan.discount : 0)).toFixed(2).replace('.', ',')}<span style={{ color: "#000", fontWeight: "500" }}>/mês</span>
                                        </span>
                                    </div>
                                    <a href={contact()} target="_blank" className="button" rel="noreferrer">
                                        Assine Já
                                    </a>

                                </div>
                            }


                        </div>

                    </div>
                </div>
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
            </main>
        </>
    )
}