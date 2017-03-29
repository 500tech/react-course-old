import { TOGGLE } from '../consts/action-types';

export const toggleTodo = (id) => ({
  type: TOGGLE,
  id
});