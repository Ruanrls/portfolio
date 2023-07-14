import React from "react";

type Props = {
  children: React.ReactNode;
};

const SkillRow = ({ children }: Props) => {
  return (
    <div className="flex flex-1 every:flex every:flex-1 every:gap-3 every:flex-wrap">
      {children}
    </div>
  );
};

export default SkillRow;
