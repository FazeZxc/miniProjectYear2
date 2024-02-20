import { Carousel } from "@material-tailwind/react";
import quote2 from "../quote2.jpg"
import quote3 from "../quote3.jpg"
import quote from "../quotes.jpg"

export function Slider() {
  return (
  <div className="h-[400px] w-[800px] ">
      <Carousel className="rounded-xl ">
      <img
        src={quote2}
        alt="image 1"
        className="h-full w-full object-cover rounded-xl"
      />
      <img
        src={quote3}
        alt="image 2"
        className="h-full w-full object-cover rounded-xl"
      />
      <img
        src={quote}
        alt="image 3"
        className="h-full w-full object-cover rounded-xl"
      />
    </Carousel>
  </div>
  );
}
