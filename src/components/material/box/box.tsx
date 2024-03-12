import * as React from 'react';
import { Box } from '@mui/material';
import styles from './styles.module.scss';

const BoxSystemProps = ({ data }: { data: React.ReactNode }) => {
  return (
    <>
      <Box className={styles.box}>{data}</Box>
    </>
  );
};

export default BoxSystemProps;
