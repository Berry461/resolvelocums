'use client';
import Image from 'next/image';

export default function StaffingPartners() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12">
      <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-xl overflow-hidden w-full mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="hidden md:flex w-1/3 h-full min-h-[300px] relative justify-center items-center p-6">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/doctor-homeimage.jpg"
                alt="Medical Professional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5">
              /// STRATEGIC STAFFING PARTNERS
            </h2>
            <div className="space-y-4 text-gray-600 mb-7 text-sm">
              <p className="leading-relaxed">
                We don&apos;t want to be another agency on your list, but a true strategic partner that will go the extra mile in the time of need for your facility, community and, most importantly, the patients and families you serve.
              </p>
              <p className="leading-relaxed">
                We want to become an extension of your service lines and help you focus on providing high-quality patient care.
              </p>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-8 rounded-lg transition-all duration-200 text-sm shadow-md">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}