import Image from 'next/image';
import { useRouter } from 'next/router';
import Select, { components } from 'react-select';

const KSAIcon = (
  <div className='mx-[8px]'>
    <Image
      src='/assets/images/home/KSA.svg'
      alt='arrow-icon'
      width={24}
      height={24}
    />
  </div>
);
const AmericanIcon = (
  <div className='mx-[8px] '>
    <Image
      src='/assets/images/home/en-icon.svg'
      alt='arrow-icon'
      width={24}
      height={24}
      className='border-[2px] border-whit rounded-[50%]'
    />
  </div>
);
const customStyles = {
  option: (defaultStyles: any, state: any) => ({
    ...defaultStyles,
    color: '#F5F6FF',
    backgroundColor: state.isSelected && '#0473FB',
    '&:hover': {
      backgroundColor: '#0473FB',
    },
    fontSize: '14px',
    lineHeight: '20px',
    margin: '10px 0',
    cursor: 'pointer',
  }),

  control: (defaultStyles: any) => ({
    ...defaultStyles,
    backgroundColor: 'transparent',
    height: '48px',
    border: 'none',
    boxShadow: 'none',
    fontSize: '14px',
    lineHeight: '16px',
    cursor: 'pointer',
    width: 'fit-content',
  }),
  singleValue: (defaultStyles: any) => ({
    ...defaultStyles,
    color: '#0473FB',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  }),
  dropdownIndicator: (defaultStyles: any) => ({
    ...defaultStyles,
    color: '#F5F6FF',
    '&:hover': {
      color: '#0473FB',
    },
  }),

  menu: (defaultStyles: any) => ({
    ...defaultStyles,
    background: '#1F2038',
    zIndex: '9999',
  }),
};
const ValueContainer = ({ children, ...props }: any) => {
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        <div className='flex items-center '>
          {props
            .getValue()
            .map((op: any) =>
              op.value === 'ar' ? (
                <div key={op.value}>{KSAIcon}</div>
              ) : (
                op.value === 'en' && <div key={op.value}>{AmericanIcon}</div>
              )
            )}
          {children}
        </div>
      </components.ValueContainer>
    )
  );
};
const options = [
  { value: 'en', label: 'En' },
  { value: 'ar', label: 'عربي' },
  { value: 'ger', label: 'Ger' },
];

const LanguageSwitcher = () => {
  const { push, locale, pathname } = useRouter();
  const changeLanguage = (selected: any) => {
    const localeValue = selected.value;
    push(pathname, pathname, { locale: localeValue });
  };

  return (
    <Select
      className={`${
        locale === 'ar' && 'md:basis-[auto] basis-[50%]'
      } flex justify-center`}
      options={options}
      isClearable={false}
      styles={customStyles}
      isSearchable={false}
      onChange={changeLanguage}
      instanceId={options[0].value as string}
      components={{
        IndicatorSeparator: () => null,
        ValueContainer,
        Placeholder: () => null,
      }}
      defaultValue={options.find((option) => option.value === locale)}
    />
  );
};

export default LanguageSwitcher;
