import { create } from "zustand";

interface ChangeNameModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useChangeNameModal = create<ChangeNameModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useChangeNameModal;
