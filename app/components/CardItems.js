import Link from "next/link";
import React from "react";

const CardItems = () => {
  return (
    <>
      <div className="lg:max-w-[98rem] mx-auto py-14 grid lg:grid-cols-4 grid-cols-1">
        <div className="space-y-2 flex flex-col justify-center p-4">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=380&hei=213&fit=crop"
            alt=""
          />
          <h2 className="card-items-header">Surface Laptop 5</h2>
          <p>
            Sophisticated style and multitasking speed powered by 12th Gen
            Intel® Core, with Windows 11.
          </p>
          <Link href="" className="text-sky-800">
            Learn More
          </Link>
        </div>
        <div className="space-y-2 flex flex-col justify-center p-4">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=380&hei=213&fit=crop"
            alt=""
          />
          <h2 className="card-items-header">XBox series S</h2>
          <p>Next-gen performance in the smallest Xbox ever..</p>
          <Link href="" className="text-sky-800">
            Shop XBox series S
          </Link>
        </div>
        <div className="space-y-2 flex flex-col justify-center p-4">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Bing-AI-Open-Preview?wid=380&hei=213&fit=crop"
            alt=""
          />
          <h2 className="card-items-header">
            Announcing the next wave of AI innovation
          </h2>
          <p>
            Sophisticated style and multitasking speed powered by 12th Gen
            Intel® Core, with Windows 11.
          </p>
          <Link href="" className="text-sky-800">
            Learn More About it
          </Link>
        </div>
        <div className="space-y-2 flex flex-col justify-center p-4">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-Game-Pass-Ultimate-Characters-06102010-1?wid=380&hei=213&fit=crop"
            alt=""
          />
          <h2 className="card-items-header">
            Announcing the next wave of AI innovation
          </h2>
          <p>
            Sophisticated style and multitasking speed powered by 12th Gen
            Intel® Core, with Windows 11.
          </p>
          <Link href="" className="text-sky-800">
            Learn More About it
          </Link>
        </div>
      </div>

      {/* body Image */}
      <div className="lg:max-w-[98rem] mx-auto">
        <img src="bodyImage.jpg" alt="" />
      </div>
    </>
  );
};

export default CardItems;
