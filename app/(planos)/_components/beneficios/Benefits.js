"use client";
import Image from "next/image";

import React from "react";
import './benefits.css';
import Perguntas_Frequentes from "./Perguntas_Frequentes"
import Telefone from "../telefone/telefone";
import {TvAberta, TvFechada} from "../tv/Tvs"
import Link from "next/link";

function IconBeneficios({ textBeneficios, beneficio, altBeneficio, imgBeneficios }) {
  return (
    <article>
      <div className="slide">
        <img
          width={200}
          height={100}
          quality={50}
          loading="lazy"
          src={`https://hayp.imgix.net/links/images/beneficios/${imgBeneficios}`}
          alt={`Beneficio: ${beneficio}`} />
        <h3>{beneficio}</h3>
        <p>{textBeneficios}</p>
      </div>
    </article>
  )
}

// function Tv({ canal }) {
//   return (

//     <img
//       width={300}
//       height={500}
//       src={`/img/canais/canal-${canal}.svg`}
//       alt={`Canal ${canal}`} />

//   )
// }

function Benefits(props) {
  return (
    <section className="container-Benefits">

      <h2 className="tittle-benefits-1">Alguns benefícios</h2>
      <div className="divisor"></div>

      <div className="carrossel-Benefits">
        <div className="grade">
          <div className="extra-slide">
            <IconBeneficios
              beneficio="Pacote Microsoft 365 completo"
              imgBeneficios="365.svg"
            />
          </div>
          <IconBeneficios
            beneficio="Clube de desconto HAYP"
            imgBeneficios="card.svg"
          />
          <IconBeneficios
            beneficio="Sem multa por cancelamento"
            imgBeneficios="cofrinho.svg"
          />
          <IconBeneficios
            beneficio="Instalação personalizada"
            imgBeneficios="instalacao.svg"
          />
          <IconBeneficios
            beneficio="Pacote Microsoft 365 completo"
            imgBeneficios="365.svg"
          />
        </div>
      </div>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

      {/*Começo dos Canais*/}

      <div className="bt-assinar">
        <Link href={'/beneficios'}>Saiba mais</Link>
      </div>

      <div id="canais">
        <h2 className="tittle-benefits-2">De um <spam className="name-marca"> <br />HAYP</spam> na sua Tv</h2>
        <div className="divisor"></div>

        <h3 className="tittle-benefits-1">Canais abertos</h3>
        <div className="container-canais">
          {/* <div className="container-canais-aberto">
            <div className="carrossel-canais">
              <Tv canal="Band" />
              <Tv canal="Globo" />
              <Tv canal="SBT" />
              <Tv canal="Record" />
              <Tv canal="Globo" />
              <Tv canal="SBT" />
            </div>
          </div> */}
          <TvAberta />
        </div>

        <a href="https://wa.me/551128762641?text=Fiquei+interessado+no+combo+com+Tv+e+gostaria+ver+a+lista+de+canais.">Veja todos os canais abertos</a>

        <div>
          <h3 className="tittle-benefits-1">Canais fechados</h3>
          {/* <div className="container-canais-fechados">
            <div className="carrossel-canais">
              <Tv canal="Warner" />
              <Tv canal="Discovery" />
              <Tv canal="Fox" />
              <Tv canal="ESPN" />
              <Tv canal="Animal-Planet" />
              <Tv canal="TLC" />
            </div>
          </div> */}
          <div className="container-canais">
            <TvFechada />
          </div>
        </div>

        <a href="https://wa.me/551128762641?text=Fiquei+interessado+no+combo+com+Tv+e+gostaria+ver+a+lista+de+canais." style={{ marginBottom: '60px' }}>Veja todos os canais fechados</a>

        <div className="bt-assinar">
          <a href="#" >Assine agora</a>
        </div>

      </div>

      <Telefone />

      <div>
        <h2 className="tittle-benefits-3"> Monte um combo e ganhe <br />  <span style={{ color: "#04CB3A" }}>MEGAS de bônus</span>!!</h2>

        <div>
          <div>
            <h3 className="combo-assinando">Assinando</h3>
            <img width={340} height={107} src={"http://hayp.imgix.net/links/img/combo-simples.svg"} alt='Combo simples' quality={60} loading="lazy" />
            <h4>
              Você ganha mais <spam className="name-marca-destaque">100 Mega</spam> de bônus
            </h4>
          </div>

          <div>
            <h4 className="combo-assinando">Assinando o <br /> <spam className="name-marca-destaque" >combo completo</spam></h4>
            <img width={300} height={160} src={"http://hayp.imgix.net/links/img/combo-completo.svg"} alt='Combo Completo' quality={60} loading="lazy" />
            <h4>
              Você ganha <spam className="name-marca-destaque">200 Mega</spam> de bônus
            </h4>
          </div>
        </div>

        <div className="bt-assinar">
          <a href="#">Assine agora</a>
        </div>
      </div>

      <div className="contatos-para-assinar" hidden>
        <h2 className="tittle-benefits-1">Perguntas frequentes</h2>
        <div className="divisor"></div>

        <Perguntas_Frequentes
          perguntas="Posso contratar apenas a  internet ?"
          resposta="Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
        />

        <Perguntas_Frequentes
          perguntas="Eu posso contratar um combo para o meu comércio ?"
          resposta="Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
        />

        <Perguntas_Frequentes
          perguntas="No céu tem pão ?"
          resposta="Não sei o que colocar aqui dentro, mas vamos colocar alguma coisa"
        />

      </div>

    </section>

  )
}
export default Benefits;