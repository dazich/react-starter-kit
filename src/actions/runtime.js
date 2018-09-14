/* eslint-disable import/prefer-default-export */
import 'whatwg-fetch';
import { SET_RUNTIME_VARIABLE } from '../constants';

export function setRuntimeVariable({ name, value }) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
  };
}

export const add = count => ({
  type: 'ADD',
  count,
});

export const testThunk = () => {
  return (dispatch, getState, tag) => {
    console.info(`tag==>${tag}`)
    fetch('http://localhost:3200/index').then(
      () => dispatch({ type: 'ADD', count: 123 }),
      () => dispatch({ type: 'ERR' }),
    );
  };
};
