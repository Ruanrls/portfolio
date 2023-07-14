import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/images/me.jpeg"
        alt="My photo"
        width={35}
        height={35}
        style={{ borderRadius: "50%" }}
      />

      <span className="ml-4 text-lg">
        <strong>Ruan</strong> Silva
      </span>
    </div>
  );
};

export default Logo;
