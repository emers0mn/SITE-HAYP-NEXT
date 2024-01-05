"use client";

import { useState } from 'react';
import { HomeCepCheck } from "../app/(home)/_home/homeCepCheck";
import styles from './page.module.css';
import Link from 'next/link';
import { HomeFooterPage } from './(home)/_home/homeFooterPage';

export default function Home() {

  const [showCep, setShowCep] = useState(false);

  const toggleSignin = () => {
    setShowCep(!showCep);
  }
  return (
    <div className={styles.containerMaster}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img className={styles.logo} src='assets/images/logo.png' />
          <h1 className={styles.title}><strong>Simplifique sua rotina assine HAYP</strong></h1>
        </header>
        <main className={styles.containerGrid}>
          <HomeCepCheck
            isOpen={showCep}
            toggle={toggleSignin}
          />
          <div onClick={toggleSignin} className={styles.cobertura}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_disponibilidade.png" />
              Cobertura</div>
          </div>

          <Link href={"/ClubeHAYP"}>
            <div className={styles.menu}> <img className={styles.clube} src="assets/images/icons/card.svg" />
              Clube de <br /> descontos</div>
          </Link>

          <Link href={"/avaliacoes"}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_recommends.png" />
              Avaliações
              </div>
          </Link>

          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641">
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_nosso-whatsapp.png" />
              Nosso <br /> WhatsApp</div>
          </a>

          <Link href={"/Quemsomos"}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_quem-somos.png" />
              Quem <br /> somos
            </div>
          </Link>

          <Link href={"/planos"}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_planos.png" />
              Planos</div>
          </Link>

          <a href="tel:+551128762641">
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_contato.png" />
              Contato</div>
          </a>

          <a href="https://cda.hptelecom.com.br/central_assinante_web/" target='_blank'>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/area-do-cliente-8.png" />
              Área do <br /> cliente
            </div>
          </a>

          <Link href={"/enviodeemail"}>
            <div className={styles.menu}> <img className={styles.img} src="assets/images/icons/assets_e-mail.png" />
              E-mail</div>
          </Link>

        </main>



      </div>
      <footer className={styles.footer}>
        <div className={styles.redesSociais}>
          <a href="https://www.instagram.com/haypoficial/">
            <div>
              <img className={styles.imgRedes} src="assets/images/icons/assets_instagram.png" />
              Instagram
            </div>
          </a>

          <a href="https://www.facebook.com/HaypTelecom/">
            <div>
              <img className={styles.imgRedes} src="assets/images/icons/assets_facebook.png" />
              Facebook
            </div>
          </a>

          <a href="https://br.linkedin.com/company/hayp-telecom">
            <div>
              <img className={styles.imgRedes} src="assets/images/icons/assets_linkedin.png" />
              Linkedin
            </div>
          </a>
        </div>

        <div className={styles.dados1}>
          <strong>Av. Manuel Alves Soares, 638 - sala 3, Parque Colonial
            <br />
            <span className={styles.dados2}>Cep</span>: 04821-270</strong>
        </div>

        <div className={styles.dados1}>
          <strong><span className={styles.dados2}>CNPJ</span>: 28.973.552/0001-03</strong>
        </div>

        <div className={styles.dados1}>
          <strong><span className={styles.dados2}>Empresa autorizada pela Anatel</span>, ato 1018</strong>
        </div>

      </footer>
    </div>

  )
}
