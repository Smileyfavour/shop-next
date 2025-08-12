import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook, ImTwitter } from "react-icons/im";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    router.push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>LOGIN - Shop-Next</title>
        <meta name="description" content="Sign in to Shop-Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shop-next logo.png" />
      </Head>

      <main className={styles.container}>
        {/* Blurred background */}
        <div className={styles.overlay}></div>

        {/* Centered Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
          
          {/* Login Card */}
          <div className={styles.contentWrapper}>
            <h2 className="text-2xl font-bold text-center text-black">LOGIN</h2>
            <form className="mt-6" onSubmit={handleSubmit}>
              <label className="block text-black font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="block text-black font-medium mt-6">Password</label>
              <input
                type="password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full mt-8 p-3 bg-indigo-800 text-white rounded-lg hover:bg-red-700 transition"
              >
                LOGIN
              </button>
            </form>

            <p className="mt-6 text-center text-black">
              Don't have an account?{" "}
              <Link href="/signup" className="text-indigo-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          {/* Social Buttons */}
          <div className={styles.wrapper}>
            <h2 className="text-red-700 text-2xl font-bold text-center">OR</h2>
            <button className={styles.signinBtn}>
              <p>Continue with Google</p>
              <FcGoogle className="w-6 h-6" />
            </button>

            <button className={styles.signinBtn}>
              <p>Continue with Facebook</p>
              <ImFacebook className="w-6 h-6" />
            </button>

            <button className={styles.signinBtn}>
              <p>Continue with Twitter</p>
              <ImTwitter className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = {
  container:
    "relative flex min-h-screen items-center justify-center bg-cover bg-center bg-gradient-to-br from-indigo-300 via-white to-red-300 px-4 py-12 sm:py-16",
  overlay: "absolute inset-0 bg-black/40 backdrop-blur-sm z-0",
  contentWrapper:"w-full max-w-sm p-6 rounded-lg shadow-xl bg-white/90 shadow-indigo-400/50",
  wrapper:"w-full mt-16 max-w-sm flex flex-col gap-4 p-6 mt-16  rounded-lg shadow-xl bg-white/90 shadow-indigo-400/50",
  signinBtn:"flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform",
};
