"use client";
import * as React from "react";

export function BlogCard({ image, title }) {
  return (
    <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-[368px]">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain max-w-full rounded-lg aspect-[1.29] w-[368px]"
      />
      <div className="flex flex-col p-4 max-w-full rounded-lg shadow-lg bg-slate-100 w-[317px]">
        <div className="self-center leading-7 text-center text-neutral-500">
          {title}
        </div>
        <div className="flex gap-2 justify-center items-center p-2 mt-4 w-full leading-snug text-green-500 whitespace-nowrap">
          <div className="self-stretch my-auto">Readmore</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/800b508f990314784a2085f1f3d3467a4979355a6687c09cdf69462bdb24550b?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
