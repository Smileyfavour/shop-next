import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";



export default function PageNotFound() {
    const [screenHeight, setScreenHeight] = useState(0);


    useEffect(() => {
        setScreenHeight(window.innerHeight - 30)
    }, [])
   //the above for setting screenheight.


    return (
        <>
            <Head>
                <title>Page Not Found |Shop-Next</title>
                <meta name="description" content="404/error" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/shop-next logo.png" />
            </Head>
            <main className={styles.container} style={{ height: `${screenHeight}px` }}>
                <Image width={400} height={400} src='/broken_plug.PNG' />
                <h3 className={styles.message}>Sorry, the page requested does not seem to exist</h3>
                <p className={styles.action}> Return to <Link className={styles.link} href='/'>Home</Link> </p>
            </main>

        </>
    )
}//the above code for 404 page

const styles = {
    container: 'w-full flex flex-col justify-center items-center px-16 bg-white',
    message: 'text-lg my-3',
    action: 'text-md',
    link: 'text-indigo-600',
}