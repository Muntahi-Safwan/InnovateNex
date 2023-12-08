import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ProductCard from "../../Components/ProductCard";
import { useEffect, useState } from "react";

const Details = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);
    console.log(name);

    useEffect(() => {
        fetch(`https://innovate-nex-server.vercel.app/brands/${name}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    const images = [
        "https://i.pinimg.com/originals/18/33/cc/1833cc955726fbb5faa48c2e577bfcf0.png",
        "https://i.ytimg.com/vi/wM_3dCqj21M/maxresdefault.jpg",
        "https://media.idownloadblog.com/wp-content/uploads/2020/04/iPad-Pro-float-ad-banner.jpg",
    ];

    return (
        <>
            <div>
                <div>
                    <div className="container mx-auto my-6">
                        <Slide>
                            <div className="each-slide-effect  bg-cover">
                                <div
                                    className="h-96 object-cover"
                                    style={{
                                        backgroundImage: `url(${images[0]})`,
                                    }}
                                ></div>
                            </div>
                            <div className="each-slide-effect bg-cover">
                                <div
                                    className="h-96 object-cover"
                                    style={{
                                        backgroundImage: `url(${images[1]})`,
                                    }}
                                ></div>
                            </div>
                            <div className="each-slide-effect bg-cover">
                                <div
                                    className="h-96 object-contain"
                                    style={{
                                        backgroundImage: `url(${images[2]})`,
                                    }}
                                ></div>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="grid container mx-auto lg:grid-cols-3 gap-6 my-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Details;
