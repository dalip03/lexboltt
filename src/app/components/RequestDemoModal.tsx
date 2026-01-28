"use client";

import { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

interface RequestDemoModalProps {
  onClose: () => void;
}

export default function RequestDemoModal({ onClose }: RequestDemoModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    employees: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.org.trim()) newErrors.org = "Organization is required";
    if (!form.employees.trim())
      newErrors.employees = "Number of employees is required";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.name,
          lastName: "",
          email: form.email,
          phone: "",
          subject: "Demo Request",
          message: `
Demo Request Details:

Name: ${form.name}
Email: ${form.email}
Organization: ${form.org}
Employees: ${form.employees}
          `,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Thanks for reaching us! We'll contact you soon 🚀");
      onClose();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl px-8 py-10 md:px-12 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X size={24} />
        </button>

        <h1 className="text-black text-center font-bold text-2xl md:text-3xl mb-2">
          Demo Request Form
        </h1>
        <p className="text-gray-600 text-center text-base mb-8">
          Get demo access in your email inbox by filling out this form.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-black/70 font-semibold text-sm mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-sm px-4 py-2 outline-none focus:border-[#ff6600]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-black/70 font-semibold text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-sm px-4 py-2 outline-none focus:border-[#ff6600]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Organization */}
          <div>
            <label className="block text-black/70 font-semibold text-sm mb-1">
              Organization Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Company Name"
              value={form.org}
              onChange={(e) => setForm({ ...form, org: e.target.value })}
              className="w-full border border-gray-200 rounded-sm px-4 py-2 outline-none focus:border-[#ff6600]"
            />
            {errors.org && (
              <p className="text-red-500 text-sm mt-1">{errors.org}</p>
            )}
          </div>

          {/* Employees */}
          <div>
            <label className="block text-black/70 font-semibold text-sm mb-1">
              Number of Employees
            </label>
            <input
              type="text"
              placeholder="100-200"
              value={form.employees}
              onChange={(e) =>
                setForm({ ...form, employees: e.target.value })
              }
              className="w-full border border-gray-200 rounded-sm px-4 py-2 outline-none focus:border-[#ff6600]"
            />
            {errors.employees && (
              <p className="text-red-500 text-sm mt-1">
                {errors.employees}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 bg-primary text-white rounded-full px-4 py-2 font-bold text-lg shadow transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
