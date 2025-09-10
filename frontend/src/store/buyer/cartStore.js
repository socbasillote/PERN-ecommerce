import { create } from "zustand"
import { persist } from "zustand/middleware"


const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (product) => {
                const cart = get().cart;
                const existing = cart.find((item) => item.id === product.id)

                if (existing) {
                    // if item already in cart, increase quantity
                    set({
                        cart: cart.map((item) => 
                            item.id === product.id 
                            ? { ...item, quantity: item.quantity + 1}
                            : item
                        ),
                    });
                } else {
                    // otherwise, add new item
                    set({ cart: [...cart, { ...product, quantity: 1}]})
                }
            },

            removeFromCart: (id) => set({
                cart: get().cart.filter((item) => item.id !== id),
            }),

            updateQuantity: (id, qty) => set({
                cart: get().cart.map((item) => 
                    item.id === id ? { ...item, quantity: qty } : item
                ),
            }),

            clearCart: () => set({ cart: []}),
        }),
        {
            name: "cart-storage", // saves to LocalStorage
        }
    )
)

export default useCartStore;