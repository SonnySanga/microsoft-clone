import React from "react";

const SocialMedia = () => {
  return (
    <div className="lg:max-w-[98rem] mx-auto flex items-center space-x-5 p-4">
      <div>
        <p>Follow Microsoft</p>
      </div>
      <div className="flex space-x-5  justify-center p-4">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1"
          alt=""
          className="h-8 "
        />
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Twitter%202x?scl=1"
          alt=""
          className="h-8"
        />
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/YouTube%202x?scl=1"
          alt=""
          className=" h-8"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
