/* eslint-disable react/no-unescaped-entities */
export default function AboutUs() {
    return (
        <section>
            <div className="container mx-auto bg-[#F0FBFF] px-2 m-6 lg:flex lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="my-10 lg:my-0 lg:px-10">
                        <h2 className="text-3xl font-bold leading-tight text-[#002D41] sm:text-4xl lg:text-5xl">
                            Your Gateway to Tech Excellence. Discover, Order,
                            Innovate.
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                            At InnovateNex, we're committed to bringing you the
                            latest and greatest tech gadgets and products from
                            top brands. Our mission is to make innovation
                            accessible to everyone, and we do so by delivering
                            the future of technology right to your doorstep.
                            Explore our curated selection of cutting-edge
                            devices, from smartphones to smart home essentials,
                            and experience the future today. With InnovateNex,
                            innovation is just a click away.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1621319332247-ce870cdad56c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="ManWith Laptop"
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
