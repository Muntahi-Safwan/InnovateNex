import { useLoaderData } from "react-router-dom";
import CartCard from "../../Components/CartCard";

const MyCart = () => {
    const cartProducts = useLoaderData();

    return (
        <>
            <div className="my-6 container mx-auto">
                <h1 className="text-center font-bold text-3xl">My Cart</h1>
                <div className="container">
                    <h1 className="text-xl font-semibold text-center mt-6">
                        Total Products: {cartProducts.length}
                    </h1>
                    <div className="grid lg:grid-cols-3 gap-4 container mx-auto mt-12">
                        {cartProducts.map((product) => (
                            <CartCard
                                key={product._id}
                                product={product}
                            ></CartCard>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCart;
