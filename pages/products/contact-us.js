import Head from "next/head"
import Link from "next/link";
import { useState,useEffect } from "react";


export default function Home() {
    // const [screenHeight,setScreenHeight] = useState(0);
  
    // useEffect(()=>{
    //   setScreenHeight(window.innerHeight - 30)
    // },[]);

  
    return (
      <>
        <Head>
            <title>buy and sell at affordable prices | Shop-next</title>
            <meta name="description" content="Buy and Sell" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/shop-next logo.png" />
        </Head>
        <main className={styles.container} >
          <div className={styles.styles}>
          <div className={styles.body}>

            <h1 className={styles.text}>Contact Us</h1>
             </div>
            <div className="flex flex-col justify-center mb-4 bg-red-400 border border-solid
             border-4 border-red-400 rounded-lg text-lg text-3xl mt-16 text-black">
              <button className={styles.contact}>Phone</button>
           </div>
            <div className="flex flex-col justify-center  pt-[40] pr-[40] mb-4 bg-red-400 border border-solid
             border-4 border-red-400 rounded-lg text-lg text-3xl text-black">
              <button className={styles.contact}>E-mail</button>
           </div>
          </div>
     </main>
      </>
    )
}


const styles = {
  container:'h-screen',
  styles:'',
  body:'text-6xl mb-[12px] flex justify-center',
  contact:'height-60px wi'
  
}