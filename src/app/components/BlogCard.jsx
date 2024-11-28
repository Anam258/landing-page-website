"use client";
import * as React from "react";

export function BlogCard({ image, title }) {
  return (
    <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-full max-w-[368px]">
      {/* Blog Image */}
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-cover rounded-lg w-full max-w-[368px] aspect-[1.29] md:max-w-full"
      />
      
      {/* Blog Content */}
      <div className="flex flex-col p-4 mt-4 w-full rounded-lg shadow-lg bg-slate-100">
        <div className="text-center text-neutral-500 text-sm md:text-base leading-7">
          {title}
        </div>
        <div className="flex gap-2 justify-center items-center p-2 mt-4 w-full text-green-500">
          <div className="text-sm md:text-base">Readmore</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/800b508f990314784a2085f1f3d3467a4979355a6687c09cdf69462bdb24550b?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd"
            alt=""
            className="object-contain w-4 md:w-6"
          />
        </div>
      </div>
    </div>
  );
}
