import Image from "next/image";
import Link from "next/link";
import React from "react";

const Shoutout = () => {
  return (
    <div className="bg-black h-full flex justify-center items-center">
      <div className="bg-gray-800 w-full h-screen p-8 rounded shadow-md justify-items-center">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Shoutouts to:
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col items-center flex-1">
            <Image src="/astro.svg" alt="Astro Logo" className="h-16 mb-2" />
            <Link
              href="https://astro.build/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-center"
            >
              Astro
            </Link>
          </div>
          <div className="flex flex-col items-center flex-1">
            <Image src="/remix.svg" alt="Remix Logo" className="h-16 mb-2" />
            <Link
              href="https://remix.run/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-center"
            >
              Remix
            </Link>
          </div>
          <div className="flex flex-col items-center flex-1">
            <Image
              src="/createt3.svg"
              alt="Create T3 App Logo"
              className="h-16 mb-2"
            />
            <Link
              href="https://create.t3.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-center"
            >
              Create T3 App
              {process.env.CANT_TOUCH_THIS}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoutout;
