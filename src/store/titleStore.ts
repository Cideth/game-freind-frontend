import { create } from 'zustand';

interface TitleType {
  title: string;
  setTitle: (newTitle: string) => void;
}

const useTitleStore = create<TitleType>((set) => ({
  title: 'default Title',
  setTitle: (newTitle: string) => set(() => ({ title: newTitle })),
}));

export default useTitleStore;
