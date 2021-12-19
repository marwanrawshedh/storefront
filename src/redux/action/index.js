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