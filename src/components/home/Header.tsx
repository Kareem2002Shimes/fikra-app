import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Fragment } from 'react';
import LanguageSwitcher from '../LanguageSwitcher';

function Header({ t, user }: any) {
  return (
    <header className='border-b-[1px] h-[65px] border-input-border relative z-40'>
      <div className='home-container py-[8px] flex items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/assets/images/logo.svg'
            width={28}
            height={28}
            alt='logo-img'
            className='mx-[8px]'
          />
          <Image
            src='/assets/images/logo-text.svg'
            width={45}
            height={45}
            alt='logo-img'
          />
        </Link>
        <div className='flex items-center lang-box'>
          <LanguageSwitcher />
          {user ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className='text-neutral-50 text-md font-[500] mr-[8px] w-fit sm:w-[130px] h-[40px] content-center transition-all duration-200 ease-in-out hover:text-accent-color'
            >
              {t('home:logout_btn')}
            </button>
          ) : (
            <Fragment>
              <Link
                href='/auth/login'
                className='text-neutral-50 text-md font-[500] mx-[8px] w-fit sm:w-[130px] h-[40px] content-center transition-all duration-200 ease-in-out hover:text-accent-color'
              >
                {t('home:login_btn')}
              </Link>
              <Link
                href='/auth/signup'
                className='coloredBtn-home-header text-md font-[500] hidden sm:flex w-[195px] h-[40px] content-center text-neutral-50 rounded-[8px]'
              >
                {t('home:create_account')}
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
