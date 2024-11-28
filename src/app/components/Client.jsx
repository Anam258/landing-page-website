"use client";
import * as React from "react";

export default function Clients() {
  const clients = [
    { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b481f140385a542009e322ee920866269b0ac07e5334c3da1e792d6e56c76897?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd" },
    { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/135478fac295a0c553325304f5e0c82d654667c7e39372ffb51cd7706e43cfac?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd" },
    { id: 6, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/df8eca93f36d56c8b68504abce2031c1f3eebd0d827858fbdbc4936bf5480feb?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd" },
    { id: 7, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/59d5bffa9822bbacbf7e7ca257374c0c0de25e17f763e6e810d70c16d80199fd?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd" },
    { id: 8, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/66092faee0820901972d4ef83903b8cb2c0c7360d749c5ffa02d2d469227d179?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd" },
    { id: 9, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f246fa5f7a85e6e97e99118f60e86ae274896dd17b8cd335869b1921148faec1?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd" },
    { id: 10, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9bf0e41fdb52c86aee228a6c0c5be125cdeb7dc277ee37383f8fb7d859c8d4ca?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd" }
  ];

  return (
    <div className="flex flex-col px-36 mt-10 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col self-center max-w-full text-center w-[1110px]">
        <h2 className="text-4xl font-semibold leading-none text-neutral-600 max-md:max-w-full">
          Our Clients
        </h2>
        <p className="mt-2 text-base text-neutral-500 max-md:max-w-full">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full min-h-[98px] max-md:max-w-full">
        {clients.map(client => (
          <img
            key={client.id}
            loading="lazy"
            src={client.src}
            className="object-contain shrink-0 self-stretch my-auto w-12 rounded-lg aspect-square"
            alt={`Client ${client.id}`}
          />
        ))}
      </div>
    </div>
  );
}