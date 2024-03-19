"use client";

import { useState } from 'react';
import { HomeCepCheck } from "../../(home)/_home/homeCepCheck";
import styles from './page.module.css';
import Link from 'next/link';
import Banner from '../../(home)/(banner)/Banner';
import Footer from '../../(layout)/(footer)/Footer';
import AvaliaHome from '../../(Avaliação)/(Avaliação_Home)/avalia_home';

export default function Home() {

  const [showCep, setShowCep] = useState(false);

  const toggleSignin = () => {
    setShowCep(!showCep);
  }
  return (
    <div className={styles.containerMaster}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img className={styles.logo} src='https://hayp.imgix.net/assets/images/logo.svg' alt='Logo da HAYP' />
          <h1 className={styles.title}><strong>Internet para pessoas exigentes</strong></h1>
        </header>
        <nav className={styles.containerGrid}>
          <HomeCepCheck
            isOpen={showCep}
            toggle={toggleSignin}
          />
          <div onClick={toggleSignin} className={styles.cobertura}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_disponibilidade.svg" alt='Consulte a disponibilidade do cep' />
              Cobertura</div>
          </div>

          <Link href={"/ClubeHAYP"}>
            <div className={styles.menu}><img className={styles.img} src="assets/images/icons/card.svg" alt='clube de desconto HAYP' />
              Clube de <br /> descontos</div>
          </Link>

          <Link hidden href={"/avaliacoes"}>
            <div className={styles.menu}><img className={styles.img} src="assets/images/icons/assets_recommends.svg" alt='Comentários da HAYP no Google' />
              Avaliações
              </div>
          </Link>

          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641">
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_nosso-whatsapp.svg" alt='Nosso WhatsApp' />
              Nosso <br /> WhatsApp</div>
          </a>

          <Link href={"/Quemsomos"}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_quem-somos.svg" alt='Um pouco sobre a HAYP' />
              Quem <br /> somos
            </div>
          </Link>

          <Link href={"/planos"}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_planos.svg" alt='Nossos planos' />
              Planos</div>
          </Link>

          <a hidden href="tel:+551128762641">
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_contato.svg" alt='Entre em contato por chamada de telefone' />
              Contato</div>
          </a>

          <a href="https://cda.hptelecom.com.br/central_assinante_web/" target='_blank'>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/area-do-cliente-8.svg" alt='área do cliente' />
              Área do <br /> cliente
            </div>
          </a>

          <Link hidden href={"/enviodeemail"}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_e-mail.svg" alt='Envie um e-mail para contato@hptelecom.com.br'/>
              E-mail</div>
          </Link>
        </nav>
      </div>

      <Banner />
      <AvaliaHome />
      <Footer />
    </div>

  )
}
