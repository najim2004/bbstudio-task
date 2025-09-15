import { ArrowRight } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 -z-10 h-screen w-screen bg-[#1f3634] flex flex-col justify-end lg:justify-between items-center font-bdogrotesk-vf">
      <img
        src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67f55a2e134ca608203f58ec_zuno-logo-green.svg"
        alt=""
        className="w-[85vw] object-cover hidden lg:block mx-auto"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 justify-between md:gap-4">
          <div className="lg:col-span-2">
            <img
              src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67e725b86fdf9ee970fe1013_zuno-logo.svg"
              alt=""
              className="h-[14px]"
            />
          </div>
          <div className="flex md:block border-b md:border-none border-gray-200 py-4 md:py-0">
            <h3 className="text-[#98a581] font-base font-medium pb-4 flex-1">
              Explore
            </h3>
            <ul className="flex-1 *:text-sm *:font-normal *:hover:border-b *:border-gray-50 *:w-max space-y-2 *:text-[#abb1a0]">
              <li>About Zuno</li>
              <li>Learn</li>
            </ul>
          </div>
          <div className="flex md:block border-b md:border-none border-gray-200 py-4 md:py-0">
            <h3 className="flex-1 text-[#98a581] font-base font-medium pb-4">
              Company
            </h3>
            <ul className="flex-1 *:text-sm *:font-normal *:hover:border-b *:border-gray-50 *:w-max space-y-2 *:text-[#abb1a0]">
              <li>Careers</li>
              <li>Terms of service </li>
              <li>Privacy policy</li>
              <li> Contact us</li>
            </ul>
          </div>
          <div className="flex md:block border- md:border-none border-gray-200 py-4 md:py-0">
            <h3 className="flex-1 text-[#98a581] font-base font-medium pb-4">
              Follow us
            </h3>
            <ul className="flex-1 *:text-sm *:font-normal *:hover:border-b *:border-gray-50 *:w-max space-y-2 *:text-[#abb1a0]">
              <li>Instagram</li> <li>TikTok</li> <li>Twitter</li>
            </ul>
          </div>
          <div className="md:col-span-4 lg:col-span-2 py-4">
            <h3 className="flex-1 text-[#98a581] font-base font-medium pb-4">
              Newsletter
            </h3>
            <div className="flex-1 relative">
              <input
                placeholder="Email Address"
                className="h-14 rounded-md w-full border border-[#536e6c] px-2.5 text-[#98a581]"
                type="email"
              />
              <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 size-5 hover:translate-x-1 duration-500 text-gray-400 outline-none" />
            </div>
            <p className="text-gray-500 text-xs mt-2">
              We only share your information in accordance with our privacy
              policy.
            </p>
          </div>
        </div>
        <hr className="my-3 lg:my-9 h-[1px] border-[#536e6c]" />
        <p className="text-xs text-gray-500 mb-10">
          Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere
          erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est
          non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
          nec elit. Nulla vitae elit libero, a pharetra augue.. © Zuno 2025. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
