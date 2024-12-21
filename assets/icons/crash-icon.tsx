import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

interface CrashIconProps {
  size?: number;
  color?: string;
}

const CrashIcon: React.FC<CrashIconProps> = ({
  size = 40,
  color = "#0D9488",
}) => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M20.75 4.5H17V3.75C17 3.15326 16.7629 2.58097 16.341 2.15901C15.919 1.73705 15.3467 1.5 14.75 1.5H10.25C9.65326 1.5 9.08097 1.73705 8.65901 2.15901C8.23705 2.58097 8 3.15326 8 3.75V4.5H4.25C4.05109 4.5 3.86032 4.57902 3.71967 4.71967C3.57902 4.86032 3.5 5.05109 3.5 5.25C3.5 5.44891 3.57902 5.63968 3.71967 5.78033C3.86032 5.92098 4.05109 6 4.25 6H5V19.5C5 19.8978 5.15804 20.2794 5.43934 20.5607C5.72064 20.842 6.10218 21 6.5 21H18.5C18.8978 21 19.2794 20.842 19.5607 20.5607C19.842 20.2794 20 19.8978 20 19.5V6H20.75C20.9489 6 21.1397 5.92098 21.2803 5.78033C21.421 5.63968 21.5 5.44891 21.5 5.25C21.5 5.05109 21.421 4.86032 21.2803 4.71967C21.1397 4.57902 20.9489 4.5 20.75 4.5ZM11 15.75C11 15.9489 10.921 16.1397 10.7803 16.2803C10.6397 16.421 10.4489 16.5 10.25 16.5C10.0511 16.5 9.86032 16.421 9.71967 16.2803C9.57902 16.1397 9.5 15.9489 9.5 15.75V9.75C9.5 9.55109 9.57902 9.36032 9.71967 9.21967C9.86032 9.07902 10.0511 9 10.25 9C10.4489 9 10.6397 9.07902 10.7803 9.21967C10.921 9.36032 11 9.55109 11 9.75V15.75ZM15.5 15.75C15.5 15.9489 15.421 16.1397 15.2803 16.2803C15.1397 16.421 14.9489 16.5 14.75 16.5C14.5511 16.5 14.3603 16.421 14.2197 16.2803C14.079 16.1397 14 15.9489 14 15.75V9.75C14 9.55109 14.079 9.36032 14.2197 9.21967C14.3603 9.07902 14.5511 9 14.75 9C14.9489 9 15.1397 9.07902 15.2803 9.21967C15.421 9.36032 15.5 9.55109 15.5 9.75V15.75ZM15.5 4.5H9.5V3.75C9.5 3.55109 9.57902 3.36032 9.71967 3.21967C9.86032 3.07902 10.0511 3 10.25 3H14.75C14.9489 3 15.1397 3.07902 15.2803 3.21967C15.421 3.36032 15.5 3.55109 15.5 3.75V4.5Z"
      fill="#DC2626"
    />
  </Svg>
);

export default CrashIcon;
