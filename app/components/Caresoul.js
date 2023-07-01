"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Caresoul = () => {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div>
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP5-1920x600"
            className="h-96 lg:h-[35rem]"
          />
        </div>
        <div>
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP5-1920x600" />
        </div>
        <div>
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP5-1920x600" />
        </div>
        <div>
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP5-1920x600" />
        </div>
        <div>
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP5-1920x600" />
        </div>
        <div>
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP5-1920x600" />
        </div>
      </Carousel>
    </div>
  );
};

export default Caresoul;
