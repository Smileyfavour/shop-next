import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";



export default function AboutUs() {
    const [showCaret, setShowCaretNav] = useState(true);



    return (
        <>
            <Head>
                <title>About Us | Shop-Next</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/shop-next logo.png" />
            </Head>
            <main className={styles.container}>
                <div>
                    <nav className={styles.caret}>
                        <ul>

                        </ul>
                    </nav>
                </div>
            </main>
        </>
    )
}

const styles = {
    container: 'h-screen mt-4 px-4',
    caret: '',
    caretDown: '',
    caretUp: '',
}