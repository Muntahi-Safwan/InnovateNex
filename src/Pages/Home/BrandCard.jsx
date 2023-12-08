import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { name, brand_img } = brand;
    // console.log(brand);
    return (
        <>
            <div className="w-80 container mx-auto border-2 rounded-lg p-4 shadow-md bg-[#F0FBFF] ">
                <img src={brand_img} alt="" className="w-80 h-52" />
                <h1 className="text-xl text-center mt-2 font-semibold">
                    {name}
                </h1>
                <div className="flex justify-center my-4">
                    <Link to={`/brands/${name}`}>
                        <button className="bg-[#002D41] text-[#F0FBFF] px-4 py-2 rounded-3xl hover:bg-[#00A2EF] hover:text-[#002D41]">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BrandCard;
