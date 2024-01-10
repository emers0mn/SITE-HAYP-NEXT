"use client";
import Image from "next/image";

import React from "react";
import './benefits.css';
import Perguntas_Frequentes from "./Perguntas_Frequentes"
import Telefone from "../telefone/telefone";

function Benefits(props) {
  return (
    <section className="container-Benefits">

      <h2 className="tittle-benefits-1">Alguns benefícios</h2>
      <div className="divisor"></div>

      <div className="carrossel-Benefits">
        <div className="grade">
          <div className="slides">
            <div className="slide primeira">
              <h3>Clube de desconto</h3>
              <p>Economize em suas compras com nosso Clube de Desconto exclusivo, aproveitando ofertas especiais em diversos produtos e serviços.</p>
            </div>
          </div>
          <div className="slide">
          <Image width={100} height={90} quality={50} loading="lazy" src= {"/img/card.svg"} alt="clube de desconto"/>
            <h3>Clube de descontos</h3>
            <p hidden>Economize em suas compras com nosso Clube de Desconto exclusivo, aproveitando ofertas especiais em diversos produtos e serviços.</p>
          </div>

          <div className="slide" >
            <Image width={100} height={90} quality={50} loading="lazy" src= {"/img/cofrinho.svg"} alt='Sem multa por cancelamento' />
            <h3>Sem multa por <br /> cancelamento</h3>
            <p hidden>Oferecemos a flexibilidade de cancelar nossos serviços a qualquer momento, sem custos adicionais, para que você tenha total controle sobre sua assinatura.
            </p>
          </div>

          <div className="slide">
            <Image width={100} height={90} quality={50} loading="lazy" src= {"/img/instalacao.svg"} alt='Instalação personalizada' />
            <h3>Instalação <br /> personalizada</h3>
            <p hidden>Nossa equipe de especialistas está pronta para personalizar a instalação de acordo com suas necessidades, garantindo que sua experiência seja adaptada às suas preferências.
            </p>
          </div>

          <div className="slide">
            <Image width={100} height={90} quality={50} loading="lazy" src={"/img/365.svg"} alt='Pacotece microsoft 365 completo' />
            <h3>Pacote Microsoft <br /> 365 Completo</h3>
            <p hidden>Desfrute de uma conexão de internet ultrarrápida e estável com nossa tecnologia Wi-Fi 6, proporcionando uma experiência online mais fluida.
            </p>
          </div>


        </div>

        
      </div>

      <div className="bt-assinar">
          <a href="https://wa.me/551128762641?text=Quero+saber+mais+sobre+os+benef%C3%ADcios%2C+em+especial+o%3A+" target="_blanck">Saiba mais</a>
        </div>

      <div id="canais">
        <h2 className="tittle-benefits-2">De um <spam className="name-marca">HAYP</spam> na sua Tv</h2>
        <div className="divisor"></div>

        <h3 className="tittle-benefits-1">Canais abertos</h3>
        <div className="container-canais">
          <div className="container-canais-aberto">
            <div className="carrossel-canais">
              <Image width={300} height={500} src={"/img/canal-band.webp"} alt='Canal Band' quality={60} loading="lazy"/>
              <Image width={300} height={500} src={"/img/canal-globo.webp"} alt='Canal Globo' quality={60} loading="lazy" />
              <Image width={300} height={500} src={"/img/canal-sbt.webp"} alt='Canal SBT' quality={60} loading="lazy"/>
              <Image width={300} height={500} src={"/img/canal-record.webp"} alt='Canal Record' quality={60} loading="lazy"/>
              <Image width={300} height={500} src={"/img/canal-globo.webp"} alt='Canal Globo' quality={60} loading="lazy"/>
              <Image width={300} height={500} src={"/img/canal-sbt.webp"} alt='Canal SBT' quality={60} loading="lazy"/>
            </div>
          </div>
        </div>

        <a href="https://wa.me/551128762641?text=Fiquei+interessado+no+combo+com+Tv+e+gostaria+ver+a+lista+de+canais.">Veja todos os canais abertos</a>

        <div className="container-canais">
          <h3 className="tittle-benefits-1">Canais fechados</h3>
          <div className="container-canais-fechados">
            <div className="carrossel-canais">
              <Image width={300} height={500} src={"/img/canal-warner.webp"} alt='Canal Warner' quality={60} loading="lazy" />
              <Image width={300} height={500} src={"/img/canal-discovery.webp"} alt='Canal Discovery' quality={60} loading="lazy" />
              <Image width={300} height={500} src={"/img/canal-fox.webp"} alt='Canal Fox' quality={60} loading="lazy"/>
              <Image width={300} height={500} src={"/img/canal-espn.webp"} alt='Canal ESPN' quality={60} loading="lazy"/>
              <Image width={300} height={500} src={"/img/canal-tlc.webp"} alt='Canal TLC' quality={60} loading="lazy"/>
              <Image width={300} height={500} src={"/img/canal-animal.webp"} alt='Canal animal planet' quality={60} loading="lazy"/>
            </div>
          </div>
        </div>

        <a href="https://wa.me/551128762641?text=Fiquei+interessado+no+combo+com+Tv+e+gostaria+ver+a+lista+de+canais." style={{ marginBottom: '60px' }}>Veja todos os canais fechados</a>

        <div className="bt-assinar">
          <a href="#" >Assine agora</a>
        </div>

      </div>

      <Telefone />

      <div>
        <h2 className="tittle-benefits-3"> Monte um combo e ganhe <br />  <span style={{color: "#04CB3A" }}>MEGAS de bônus</span>!!</h2>

        <div>
          <div>
            <h3 className="combo-assinando">Assinando</h3>
            <Image width={340} height={107} src={"/img/combo-simples.svg"} alt='Combo simples' quality={60} loading="lazy"/>
            <h4>
            Você ganha mais <spam className="name-marca-destaque">60 Mega</spam> de bônus
            </h4>
            </div>

          <div>
            <h4 className="combo-assinando">Assinando o <br/> <spam className="name-marca-destaque" >combo completo</spam></h4>
            <Image width={300} height={160} src={"/img/combo-completo.svg"} alt='Combo Completo' quality={60} loading="lazy" />
            <h4>
            Você ganha mais <spam className="name-marca-destaque">500 Mega</spam> de bônus
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