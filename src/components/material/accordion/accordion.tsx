import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

type AccordionUsageProps = {
  title: string;
  data: React.ReactNode;
  isOpen?: boolean;
};

export default function AccordionUsage({
  title,
  data,
  isOpen = false,
}: AccordionUsageProps) {
  return (
    <div className="mb-2">
      <Accordion defaultExpanded={isOpen}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2 className="p-1 mb-0">{title}</h2>
        </AccordionSummary>
        <AccordionDetails>{data}</AccordionDetails>
      </Accordion>
    </div>
  );
}
