import { useState } from 'react';
import Image from 'next/image';
import LogoAnimation from '@/src/components/home/LogoAnimation';
import { toast } from 'react-hot-toast';
import { useAppSelector } from '@/src/redux/app/store';

function DefaultView({ t, setShowControls }: any) {
  const [btns, setBtns] = useState([
    {
      name: t('dashboard:dashboard_home_default_determinants'),
      icon: 'danger',
      text: t('dashboard:dashboard_home_default_determinants_desc'),
    },
    {
      name: t('dashboard:dashboard_home_default_examples'),
      icon: 'sun',
      text: t('dashboard:dashboard_home_default_examples_desc'),
    },
    {
      name: t('dashboard:dashboard_home_default_capabilities'),
      icon: 'flash',
      text: t('dashboard:dashboard_home_default_capabilities_desc'),
    },
  ]);
  const settings = useAppSelector((state) => state.settings);
  const handleClick = () => {
    window.innerWidth < 1200 &&
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setShowControls(true);
    if (
      !settings.selectedChooseStyle &&
      !settings.selectedTypeOfRoom &&
      !settings.selectedChooseStyle &&
      !settings.selectedMode &&
      !settings.selectedResolution
    ) {
      toast('Choose Your Settings Now!', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };
  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] '>
        {btns.map((btn) => (
          <div key={btn.name} className='content-center flex-col '>
            <button className='content-center w-full h-[64px] mb-[15px] bg-[rgba(255,255,255,0.04)] rounded-[8px]'>
              <Image
                src={`/assets/images/dashboard/icons/home/${btn.icon}.svg`}
                alt='btn-icon'
                width={24}
                height={24}
              />
              <span className='font-[600] text-white text-md mx-[8px]'>
                {btn.name}
              </span>
            </button>
            <span className='text-sm text-center font-[500] text-neutral-300'>
              {btn.text}
            </span>
          </div>
        ))}
      </div>
      <div className='w-[280px] h-[280px] relative mx-auto'>
        <LogoAnimation />
      </div>
      <button
        type='button'
        onClick={handleClick}
        className='coloredBtn mx-auto block w-[293.94px]  max-w-full h-[43.29px] text-md rounded-[8px] text-white font-[500]'
      >
        {t('dashboard:select_desgin_btn')}
      </button>
    </div>
  );
}

export default DefaultView;
