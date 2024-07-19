'use client'
import { useRouter } from "next/navigation"
import style from "./popup.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"

export const Popup = ({ isOpen, toggle, price1, price2, plano}) => {

  const router = useRouter()

  const [mensagem, setMensagem] = useState()
  useEffect(() => { 
    if (plano != 0 ){
      setMensagem(`https://api.whatsapp.com/send?phone=551128762641&text=Quero%20assinar%20o%20plano%3A%20 ${plano}GB do plano de celular!`)
    }
  },[setMensagem, plano])

  return (
    <>
      <div onClick={toggle} className={isOpen ? style.content : ""}>
        <dialog open={isOpen} className={style.modal} >

          <div className={style.containerDestaqueAtiva }>
            <h5 className={style.destaque}>Oferta exclusiva</h5>
          </div>

          <section className={style.combo}>
            <img
              width={63.54}
              height={36.28}
              src="/img/movel/internet_movel.svg"
              alt="Plano de internet + Plano Móvel"
            />
            <div>
              <h2>Contratando</h2>
              <h3><strong>Plano de internet</strong> + <strong>Plano Móvel</strong></h3>

              <h4>R${price1},00</h4>
            </div>

            <Link href={{
              pathname: '/planos',
              query: {
                movel: `${plano}GB`,
                checkMovel: true,
                priceMovel: `${price1}`,
                quantidade: `1`
              }
            }}>
              <button type="button" className={style.button}>
                Monte seu plano
              </button>
            </Link>
          </section>

          <section className={style.apenasChip}>
            <div>
              <img
                width={63.54}
                height={36.28}
                src="/img/movel/apenaschip.svg"
                alt="Plano de internet + Plano Móvel"
              />
              <h2 className={style.title1}>Contratando</h2>
              <h3>Somente <strong>Plano Móvel</strong></h3>
              <h4>R${price2},90</h4>
            </div>

            <a href={mensagem}type="button" className={style.buttonChip}>
              Assinar apenas o plano móvel
            </a>
          </section>

          {/* <button
            type="button"
            className={style.btClose}
            onClick={toggle}
          ><img
              src="/img/movel/fechar.svg"
              width={50}
              height={50}
            />
          </button> */}



        </dialog>
      </div>
    </>
  )
}