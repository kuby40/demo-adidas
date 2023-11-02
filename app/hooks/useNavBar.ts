import { create } from "zustand";

interface NavBarStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useNavBar = create<NavBarStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useNavBar;
