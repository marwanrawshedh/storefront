export const dog = customer => {
    return {
      type: 'dog',
      payload: customer,
    };
  };
  export const cat = customer => {
    return {
      type: 'cat',
      payload: customer,
    };
  };
  export const buy = customer => {
    return {
      type: 'buy',
      payload: customer,
    };
  };
    export const decrement= customer => {
    return {
      type: 'decrement',
      payload: customer,
    };
  };