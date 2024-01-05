import React,{useState} from "react";
import Api from "/service/Api";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

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
                    title: '<h4 style="font-family:Gordita-Bold" class="font-weight-bold">Ebaa</h4>',
                    html: '<span style="font-family:Gordita-Light">'+ response.data.message +'<span/> <br><br/> <a style="font-family:Gordita-Light;color:white" target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=551128762641" class="green-button">Whatsapp <i class="fa fa-whatsapp pl-2"></i></a>',
                    background :"#fff0",
                    color:"white",
                    showConfirmButton: false,
                    showCloseButton: true,
                })
            }
            if(response.data.code == "general_error"){
                (async () => {

                    const { value: formValues } = await Swal.fire({
                        icon:'error',
                        title: '<p><h4 style="font-family:Gordita-Bold" class="font-weight-bold">Que pena...</h4></p>',
                        showCloseButton: true,
                        showConfirmButton: false,
                        background :"#fff0",
                        color:"white",
                        html:
                        '<span style="margin:0" style="font-family:Gordita-Light">'+ response.data.message +'<span/> <br><br/>'+
                        '<br><br/><a style="font-family:Gordita-Light;color:white" href="/Callme" class="green-button">Avise-me</a>',
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