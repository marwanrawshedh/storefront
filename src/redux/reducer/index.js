import faker, { image } from "faker";

let initialState = {
  total: 0,
  buy: {},
  cat: { active: true, product: [] },
  dog: { active: false, product: [] },
};
for (let i = 0; i < 10; i++) {
  const cat = {
    id: faker.random.uuid(),
    name: faker.animal.cat(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    image: faker.random.image(),
    num:1,
    total:Math.floor(Math.random() * 700)+300
  };
  const dog = {
    id: faker.random.uuid(),
    name: faker.animal.dog(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    image: faker.random.image(),
    num:1,
    total:Math.floor(Math.random() * 700)+300
  };
  initialState.cat.product.push(cat);
  initialState.dog.product.push(dog);
}
import { combineReducers } from "redux";
const myReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "buy":
      let conetion=Object.keys(state.buy).includes(payload.id);
      if(conetion){return{ ...state,total:state.total+1, buy: { ...state.buy, [payload.id]:{...payload,num:state.buy[payload.id].num+1,} } }
      }else{
      return { ...state,total:state.total+1, buy: { ...state.buy, [payload.id]:payload } }}; 
      case "buycat":return{...state,cat:{...state.cat,product:l(payload,state.cat.product)} } ;
      case "buydog":return{...state,dog:{...state.dog,product:l(payload,state.dog.product)} } ;
    case "cat":
      return {...state,
        dog: { ...state.dog, active: false },
        cat: { ...state.cat, active: true },
      };
    case "dog":
      return {...state,
        cat: { ...state.cat, active: false },
        dog: { ...state.dog, active: true },
      };
  
      case "decrement":
        
        {return{ ...state,total:state.total-1, buy: { ...state.buy, [payload.id]:{...payload,num:state.buy[payload.id].num-1} } }
      };
      case "dcat":return{...state,cat:{...state.cat,product:d(payload,state.cat.product)} } ;
      // case "ddog":return{...state,dog:{...state.dog,product:d(payload,state.dog.product)} } ;

    default:
      return state;
  }
};
let reducers = combineReducers({
  cart: myReducer,
});
export default reducers;
function l(payload,product){
  console.log(payload);
  let arr=[]
product.forEach(element => {
  if (element.id===payload.id) { 
    arr.push({...payload,total:payload.total-1})
  }else{
    arr.push(element)
 } });
  console.log(arr,"gg")
  return arr
}
function d(payload,product){
  let arr=[]
  console.log(payload);
product.forEach(element => {
  if (element.id===payload.id) {  
    // console.log(payload.total,"payload.total"); console.log(payload.total,"payload.total");
    // console.log({...payload,total:payload.total+1},"ddddddddgg")
    arr.push({...payload,total:payload.total+1})
  }else{
    arr.push(element)
 } });
  
  return arr
}