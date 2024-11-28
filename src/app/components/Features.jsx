"use client";
import * as React from "react";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee200b345a09767d1a7b0bc873133cdf68b6fe3ac4cc5b7f0fae00f9ce7dbc94?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd",
      title: "Membership Organisations",
      description: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa334ae778df9c62ef6e21d016b0c1a39f17e11f7eec571f16da72732387fadc?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd",
      title: "National Associations",
      description: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b769e9ec4749cd6f9c3871f67d842624240abbd336e919ff19ec22e2392039b6?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd",
      title: "Clubs And Groups",
      description: "Our membership management software provides full automation of membership renewals and payments"
    }
  ];

  return (
    <div className="flex flex-col mt-10 w-full text-center">
      <div className="flex flex-col w-full mb-4">
        <h2 className="self-center text-4xl font-semibold leading-10 text-neutral-600 text-xl sm:text-2xl lg:text-3xl">
          Manage your entire community in a single system
        </h2>
        <p className="mt-2 text-base text-neutral-500 lg:text-lg">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center px-5 sm:flex-col lg:flex-row w-full">
        {features.map(feature => (
          <div key={feature.id} className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-sm min-w-[240px] w-full sm:w-full lg:w-[30%]">
            <div className="flex flex-col items-center text-3xl font-bold leading-9 text-neutral-600">
              <img
                loading="lazy"
                src={feature.icon}
                className="object-contain aspect-[1.16] w-[65px] sm:w-[55px] lg:w-[75px]"
                alt={feature.title}
              />
              <h3 className="mt-4 text-lg sm:text-xl lg:text-2xl">{feature.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-5 text-neutral-500 sm:text-sm lg:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
