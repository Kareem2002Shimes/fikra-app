import { Fragment } from 'react';
import ImageCard from './ImageCard';

function Overlay() {
  return (
    <Fragment>
      <div
        style={{
          background:
            'linear-gradient(24.51deg, #171727 19.68%, rgba(23, 23, 39, 0.04) 104.32%, rgba(27, 32, 30, 0) 122.97%)',
        }}
        className='absolute top-0 left-0 w-full h-full z-10'
      ></div>
      <div className='absolute top-0 left-0 content-center w-full h-full '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-[35px] h-fit rotate-[8deg]'>
          <div className='top-animation'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <ImageCard
                  key={index}
                  src={`/assets/images/dashboard/singleIdea${index + 1}.jpg`}
                />
              ))}
          </div>
          <div className='bottom-animation'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <ImageCard
                  key={index}
                  src={`/assets/images/dashboard/singleIdea${index + 1}.jpg`}
                />
              ))}
          </div>
          <div className='top-animation'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <ImageCard
                  key={index}
                  src={`/assets/images/dashboard/singleIdea${index + 1}.jpg`}
                />
              ))}
          </div>
          <div className='bottom-animation'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <ImageCard
                  key={index}
                  src={`/assets/images/dashboard/singleIdea${index + 1}.jpg`}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Overlay;
