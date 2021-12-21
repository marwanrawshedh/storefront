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
  export const buycat = customer => {
    return {
      type: 'buycat',
      payload: customer,
    };}
    export const buydog = customer => {
      return {
        type: 'buydog',
        payload: customer,
      };}
      export const dcat= customer => {
        return {
          type: 'dcat',
          payload: customer,
        };}
        export const ddog = customer => {
          return {
            type: 'ddog',
            payload: customer,
          };}