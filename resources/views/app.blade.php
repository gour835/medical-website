<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        {{-- ###################********************######################****************** --}}
        <meta charSet="UTF-8" />
                <meta
                    content="width=device-width, initial-scale=1.0"
                    name="viewport"
                />
               
                <meta
                    content="Download this free Tailwind CSS Ecommerce website template for Online Store. Features a modern design, fully responsive layout, and includes 4 pre-built pages like index.html, product.html, shop.html."
                    name="description"
                />
                <meta
                    content="free online store website template, online store website landing page, tailwind css online store website theme, responsive online store website design, modern online store website"
                    name="keywords"
                />
                <meta
                    content="Online Store - Free Tailwind Template"
                    property="og:title"
                />
                <meta
                    content="Download this free Tailwind CSS Ecommerce website template for Online Store. Features a modern design, fully responsive layout, and includes 4 pre-built pages like index.html, product.html, shop.html."
                    property="og:description"
                />
                <meta content="website" property="og:type" />
                <meta
                    content="https://freestacktemplates.io/og-previews/online_store-ecommerce-modern-template/index-og.jpg"
                    property="og:image"
                />
                <meta
                    content="https://freestacktemplates.io/tailwind/online_store-ecommerce-modern-template"
                    property="og:url"
                />
                <meta content="summary_large_image" name="twitter:card" />
                <meta
                    content="Online Store - Free Tailwind Template"
                    name="twitter:title"
                />
                <meta
                    content="Download this free Tailwind CSS Ecommerce website template for Online Store. Features a modern design, fully responsive layout, and includes 4 pre-built pages like index.html, product.html, shop.html."
                    name="twitter:description"
                />
                <meta
                    content="https://freestacktemplates.io/og-previews/online_store-ecommerce-modern-template/index-og.jpg"
                    name="twitter:image"
                />
               
                
                
                
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                
        {{-- ###################********************######################****************** --}}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx", 'resources/css/app.css'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
