import { initialState } from './initialState.js'


const store = {
  state: initialState,
  init(){
    if(localStorage.upc!== undefined) {
      this.state = JSON.parse(localStorage.upc);
      this.setState('rehydrated',true);
    }else{
      localStorage.upc = JSON.stringify(this.state);
    }
  },
  getState(key) {
    return this.state[key];
  },
  setState(key, value) {
    this.state[key] = value;
    localStorage.upc = JSON.stringify(this.state);
    console.log(this.state);
  }
}

export default store;