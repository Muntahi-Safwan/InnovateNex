import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const { id } = useParams();
    const product = useLoaderData();
    console.log(product);

    const handleAddToCart = (id) => {
        console.log("Added to Cart", id);
        fetch(`https://innovate-nex-server.vercel.app/add-to-cart`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        "Congratulations!",
                        "Product Added Successfully",
                        "success"
                    );
                }
            });
    };

    const {
        name,
        brand_name,
        price,
        photo_url,
        rating,
        short_description,
        type,
    } = product;
    return (
        <div className="my-6 container mx-auto">
            <div className="flex justify-center">
                <img src={photo_url} alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-bold "> {name}</h1>
                <p>{short_description}</p>
                <p>Brand: {brand_name}</p>
                <p>Type: {type}</p>
                <p className="text-lg font-semibold">Price: ${price}</p>
                <p>Rating: {rating}/5</p>
            </div>
            <button
                onClick={() => handleAddToCart(id)}
                className="bg-[#002D41] text-[#F0FBFF] px-3 py-2 rounded-lg my-3"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetails;
