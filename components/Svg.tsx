import React from "react";

interface SvgProps extends React.PropsWithChildren {}

const Svg: React.FC<SvgProps> = ({ children, ...rest }) => {
  return (
    <svg
      fill="none"
      stroke="#000"
      strokeWidth="0.25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="size-full group-hover:scale-125 duration-[325ms]"
      {...rest}
    >
      {children}
    </svg>
  );
};

export default Svg;
