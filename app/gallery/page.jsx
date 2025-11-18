"use client";

import Image from "next/image";

const photos = [
  { src: "/assets/myimage.png", size: "large", opacity: 100, radius: "rounded-xl" },
  { src: "/assets/photo1.jpeg", size: "medium", opacity: 80, radius: "rounded-lg" },
  { src: "/assets/photo2.jpg", size: "small", opacity: 90, radius: "rounded-2xl" },
  { src: "/assets/photo3.png", size: "medium", opacity: 70, radius: "rounded-md" },
  { src: "/assets/photo4.jpg", size: "large", opacity: 95, radius: "rounded-xl" },
  { src: "/assets/photo5.jpg", size: "small", opacity: 85, radius: "rounded-lg" },
];

export default function GalleryPage() {
  return (
    <section className="w-full min-h-screen text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Quote Section */}
        <div className="lg:w-1/3 relative flex items-end lg:items-center">
          <div className="relative ">
            <span className="text-pink-500 text-[8rem] lg:text-[12rem] leading-none -top-12 -left-12  select-none">
              “
            </span>
            <p className="text-xl lg:text-2xl font-semibold lg:font-bold relative z-10">
              Your beauty is not just in your face, but in the way your presence lights up every room, and the kindness in every smile you share.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-0">
          {photos.map((photo, index) => {
            let sizeClass = "h-48";
            if (photo.size === "small") sizeClass = "h-96";
            if (photo.size === "medium") sizeClass = "h-78";
            if (photo.size === "large") sizeClass = "h-96";

            return (
              <div
                key={index}
                className={`relative ${sizeClass} ${photo.radius} overflow-hidden`}
                
              >
                <Image
                  src={photo.src}
                  alt={`Photo ${index + 1}`}
                  fill
                  className="object-cover rounded-xl w-full h-full border-2 border-pink-500"
                  priority
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
