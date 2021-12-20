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
    num:1
  };
  const dog = {
    id: faker.random.uuid(),
    name: faker.animal.dog(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    image: faker.random.image(),
    num:1
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
      if(conetion){return{ ...state,total:state.total+1, buy: { ...state.buy, [payload.id]:{...payload,num:state.buy[payload.id].num+1} } }
      }else{
      return { ...state,total:state.total+1, buy: { ...state.buy, [payload.id]:payload } }};
      
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

    default:
      return state;
  }
};
let reducers = combineReducers({
  cart: myReducer,
});
export default reducers;
