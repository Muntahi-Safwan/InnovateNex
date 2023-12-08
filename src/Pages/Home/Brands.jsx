import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
    const loaderData = useLoaderData();

    return (
        <>
            <div className="my-16 container mx-auto">
                <h1 className="text-center text-3xl font-bold my-4">Brands</h1>
                <div className="grid lg:grid-cols-3 gap-3">
                    {loaderData?.map((brand) => (
                        <BrandCard key={brand.id} brand={brand}></BrandCard>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Brands;
