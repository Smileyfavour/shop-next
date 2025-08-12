import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Text:", text);

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    setEmail("");
    setText("");
  };

  return (
    <>
      <Head>
        <title>Buy and Sell at Affordable Prices | Shop-next</title>
        <meta name="description" content="Buy and Sell" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shop-next logo.png" />
      </Head>

      {/* Form */}
      <main className={`${styles.container} pt-20 pb-10`}>
        <div className={`${styles.card}`}>
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg sm:text-2xl font-bold text-red-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-lg sm:text-2xl font-bold text-red-700 mb-2">
                Write your complaints
              </label>
              <textarea
                className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                placeholder="Your complaints"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* Popup Modal */}
      {showAlert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowAlert(false)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg text-center w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-green-700 mb-4">
              ✅ Success!
            </h2>
            <p>Your complaint has been submitted successfully!</p>
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              onClick={() => setShowAlert(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  container:
    "relative flex min-h-screen items-start justify-center bg-gray-50 px-4 sm:px-6 md:px-8",
  card:
    "p-6 sm:p-8 border border-gray-300 rounded-md shadow-xl w-full max-w-lg bg-white",
};
