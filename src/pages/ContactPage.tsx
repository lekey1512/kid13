import PageBanner from '@/components/shared/PageBanner';
import ContactDetails from '@/components/contact/ContactDetails';
import FinalCTA from '@/components/home/FinalCTA';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        badge="Ghé thăm ILE"
        title="Liên hệ"
        subtitle="Đội ngũ ILE luôn sẵn sàng chào đón phụ huynh và các con."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788841059/hoat-dong_3.jpg"
        imageAlt="Học viên và giáo viên ILE"
        fullBleed={true}
      />
      <ContactDetails />
      <FinalCTA ctaText="LIÊN HỆ NGAY" />
    </>
  );
}
