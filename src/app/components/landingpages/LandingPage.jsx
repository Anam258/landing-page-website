import * as React from "react";
import { StatCard } from "../StatCard";
import { BlogCard } from "../BlogCard";

const stats = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/37c8298a66a30f4e4be8962b0a53b1fd8e9195186eec63cf15777cde913830d6?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd", value: "2,245,341", label: "Members" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d8c74887848540076444849dd4ea2f7bf6ec09b2f783b01e72a8be7e62ef0b4?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd", value: "46,328", label: "Clubs" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b4ed6f6101ec71213f980ad4aa121f8c3d3097e5ae83780579749854a2b13c1?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd", value: "828,867", label: "Event Bookings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/722fbd87c1b2ca1f1b9dfcadf5d5e4bcfb0265069581864252df444bb8a7f7d8?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd", value: "1,926,436", label: "Payments" }
];

const blogs = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed8b524278bf8d65350a0c26f8f1c751e02dd2eec60db726a4d70463767c55b3?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd",
    title: "Creating Streamlined Safeguarding Processes with OneRen"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d2766a82074161b6e30e90fd715d9be7c4ba8cd8be58a1b200fb8a679c66527?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd",
    title: "What are your safeguarding responsibilities and how can you manage them?"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d19923d07ad138a7d6ff080b1236332141252b744523dbc6c2e6d9febba01c86?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd",
    title: "Revamping the Membership Model with Triathlon Australia"
  }
];

export function LandingPage() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex overflow-x-auto items-start w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center px-36 w-[1440px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/936bd83c5d7f30e3169c6fd6e3fa3bbf5003c8461b26f400b4930e3e0575f84a?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd"
            alt="Company illustration"
            className="object-contain self-stretch my-auto aspect-[1.02] min-w-[240px] w-[442px] max-md:max-w-full"
          />
          <div className="flex flex-col items-start self-stretch my-auto min-w-[240px] w-[661px] max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[601px]">
              <div className="text-4xl font-semibold leading-10 text-neutral-600 max-md:max-w-full">
                The unseen of spending three years at Pixelgrade
              </div>
              <div className="mt-4 text-sm leading-5 text-neutral-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </div>
            </div>
            <button className="gap-2.5 self-stretch px-8 py-3.5 mt-8 text-base font-medium text-center text-white bg-green-500 rounded max-md:px-5">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-between items-center px-36 py-16 mt-12 w-full bg-slate-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[540px] max-md:max-w-full">
          <div className="overflow-hidden max-w-full text-4xl font-semibold leading-10 text-green-500 w-[408px]">
            Helping a local{" "}
            <span className="text-green-500">business reinvent itself</span>
          </div>
          <div className="mt-2 text-base text-zinc-900 max-md:max-w-full">
            We reached here with our hard work and dedication
          </div>
        </div>
        <div className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 items-center whitespace-nowrap max-md:max-w-full">
            {stats.slice(0, 2).map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          <div className="flex overflow-hidden flex-wrap gap-8 items-center mt-10 max-md:max-w-full">
            {stats.slice(2, 4).map((stat, index) => (
              <StatCard key={index + 2} {...stat} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center px-36 w-[1440px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9636291714a7c118ab36ec5ac1d3041f57555ad6e88c735e4a3101d79f2d236b?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd"
            alt="Site footer design illustration"
            className="object-contain self-stretch my-auto aspect-[1.02] min-w-[240px] w-[442px] max-md:max-w-full"
          />
          <div className="flex flex-col items-start self-stretch my-auto min-w-[240px] w-[661px] max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[601px]">
              <div className="text-4xl font-semibold leading-10 text-neutral-600 max-md:max-w-full">
                How to design your site footer like we did
              </div>
              <div className="mt-4 text-sm leading-5 text-neutral-500 max-md:max-w-full">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </div>
            </div>
            <button className="gap-2.5 self-stretch px-8 py-3.5 mt-8 text-base font-medium text-center text-white bg-green-500 rounded max-md:px-5">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 items-center px-36 py-8 mt-12 w-full bg-slate-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b11b96c663c2dd605272b5cab419b865364e63fdc082a82fc324ecfc3c895c22?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd"
          alt="Tim Smith profile"
          className="object-contain self-stretch my-auto shadow-lg aspect-square min-w-[240px] w-[326px]"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-base font-medium leading-6 text-neutral-500 max-md:max-w-full">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </div>
            <div className="flex flex-col mt-4 w-full max-md:max-w-full">
              <div className="text-xl font-semibold leading-snug text-green-500 max-md:max-w-full">
                Tim Smith
              </div>
              <div className="mt-2 text-base text-gray-400 max-md:max-w-full">
                British Dragon Boat Racing Association
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 items-center mt-8 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  loading="lazy"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
                />
              ))}
            </div>
            <button className="flex flex-1 shrink gap-2 items-center self-stretch py-2 pl-2 my-auto text-xl font-semibold leading-snug text-green-500 basis-0">
              <div className="self-stretch my-auto w-[188px]">
                Meet all customers
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/861f6878c94bebcef2da13bcf9695144d5846429194b4116942ed22111503f9b?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full text-center w-[1110px]">
          <div className="text-4xl font-semibold leading-none text-neutral-600 max-md:max-w-full">
            Caring is the new marketing
          </div>
          <div className="self-center mt-2 text-base leading-6 text-neutral-500 w-[628px] max-md:max-w-full">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-between items-center px-36 mt-4 w-full text-xl font-semibold max-md:px-5 max-md:max-w-full">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}


