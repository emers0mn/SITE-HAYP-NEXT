import Link from "next/link";
import style from './footer.module.css'
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={style.container}>

            <article className={style.containerFooter}>

                <Link href={"/"}>
                    <img 
                        src={"images/logo-animado.gif"}
                        width={120}
                        height={120}
                        loading="lazy"
                        quality={10}
                        alt="Logo HAYP - Para voltar para o Menu inicial"
                        className={style.logoAnimado}
                    />
                </Link>
                <div className={style.lista1}>
                    <h4>Para você</h4>
                    <ul>
                        <li>- <Link href={"/planos"}>Planos</Link></li>

                        <li>- <Link href={"https://cda.hptelecom.com.br/central_assinante_web/"} target="_blank">Área do cliente</Link>
                        </li>

                        {/* <li>- <Link href={"/quem-somos/perguntas-frequentes"}>Perguntas frequentes</Link></li> */}
                    </ul>
                </div>
                <div className={style.lista1}>
                    <h4>institucional</h4>
                    <ul>
                        <li>- <Link href={"https://www.linkedin.com/company/hayp-telecom"} target="_blank">Trabalhe conosco</Link>
                        </li>
                        <li>- <Link href={"https://drive.google.com/file/d/13RW5zmQRpBEoEcxki59-x5B_Z4Ko11bN/view"} target="_blank">Contrato</Link></li>
                        <li>- <Link href={"/Quemsomos/politicas-internas"}>Privacidade</Link></li>
                        <li>- <Link href={"/Quemsomos"}>Quem somos</Link></li>
                    </ul>
                </div>

                <div className={style.lista3}>
                    <h4>Fale conosco</h4>
                    <ul>
                        <li>
                            <img
                                src={"https://hayp.imgix.net/images/footer/telefone-8.png?fm=webp"}
                                width={39}
                                height={39}
                                loading="lazy"
                                quality={10}
                                alt="Telefone - Clique para entrar em contato"
                            />
                            <div>
                                <Link href={"tel:1128762641"} target="_blank">
                                    <h5>Telefone</h5>
                                    <p>11 2876-2641</p>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <img
                                src={"https://hayp.imgix.net/images/footer/whatsapp-8.png?fm=webp"}
                                width={39}
                                height={39}
                                loading="lazy"
                                quality={10}
                                alt="WhatsApp - Clique e envei uma mesnsagem"
                            />
                            <div>
                                <Link href={"https://api.whatsapp.com/send?phone=551128762641"} target="_blank">
                                    <h5>WhatsApp</h5>
                                    <p>11 2876-2641</p>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <img
                                src={"https://hayp.imgix.net/images/footer/email-8.png?fm=webp"}
                                width={39}
                                height={39}
                                loading="lazy"
                                quality={10}
                                alt="E-mail - Clique e envie uma mensagem"
                            />
                            <div>
                                <Link href={"mailto:contato@hptelecom.com.br"} target="_blank">
                                    <h5>E-mail</h5>
                                    <p>contato@hptelecom.com.br</p>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={style.lista4}>
                    <h4>Endereço</h4>
                    <ul>
                        <li>
                            <Link href={"https://www.google.com/maps/dir//Hayp+Av.+Manuel+Alves+Soares,+638+-+Sala+3+-+Parque+Colonial+S%C3%A3o+Paulo+-+SP+04821-270,+Brasil/@-23.7263319,-46.6862102,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x94ce4f1a16fe3451:0x2ceb01894481701d"} className={style.localiza} target="_blank">
                                <img
                                    src={"https://hayp.imgix.net/images/footer/localiza-8.png?fm=webp"}
                                    width={39}
                                    height={39}
                                    loading="lazy"
                                    quality={10}
                                    alt="Nosso endereço - Clique e saiba como chegar até a nossa central"
                                />
                                <p>Av. Manuel Alves Soares, 638 - sala 3, Parque Colonial<br />Cep: 04821-270</p>
                            </Link>
                        </li>
                        <li>CNPJ: 28.973.552/0001-03</li>
                        <li> Empresa autorizada pela:<strong>Anatel, ato 1018</strong></li>
                    </ul>
                </div>
            
            <section className={style.endFooter}>
                <div className={style.redesSociais}>

                    <a href={"https://www.facebook.com/HaypTelecom"} target="_blank">
                        <img
                            src={"https://hayp.imgix.net/images/footer/facebook-8.png?fm=webp"}
                            width={45}
                            height={45}
                            loading="lazy"
                            quality={10}
                            alt="facebook"
                        />
                    </a>

                    <a href="https://www.instagram.com/haypoficial/" target="_blank">
                        <img
                            src={"https://hayp.imgix.net/images/footer/instagram-8.png?fm=webp"}
                            width={45}
                            height={45}
                            loading="lazy"
                            quality={10}
                            alt="Instagram"
                        />
                    </a>

                    <a href={"https://www.linkedin.com/company/hayp-telecom"} target="_blank">
                        <img
                            src={"https://hayp.imgix.net/images/footer/linkedin-8.png?fm=webp"}
                            width={45}
                            height={45}
                            loading="lazy"
                            quality={10}
                            alt="Linkedin"
                        />
                    </a>
                </div>

                <h6>Todos os direitos reservados <strong>HAYP Telecom LTDA</strong></h6>
                
            </section>

            </article>

            

        </footer>
    );
}

