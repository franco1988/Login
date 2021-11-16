import axios from 'axios';

export const registroUsuario = (registro) => {
  return async (dispatch) => {
    const res = await axios.post('https://api-flordeemprendedora.start-7.com/api/auth/login/', registro);
    console.log("DATA =>",res.data);
    if(res){
      return dispatch({
        type: "TOKEN",
        payload: res.data
      })
    } else{
      alert("Fallo el inicio de sesion")
    }
  }
}