import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MuiExpandMoreIcon from '@mui/icons-material/ExpandMore';

// TODO add a theme or palette

export function SimpleAccordion() {
  return (
    <div>
      <MuiAccordion
        TransitionProps={{
          timeout: 750,
        }}
      >
        <MuiAccordionSummary
          expandIcon={<MuiExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </MuiAccordionDetails>
      </MuiAccordion>
    </div>
  );
}
