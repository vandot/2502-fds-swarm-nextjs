import * as React from "react";
import { IconProps } from "@/icons/type";

const FaultIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 35 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10.5v19L17.45 39l16.46-9.5v-19L17.45 1 1 10.5ZM17.48 22.33V10.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M17.45 29.2a.94.94 0 1 0 0-1.89.94.94 0 0 0 0 1.89Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export default FaultIcon;
