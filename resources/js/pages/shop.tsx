import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import Layout from '@/layouts/shops/layout';
import BreadCrumbs from '@/components/shop/BreadCrumbs';

export default function Shop() {
    

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
                <BreadCrumbs/>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* <!-- Sidebar Filters --> */}
                        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

                            {/* <!-- Categories --> */}
                            <div>
                                <h3 className="font-heading font-bold text-slate-900 mb-4">Categories</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a className="text-primary-600 font-bold" href="#">All Products</a>
                                    </li>
                                    <li>
                                        <a className="text-slate-600 hover:text-primary-600" href="#">Electronics</a>
                                    </li>
                                    <li>
                                        <a className="text-slate-600 hover:text-primary-600" href="#">Fashion</a>
                                    </li>
                                    <li>
                                        <a className="text-slate-600 hover:text-primary-600" href="#">Home & Living</a>
                                    </li>
                                    <li>
                                        <a className="text-slate-600 hover:text-primary-600" href="#">Beauty</a>
                                    </li>
                                    <li>
                                        <a className="text-slate-600 hover:text-primary-600" href="#">Accessories</a>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Price Range --> */}
                            <div>
                                <h3 className="font-heading font-bold text-slate-900 mb-4">Price Range</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <input className="w-full border border-slate-300 rounded px-3 py-2 text-sm" placeholder="Min" type="number" />
                                    <span className="text-slate-400">-</span>
                                    <input className="w-full border border-slate-300 rounded px-3 py-2 text-sm" placeholder="Max" type="number" />
                                </div>
                                <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600" type="range" />
                            </div>

                            {/* <!-- Colors --> */}
                            <div>
                                <h3 className="font-heading font-bold text-slate-900 mb-4">Colors</h3>
                                <div className="flex flex-wrap gap-3">
                                    <button className="w-6 h-6 rounded-full bg-black border border-slate-200 ring-2 ring-offset-2 ring-primary-600"></button>
                                    <button className="w-6 h-6 rounded-full bg-white border border-slate-200 hover:ring-2 hover:ring-offset-2 hover:ring-slate-300"></button>
                                    <button className="w-6 h-6 rounded-full bg-blue-500 border border-slate-200 hover:ring-2 hover:ring-offset-2 hover:ring-blue-300"></button>
                                    <button className="w-6 h-6 rounded-full bg-red-500 border border-slate-200 hover:ring-2 hover:ring-offset-2 hover:ring-red-300"></button>
                                    <button className="w-6 h-6 rounded-full bg-green-500 border border-slate-200 hover:ring-2 hover:ring-offset-2 hover:ring-green-300"></button>
                                </div>
                            </div>
                        </aside>

                        {/* <!-- Product Grid --> */}
                        <div className="flex-1">

                            {/* <!-- Sort Bar --> */}
                            <div className="flex justify-between items-center mb-8">
                                <p className="text-sm text-slate-500">Showing
                                    <span className="font-bold text-slate-900">1-9</span> of
                                    <span className="font-bold text-slate-900">24</span> results
                                </p>
                                <select className="border-none bg-transparent text-sm font-medium text-slate-700 focus:ring-0 cursor-pointer">
                                    <option>Sort by: Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest Arrivals</option>
                                </select>
                            </div>

                            {/* <!-- Grid --> */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                                {/* <!-- Product 1 --> */}
                                <div className="group">
                                    <a className="block" href="product.html">
                                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden relative">
                                            <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Headphones" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" />
                                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
                                        </div>
                                        <h3 className="mt-4 text-sm text-slate-700 font-medium group-hover:text-primary-600">Premium Noise-Cancelling Headphones</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <p className="text-lg font-bold text-slate-900">$299.00</p>
                                            <p className="text-sm text-slate-400 line-through">$350.00</p>
                                        </div>
                                    </a>
                                    <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">Add to Cart</button>
                                </div>

                                {/* <!-- Product 2 --> */}
                                <div className="group">
                                    <a className="block" href="product.html">
                                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden relative">
                                            <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Watch" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" />
                                        </div>
                                        <h3 className="mt-4 text-sm text-slate-700 font-medium group-hover:text-primary-600">Minimalist Analog Watch</h3>
                                        <p className="mt-1 text-lg font-bold text-slate-900">$149.00</p>
                                    </a>
                                    <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">Add to Cart</button>
                                </div>

                                {/* <!-- Product 3 --> */}
                                <div className="group">
                                    <a className="block" href="product.html">
                                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden relative">
                                            <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Sneakers" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" />
                                        </div>
                                        <h3 className="mt-4 text-sm text-slate-700 font-medium group-hover:text-primary-600">Urban Runner Sneakers</h3>
                                        <p className="mt-1 text-lg font-bold text-slate-900">$129.00</p>
                                    </a>
                                    <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">Add to Cart</button>
                                </div>

                                {/* <!-- Product 4 --> */}
                                <div className="group">
                                    <a className="block" href="product.html">
                                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden relative">
                                            <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Bag" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80" />
                                        </div>
                                        <h3 className="mt-4 text-sm text-slate-700 font-medium group-hover:text-primary-600">Leather Crossbody Bag</h3>
                                        <p className="mt-1 text-lg font-bold text-slate-900">$89.00</p>
                                    </a>
                                    <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">Add to Cart</button>
                                </div>

                                {/* <!-- Product 5 --> */}
                                <div className="group">
                                    <a className="block" href="product.html">
                                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden relative">
                                            <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Camera" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80" />
                                        </div>
                                        <h3 className="mt-4 text-sm text-slate-700 font-medium group-hover:text-primary-600">Polaroid Instant Camera</h3>
                                        <p className="mt-1 text-lg font-bold text-slate-900">$99.00</p>
                                    </a>
                                    <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">Add to Cart</button>
                                </div>

                                {/* <!-- Product 6 --> */}
                                <div className="group">
                                    <a className="block" href="product.html">
                                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden relative">
                                            <img className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" alt="Plant" src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80" />
                                        </div>
                                        <h3 className="mt-4 text-sm text-slate-700 font-medium group-hover:text-primary-600">Ceramic Plant Pot</h3>
                                        <p className="mt-1 text-lg font-bold text-slate-900">$35.00</p>
                                    </a>
                                    <button className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">Add to Cart</button>
                                </div>
                            </div>

                            {/* <!-- Pagination --> */}
                            <div className="mt-12 flex justify-center">
                                <nav className="flex items-center gap-2">
                                    <a className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:bg-slate-50" href="#">←</a>
                                    <a className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-600 text-white font-bold" href="#">1</a>
                                    <a className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" href="#">2</a>
                                    <a className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" href="#">3</a>
                                    <span className="text-slate-400">...</span>
                                    <a className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50" href="#">8</a>
                                    <a className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-300 text-slate-500 hover:bg-slate-50" href="#">→</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
}
