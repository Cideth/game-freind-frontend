import { create } from 'zustand';

interface ModalType {
  modalVisible: boolean;
  toggleModal: () => void;
}

const useModalStore = create<ModalType>((set) => ({
  modalVisible: false,
  toggleModal: () => set((state) => ({ modalVisible: !state.modalVisible })),
}));

export default useModalStore;
