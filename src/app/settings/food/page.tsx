import BoxSystemProps from '@/components/material/box/box';

type FoodPageTypes = typeof BoxSystemProps;

const FoodPage: FoodPageTypes = () => {
  return (
    <BoxSystemProps
      data={
        <>
          <p>food</p>
          <p>page</p>
        </>
      }
    />
  );
};

export default FoodPage;
