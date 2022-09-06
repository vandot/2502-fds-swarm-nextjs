import * as React from "react";
import { IconProps } from "@/icons/type";

const GrowIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 35 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.61 10.6h5.84M17.54 37.73V19.99M33.9 10.49 17.46 1 1 10.49M1 29.5 17.45 39l16.46-9.5V20L17.45 30.4 1 19.99v9.5ZM33.9 10.49l-16.36 9.5L1 10.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export default GrowIcon;
