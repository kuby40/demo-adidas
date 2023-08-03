import { create } from 'zustand';

interface WishListModalStore {
    isOpen: boolean,
    onOpen: () => void;
    onClose: () => void;
}

const useWishlistModal = create<WishListModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useWishlistModal;