import axios from "axios";
import Swal from "sweetalert2";

const Api = axios.create({
  baseURL: "https://api.hptelecom.com.br/"
});

Api.interceptors.response.use(function (response) {
  
  if(response.status === 200){
    if(response.data.code === "general_success"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '<span style="color:white; font-family:Gordita-Bold">Informação</span>',
        html : '<br></br><span style="color:white;font-family:Gordita-Light">'+ response.data.message +'</span>',
        showConfirmButton: false,
        timer: 6500,
        background: 'rgba(43, 43, 46, 0.8)'
      })
    }
    if(response.data.code === "general_error"){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '<span style="color:white; font-family:Gordita-Bold">Informação</span>',
        html : '<br></br><span style="color:white;font-family:Gordita-Light">'+ response.data.message +'</span>',
        showConfirmButton: false,
        timer: 6500,
        background: 'rgba(43, 43, 46, 0.8)'
      })
    }
  }
  return response;
}, function (err) {
 
  if(err.response.status === 401){
    window.location.reload();
  }else if(err.response.status === 403){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '<span style="color:white">Informação</span>',
        text : "Unauthorized!",
        showConfirmButton: false,
        timer: 6500,
        background: 'rgba(43, 43, 46, 0.8)'
      })
  }else if(err.response.status === 400){
    if(err.response.data.errors){
      if(err.response.data.errors.general_error){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '<span style="color:white">Informação</span>',
          html : '<span style="color:white">'+ err.response.data.errors.general_error[0] +'</span>',
          showConfirmButton: false,
          timer: 6500,
          background: 'rgba(43, 43, 46, 0.8)'
        })
      }
    }
  }
  return Promise.reject(err);
});

export default Api;