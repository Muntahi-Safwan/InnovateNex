import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        const short_description = form.short_description.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const newProduct = {
            name,
            photo_url,
            short_description,
            brand_name,
            type,
            rating,
            price,
        };
        console.log(newProduct);

        fetch("https://innovate-nex-server.vercel.app/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
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

    return (
        <>
            <div className="container mx-auto p-4 bg-[#F0FBFF] my-4 rounded-lg">
                <h1 className="font-bold text-xl text-[#002D41] text-center">
                    Add a Product
                </h1>
                <form onSubmit={handleAddProduct}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="name"
                            name="name"
                            id="name"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-[#002D41] focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#002D41] peer-focus:dark:text-[#002D41] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="photo_url"
                            id="photo-url"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-[#002D41] focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#002D41] peer-focus:dark:text-[#002D41] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Product Image Link
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="short_description"
                            id="short-description"
                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Short Description of the Product
                        </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="brand_name"
                                id="brand-name"
                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Brand Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="type"
                                id="type"
                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Type (phone, computer, headphone)
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="number"
                                name="price"
                                id="price"
                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Price
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="rating"
                                id="rating"
                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#002D41] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Rating
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-[#00A2EF] hover:bg-[#002D41] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#00A2EF] dark:hover:bg-[#002D41] dark:focus:ring-blue-800"
                    >
                        Add
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
