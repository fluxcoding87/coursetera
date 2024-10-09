import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image width={30} height={30} alt="logo" src="/logo.svg" />
      <span className="font-extrabold tracking-tighter pl-1 text-[#3064E8]">
        CourseTera
      </span>
    </div>
  );
};
