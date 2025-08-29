import Image from "next/image";
import Link from "next/link";
import React from "react";

function TalkUs() {
  return (
    <div>
      <Link href="/contactus" passHref>
        <button className="flex items-center gap-2 bg-[#1C1C1C0D] hover:bg-primary transition text-black hover:text-white cursor-pointer px-1 py-1 pl-4 rounded-full font-semibold shadow text-sm sm:text-base mx-auto">
          <span className="px-4">Contact Us</span>
          <span>
            <Image
              src="/img/abouticons.svg"
              alt="Arrow Right"
              width={48} // w-12 = 48px
              height={48} // h-12 = 48px
              className="object-contain"
            />
          </span>
        </button>
      </Link>
    </div>
  );
}

export default TalkUs;
