import { create } from 'zustand';

interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    updateItemQuantity: (index: number, quantity: number) => void;
    removeFromCart: (index: number) => void;  // เปลี่ยนจาก string เป็น number
    clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find((i) => i.name === item.name);
        if (existingItem) {
            return {
                cart: state.cart.map((i) =>
                    i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
                ),
            };
        } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }
    }),
    updateItemQuantity: (index, quantity) => set((state) => ({
        cart: state.cart.map((item, i) =>
            i === index ? { ...item, quantity } : item
        ),
    })),
    removeFromCart: (index) => set((state) => ({
        cart: state.cart.filter((_, i) => i !== index), // ลบสินค้าที่ index นั้นๆ
    })),
    clearCart: () => set({ cart: [] }),
}));
