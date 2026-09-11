import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-20 lg:py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.15] text-[#0F172A] tracking-tight">
            Build Your Ideal <br className="hidden lg:block" />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <button className="bg-brand-gradient hover:opacity-90 transition-opacity text-white font-medium px-8 py-3 rounded-lg shadow-sm sm:w-auto w-full">
              Explore Technologies
            </button>
            <button className="border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium px-8 py-3 rounded-lg transition-colors sm:w-auto w-full">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Development Stack Banner"
            className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
