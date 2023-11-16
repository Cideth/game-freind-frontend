import { atom } from 'recoil';

export const modalVisibleState = atom<boolean>({
  key: 'modalVisibleState',
  default: false,
});
