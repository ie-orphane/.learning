"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AuthButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login() {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("/auth/login");
      const result = await response.data;

      localStorage.setItem("token", result.token);
      router.push(result.link);
    } catch (err) {
      setError("API Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={login}
      className="button border-2 border-transparent text-white bg-black hover:bg-transparent hover:text-black hover:border-black font-medium w-fit px-12 py-3 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0"
    >
      {children}
    </button>
  );
};

export default AuthButton;
