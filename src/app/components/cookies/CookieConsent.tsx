"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
    // Optionally: Disable non-essential cookies/tracking here
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[94vw] max-w-sm md:max-w-sm bg-white shadow-2xl rounded-2xl p-5 flex flex-col gap-4 border border-gray-100">
      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
        Lexbolt uses cookies
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mb-1">
        We use cookies to enhance your experience. By continuing to visit this
        site, you accept our cookie policy. You can also choose to reject
        cookies.
      </p>
      <div className="flex flex-row gap-3 mt-2">
        <button
          onClick={acceptCookies}
          className="flex items-center gap-2 bg-primary cursor-pointer hover:bg-primary transition text-white px-1 py-1 pl-4 rounded-full font-semibold shadow text-sm sm:text-base mx-auto"
        >
          Accept All 
          <span>
            <Image
              src="/product_assets/right.svg"
              alt="Arrow Right"
              width={40}
              height={40}
              className=" object-contain"
            />
          </span>
        </button>

        <button
          onClick={rejectCookies}
          className="flex items-center gap-2 bg-gray-600 cursor-pointer transition text-white px-1 py-1 pl-4 rounded-full font-semibold shadow text-sm sm:text-base mx-auto"
        >
          Reject All
          <span>
            <Image
              src="/product_assets/right.svg"
              alt="Arrow Right"
              width={40}
              height={40}
              className=" object-contain"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
