import React, { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u: any) => u.email === form.email)) {
      setError("Email already registered.");
      return;
    }
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    setSuccess("Registration successful! Redirecting to login...");
    setTimeout(() => router.push("/login"), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 w-full max-w-md animate-fade-in-up"
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-yellow-200 dark:via-pink-400 dark:to-pink-600 mb-6 animate-gradient-x">
          Register
        </h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        {success && <div className="mb-4 text-green-500">{success}</div>}
        <div className="mb-4">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mb-2"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mb-2"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mb-2"
          />
          <div className="relative mb-2">
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 text-sm"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-all duration-300"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
          </span>
          <a
            href="/login"
            className="text-blue-600 dark:text-yellow-200 hover:underline"
          >
            Login
          </a>
        </div>
      </form>
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Register;
