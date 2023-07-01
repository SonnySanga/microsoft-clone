import Link from "next/link";
import React from "react";

const Searvices = () => {
  return (
    <div className="lg:max-w-4xl mx-auto flex space-x-6  p-10 flex-col lg:flex-row gap-y-8">
      <div className="flex items-center flex-col">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40"
          alt=""
          className="pb-4"
        />
        <Link href="" className="services_items">
          Choose your microsoft office
        </Link>
      </div>
      <div className="flex justify-between space-x-6">
        <div className="flex items-center flex-col ">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&hei=40"
            alt=""
            className="pb-4"
          />
          <Link href="" className="services_items">
            Explore Surface Device
          </Link>
        </div>
        <div className="flex items-center flex-col">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&hei=40"
            alt=""
            className="pb-4"
          />
          <Link href="" className="services_items">
            CBuy XBox games
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40"
          alt=""
          className="pb-4"
        />
        <Link href="" className="services_items">
          Get Windows 11
        </Link>
      </div>
    </div>
  );
};

export default Searvices;
