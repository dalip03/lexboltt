import Link from 'next/link'
import React from 'react'

function ContactButton() {
  return (
    <div>
        <Link href="/contact" passHref>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary transition text-white px-1 py-2 pl-4 rounded-full font-semibold shadow text-sm sm:text-base mx-auto">
            Contact us
            <span>
              <img
                src="/product/right.svg"
                alt="Arrow Right"
                className="w-10 h-10 object-contain"
              />
            </span>
          </button>
        </Link>
    </div>
  )
}

export default ContactButton
