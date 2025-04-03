import React from "react";

interface NavigationArrowProps {
  direction: "left" | "right";
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
}) => {
  const svgContent =
    direction === "left"
      ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5003 20.0016C37.5003 19.6701 37.3686 19.3521 37.1342 19.1177C36.8997 18.8833 36.5818 18.7516 36.2503 18.7516H6.76778L14.6353 10.8866C14.7515 10.7704 14.8437 10.6324 14.9066 10.4805C14.9695 10.3287 15.0019 10.1659 15.0019 10.0016C15.0019 9.83722 14.9695 9.67447 14.9066 9.52262C14.8437 9.37077 14.7515 9.2328 14.6353 9.11658C14.5191 9.00036 14.3811 8.90817 14.2292 8.84527C14.0774 8.78237 13.9146 8.75 13.7503 8.75C13.5859 8.75 13.4232 8.78237 13.2713 8.84527C13.1195 8.90817 12.9815 9.00036 12.8653 9.11658L2.86528 19.1166C2.74887 19.2327 2.65652 19.3706 2.5935 19.5225C2.53048 19.6744 2.49805 19.8372 2.49805 20.0016C2.49805 20.166 2.53048 20.3288 2.5935 20.4807C2.65652 20.6325 2.74887 20.7705 2.86528 20.8866L12.8653 30.8866C12.9815 31.0028 13.1195 31.095 13.2713 31.1579C13.4232 31.2208 13.5859 31.2532 13.7503 31.2532C13.9146 31.2532 14.0774 31.2208 14.2292 31.1579C14.3811 31.095 14.5191 31.0028 14.6353 30.8866C14.7515 30.7704 14.8437 30.6324 14.9066 30.4805C14.9695 30.3287 15.0019 30.1659 15.0019 30.0016C15.0019 29.8372 14.9695 29.6745 14.9066 29.5226C14.8437 29.3708 14.7515 29.2328 14.6353 29.1166L6.76778 21.2516H36.2503C36.5818 21.2516 36.8997 21.1199 37.1342 20.8855C37.3686 20.651 37.5003 20.3331 37.5003 20.0016Z" fill="#333333" fill-opacity="0.25"></path>'
      : '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.49972 20.0062C2.49972 20.3378 2.63141 20.6557 2.86583 20.8901C3.10025 21.1245 3.4182 21.2562 3.74972 21.2562L33.2322 21.2562L25.3647 29.1212C25.2485 29.2375 25.1563 29.3754 25.0934 29.5273C25.0305 29.6791 24.9981 29.8419 24.9981 30.0062C24.9981 30.1706 25.0305 30.3333 25.0934 30.4852C25.1563 30.637 25.2485 30.775 25.3647 30.8912C25.4809 31.0075 25.6189 31.0996 25.7708 31.1625C25.9226 31.2254 26.0854 31.2578 26.2497 31.2578C26.4141 31.2578 26.5768 31.2254 26.7287 31.1625C26.8805 31.0996 27.0185 31.0075 27.1347 30.8912L37.1347 20.8912C37.2511 20.7751 37.3435 20.6372 37.4065 20.4853C37.4695 20.3335 37.502 20.1707 37.502 20.0062C37.502 19.8418 37.4695 19.679 37.4065 19.5272C37.3435 19.3753 37.2511 19.2373 37.1347 19.1212L27.1347 9.12124C27.0185 9.00502 26.8805 8.91282 26.7287 8.84993C26.5768 8.78703 26.4141 8.75466 26.2497 8.75466C26.0854 8.75466 25.9226 8.78703 25.7708 8.84993C25.6189 8.91282 25.4809 9.00502 25.3647 9.12124C25.2485 9.23745 25.1563 9.37543 25.0934 9.52728C25.0305 9.67912 24.9981 9.84188 24.9981 10.0062C24.9981 10.1706 25.0305 10.3333 25.0934 10.4852C25.1563 10.637 25.2485 10.775 25.3647 10.8912L33.2322 18.7562L3.74972 18.7562C3.4182 18.7562 3.10025 18.8879 2.86583 19.1224C2.63141 19.3568 2.49972 19.6747 2.49972 20.0062Z" fill="#333333" fill-opacity="0.9"></path>';

  return (
    <button
      aria-label={`Navigate ${direction}`}
      className="focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[40px] h-[40px] cursor-pointer"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </button>
  );
};
