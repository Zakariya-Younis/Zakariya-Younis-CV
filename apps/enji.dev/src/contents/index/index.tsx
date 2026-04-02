import clsx from 'clsx';

import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/Icons';

import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import Quote from '@/contents/index/Quote';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-amber-300 p-3.5',
                'dark:bg-amber-900'
              )}
            >
              <SparklesIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Experience"
          desc="Training — MTCIT, Oman (Aug 2024). Awards: Python Bytes (3rd), Al‑Dhahirah Hackathon (Best Idea)."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-pink-300 p-3.5',
                'dark:bg-pink-900'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Skills"
          desc="Python, JavaScript/TypeScript, MERN, Flutter, Firebase, MongoDB, SQL."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-sky-300 p-3.5',
                'dark:bg-sky-900'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Projects"
          desc="Student Grade Prediction (IEEE & Journal), Better Health System, Throw Your Tweet."
        />
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('-mt-12 mb-12', 'md:mb-24 md:mt-0')}>
        <QuoteSection />
      </div>
      <div className={clsx('hidden', 'lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>
      {/* sections removed as requested */}
    </>
  );
}

export default IndexContents;
