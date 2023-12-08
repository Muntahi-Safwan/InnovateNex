import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, name, brand_name, photo_url, rating, price, type } = product;
    console.log(_id);
    return (
        <div className="container mx-auto ">
            <div className="w-[300px] rounded-md border-2  mx-auto shadow-xl">
                <img
                    src={photo_url}
                    className="h-[200px] w-full rounded-t-md object-fill"
                />
                <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        {name} &nbsp; <ArrowUpRight className="h-4 w-4" />
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Rating: {rating}/5
                    </p>
                    <p className="mt-3 text-sm text-gray-600">Type: {type}</p>
                    <p className="mt-3 text-md font-semibold text-slate-900">
                        Price: ${price}
                    </p>
                    <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            {brand_name}
                        </span>
                    </div>
                    <Link to={`/product/${_id}`}>
                        <button
                            type="button"
                            className="mt-4 w-full rounded-lg bg-[#002D41] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
