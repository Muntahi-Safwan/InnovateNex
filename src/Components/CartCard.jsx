/* eslint-disable react/prop-types */
import { ArrowUpRight } from "lucide-react";
import Swal from "sweetalert2";

const CartCard = ({ product }) => {
    const { _id, name, brand_name, photo_url, rating, price, type } = product;
    console.log(_id);

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://innovate-nex-server.vercel.app/delete/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Coffee has been deleted.",
                                "success"
                            );
                            window.location.reload();
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto ">
            <div className="w-[300px] rounded-md border-2  mx-auto shadow-xl bg-[#F0FBFF]">
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
                    <button
                        onClick={() => handleDelete(_id)}
                        type="button"
                        className="mt-4 w-full rounded-lg bg-[#002D41] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
