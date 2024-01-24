import { atom } from 'recoil';

export const commentsState = atom({
  key: 'commentsState',
  default: 'Привет из Recoil',
});
