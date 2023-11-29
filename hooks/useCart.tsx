import { create } from "zustand";

import { Cart } from "@/lib/shopify/types";
import { createCart } from "@/lib/shopify";

interface ICartStore {
    cart: Cart | null;
    createAndSetCart: () => Promise<void>;
}

export const useCartStore = create<ICartStore>((set) => ({
    cart: null,
    createAndSetCart: async () => {
        const newCart = await createCart();
        set({ cart: newCart });
    },
}));

// import { create } from "zustand";

// interface CartItem {
//     merchandiseId: string;
//     quantity: number;
// }

// interface ICartStore {
//     isOpen: boolean;
//     items: CartItem[];
//     openModal: () => void;
//     closeModal: () => void;
//     addToCart: (item: CartItem) => void;
//     removeFromCart: (merchandiseId: string) => void;
//     updateCart: (merchandiseId: string, quantity: number) => void;
// }

// export const useCartStore = create<ICartStore>((set) => ({
//     isOpen: false,
//     items: [],
//     openModal: () => set({ isOpen: true }),
//     closeModal: () => set({ isOpen: false }),
//     addToCart: (item) => set((state) => ({ items: [...state.items, item] })),
//     removeFromCart: (merchandiseId) => set((state) => ({ items: state.items.filter((item) => item.merchandiseId !== merchandiseId) })),
//     updateCart: (merchandiseId, quantity) =>
//         set((state) => {
//             const updatedItems = state.items.map((item) => (item.merchandiseId === merchandiseId ? { ...item, quantity } : item));
//             return { items: updatedItems };
//         }),
// }));
