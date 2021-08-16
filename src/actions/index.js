// Combined all reducers in to single index.js in actions folder

export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const logged = () => {
  return {
    type: "SIGN_IN",
  };
};
