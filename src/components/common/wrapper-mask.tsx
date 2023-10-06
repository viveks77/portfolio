import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const WrapperMask = ({ children, className }: Props) => {
  return <div className={`overflow-hidden ${className}`}>{children}</div>;
};

export default WrapperMask;
