import Image from 'next/image';

export const ImageTextSection = ({ 
  title, 
  content, 
  imageSrc, 
  imagePosition = 'left', 
  imageSize = 'md' 
}) => {
  const imageClasses = {
    sm: 'w-48 h-48',
    md: 'w-48 h-48 lg:w-56 lg:h-56',
    lg: 'w-56 h-56 lg:w-64 lg:h-64'
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
        imagePosition === 'right' ? 'md:flex-row-reverse' : ''
      }`}>
        {/* Avatar Image */}
        <div className={`hidden md:block ${imagePosition === 'left' ? 'w-1/3' : 'w-1/2 justify-end'}`}>
          <div className={`relative ${imageClasses[imageSize]} rounded-full overflow-hidden border-4 border-yellow-100 shadow-lg`}>
            <Image
              src={imageSrc}
              alt="Healthcare Professional"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={`w-full ${imagePosition === 'left' ? 'md:w-2/3' : 'md:w-1/2'}`}>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="space-y-4 text-gray-600 mb-6 text-sm">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};