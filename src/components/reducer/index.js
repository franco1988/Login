const initialState = {
  token: '',
};

export default function reducer(state = initialState, action){
  if(action.type === 'TOKEN'){
    localStorage.setItem('token', JSON.stringify(action.payload));
    alert("Inicio Sesion")
    return {
      state,
      token: action.payload
    }
  }
  return state;
}