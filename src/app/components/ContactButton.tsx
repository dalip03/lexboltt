import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ContactButton() {
  return (
    <div>
        <Link href="/contactus" passHref>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary transition text-white px-1 py-1 pl-4 rounded-full font-semibold shadow text-sm sm:text-base mx-auto">
            Contact us
            <span>
              <Image
                src="/product_assets/right.svg"
                alt="Arrow Right"
                width={40} // w-12 = 48px
                height={40} // h-12 = 48px
                className=" object-contain"
              />
            </span>
          </button>
        </Link>
    </div>
  )
}

export default ContactButton
