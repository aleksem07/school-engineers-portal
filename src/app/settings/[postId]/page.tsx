import React from 'react';

type Props = {
  params: {
    postId: React.ReactNode;
  };
};

export default function Post({ params }: Props) {
  return <p>{params.postId}</p>;
}
