"use client";
import React, { useEffect, useState } from "react";
import Api from "../../../../service/Api";
import LoadingSpinner from "../../../../components/spinner/LoadingSpinner";
import "../../_components/plans.css";
import BeneficiosPlanos from "../beneficios/BeneficiosPlanos";
import { Popup } from "../popup/Popup";
import { useSearchParams } from "next/navigation";
import { PlanoMovel } from "../params/Params";

export function PricePlans({ price, discount, checkbox1, checkbox4, checkbox3, plano, info }) {

    const [tel, setTel] = useState(0)
    const [tv, setTv] = useState(0)
    const [wifiPremium, setWifiPremium] = useState(0);
    const searchParams = useSearchParams()
    const priceMovels = parseInt(searchParams.get('priceMovel'))
    const gbs = parseInt(searchParams.get('movel'))
    const movelgb = (isNaN(gbs) ? 0 : gbs)
    const priceMovel = (isNaN(priceMovels) ? 0 : priceMovels)
    const priceMovel9 = (isNaN(priceMovels) ? 30 : priceMovels)
    const [planoFinal, setPlanoFinal] = useState(plano)
    const [limiteCheck1, setLimiteCheck1] = useState()
    const [limiteCheck2, setLimiteCheck2] = useState()
    const [limiteCheck3, setLimiteCheck3] = useState()
    const [limiteCheck4, setLimiteCheck4] = useState()

    const check = searchParams.get('checkMovel');
    function checkMovel() {
        if (check === "true") {
            return true
        } else return false
    }

    useEffect(() => {
        let novoPlanoFinal = plano;

        if (plano !== 0) {
            if (checkbox1 && ![100, 500, 700, 900].includes(plano)) {
                novoPlanoFinal += 100;
            }

            if (checkMovel() && ![100, 300, 900].includes(plano)) {
                novoPlanoFinal += 100;
            }

            if (checkbox3) {
                novoPlanoFinal += 100;
            }

            if (checkbox4) {
                novoPlanoFinal += 100;
            }

            setPlanoFinal(novoPlanoFinal);

            if (checkbox1) {
                setWifiPremium(20);
            } else {
                setWifiPremium(0);
            }

            if (checkbox3) {
                setTel(30);
            } else {
                setTel(0);
            }

            if (checkbox4) {
                setTv(90);
            } else {
                setTv(0);
            }
        }
    }, [plano, checkbox1, checkbox3, checkMovel(), checkbox4]);




    function finalPrice() {
        // Calcular os preços adicionais baseados no plano
        const additionalWifiPremium = (plano === 500 || plano === 700 || plano === 900) ? 0 : wifiPremium;
        const additionalPriceMovel = (plano == 900) ? (checkMovel() ? (movelgb <= 8 ? 30 : priceMovel) : 30) : priceMovel;
        const additionalTel = (plano === 900) ? 0 : tel;
        const prices = additionalWifiPremium + tv + additionalTel + (price - discount) + additionalPriceMovel;

        // Calcular o ticket
        const tvAdjustment = checkbox4 ? (checkMovel() ? (plano === 900 ? (tv - 70) : (tv - 60)) : 0) : (plano === 900 ? -10 : 0);
        const telAdjustment = checkbox3 ? (plano === 900 ? 0 : (tel - 10)) : 0;
        const wifiAdjustment = (plano >= 500 && plano <= 900) ? 0 : wifiPremium;
        const ticket = price + tvAdjustment + telAdjustment + wifiAdjustment - 10;

        // Calcular o interesse baseado no planoFinal
        let interesse;
        if (planoFinal <= 400) {
            interesse = 109.90;
        } else if (planoFinal <= 600) {
            interesse = 119.90;
        } else if (planoFinal <= 800) {
            interesse = 149.90;
        } else if (planoFinal <= 1000 || plano === 900) {
            interesse = 159.90;
        } else {
            interesse = 0;
        }

        // Calcular a sobra
        const sobra = ticket - interesse;

        // Determinar o valor final do plano
        const valorPlano = (sobra >= 0) ? (prices - sobra) : prices;

        return valorPlano;
    }



    return (
        <div>
            <h2>{info}R${finalPrice().toFixed(2).replace('.', ',')}</h2>
        </div>
    );
}

export function MegaFinal({ checkbox1, checkbox4, checkbox3, plano }) {

    const [apenasInternet, setApenasInternet] = useState(false)
    const [limiteBonus2, setLimiteBonus2] = useState((plano != 900 && plano != 100 && plano != 700 && plano != 500));
    const [limiteBonus, setLimiteBonus] = useState((plano != 900 && plano != 300 && plano != 100));
    const [wifiBonus, setWifiBonus] = useState(0);
    const [tvBonus, setTvBonus] = useState(0);
    const [telBonus, setTelBonus] = useState(0);
    const [movelBonus, setMovelBonus] = useState(0);
    const searchParams = useSearchParams()

    const check = searchParams.get('checkMovel');
    function checkMovel() {
        if (check === "true") {
            return true
        } else return false
    }

    useEffect(() => {
        if (plano !== 0) {
            const apenasInternetAtivo = checkbox1 || checkMovel() || checkbox3 || checkbox4;
            setApenasInternet(apenasInternetAtivo);

            if (apenasInternetAtivo) {
                setWifiBonus(checkbox1 && (plano != 900 && plano != 100 && plano != 700 && plano != 500) ? 100 : 0);
                setMovelBonus(checkMovel() && limiteBonus && plano != 900 ? 100 : 0);
                setTelBonus(checkbox3 && plano != 900 ? 100 : 0);
                setTvBonus(checkbox4 ? 100 : 0);
            } else {
                setWifiBonus(0);
                setTelBonus(0);
                setTvBonus(0);
            }

            const valorMegaFinal = plano + wifiBonus + telBonus + tvBonus + (plano <= 300 ? 0 : movelBonus);

        }
    }, [plano, checkbox1, checkMovel(), checkbox3, checkbox4, plano, limiteBonus2, limiteBonus]);




    return (
        <article>
            {apenasInternet === true && (checkbox3 || checkbox4 || plano != 100) ?
                <div className="bonusMega">
                    <h3>Você irá receber</h3>
                    <p className="price">
                        {plano + wifiBonus + telBonus + tvBonus + (plano <= 300 ? 0 : movelBonus)} Mega
                    </p>
                </div>
                : <></>
            }
        </article>
    )
}

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

    const [limiteBonus, setLimiteBonus] = useState(400)

    const [destaque, setDestaque] = useState('')
    useEffect(() => {
        if (plan.downSpeed === limiteBonus) {
            setDestaque('containerDestaque')
        } else {
            setDestaque('containerDestaqueAtiva')
        }

    }, [limiteBonus, setDestaque])


    function CheckMovel() {
        if (check === 'true') {
            return true
        } else return false
    }

    function addMovel() {
        if (CheckMovel() === true && plan.downSpeed >= limiteBonus) {
            return (100)
        } else return (0)
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


        const validIndex = Math.max(0, Math.min(index, plans.length - 1));

        if (plans.length > 0 && index !== validIndex) {
            setIndex(validIndex);
        }

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


    const [cont, setCont] = useState(0)
    //console.log(`Principal ${cont}`)

    useEffect(() => {
        if (CheckMovel() === true && plan.downSpeed >= limiteBonus) {
            setCont(1);
            console.log('Cont atualizado para 1 devido às condições');
        }
    }, [CheckMovel(), plan.downSpeed]);

    useEffect(() => {
        // Atualiza 'isInternetOnly' baseado em 'cont'
        setIsInternetOnly(cont > 0);
        //console.log(`Secundário ${cont}`);

        // Se 'cont' for negativo, define como zero
        if (cont < 0) {
            setCont(0);
        }


    }, [cont]);


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

    const [valueFinal, setValueFinal] = useState()
    const [check1, setCheck1] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [desativado, setDesativado] = useState("desativado");

    const handleCheckbox1Change = () => {
        setCheck1(!check1);

    };

    const handleCheckbox3Change = () => {
        setCheck3(!check3);
    };

    const handleCheckbox4Change = () => {
        setCheck4(!check4);

    };

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

                <div className={plan.downSpeed == limiteBonus ? "container" : "containerF"}>
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

                                        <div className={`${destaque}`}>
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
                                                            <input id="isWifiPremium" type="checkbox" name="isWifiPremium" className="checkWifi"
                                                                checked={plan.downSpeed >= 500 ? true : check1}
                                                                disabled={plan.downSpeed >= 500 ? true : false}

                                                                onChange={handleCheckbox1Change}
                                                                value="true"
                                                            >
                                                            </input>
                                                        </label>
                                                        <div>
                                                            <h2>Wi-Fi Premium</h2>
                                                            {plan.downSpeed > limiteBonus ? <p>Já Incluso</p> : (plan.downSpeed == 300 || plan.downSpeed == limiteBonus ? <p>(Ganhe + 100 Mega)</p> : "")}
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="list-bt">
                                                        <label htmlFor="checkBoxApenasInternet">
                                                            <input id="isMovel" className={(plan.downSpeed >= limiteBonus ? "checkMovel4" : (quantidade >= 2 ? "checkMovel" : "checkMovelD"))} type="checkbox" name="isMovel"
                                                                onChange={(event) => {
                                                                    toggleSignin();
                                                                    let newMovelBonus = event.target.checked ? (plan.downSpeed >= limiteBonus ? 100 : 0) : 0;
                                                                    setMovelBonus(newMovelBonus);


                                                                }}
                                                                checked={CheckMovel() || plan.downSpeed == 900}
                                                                value="true">
                                                            </input>
                                                        </label>
                                                        <div className="list-bt-movel" onClick={toggleSignin}>

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

                                                {/* {plansAdd.map((item) => (
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
                                                ))} */}
                                                <li>
                                                    <div className="list-bt">
                                                        <label htmlFor="checkBoxApenasInternet">
                                                            <input id="isWifiPremium" type="checkbox" name="isWifiPremium" className="checkWifi"
                                                                checked={check3 || plan.downSpeed === 900}
                                                                disabled={plan.downSpeed === 900}
                                                                onChange={handleCheckbox3Change}
                                                                value="true"
                                                            >
                                                            </input>
                                                        </label>
                                                        <div>
                                                            <h2>HAYP Fixo</h2>
                                                            {plan.downSpeed == 900 ? <p>Já incluso</p> : <p>(Ganhe + 100 Mega)</p>}
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="list-bt">
                                                        <label htmlFor="checkBoxApenasInternet">
                                                            <input id="isWifiPremium" type="checkbox" name="isWifiPremium" className="checkWifi"
                                                                checked={check4}
                                                                onChange={handleCheckbox4Change}
                                                                value="true"
                                                            >
                                                            </input>
                                                        </label>
                                                        <div>
                                                            <h2> HAYP Tv <br />+ de 90 canais</h2>
                                                            <p>(Ganhe + 100 Mega)</p>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>


                                    <MegaFinal
                                        checkbox1={check1}
                                        checkbox2={CheckMovel}
                                        checkbox3={check3}
                                        checkbox4={check4}

                                        plano={plan.downSpeed}
                                        adicional={isInternetOnly}
                                        CheckMovel={CheckMovel()}

                                    />

                                    <div className="package-price">
                                        <span className="sale">
                                            <PricePlans
                                                price={plan.price}
                                                discount={0}
                                                checkbox1={check1}
                                                checkbox3={check3}
                                                checkbox4={check4}
                                                plano={plan.downSpeed}
                                                info={"*"}

                                            />
                                        </span>

                                        <p>*Pagando até o vencimento <br />  você ganha R$10 de desconto
                                        </p>

                                        <div className="price">

                                            <PricePlans
                                                price={plan.price}
                                                discount={plan.discount}
                                                checkbox1={check1}
                                                checkbox3={check3}
                                                checkbox4={check4}
                                                plano={plan.downSpeed}
                                            />
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

            </main>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
        </>
    )
}