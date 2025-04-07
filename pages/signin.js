import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    router.push("/dashboard"); // Redirect after sign-in (replace with authentication logic)
  };

  return (
    <>
      <Head>
        <title>Sign In - Shop-Next</title>
        <meta name="description" content="Sign in to Shop-Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shop-next logo.png" />
      </Head>

      <main className={styles.container}>
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">Sign In</h2>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 font-medium">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

const styles ={
  container:'flex min-h-screen items-center justify-center bg-gray-100 px-4 sm:px-6'
}