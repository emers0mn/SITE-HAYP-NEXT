"use client";

import React, { useEffect, useState } from "react";
import Api from "../../../service/Api";
import LoadingSpinner from "../../../components/spinner/LoadingSpinner";
import style from './movel.module.css'

export default function PlanosMoveis() {

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



    return (
        <>
            <main className={style.content}>

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



                <div className={((plan.downSpeed - 88) == 12) ? style.containerMovelAtiva : style.containerMovel}>
                    <div className={style.container}>
                        <div className="packages">
                            <div >
                                {isLoading ? <LoadingSpinner /> :
                                    <div>
                                        <div key="plan" >
                                            <div >
                                                <h3 className={style.haypMovel}>HAYP Móvel</h3>
                                                <div className={style.contentGiga}>
                                                    <button className={(plan.downSpeed == 100) ? style.buttonActionOpacity : style.buttonAction} onClick={() => setIndex(index - 1)}><img
                                                        src="/img/movel/buttonMinus.svg"
                                                        alt='Remover GB'
                                                        width={50}
                                                        height={50}
                                                    /></button>
                                                    <h2 className={style.giga}>{plan.downSpeed - 88}GB</h2>
                                                    <button className={(plan.downSpeed == 900) ? style.buttonActionOpacity : style.buttonAction} onClick={() => setIndex(index + 1)}><img
                                                        width={50}
                                                        height={50}
                                                        alt='Adiconar GB'
                                                        src="/img/movel/buttonPlus.svg" /></button>

                                                </div>
                                                <h3 className={style.haypMovel}>11GB + 1 GB de Portabilidade</h3>
                                                <div className={style.prices}>
                                                    <h4 className={style.price}>R$40,00</h4>
                                                    <small>/mês</small>
                                                </div>
                                            </div>
                                            <a href={contact()} target="_blank" className={style.button} rel="noreferrer">
                                                Assine Já
                                            </a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={((plan.downSpeed - 88) == 12) ? style.containerDestaqueAtiva : style.containerDestaque}>
                        <h5 className={style.destaque}>Plano mais vendido</h5>

                    </div>
                    <div className={style.containerBeneficios}>
                        <h5>Apps <strong>ilimitados</strong></h5>
                        <p>Sem consumir da internet</p>
                        <div className={style.imgBeneficios}>
                            <img
                                width={43}
                                height={43}
                                src="/img/movel/Skeelo.svg"
                                alt='App Skeelo'
                            />
                            <img
                                width={43}
                                height={43}
                                src="/img/movel/WhatsApp.svg"
                                alt='WhatsApp Ilimitado'
                            />
                        </div>
                        <h5>Ligações e SMS <strong>ilimitados</strong>:</h5>
                        <p>Não tenha limites para poder se comunicar com quem você quiser.</p>
                    </div>
                </div>


                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
            </main>
        </>
    )
}