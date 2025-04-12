import Image from 'next/image';

const LeadershipAvatars = () => {
  const teamMembers = [
    {
      name: "Roxy Hollingsworth",
      title: "Director of Clinical Recruitment",
      image: "/team/about-page.jpg"
    },
    {
      name: "Ashley Rogers",
      title: "Director of Clinical Recruitment",
      image: "/team/page-about.jpg"
    },
    {
      name: "Manny Luna",
      title: "Director of Clinical Recruitment",
      image: "/team/passport-about.jpg"
    }
  ];

  return (
    <section className="my-8 px-4">
      <h1 className="text-lg font-medium mb-6">//// MEET OUR LEADERSHIP TEAM</h1>
      
      {/* Mobile: Column */}
      <div className="md:hidden flex flex-col space-y-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex items-center space-x-4">
            <div className="relative h-20 w-20 rounded-full overflow-hidden border-3 border-yellow-500">
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="object-cover"
                style={{ 
                  objectPosition: 'center 25%',
                  transform: 'scale(1.3) translateY(8px)'
                }}
              />
            </div>
            <div>
              <h3 className="text-xs font-medium">{member.name}</h3>
              <p className="text-xs text-gray-600">{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Left-aligned Row */}
      <div className="hidden md:flex space-x-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div className="relative h-24 w-24 rounded-full overflow-hidden border-3 border-yellow-500 mb-2">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="object-cover"
                style={{ 
                  objectPosition: 'center 25%',
                  transform: 'scale(1.3) translateY(8px)'
                }}
              />
            </div>
            <h3 className="text-xs font-medium mt-1">{member.name}</h3>
            <p className="text-xs text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipAvatars;