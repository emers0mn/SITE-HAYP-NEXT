import HomeService from "./service/homeService";
import ValidateForm from "../../../service/ValidateForm";
import styles from "./_css/homeCepCheck.module.css"
import InputMask from "react-input-mask/lib/react-input-mask.development";

export const HomeCepCheck = (props, { submitForm }) => {
  const {
    handleChange,
    handleSubmitCheckCep,
    values
  } = HomeService(
    submitForm,
    ValidateForm)

  return (
    <>
      <dialog open={props.isOpen} className={styles.modal} >
        <div className={styles.openClose}>
          <h5 className={styles.title1}>Consulte a disponibilidade</h5>
          <button
            type="button"
            className={styles.btClose}
            onClick={props.toggle}
          >X
          </button>
        </div>

        <form className={styles.formContent} onSubmit={handleSubmitCheckCep}>
          <div>
            <div className={styles.formulario}>
              <label className={styles.title2} htmlFor="exampleInputEmail1">Digite o cep:</label>
              <InputMask
                name="Cep"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="00000-000"
                value={values.Cep}
                onChange={handleChange}
                mask="99999-999"
              />
              <small id="emailHelp" className={styles.subtitle}>
                Digite o cep desejado para realizar a busca de disponibilidade
              </small>
            </div>
          </div>
          <div>
            <button className="btn btn-success">Verificar</button>
          </div>
        </form>

      </dialog>
    </>
  )
}