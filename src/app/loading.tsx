'use client';
import { BallTriangle } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="black"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
