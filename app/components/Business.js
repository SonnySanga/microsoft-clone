import Link from "next/link";
import React from "react";

const Business = () => {
  return (
    <div className="lg:max-w-[98rem] py-14 mx-auto">
      <h3>For Business</h3>
      <div className="grid lg:grid-cols-4 grid-cols-1">
        <div className="space-y-4 flex flex-col justify-center p-4">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop"
            alt=""
          />

          <h2 className="card-items-header">Surface for Business</h2>
          <p className="pb-3">
            No matter what you do, there’s a Surface to help you do it.
          </p>
          <Link href="" className="Link-items">
            Shop Now
          </Link>
        </div>
        <div className="space-y-4 flex flex-col justify-center p-4">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop"
            alt=""
          />
          <h2 className="card-items-header">Get Microsoft for Free</h2>
          <p className="pb-3">
            Online meetings, chat and shared cloud storage – all in one place.
          </p>
          <Link href="" className="Link-items">
            SignUp for Free
          </Link>
        </div>
        <div className="space-y-4 flex flex-col justify-center p-4">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop"
            alt=""
          />
          <h2 className="card-items-header">Windows 11 for free</h2>
          <p className="pb-3">
            Designed for hybrid work. Powerful for employees. Consistent for IT.
            Secure for all.
          </p>
          <Link href="" className="Link-items">
            Learn More
          </Link>
        </div>
        <div className="space-y-4 flex flex-col justify-center p-4">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop"
            alt=""
          />
          <h2 className="card-items-header">Try Microsoft 365 for Free</h2>
          <p className="pb-3">
            Get Microsoft Teams, secure cloud storage and premium apps across
            devices with a free one-month Microsoft 365 Business Standard trial.
          </p>
          <Link href="" className="Link-items">
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Business;
