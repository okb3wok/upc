import { initialState } from './initialState.js'


const store = {
  initState: initialState,
  state: initialState,
  init(){
    if(localStorage.upc2!== undefined) {
      this.state = JSON.parse(localStorage.upc2);
      this.setState('rehydrated',true);
    }else{
      localStorage.upc2 = JSON.stringify(this.state);
    }
  },
  getState(key) {
    return this.state[key];
  },
  setState(key, value) {
    this.state[key] = value;
    localStorage.upc2 = JSON.stringify(this.state);

  },
  resetState(){
    console.log('resetState')
    console.log(this.initState)
    console.log(this.state)
    for (var key in this.initState) {
      this.setState(key, this.initState[key])
    }

  }
}

export default store;
