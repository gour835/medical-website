import type { PropsWithChildren } from 'react';
import Body from '@/components/shop/Body';
// import Head from '@/components/shop/Head';
import {Head} from '@inertiajs/react';


export default function Layout({ children }: PropsWithChildren) {
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <>
            <Head title = {"Home"} />
            <Body>
                {children}
            </Body>

        </>
    );
}
