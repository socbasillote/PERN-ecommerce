import useCartStore from "../store/buyer/cartStore"

function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ): (
                <div>
                    {cart.map((item) => {
                        <div 
                            key={item.id}
                            className="flex justify-between items-center border-b py-3"
                         >
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p>${item.price}</p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input 
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    className="input input-bordered w-16"
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                />
                                <button
                                    className="btn btn-sm btn-error"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    })}

                    <div className="mt-6 text-right">
                        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                        <button className="btn btn-warning mt-3" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default CartPage