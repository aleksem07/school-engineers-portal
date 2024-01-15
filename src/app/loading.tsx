'use client';
import { RevolvingDot } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#000000"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
