
function Body({children}) {
    return (
        <>
            <div className="font-body text-slate-600 antialiased bg-white">

                {/* <!-- Announcement Bar --> 
                <div className="bg-slate-900 text-white text-xs font-medium py-2 text-center tracking-wide">FREE SHIPPING ON ALL ORDERS OVER $50</div>

                {/* {/* <!-- Navigation --> */} 
                <header>
                    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-16">

                                {/* {/* <!-- Logo --> */} 
                                <div className="flex-shrink-0 flex items-center">
                                    <a className="font-heading font-bold text-2xl text-slate-900 tracking-tight" href="index.html">Lumina
                                        <span className="text-primary-600">.</span>
                                    </a>
                                </div>

                                {/* <!-- Desktop Menu --> */}
                                <div className="hidden md:flex space-x-8">
                                    <a className="text-slate-900 font-medium hover:text-primary-600 transition-colors" href="index.html">Home</a>
                                    <a className="text-slate-500 font-medium hover:text-primary-600 transition-colors" href="shop.html">Shop</a>
                                    <a className="text-slate-500 font-medium hover:text-primary-600 transition-colors" href="#">New Arrivals</a>
                                    <a className="text-slate-500 font-medium hover:text-primary-600 transition-colors" href="#">About</a>
                                </div>

                                {/* <!-- Icons --> */}
                                <div className="flex items-center space-x-6">

                                    {/* <!-- Mobile Toggle --> */}
                                    <button className="text-slate-400 hover:text-slate-900 transition-colors">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                    </button>
                                    <a className="text-slate-400 hover:text-slate-900 transition-colors relative" href="cart.html">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                        </svg>
                                        <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                                    </a>
                                </div>
                                <button id="mobile-menu-toggle" className="md:hidden p-2 text-current focus:outline-none" aria-label="Toggle menu" type="button">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu --> */}
                        <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 z-50">
                            <a className="text-slate-900 font-medium hover:text-primary-600 transition-colors block w-full" href="index.html">Home</a>
                            <a className="text-slate-500 font-medium hover:text-primary-600 transition-colors block w-full" href="shop.html">Shop</a>
                            <a className="text-slate-500 font-medium hover:text-primary-600 transition-colors block w-full" href="#">New Arrivals</a>
                            <a className="text-slate-500 font-medium hover:text-primary-600 transition-colors block w-full" href="#">About</a>
                        </div>
                    </nav>
                </header>

                    {children}
                
                {/* <!-- Footer --> */}
                <footer className="bg-slate-900 text-slate-300 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                            <div className="col-span-1 md:col-span-1">
                                <a className="font-heading font-bold text-2xl text-white tracking-tight mb-4 block" href="#">Lumina
                                    <span className="text-primary-500">.</span>
                                </a>
                                <p className="text-sm text-slate-400">
                                    Your destination for modern lifestyle essentials. Quality, style, and sustainability in every product.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4">Shop</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a className="hover:text-white transition-colors" href="#">New Arrivals</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-white transition-colors" href="#">Best Sellers</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-white transition-colors" href="#">Sale</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-white transition-colors" href="#">Gift Cards</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4">Support</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a className="hover:text-white transition-colors" href="#">Help Center</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-white transition-colors" href="#">Shipping & Returns</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-white transition-colors" href="#">Size Guide</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-white transition-colors" href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4">Stay in the loop</h4>
                                <form className="flex gap-2">
                                    <input className="bg-slate-800 border-none rounded-md px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-500" placeholder="Enter your email" type="email" />
                                    <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-primary-700 transition-colors">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">© 2025 Lumina Store. All rights reserved.</div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Body