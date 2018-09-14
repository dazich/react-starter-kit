const initialState = {
  count: 2,
  test: 123,
};
async function sleep(time) {
  return Promise(resolve => {
    setTimeout(() => resolve(), time || 0);
  });
}
const add = (state = initialState, action) => {
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
