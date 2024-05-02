'use client'
import { useRouter } from "next/navigation"
import style from "./popup.module.css"

export const Popup = ({ isOpen, toggle, price1, price2}) => {

  const router = useRouter()

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

            <button type="button" className={style.button} onClick={() => router.push('/planos')}>
              Monte seu plano
            </button>
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

            <button type="button" className={style.buttonChip} onClick={() => router.push('/planos')}>
              Assinar apenas o plano móvel
            </button>
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