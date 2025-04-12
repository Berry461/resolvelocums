export const ContentCard = ({ title, description, items, buttonText }) => {
    return (
      <div className="mb-8 mt-10 mx-4 md:mx-[100px]">
        <p className="text-sm text-gray-700 mb-4">
          {description}
        </p>
        
        {title && (
          <h3 className="text-base font-medium text-yellow-600 mb-3">{title}</h3>
        )}
        
        {items && (
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
  
        {buttonText && (
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600 transition-colors">
            {buttonText}
          </button>
        )}
      </div>
    );
  };