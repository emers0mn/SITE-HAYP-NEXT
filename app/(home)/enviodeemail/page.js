"use client";

import React from "react";
import HomeService from "../_home/service/homeService";
import InputMask from "react-input-mask/lib/react-input-mask.development";
import ValidateForm from "../../../service/ValidateForm";
import styles from "./email.module.css"

const HomeSendMailFormPage = ({submitForm}) => {

    const {
        handleChange, 
        handleSendMail,
        values, 
        errors,
        cepMessage
    } = HomeService(submitForm,
        ValidateForm)

    return(
        <>
            <div className={styles.container}>
                <h2>Envie-nos um e-mail</h2>
                <br></br>
                <form onSubmit={handleSendMail}>

                    <div className={styles.form1}>
                    <label htmlFor="exampleInputEmail1">Nome:</label>
                    <input className={styles.formulario} name="Name"
                    value={values.Name} onChange={handleChange}
                    placeholder="digite aqui..."/>
                    </div>

                    <div className={styles.form1}>
                    <label htmlFor="exampleInputEmail1">Telefone:</label>
                    <InputMask className={styles.formulario} name="Telephone" mask="(99) 99999-9999" placeholder="(00) 00000-0000"
                    value={values.Telephone} onChange={handleChange} />
                    </div>

                    <div className={styles.form2}>
                    <label htmlFor="exampleInputEmail1"  >Mensagem:</label>
                    
                    <textarea className={styles.formulario} name="Text" cols="40" rows="5" 
                    value={values.Text} 
                    onChange={handleChange}
                    placeholder="digite aqui..."/>
                    </div>

                    <button className={styles.btEnviar}>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default HomeSendMailFormPage;