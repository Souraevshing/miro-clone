import Image from "next/image";

const Loading = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Image
          src="/logo.svg"
          width={120}
          height={120}
          alt="logo"
          className="animate-ping duration-500"
        />
      </div>
    </>
  );
};

export default Loading;
