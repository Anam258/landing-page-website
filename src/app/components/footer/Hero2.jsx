export default function Hero2() {
  return (
    <div className="flex flex-col items-center py-8 w-full text-center bg-slate-100 max-md:px-4">
      {/* Heading */}
      <h1 className="text-6xl font-semibold text-gray-800 leading-[76px] w-[887px] max-md:w-full max-md:text-4xl max-md:leading-[52px]">
        Pellentesque suscipit fringilla libero eu.
      </h1>

      {/* Button */}
      <button
        className="flex gap-2 justify-center items-center px-8 py-3.5 mt-8 text-base font-medium text-white bg-green-500 rounded-md shadow-lg transition-transform transform hover:scale-105 active:scale-95 max-md:px-5 max-md:py-3"
        tabIndex="0"
      >
        <span className="self-stretch my-auto">Get a Demo</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/afe336cc16b84f5e88f05eaaebfef4fd/af25299eb313833aefbb4fa75dd899536287509a543373756529696ce33b4f30?apiKey=afe336cc16b84f5e88f05eaaebfef4fd&"
          alt="Arrow Icon"
          className="object-contain w-4 h-4"
        />
      </button>
    </div>
  );
}
