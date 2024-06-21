import { Dispatch, SetStateAction } from 'react';
import ReactPlayer from 'react-player';

function Popup({ setPopup }: { setPopup: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className='bg-[rgba(20,20,20,0.76)] content-center absolute top-0 left-0 w-full h-full z-50'>
      <div className='bg-neutral-800 w-[536px] relative h-fit content-center justify-around flex-col'>
        <button
          onClick={() => {
            setPopup(false);
            document.body.style.overflow = 'auto';
          }}
          className='border-[1px] absolute top-4 right-4 z-20 border-neutral-600 hover:bg-accent-color rounded-[8px] w-[40px] h-[40px] text-white'
        >
          x
        </button>
        <ReactPlayer
          width='100%'
          height='400px'
          url='/assets/videos/intro.mp4'
          controls
        />
      </div>
    </div>
  );
}

export default Popup;
