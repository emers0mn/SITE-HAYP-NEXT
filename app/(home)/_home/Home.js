"use client";
import { useState } from 'react';
import style from '../../page.module.css';
import Link from 'next/link';
import { HomeCepCheck } from './homeCepCheck';
import Banner from '../(banner)/Banner';


export default function PageHome() {

  const [showCep, setShowCep] = useState(false);

  const toggleSignin = () => {
    setShowCep(!showCep);
  }
  return (
    <div className={style.containerMaster}>

      <div className={style.container}>
        <header className={style.header}>
          <img className={style.logo} src='https://hayp.imgix.net/assets/images/logo.svg?auto=true' alt='Logo da HAYP' />
          <h1 className={style.title}><strong>Simplifique sua rotina assine HAYP</strong></h1>
        </header>
        <nav className={style.containerGrid}>
          <HomeCepCheck
            isOpen={showCep}
            toggle={toggleSignin}
          />
          <div onClick={toggleSignin} className={style.cobertura}>
            <div className={style.menu}> <img className={style.img} src="https://hayp.imgix.net/assets/images/icons/assets_disponibilidade.svg" alt='Consulte a disponibilidade do cep' />
              Cobertura</div>
          </div>

          <Link href={"/beneficios"}>
            <div className={style.menu}><img className={style.img} src="https://hayp.imgix.net/assets/images/icons/card.svg" alt='Beneficios HAYP' />
              Benefícios</div>
          </Link>

          <Link href={"/avaliacoes"}>
            <div className={style.menu}><img className={style.img} src="assets/images/icons/assets_recommends.svg" alt='Comentários da HAYP no Google' />
              Avaliações
            </div>
          </Link>

          <Link href={"/quem-somos"}>
            <div className={style.menu}> <img className={style.img} src="https://hayp.imgix.net/assets/images/icons/assets_quem-somos.svg" alt='Um pouco sobre a HAYP' />
              Quem <br /> somos
            </div>
          </Link>

          {/* 5G */}
          <Link href={"/5g"}>
            <div className={style.menu}> <img width={10} height={10} className={style.img} src="/assets/images/icons/assets_5g.svg" alt='Planos Móveis' />
              HAYP<br /> Móvel</div>
          </Link>

          <Link href={"/planos"}>
            <div className={style.menu}> <img className={style.img} src="https://hayp.imgix.net/assets/images/icons/assets_planos.svg" alt='Nossos planos' />
              Planos</div>
          </Link>


          {/* Contato */}
          <Link href="tel:+551128762641" target="_blank">
            <div className={style.menu}> <img className={style.img} src="https://hayp.imgix.net/assets/images/icons/assets_contato.svg" alt='Entre em contato por chamada de telefone' />
              Contato</div>
          </Link>

          <Link href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641" target="_blank">
            <div className={style.menu}> <img className={style.img} src="https://hayp.imgix.net/assets/images/icons/assets_nosso-whatsapp.svg" alt='Nosso WhatsApp' />
              Nosso <br /> WhatsApp</div>
          </Link>

          <Link href="https://cda.hptelecom.com.br/central_assinante_web/" target='_blank'>
            <div className={style.menu}> <img className={style.img} src="https://hayp.imgix.net/assets/images/icons/area-do-cliente-8.svg" alt='área do cliente' />
              Área do <br /> cliente
            </div>
          </Link>

          {/* <Link href={"/enviodeemail"}>
            <div className={style.menu}> <img className={style.img} src="https://hayp.imgix.net/assets/images/icons/assets_e-mail.svg" alt='Envie um e-mail para contato@hptelecom.com.br'/>
              E-mail</div>
          </Link> */}

        </nav>

        <footer className={style.footer}>
        <div className={style.redesSociais}>
          <Link href="https://www.instagram.com/haypoficial/" target='_blank'>
            <div>
              <img className={style.imgRedes} src="https://hayp.imgix.net/assets/images/icons/assets_instagram.svg" alt='Nosso perfil no Istagram' />
              Instagram
            </div>
          </Link>

          <Link href="https://www.facebook.com/HaypTelecom/" target='_blank'>
            <div>
              <img className={style.imgRedes} src="https://hayp.imgix.net/assets/images/icons/assets_facebook.svg" alt='Nosso perfil no Facebook' />
              Facebook
            </div>
          </Link>

          <Link href="https://br.linkedin.com/company/hayp-telecom" target='_blank'>
            <div>
              <img className={style.imgRedes} src="https://hayp.imgix.net/assets/images/icons/assets_linkedin.svg" alt='Nosso perfil no Linkedin' />
              Linkedin
            </div>
          </Link>
        </div>

        <div hidden>
          <div className={style.dados1}>
            <strong>Av. Manuel Alves Soares, 638 - sala 3, Parque Colonial
              <br />
              <span className={style.dados2}>Cep</span>: 04821-270</strong>
          </div>
          <div className={style.dados1}>
            <strong><span className={style.dados2}>CNPJ</span>: 28.973.552/0001-03</strong>
          </div>
          <div className={style.dados1}>
            <strong><span className={style.dados2}>Empresa autorizada pela Anatel</span>, ato 1018</strong>
          </div>
        </div>

      </footer>

        <Banner />

        {/* Planos */}
        <div className={style.contentPlanos}>
          <Link href={"/planos"}>
            <div className={style.menuP}>
              <img className={style.imgP} src="https://hayp.imgix.net/assets/images/icons/assets_planos.svg" alt='Nossos planos'></img>
              Planos</div>
          </Link>
          <Link href={"/5g"}>
            <div className={style.menuP}>
              <img className={style.imgP} src="/assets/images/icons/assets_5g.svg" alt='Planos Móveis'></img>
              HAYP Móvel</div>
          </Link>
        </div>



      </div>
    </div>

  )
}
