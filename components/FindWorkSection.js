import Image from 'next/image';

export default function FindWorkSection() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-3xl font-bold mb-4 text-black">Find Freelance Jobs that you’ll actually love</h2>
        <p className="text-gray-600 mb-8">Join a network of over 40,000 freelancers that are finding work they love and making a great living</p>

        {/* CTA Button */}
        <div className="mb-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none">Find out more</button>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Graphic Design Card */}
          <div className="relative rounded-2xl overflow-hidden bg-black h-60">
            <div className="absolute inset-0 opacity-70">
              <Image
                src="/assets/graphic-design-bg.jpg" // Replace with your image path
                alt="Graphic Design"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Graphic Design</h3>
          </div>

          {/* UI Design Card */}
          <div className="relative rounded-2xl overflow-hidden bg-black h-60">
            <div className="absolute inset-0 opacity-70">
              <Image
                src="/assets/ui-design-bg.jpg" // Replace with your image path
                alt="UI Design"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">UI Design</h3>
          </div>

          {/* UX Design Card */}
          <div className="relative rounded-2xl overflow-hidden bg-black h-60">
            <div className="absolute inset-0 opacity-70">
              <Image
                src="/assets/ux-design-bg.jpg" // Replace with your image path
                alt="UX Design"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">UX Design</h3>
          </div>

          {/* SEO Card */}
          <div className="relative rounded-2xl overflow-hidden bg-black h-60">
            <div className="absolute inset-0 opacity-70">
              <Image
                src="/assets/seo-bg.jpg" // Replace with your image path
                alt="SEO"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">SEO</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
