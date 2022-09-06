import * as React from "react";
import { IconProps } from "@/icons/type";

const ConnectIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 35 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 29.5 17.45 39l16.46-9.5V10.49L17.45 1 1 10.49M1.09 10.49v19"
      stroke="currentColor"
      strokeWidth="1.30"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M6.74 13.81v12.36l10.71 6.2 10.7-6.2V13.81l-10.7-6.19-10.71 6.2ZM14.23 17.67v4.65M20.68 17.67v4.65"
      stroke="currentColor"
      strokeWidth="1.30"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export default ConnectIcon;
