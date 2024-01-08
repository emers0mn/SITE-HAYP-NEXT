import React,{useState} from "react";
import Api from "/service/Api";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const HomeService = (callback, validate) => {

    const [errors, setErrors] = useState([]);

    const [values, setValues] = useState({
        Cep: "",
        Name:"",
        Telephone : "",
        Text : ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
    };

    const [cepMessage, setCepMessage] = useState({
        code : "",
        message : ""
    })

    const handleSubmitCheckCep = async e => {
        e.preventDefault();

        const MySwal = withReactContent(Swal)
        const form_data = new FormData();
        form_data.append('Cep', values.Cep);
        
        setErrors("");

        await Api.post("/LinkTree/GetAvailableCep", form_data)
        .then((response) =>{
            setCepMessage(response.data)
            if(response.data.code == "general_success"){
                Swal.fire({
                    icon: 'success',
                    title: '<h4 style="font-family:Gordita-Bold; margin: 10px">Ebaa</h4>',

                    html: '<div style="display: flex; flex-direction: column; gap: 10px; padding-left: 25px; padding-right: 25px;"<p>'+ response.data.message +'<p/> <a style="background-color: var(--cor-1); padding: 5px 10px; border-radius: 10px; font-family:Gordita-Light;color:#fff;" target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641">Whatsapp</a></div>',

                    background :"#0000007f",
                    color:"#fff",
                    showConfirmButton: false,
                    showCloseButton: true,
                })
            }
            if(response.data.code == "general_error"){
                (async () => {

                    const { value: formValues } = await Swal.fire({
                        icon:'error',
                        title: '<p><h4 style="font-family:Gordita-Bold">Que pena...</h4></p>',
                        showCloseButton: true,
                        showConfirmButton: false,
                        background :"#0000007f",
                        color:"#fff",
                        html:
                        '<div style="display: flex; flex-direction: column; gap: 10px; padding-left: 25px; padding-right: 25px;"<p>'+ response.data.message +'<p/> <a style="background-color: var(--cor-1); padding: 5px 10px; border-radius: 10px; font-family:Gordita-Light;color:#fff;" target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641">Whatsapp</a></div>',
                        // '<input name="Nome" id="swal-input1" placeholder="Nome" class="swal2-input">' +
                        // '<input name="Telefone" id="swal-input2" placeholder="Telefone" class="swal2-input">',
                        focusConfirm: false,
                        preConfirm: () => {
                            return [
                                document.getElementById('swal-input1').value,
                                document.getElementById('swal-input2').value
                            ]
                        }
                    })
                    
                    if (formValues) {
                        Swal.fire(JSON.stringify(formValues))
                    }

                })()
            }
        })
        .catch((err) => {
          if(err.response){
            var errors = err.response.data.errors;
            setErrors(validate(errors));
          }
        });
    };

    const handleCheckAvailable = async e => {
        e.preventDefault()

        const form_data = new FormData();
        form_data.append('Cep', values.Cep);
        form_data.append('Name', values.Name);
        form_data.append('Telephone', values.Telephone);

        await Api.post("/LinkTree/CheckAvailability", form_data)
        .then((response) =>{
            
        })
        .catch((err) => {
            var errors = err.response.data.errors;
            setErrors(validate(errors));
        });
    }

    const handleSendMail = async e => {
        e.preventDefault()

        const form_data = new FormData();
        form_data.append('Name', values.Name);
        form_data.append('Telephone', values.Telephone);
        form_data.append('Text', values.Text);

        await Api.post("/LinkTree/SendMail", form_data)
        .then((response) =>{
            
        })
        .catch((err) => {
            var errors = err.response.data.errors;
            setErrors(validate(errors));
        });
    }

    return { 
        handleChange, 
        handleSubmitCheckCep,
        handleCheckAvailable,
        handleSendMail,
        values, 
        errors,
        cepMessage
    };

}

export default HomeService;