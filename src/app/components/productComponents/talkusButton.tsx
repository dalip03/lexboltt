import Link from 'next/link'
import React from 'react'

function TalkUs() {
  return (
    <div>
        <Link href="/contactus" passHref>
          <button className="flex items-center gap-2 bg-[#1C1C1C0D] hover:bg-primary transition text-black hover:text-white cursor-pointer px-1 py-1 pl-4 rounded-full font-semibold shadow text-sm sm:text-base mx-auto">
            <span className='px-4'>Talk to Us</span>
            <span>
              <img
                src="/img/abouticons.svg"
                alt="Arrow Right"
                className="w-12 h-12 object-contain"
              />
            </span>
          </button>
        </Link>
    </div>
  )
}

export default TalkUs
