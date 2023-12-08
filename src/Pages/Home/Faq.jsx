export default function Faq() {
    return (
        <section className="px-2">
            <div className="mx-auto max-w-7xl py-10">
                <div>
                    <div className="max-w-2xl">
                        <h1 className="text-2xl font-bold text-black">
                            Frequently Asked Questions
                        </h1>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className="rounded-md border bg-[#F0FBFF] border-black/30 p-6"
                            >
                                <dt className="text-lg font-semibold leading-6 text-gray-900">
                                    How to purchase product?
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. In, et? Obcaecati, nemo
                                    sit. Delectus, totam obcaecati aliquid omnis
                                    cumque ex.
                                </dd>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
