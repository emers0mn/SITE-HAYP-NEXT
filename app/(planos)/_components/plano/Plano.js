"use client";

import React, { useEffect, useState } from "react";
import Api from "../../../../service/Api";
import LoadingSpinner from "../../../../components/spinner/LoadingSpinner";
import "../../_components/plans.css";
import BeneficiosPlanos from "../beneficios/BeneficiosPlanos";
import { Popup } from "../popup/Popup";
import { useSearchParams } from "next/navigation";
import { PlanoMovel } from "../params/Params";

export default function Planos() {

    // utitilização de parametros da URL
    const searchParams = useSearchParams()
    const check = searchParams.get('checkMovel');

    const priceMovels = parseInt(searchParams.get('priceMovel'))
    const priceMovel = (isNaN(priceMovels) ? 0 : priceMovels)
    const [wifiPremium, setWifiPremium] = useState(0)

    const quantidades = parseInt(searchParams.get('quantidade'))
    const quantidade = (isNaN(quantidades) ? 0 : quantidades)

    const [wifiBonus, setWifiBonus] = useState(0)
    const [movelBonus, setMovelBonus] = useState(0)



    function CheckMovel() {
        if (check === 'true') {
            return true
        } else return false
    }

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
    const [isInternetOnly, setIsInternetOnly] = useState(false);

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

        const validIndex = Math.max(0, Math.min(index, plans.length - 1));

        if (plans.length > 0 && index !== validIndex) {
            setIndex(validIndex);
        }

        // Definir 'plan' e 'variants' baseado em 'plans[index]'
        if (plans.length > 0 && validIndex >= 0 && validIndex < plans.length) {
            const selectedPlan = plans[validIndex];
            setPlan(selectedPlan);
            setVariants({
                downSpeed: selectedPlan.downSpeed,
                upSpeed: selectedPlan.upSpeed,
                price: selectedPlan.price
            });
        }
    }, [index, plans]);





    const handleChange = ({ target }) => {
        // if (document.getElementById("isInternetOnly").checked === true) {
        //     setIsInternetOnly(false);
        //     document.getElementById("isInternetOnly").checked = false;
        // } else {
        //     var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

        //     let falseCount = 0;

        //     for (var i = 0; i < checkboxes.length; i++) {
        //         if (checkboxes[i].id !== "isInternetOnly") {
        //             if (checkboxes[i].checked === true) {
        //                 falseCount++;
        //             }

        //         }
        //     }

        //     if (falseCount === 0) {
        //         setIsInternetOnly(true);
        //         document.getElementById("isInternetOnly").checked = true;
        //     }
        // }

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


    // const handleInternetCheckboxChange = ({ target }) => {
    //     if (plan.addPlanIsShow === 0) {
    //         document.getElementById("isInternetOnly").checked = true;
    //         return;
    //     }
    //     if (target.checked) {
    //         toggle(false);
    //         target.removeAttribute('checked');
    //         // target.parentNode.style.textDecoration = "";
    //         setVariants({
    //             downSpeed: plan.downSpeed,
    //             upSpeed: plan.upSpeed,
    //             price: plan.price
    //         });
    //     } else {
    //         toggle(true);
    //         target.setAttribute('checked', true);
    //         // target.parentNode.style.textDecoration = "line-through";

    //         let downSpeed = plan.downSpeed;
    //         let upSpeed = plan.upSpeed;
    //         let price = plan.price;

    //         plansAdd.forEach(x => {
    //             downSpeed += x.downSpeedBonus;
    //             upSpeed += x.upSpeedBonus;
    //             price += x.price;
    //         })

    //         setVariants({
    //             downSpeed: downSpeed,
    //             upSpeed: upSpeed,
    //             price: price
    //         });

    //     }

    //     setIsInternetOnly(!isInternetOnly);
    // }

    function toggle(status) {
        if (plan.addPlanIsShow === 1) {
            plansAdd.forEach(x => {
                document.getElementById(x.Id).checked = status;
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


    function contact() {

        let planContact = "";

        if (isInternetOnly === true) {

            planContact = "https://wa.me/551128762641?text=Ol%C3%A1%2C+vi+este+plano+de+" + plan.downSpeed + "+MEGAS+no+seu+site+e+gostaria+de+saber+mais";

        } else {
            planContact = "https://wa.me/551128762641?text=Ol%C3%A1%2C+montei+este+combo+" + plan.downSpeed + "+e+gostaria+de+saber+mais!";
        }

        return planContact;
    }

    const [showCep, setShowCep] = useState(false);
    const toggleSignin = () => {
        setShowCep(!showCep);
    }

    return (
        <>
            <Popup
                isOpen={showCep}
                toggle={toggleSignin}
                price1={''}
                price2={''}

            />
            <main className="content">

                <div className="heading-title">
                    <h1>Monte o seu plano completo</h1>

                    <p>
                        <strong>Internet 100% fibra óptica</strong>, TV, Telefone Fixo e <strong>Chip 5G</strong>.
                    </p>
                </div>

                <div className={plan.downSpeed == 400 ? "container" : ""}>
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

                                            <img
                                                width={45}
                                                height={45}
                                                quality={50}
                                                loading="lazy"
                                                className="minus"
                                                onClick={() => setIndex(index - 1)} src="/img/movel/buttonMinus.svg"
                                                alt="dminuir a quantidade de megas"
                                            />

                                            <h2>{plan.downSpeed} Mega</h2>

                                            <img
                                                width={45}
                                                height={45}
                                                loading="lazy"
                                                className="plus"
                                                onClick={() => setIndex(index + 1)}
                                                src="/img/movel/buttonPlus.svg"
                                                alt="adicionais mais megas"
                                            />

                                        </div>

                                        <div className={(plan.downSpeed == 400) ? `containerDestaqueAtiva` : `containerDestaque`}>
                                            <h5 className="destaque">Plano mais vendido</h5>
                                        </div>

                                        <BeneficiosPlanos
                                            plano={plan.downSpeed}
                                        />

                                        <div className="line-divisor"></div>

                                        <div>
                                            <ul className="listCompleta">
                                                <li>
                                                    <div className="list-bt">
                                                        <label htmlFor="checkBoxApenasInternet">
                                                            <input id="isWifiPremium" type="checkbox" name="interNetOnly"
                                                                onChange={(event) => {
                                                                    const newWifiPremium = event.target.checked ? 20 : 0;
                                                                    setWifiPremium(newWifiPremium);
                                                                    
                                                                    const newWifiBonus = event.target.checked ? (plan.downSpeed >=400 ? 100 : 0) : 0;
                                                                    setWifiBonus(newWifiBonus);

                                                                }}

                                                                value="true"
                                                            >
                                                            </input>
                                                        </label>
                                                        <div>
                                                            <h2>Wi-Fi Premium</h2>
                                                            {plan.downSpeed >= 400 ? <p>(Ganhe + 100 Mega)</p> : ""}
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="list-bt">
                                                        <label htmlFor="checkBoxApenasInternet">
                                                            <input className={quantidade >= 2 ? "checkMovel" : ""} type="checkbox" name="interNetOnly"
                                                                onChange={(event) => { 
                                                                    toggleSignin();
                                                                    const newMovelBonus = event.target.checked ? (plan.downSpeed >=400 ? 100 : 0) : 0;
                                                                    setMovelBonus(newMovelBonus);

                                                                }}
                                                                checked={CheckMovel()}
                                                                value="true">
                                                            </input>
                                                        </label>
                                                        <div className="list-bt-movel">
                                                            <div>
                                                                <h2>HAYP Móvel</h2>

                                                                <PlanoMovel
                                                                    plano={plan.downSpeed}
                                                                />

                                                            </div>

                                                            <img
                                                                src="/img/movel/5g.svg"
                                                                width={50}
                                                                height={50}
                                                                alt="Plano móvel com tecnologia 5G"
                                                                className={quantidade >= 2 ? "list-bt-movelImg" : "list-bt-movelImgO"}
                                                            />
                                                        </div>
                                                    </div>
                                                </li>

                                                {plansAdd.map((item) => (
                                                    plan.addPlanIsShow === 1 ?

                                                        <li key={item.Id}>
                                                            <div className="list-bt">
                                                                <label htmlFor="checkBoxPlanosAdicinais">
                                                                    <input id={item.Id} type="checkbox" name={item.Id} value="false"
                                                                        onChange={handleChange}
                                                                    ></input>
                                                                </label>
                                                                <div>
                                                                    <h2>{item.name}</h2>

                                                                    {item.downSpeedBonus > 0 && plan.addPlanAddPackage === 1 ?
                                                                        <p>(Ganhe + {item.downSpeedBonus} Mega)</p>
                                                                        : <></>}
                                                                </div>
                                                            </div>
                                                        </li>
                                                        : <></>
                                                ))}


                                            </ul>
                                        </div>
                                    </div>


                                    {isInternetOnly === false ?
                                        <div className="bonusMega">
                                            <h3>Você irá receber</h3>
                                            <span style={{ fontWeight: "900", color: "var(--cor-2)", fontSize: "20px" }} className="price">{variants.downSpeed + movelBonus + wifiBonus} Mega</span>
                                        </div>
                                        : <></>
                                    }

                                    <div className="package-price">
                                        <span className="sale">R$ {(variants.price - 0).toFixed(2).replace('.', ',')}</span>

                                        <p style={{ fontWeight: "500", fontSize: "12px" }}>Pagando até o vencimento <br />  você ganha R$10 de desconto
                                        </p>

                                        <div className="price">
                                            <h2>
                                                R${(variants.price - (variants.price > 0 ? plan.discount : 0) + wifiPremium + priceMovel).toFixed(2).replace('.', ',')}
                                            </h2>

                                            <small>/mês</small>
                                        </div>
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