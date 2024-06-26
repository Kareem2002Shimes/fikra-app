import MainHeading from './MainHeading';
import Image from 'next/image';
import { useRouter } from 'next/router';
function GenerateIdeas({ t }: any) {
  const { locale } = useRouter();

  return (
    <div className='space-betwwen-sections pb-[80px] md:pb-[150px] relative z-10'>
      <div className='home-container grid grid-cols-1 md:grid-cols-2 gap-[70px] place-items-center relative'>
        <div
          className={`absolute ${
            locale === 'ar' ? 'left-0' : 'right-0'
          } bottom-0 md:top-0 w-[720px] max-w-full h-[200px]`}
          style={{
            background: 'rgba(117, 36, 215, 0.41)',
            filter: 'blur(162px)',
          }}
        ></div>
        <div
          className={`text-center ${
            locale === 'ar' ? 'md:text-right' : 'md:text-left'
          }`}
        >
          <MainHeading
            title={t('home:generate_ideas_title')}
            desc={t('home:generate_ideas_desc')}
          />
          <button
            type='button'
            className='coloredBtn  w-[240px] h-[60px] text-white font-[600] rounded-[8px]'
          >
            {t('home:generate_ideas_btn')}
          </button>
        </div>

        <div className='border-[6px] relative w-full h-[459px] md:h-full lg:h-[485px] z-10 border-[rgba(255,255,255,0.06)] rounded-[16px]'>
          <Image
            src='https://www.apartments.com/blog/sites/default/files/styles/x_large/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg.webp?itok=lYDRCGzC'
            alt='generate-img'
            fill={true}
            className='rounded-[8px] object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default GenerateIdeas;
