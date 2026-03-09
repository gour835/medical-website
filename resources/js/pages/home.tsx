import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import Layout from '@/layouts/shops/layout';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <Layout>
                {/* <!-- Hero Section --> */}
                <section id="hero" className="relative bg-slate-50 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-slate-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left" data-aos="fade-up">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl font-heading">
                                        <span className="block xl:inline">Elevate your</span>
                                        <span className="block text-primary-600 xl:inline">everyday lifestyle</span>
                                    </h1>
                                    <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Discover a curated collection of premium essentials for your home, wardrobe, and life. Quality meets modern design.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg transition-colors" href="shop.html">Shop Collection</a>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg transition-colors" href="#">View Lookbook</a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" alt="Woman shopping" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    </div>
                </section>

                {/* <!-- Shop By Category --> */}
                <section id="shop_by_category" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-heading font-bold text-red-900 mb-8">Shop  Category</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* <!-- Category 1 --> */}
                            <a className="group relative rounded-lg overflow-hidden h-64" data-aos="fade-up" data-aos-delay="0" href="shop.html">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Electronics" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <h3 className="text-white font-bold text-xl">Electronics</h3>
                                </div>
                            </a>

                            {/* {/* <!-- Category 2 --> */} 
                            <a className="group relative rounded-lg overflow-hidden h-64" data-aos="fade-up" data-aos-delay="100" href="shop.html">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Fashion" src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500&q=80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <h3 className="text-white font-bold text-xl">Fashion</h3>
                                </div>
                            </a>

                            {/* {/* <!-- Category 3 --> */} 
                            <a className="group relative rounded-lg overflow-hidden h-64" data-aos="fade-up" data-aos-delay="200" href="shop.html">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Home" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <h3 className="text-white font-bold text-xl">Home</h3>
                                </div>
                            </a>

                            {/* <!-- Category 4 --> */}
                            <a className="group relative rounded-lg overflow-hidden h-64" data-aos="fade-up" data-aos-delay="300" href="shop.html">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Beauty" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <h3 className="text-white font-bold text-xl">Beauty</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* <!-- Trending Now --> */}
                <section id="trending_now" className="py-16 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-2xl font-heading font-bold text-slate-900">Trending Now</h2>
                            <a className="text-primary-600 font-medium hover:text-primary-700 flex items-center gap-1" href="shop.html">View all
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                            {/* <!-- Product 1 --> */}
                            <div className="group" data-aos="fade-up" data-aos-delay="0">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
                                    <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Headphones" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" />
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-red-500">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mt-4 text-sm text-slate-700 font-medium">Premium Noise-Cancelling Headphones</h3>
                                <p className="mt-1 text-lg font-bold text-slate-900">$299.00</p>
                                <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Add to Cart</button>
                            </div>

                            {/* <!-- Product 2 --> */}
                            <div className="group" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
                                    <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Watch" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" />
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-red-500">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mt-4 text-sm text-slate-700 font-medium">Minimalist Analog Watch</h3>
                                <p className="mt-1 text-lg font-bold text-slate-900">$149.00</p>
                                <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Add to Cart</button>
                            </div>

                            {/* <!-- Product 3 --> */}
                            <div className="group" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
                                    <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Sneakers" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" />
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-red-500">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mt-4 text-sm text-slate-700 font-medium">Urban Runner Sneakers</h3>
                                <p className="mt-1 text-lg font-bold text-slate-900">$129.00</p>
                                <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Add to Cart</button>
                            </div>

                            {/* <!-- Product 4 --> */}
                            <div className="group" data-aos="fade-up" data-aos-delay="300">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
                                    <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Bag" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80" />
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-red-500">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mt-4 text-sm text-slate-700 font-medium">Leather Crossbody Bag</h3>
                                <p className="mt-1 text-lg font-bold text-slate-900">$89.00</p>
                                <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Free Shipping On Orders Over 50 --> */}
                <section id="free_shipping_on_orders_over_50" className="bg-primary-600 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h2 className="text-2xl font-heading font-bold text-white mb-2">Free Shipping on Orders Over $50</h2>
                            <p className="text-primary-100">Upgrade your wardrobe without the extra cost. Limited time offer.</p>
                        </div>
                        <a className="bg-white text-primary-600 px-8 py-3 rounded-md font-bold hover:bg-slate-100 transition-colors shadow-lg" href="shop.html">Start Shopping</a>
                    </div>
                </section>

            </Layout>
        </>
    );
}
