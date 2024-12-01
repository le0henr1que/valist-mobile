import React from "react";
import Svg, { Path } from "react-native-svg";

interface ScamBarIconProps {
  size?: number;
  color?: string;
}

const ScamBarIcon: React.FC<ScamBarIconProps> = ({
  size = 24,
  color = "#0D9488",
}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M17.25 4.5H21V8.25"
      stroke="#0F172A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M6.75 19.5H3V15.75"
      stroke="#0F172A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M21 15.75V19.5H17.25"
      stroke="#343330"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M3 8.25V4.5H6.75"
      stroke="#343330"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M7.5 8.25V15.75"
      stroke="#343330"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M16.5 8.25V15.75"
      stroke="#343330"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M13.5 8.25V15.75"
      stroke="#343330"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10.5 8.25V15.75"
      stroke="#343330"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default ScamBarIcon;
