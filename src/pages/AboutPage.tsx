import PageBanner from '@/components/shared/PageBanner';
import VisionSection from '@/components/about/VisionSection';
import MissionSection from '@/components/about/MissionSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="Về chúng tôi"
        title="Giới thiệu ILE"
        subtitle="Hành trình kiên định với sứ mệnh mang tiếng Anh đến gần hơn với trẻ em Việt Nam."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167435/kindy_slide2.webp"
        imageAlt="Học viên ILE"
        fullBleed={true}
      />
      <VisionSection />
      <MissionSection />
      <FinalCTA />
    </>
  );
}
