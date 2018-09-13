const initialState = {
  count: 2,
  test: 123
};
const add = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD':
      const { count } = state;
      return {
        ...state,
        count: count + 1,
      };
    default:
      return state;
  }
};

export default add;
