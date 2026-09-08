import PageBanner from '@/components/shared/PageBanner';
import CourseOverview from '@/components/programs/teens/CourseOverview';
import LearningOutcomes from '@/components/programs/teens/LearningOutcomes';
import TeachingMethod from '@/components/programs/teens/TeachingMethod';
import LearningRoadmap from '@/components/programs/teens/LearningRoadmap';
import MidPageCTA from '@/components/programs/teens/MidPageCTA';
import TeensTestimonials from '@/components/programs/teens/TeensTestimonials';
import TeacherPreview from '@/components/programs/teens/TeacherPreview';
import LearningSpace from '@/components/programs/teens/LearningSpace';
import FinalCTA from '@/components/home/FinalCTA';

export default function TeensProgramPage() {
  return (
    <>
      <PageBanner
        badge="11-15 tuổi"
        title="Tiếng Anh Thiếu niên"
        subtitle="Tăng tốc tiếng Anh - Chuẩn bị hành trang cho những bước nhảy vọt."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788841058/hoc-sinh_4.jpg"
        imageAlt="Học sinh 11-15 tuổi học tiếng Anh tại ILE"
        fullBleed={true}
      />
      <CourseOverview />
      <LearningOutcomes />
      <TeachingMethod />
      <LearningRoadmap />
      <MidPageCTA />
      <TeensTestimonials />
      <TeacherPreview />
      <LearningSpace />
      <FinalCTA />
    </>
  );
}
