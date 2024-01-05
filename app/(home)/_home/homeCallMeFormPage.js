import React from "react";
import HomeService from "./service/homeService";
import ValidateForm from "../../service/ValidateForm"
import InputMask from "react-input-mask";

export const HomeCallMeFormPage = ({submitForm}) => {

    const {
        handleChange, 
        handleCheckAvailable,
        values, 
        errors,
        cepMessage
    } = HomeService(      
        submitForm,
        ValidateForm)

    return(
        <>
            <div className="col-md-12">
                <h2>Avise-me quando houver disponibilidade</h2>
                <br></br>
                <form onSubmit={handleCheckAvailable}>

                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Cep</label>
                    <InputMask className="form-control" name="Cep" mask="99999-999"
                    value={values.Cep} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nome</label>
                    <InputMask className="form-control" name="Name"
                    value={values.Name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Telefone</label>
                    <InputMask className="form-control" name="Telephone" mask="(99) 99999-9999"
                    value={values.Telephone} onChange={handleChange} />
                    </div>

                    <button className="btn btn-success">Enviar</button>
                </form>
            </div>
        </>
    )
}