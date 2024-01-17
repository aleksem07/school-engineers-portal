import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

type AccordionUsageProps = {
  title: string;
  data: React.ReactNode;
};

export default function AccordionUsage({ title, data }: AccordionUsageProps) {
  return (
    <div className='mb-2'>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>{data}</AccordionDetails>
      </Accordion>
    </div>
  );
}
