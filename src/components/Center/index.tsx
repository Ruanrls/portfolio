type Props = {
  children: React.ReactNode;
  className: string;
};

const Center = ({ children, className }: Props) => {
  return (
    <div
      className={`container w-full flex flex-1 flex-col items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Center;
