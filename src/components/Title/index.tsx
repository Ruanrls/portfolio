import React from "react";

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <h1 className="font-bold text-4xl tracking-tighter mt-2">{children}</h1>
  );
};
export default Title;
