"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F8F8F8] shadow-md">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* LOGO */}
          <div className="flex lg:flex-1">
            <div className="mt-5">
              <Link href="/" className="font-semibold text-3xl">
                <span className="text-[var(--red-pink)]">Dash</span>
                <span>board</span>
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* DESKTOP SEARCH BAR */}
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative xl:w-[595] md:w-[495px] sm:w-[250px]">
              <input
                type="text"
                placeholder="Search your task here..."
                className="md:w-[495px] xl:w-[595] w-[250px] h-[40px] mt-5 px-5 text-[16px] font-medium text-[var(--lightBlack)] border border-gray-300 rounded-[8px]"
              />
              <div className="absolute top-5 right-0 h-[40px] w-[40px] rounded-[8px] bg-[var(--red-pink)] flex items-center justify-center">
                <Image src="/Search.png" alt="Search" width={20} height={20} />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE ICONS + DATE */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex mt-5 gap-10 justify-between flex-wrap">
              {/* Icons */}
              <div className="flex gap-3">
                <div className="h-[40px] w-[40px] rounded-[8px] bg-[var(--red-pink)] flex items-center justify-center">
                  <Image
                    src="/Calendar.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="h-[40px] w-[40px] rounded-[8px] bg-[var(--red-pink)] flex items-center justify-center">
                  <Image
                    src="/Bell.png"
                    alt="Notifications"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Date */}
              <div className="font-medium ">
                <p className="text-[15px]">Tuesday</p>
                <p className="text-[14px] text-[var(--bright-sky-blue)]">
                  20/06/2023
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="mt-5">
                <Link href="/" className="font-semibold text-3xl">
                  <span className="text-[var(--red-pink)]">Dash</span>
                  <span>board</span>
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* MOBILE SEARCH BAR */}
            <div className="mt-6 flow-root">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search your task here..."
                  className="w-full h-[40px] mt-5 px-5 text-[16px] font-medium text-[var(--lightBlack)] border border-gray-300 rounded-[8px]"
                />
                <div className="absolute top-5 right-0 h-[40px] w-[40px] rounded-[8px] bg-[var(--red-pink)] flex items-center justify-center">
                  <Image
                    src="/Search.png"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className=" lg:flex lg:flex-1 lg:justify-end">
                <div className="flex mt-5 gap-10 justify-between flex-wrap">
                  {/* Icons */}
                  <div className="flex gap-3">
                    <div className="h-[40px] w-[40px] rounded-[8px] bg-[var(--red-pink)] flex items-center justify-center">
                      <Image
                        src="/Calendar.png"
                        alt="Calendar"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="h-[40px] w-[40px] rounded-[8px] bg-[var(--red-pink)] flex items-center justify-center">
                      <Image
                        src="/Bell.png"
                        alt="Notifications"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="font-medium ">
                    <p className="text-[15px] text-black">Tuesday</p>
                    <p className="text-[14px] text-[var(--bright-sky-blue)]">
                      20/06/2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};

export default Page;
