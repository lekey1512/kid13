import { useState } from 'react';
import { Sparkles, Plus, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Con em chưa biết gì về tiếng Anh, học ở ILE có theo kịp không?',
    answer:
      'Chương trình ILE được thiết kế theo từng cấp độ, không yêu cầu nền tảng trước. Giáo viên sẽ đánh giá và xếp lớp phù hợp với năng lực hiện tại của con.',
  },
  {
    question: 'ILE có giáo viên nước ngoài không? Tỷ lệ dạy như thế nào?',
    answer:
      'Có. Lớp học kết hợp giáo viên bản ngữ và giáo viên Việt Nam giàu kinh nghiệm, đảm bảo con vừa luyện phát âm chuẩn, vừa được hỗ trợ sát sao bằng tiếng Việt khi cần.',
  },
  {
    question: 'Một lớp học có bao nhiêu học sinh?',
    answer:
      'Lớp học được duy trì sĩ số nhỏ để giáo viên có thể theo sát và tương tác với từng con, thay vì dạy đại trà.',
  },
  {
    question: 'Làm sao để phụ huynh biết con đang tiến bộ ra sao?',
    answer:
      'ILE gửi báo cáo tiến độ học tập định kỳ, chi tiết theo từng kỹ năng và cột mốc, giúp phụ huynh theo dõi rõ ràng quá trình học của con.',
  },
  {
    question: 'Lộ trình "6-7-7" là gì và có phù hợp với mọi bé không?',
    answer:
      'Đây là lộ trình dài hạn giúp bé bắt đầu từ 6 tuổi đạt IELTS 7.0+ sau 7 năm. Lộ trình có thể linh hoạt điều chỉnh tuỳ theo độ tuổi bắt đầu và tốc độ học của từng con.',
  },
  {
    question:
      'Con học nhiều chương trình cùng lúc (ở trường + ở ILE) có bị quá tải không?',
    answer:
      'Chương trình ILE được xây dựng để bổ trợ, không trùng lặp với kiến thức ở trường — tập trung vào giao tiếp, tư duy và sự tự tin, giúp con học nhẹ nhàng mà hiệu quả.',
  },
  {
    question: 'Đăng ký học thử có mất phí không, và học thử như thế nào?',
    answer:
      'Học thử hoàn toàn miễn phí. Con sẽ được tham gia một buổi học thực tế để cả phụ huynh và con trải nghiệm trước khi quyết định.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 h-[300px] w-[300px] rounded-[54%_46%_37%_63%_/_48%_55%_45%_52%] bg-sky-200/20 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-[280px] w-[280px] rounded-[46%_54%_58%_42%_/_54%_46%_54%_46%] bg-blush-200/20 blur-2xl"
      />

      <div className="container-page relative">
        {/* Section header */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-200/70 px-4 py-1.5 font-body text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              Giải đáp thắc mắc
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Câu hỏi{' '}
              <span className="relative whitespace-nowrap text-sky-600">
                thường gặp
                <svg
                  aria-hidden
                  viewBox="0 0 180 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-blush-400"
                >
                  <path
                    d="M2 8 C 50 2, 130 2, 178 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <p className="max-w-sm font-body text-base leading-relaxed text-ink-600 lg:text-right">
            Những điều phụ huynh thường quan tâm khi tìm hiểu về ILE — nếu vẫn
            còn thắc mắc, đừng ngần ngại liên hệ với chúng tôi.
          </p>
        </div>

        {/* FAQ accordion list */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
          {faqItems.map((item, i) => (
            <FAQRow
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* CTA — ghost-style link */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://zalo.me/0398519485"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-body text-base font-bold text-ink-800 underline decoration-blush-400 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sky-700"
          >
            Vẫn còn thắc mắc? Liên hệ với chúng tôi
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </a>
        </div>
      </div>

      {/* Soft wave divider */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-12 w-full text-sky-200 sm:h-16"
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 45 L 1440 80 L 0 80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={[
        'overflow-hidden shadow-soft ring-1 ring-ink-300/20 transition-all duration-300 ease-smooth',
        isOpen ? 'bg-cream-50 shadow-card' : 'bg-cream-50/60 hover:bg-cream-200/50',
      ].join(' ')}
      style={{
        borderRadius: isOpen
          ? '24px 28px 24px 28px'
          : '20px 24px 20px 24px',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left lg:px-6 lg:py-5"
      >
        <span className="font-heading text-base font-bold leading-snug text-ink-900 lg:text-lg">
          {item.question}
        </span>
        <span
          className={[
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-smooth',
            isOpen
              ? 'rotate-45 bg-blush-300 text-ink-900'
              : 'bg-sky-200/70 text-sky-700',
          ].join(' ')}
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>

      <div
        className="grid transition-all duration-300 ease-smooth"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
        }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 font-body text-sm leading-relaxed text-ink-600 lg:px-6 lg:pb-6 lg:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
