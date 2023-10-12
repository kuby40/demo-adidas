import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 
import { Product } from '@prisma/client';

interface CartStore {
  items: {product: Product, size: string, color: string, quantity: number}[];
  addItem: (product: Product, color: string, size: string) => void;
  updateItem: (product: Product, color: string, size: string, quantity: number) => void;
  removeItem: (index: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
  items: [],
  addItem: (product: Product, color: string, size: string) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => 
    item.product.id === product.id &&
    item.size === size &&
    item.color === color
    );
    
    if (existingItem) {
      return toast.error('Item Already in cart')
    }

    set({ items: [...get().items, {product, color, size, quantity: 1}] });
    toast.success('Item added to cart.');
    },
    updateItem: (product: Product, color: string, size: string) => {
      
    },
  removeItem: (index: number) => {
    set({ items: [...get().items.filter((_item, itemIndex) => index != itemIndex)] });
    toast.success('Item removed from cart.');
  },
  removeAll: () => set({ items: [] }),
}), {
  name: 'cart-storage',
  storage: createJSONStorage(() => localStorage)
}));

export default useCart;