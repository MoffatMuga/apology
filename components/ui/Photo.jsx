import Image from "next/image";

function Photo() {
  return (
    <div
      className="
        mx-auto relative 
        w-[200px] h-[200px]
        sm:w-[300px] sm:h-[300px]
        md:w-[340px] md:h-[340px]
        xl:w-[470px] xl:h-[470px]
        rounded-full
        border-[2px] border-pink-500
        overflow-hidden
        shadow-2xl shadow-pink-500/30
      "
    >
      <Image
        src="/assets/myimage.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

export default Photo;
