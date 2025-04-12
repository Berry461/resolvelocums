import HeroSection from '@/components/HeroSection';
import WorkWithEcho from '@/components/WorkWithEcho';
import StaffingPartners from '@/components/StaffingPartners';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      
      <WorkWithEcho 
        imageSrc="/doctor-smart.jpg"
        altText="Healthcare professional"
        title="/// WORK WITH ECHO"
        description="Our clinicians show dedication to the organization's core values of quality, service, teamwork, innovation, and integrity. We take great pride in assisting you every step of the way through the locum tenens process and matching you with an opportunity that best suits your needs."
        showButton={true}
      />
      
      <StaffingPartners />
      
      <TestimonialSection
        imageSrc="/home-client.jpg"
        altText="Healthcare Professional"
        title="/// JOIN THE EXCEPTIONAL TEAM"
        quote="I started working with Echo Locums in late 2021. My experience has been exceptional, and I was lucky to have an amazing team to work with. I'm so grateful for the opportunity."
        author="Saed Alnaimat, MD"
      />
      
      <WorkWithEcho 
        imageSrc="/client-home.jpg"
        altText="Client testimonial"
        title="/// FEEL THE PRIDE IN THE CARE YOU GIVE"
        testimonial={{
          quote: "I sure love the job and the team. Working for Echo Locums has been the pinnacle of my career. The staff has been so helpful in getting credentialing and scheduling accomplished... I feel appreciated.",
          author: "Vickie Carll, NP"
        }}
        reverse={true}
      />
    </div>
  );
}