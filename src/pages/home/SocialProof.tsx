
export const SocialProof = () => {
  return (
    <section className="py-12 border-y border-plum-800 bg-plum-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-80">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-plum-900 bg-plum-${700 - i * 100} flex items-center justify-center text-xs font-medium`}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-gold-200">
              <span className="text-gold-50 font-bold">12,000+</span> couples
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-gold-200">
            <div className="flex text-gold-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9 / 5 rating</span>
          </div>

          <div className="text-sm font-medium text-plum-300">
            Featured in <span className="text-gold-200 ml-2">VOGUE</span> <span className="text-gold-200 ml-2">GQ</span>
          </div>
        </div>
      </div>
    </section>
  );
};
