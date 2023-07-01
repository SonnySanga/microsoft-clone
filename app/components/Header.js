"use client";
import { useState } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  const [toolTip, setToolTip] = useState(false);
  const [SearchToolTip, setSearchToolTip] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const tooltipOn = () => {
    setToolTip(true);
  };

  const closetooTip = () => {
    setToolTip(false);
  };
  const openSearchToolTip = () => {
    setSearchToolTip(true);
  };

  const closeSearchToolTip = () => {
    setSearchToolTip(false);
  };

  const opendrawBox = () => {
    setOpenBox(true);
  };

  const closedrawBox = () => {
    setOpenBox(false);
  };

  return (
    <div className="lg:max-w-[98rem] mx-auto ">
      <div className="flex justify-between py-4 ">
        <div className="flex space-x-6">
          <div className="lg:hidden flex space-x-3 items-center">
            <Bars3Icon className="h-6" />
            <MagnifyingGlassIcon className="h-8" />
          </div>

          {/* Mobile Functionality available Here.... */}

          {/* Closing Mobile Functionality Here */}

          <div className="hidden lg:flex">
            <img src="logo.png" alt="" className="h-6" />
          </div>
          <div className="lg:flex space-x-6 pt-2 hidden">
            <p className="header_menu_items">Microsoft 365</p>
            <p className="header_menu_items">Teams</p>
            <p className="header_menu_items">Windows</p>
            <p className="header_menu_items">Surface</p>
            <p className="header_menu_items">Xbox</p>
            <p className="header_menu_items">Support</p>
          </div>
        </div>

        <div className="lg:hidden">
          <img src="logo.png" alt="" className="h-6" />
        </div>

        <div className="flex gap-10">
          <div className="flex space-x-4 pt-2">
            <div className="lg:flex space-x-2 items-center hidden">
              <div>
                <p className="header_menu_items">All Microsoft</p>
              </div>

              <div>
                {openBox ? (
                  <ChevronDownIcon onClick={closedrawBox} className="h-4" />
                ) : (
                  <ChevronUpIcon onClick={opendrawBox} className="h-4" />
                )}
              </div>
            </div>
            {/* DropDown Selection Item */}
            <div
              className={`${
                openBox
                  ? "grid lg:grid-cols-6 absolute top-16 z-50 w-[65rem] h-96 bg-gray-200 right-80 p-10 border-b-4 text-black/80 border-black rounded-b-lg"
                  : "hidden"
              }`}
            >
              <div className="flex flex-col space-y-8">
                <Link href="">SoftWare</Link>
                <Link href="">Windows App</Link>
                <Link href="">AI</Link>
                <Link href="">OneDrive</Link>
                <Link href="">Outlooks</Link>
                <Link href="">Skype</Link>
                <Link href="">OneNotes</Link>
                <Link href="">Microsoft Teams</Link>
              </div>
              <div className="flex flex-col space-y-8">
                <Link href="">SoftWare</Link>
                <Link href="">Windows App</Link>
                <Link href="">AI</Link>
                <Link href="">OneDrive</Link>
                <Link href="">Outlooks</Link>
                <Link href="">Skype</Link>
                <Link href="">OneNotes</Link>
                <Link href="">Microsoft Teams</Link>
              </div>
              <div className="flex flex-col space-y-8">
                <Link href="">SoftWare</Link>
                <Link href="">Windows App</Link>
                <Link href="">AI</Link>
                <Link href="">OneDrive</Link>
                <Link href="">Outlooks</Link>
                <Link href="">Skype</Link>
                <Link href="">OneNotes</Link>
                <Link href="">Microsoft Teams</Link>
              </div>
              <div className="flex flex-col space-y-8">
                <Link href="">SoftWare</Link>
                <Link href="">Windows App</Link>
                <Link href="">AI</Link>
                <Link href="">OneDrive</Link>
                <Link href="">Outlooks</Link>
                <Link href="">Skype</Link>
                <Link href="">OneNotes</Link>
                <Link href="">Microsoft Teams</Link>
              </div>
              <div className="flex flex-col space-y-8">
                <Link href="">SoftWare</Link>
                <Link href="">Windows App</Link>
                <Link href="">AI</Link>
                <Link href="">OneDrive</Link>
                <Link href="">Outlooks</Link>
                <Link href="">Skype</Link>
                <Link href="">OneNotes</Link>
                <Link href="">Microsoft Teams</Link>
              </div>
              <div className="flex flex-col space-y-8">
                <Link href="">SoftWare</Link>
                <Link href="">Windows App</Link>
                <Link href="">AI</Link>
                <Link href="">OneDrive</Link>
                <Link href="">Outlooks</Link>
                <Link href="">Skype</Link>
                <Link href="">OneNotes</Link>
                <Link href="">Microsoft Teams</Link>
              </div>
            </div>

            <div className="lg:flex space-x-2 items-center hidden">
              <p
                className="header_menu_items"
                onMouseEnter={openSearchToolTip}
                onMouseLeave={closeSearchToolTip}
              >
                Search
              </p>
              <div>
                <MagnifyingGlassIcon className="h-4" />
              </div>
            </div>
            <div
              className={`${
                SearchToolTip
                  ? "absolute top-10 bg-gray-300 p-2 z-50 flex"
                  : "hidden"
              }`}
            >
              <p>Search Items</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="pt-2 flex space-x-2 items-center">
              <p
                className={`header_menu_items hidden lg:flex`}
                onMouseEnter={tooltipOn}
                onMouseLeave={closetooTip}
              >
                Cart
              </p>
              <div>
                <ShoppingCartIcon className="h-4" />
              </div>
            </div>

            {/* Tooltip */}

            <div
              className={`${
                toolTip ? "absolute top-10 bg-gray-300 p-2 z-50 flex" : "hidden"
              }`}
            >
              <p>0 Items in Cart</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="hidden lg:flex">SignIn</p>
              <div>
                <UserCircleIcon className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
