import React from "react";

type Props = {
  children: React.ReactNode;
};

const SkillsContainer = ({ children }: Props) => {
  return <div className="flex flex-col gap-6 mt-2 flex-wrap">{children}</div>;
};

export default SkillsContainer;
