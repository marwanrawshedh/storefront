import faker, { image } from 'faker';

let initialState = { cat:{active:true,product: []},dog:{active:false,product:[]} };
for (let i = 0; i < 10; i++) {
  const cat = {
    id: faker.random.uuid(),
    name: faker.animal.cat(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    image: faker.random.image()
  };
  const dog= {
    id: faker.random.uuid(),
    name: faker.animal.dog(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    image: faker.random.image()
  };
  initialState.cat.product.push(cat);
  initialState.dog.product.push(dog);
}
import {  combineReducers } from 'redux';
const myReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INITIALIZE':
      return {customerId: payload.id};

    case 'ADD_ITEM':
      return { items: [...items, payload.item] };
      case 'cat':
        return {dog: {...state.dog,active:false}, cat: {...state.cat,active:true} };
        case 'dog':
        return { cat: {...state.cat,active:false}, dog: {...state.dog,active:true} };
    case 'CLEAR':
      return initialState;

    default:
      return state;
  }
};
let reducers = combineReducers({
  cart: myReducer,
});
export default  reducers;
