import { Lock } from "lucide-react";

const Banner = () => {
    return (
        <section className="pt-12 pb-16 bg-[#002D41]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
                <div className="mx-auto w-full text-center md:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-[#F0FBFF] sm:text-4xl lg:text-5xl">
                        Connecting{" "}
                        <span className="text-[#00A2EF]"> Innovation</span> to
                        Your <span className="text-[#00A2EF]">Doorstep</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm font-normal leading-relaxed text-[#F0FBFF]">
                        Welcome to InnovateNex, where innovation meets
                        convenience. Explore our diverse range of tech gadgets
                        and products from leading brands, and experience the
                        future at your fingertips.
                    </p>
                </div>
                <form
                    action="#"
                    method="POST"
                    className="mx-auto mt-12 max-w-xl"
                >
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-[#00A2EF] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                                type="email"
                                placeholder="Email"
                            />
                            <button
                                type="button"
                                className="rounded-md bg-[#00A2EF] px-3 py-2 text-sm font-semibold text-[#F0FBFF] shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
                <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
                    <Lock className="h-4 w-4 text-[#F0FBFF]" />
                    <span className="ml-2 text-sm text-[#F0FBFF]">
                        Your data is complely secured with us. We don&apos;t
                        share with anyone.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Banner;
