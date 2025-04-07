
    import { useState, useEffect } from "react";
    import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
    import Head from "next/head";
    
    /*code for the automatic image slide */
    const images = [

      "/shopping-cart.png",
      "/smart tv.png",
      "/television.png",
    ];
    
    export default function ImageSlider() {
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      };
    
      const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      };
    
      useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
      }, [currentIndex]); // Added dependency
    
      return (
        <>
          <Head>
            <title>Homepage - Shop-Next</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/shop-next logo.png" />
          </Head>
          <main className={styles.container}>
            <div className={styles.product}>
              <div className={styles.images}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 object-cover flex-shrink-0"
                  />
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <MdOutlineKeyboardArrowLeft className="text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <MdOutlineKeyboardArrowRight className="text-white" />
              </button>
            </div>
          </main>
        </>
      );
    }
    















const styles ={
  container:'h-screen',
  product:'relative w-full max-w-2xl mx-auto overflow-hidden mt-2',
  images:'flex transition-transform duration-500 ease-in-out',


}