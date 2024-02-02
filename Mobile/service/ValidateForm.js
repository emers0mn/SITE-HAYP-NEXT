import Swal from "sweetalert2";

export default function ValidateForm(values) {
    let errors = {};
  
    Object.keys(values).forEach(item => {
        if(typeof(values[item].Errors) != "undefined"){
           if(values[item].Errors.length > 0)
              errors = values[item].Errors[0].ErrorMessage;

        }else if(typeof(values[item]) != "undefined"){
           errors = values[item][0];
        }
    });

    if(errors){
      Swal.fire({
         icon: 'error',
         title: '<p><h4 style="font-family:Gordita-Bold" class="font-weight-bold">Oops...</h4></p>',
         html: '<span style="font-family:Gordita-Light;font-weight: bold">'+ errors +'<span/>',
         background :"#fff0",
         color:"white",
         showConfirmButton: false,
         showCloseButton: true
      })
    }

}