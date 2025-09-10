import useCartStore from "../store/buyer/cartStore";


function AddProductCard({ product}) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div>
            <figure>
                <img src={product.image} alt={product.name} className="h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>${product.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddProductCard