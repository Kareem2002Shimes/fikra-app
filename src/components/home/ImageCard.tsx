import Image from 'next/image';

function ImageCard() {
  return (
    <div className='relative container-animation w-full h-[325px] dashed-border mb-[35px] last-of-type:mb-0'>
      <Image
        src='/assets/images/dashboard/singleIdea3.jpg'
        alt='img'
        fill={true}
        className='p-[15px] object-cover'
      />
    </div>
  );
}

export default ImageCard;
