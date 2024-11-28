export default function NewsletterSection() {
  return (
    <div className="flex flex-col min-w-[240px] w-[255px] max-md:w-full">
      {/* Title */}
      <div className="text-xl font-semibold leading-snug text-white">
        Stay up to date
      </div>

      {/* Form */}
      <form
        className="flex flex-col mt-6 w-full text-sm leading-none text-gray-300 rounded-none max-w-[255px] max-md:max-w-full"
        aria-label="Newsletter signup form"
      >
        <div className="flex gap-3 justify-between items-center px-3 py-2.5 rounded-lg bg-white bg-opacity-20 max-md:gap-2">
          {/* Email Input */}
          <label htmlFor="emailInput" className="sr-only">
            Your email address
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Your email address"
            className="bg-transparent outline-none text-slate-100 placeholder-gray-400 w-full"
            aria-label="Your email address"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
            aria-label="Submit email"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/afe336cc16b84f5e88f05eaaebfef4fd/2ae9e796cb2044421da0261dd19b191c622873089db3a07d846a9a6307afb2e2?apiKey=afe336cc16b84f5e88f05eaaebfef4fd&"
              alt="Arrow icon"
              className="w-[18px] h-[18px]"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
