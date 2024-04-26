import style from "./popup.module.css"
import InputMask from "react-input-mask/lib/react-input-mask.development";

export const Popup = (props) => {

  return (
    <>
      <div onClick={props.toggle} className={props.isOpen ? style.content : ""}>
          <dialog open={props.isOpen} className={style.modal} >
            <div className={style.openClose}>
              <div className={style.open}>
                  <h2 className={style.title1}>Promo de última hora. < br/> Bora comprar galera.</h2>
                  <br />
                    <img src="/img/movel/dancing.gif"/>
              </div>
          
          
              <button
                type="button"
                className={style.btClose}
                onClick={props.toggle}
              ><img
                src="/img/movel/fechar.svg"
                width={50}
                height={50}
                />
              </button>
            </div>
          
          </dialog>
      </div>
    </>
  )
}