import { CliniciansHeroSection } from '@/components/CliniciansHeroSection';
import { ContentCard } from '@/components/ContentCard';
import { ImageTextSection } from '@/components/ImageTextSection';

const Clinicians = () => {
  return (
    <div className="relative">
      <CliniciansHeroSection
        imageSrc="/banner-page.jpg"
        title="/// CLINICIANS"
        description="With Echo Locum Tenens, you will be able to see the country through a variety of clinical and community settings, while gaining valuable experience in the process."
      />

      <ContentCard
        description="Becoming a locum is a great way to supplement your income or make a change in your lifestyle that allows for more freedom and flexibility. The benefits of being an Echo Locum Tenens clinician includes the freedom to choose what assignments you cover."
        title="We Offer"
        items={[
          "Freedom to choose which assignments to cover",
          "Competitive pay with travel and lodging provided for most assignments",
          "Malpractice insurance with tail coverage",
          "Full-service support staff, including credentialing, logistics payroll, and licensing assistance",
          "Access to top recruiters with an average of 5+ years of healthcare staffing experience"
        ]}
        buttonText="Search Jobs"
      />

      <ImageTextSection
        imageSrc="/home-client.jpg"
        title="/// PHYSICIANS"
        content="Whether you are a resident, fellow, or veteran physician, we have opportunities for you. Many residents and fellows opt for locum tenens to get a feel for what practicing hospital medicine is like outside of residency and fellowship. It allows you to 'test drive' a position before entering into a long-term employment agreement. Becoming a locum is also great when looking for a change. It is a great way to explore opportunities in different locations before making long-term commitments. Not quite ready to retire? Locum tenens offers experienced physicians a chance to work when and where they desire."
      />

      <ImageTextSection
        imageSrc="/client-home.jpg"
        title="/// ADVANCE PRACTICE PROVIDERS"
        content="As a locum tenens nurse practitioner, physician assistant, or CRNA with Echo Locums, we make it easy for you to choose where you want to work and when you want to work. We bring expertise and support for all credentialing or licensing concerns you may have. Enjoy the freedom, flexibility, and income that comes with locum tenens job opportunities."
        imagePosition="right"
      />

      <ImageTextSection
        imageSrc="/home-client.jpg"
        title="/// CONNECT WITH A RECRUITER"
        content="Do you want to learn more about what Echo Locum Tenens can offer you? Contact us here, and a recruiter will connect with you and get all your questions answered."
      />
    </div>
  );
};

export default Clinicians;