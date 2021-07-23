import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import {Button as ZeroButton} from "@meiuca/zero-lib-react";
import {Cardbase as ZeroCardbase} from "@meiuca/zero-lib-react";
import {Typography as ZeroTypography} from "@meiuca/zero-lib-react";
import {TagCategory as ZeroTagCategory} from "@meiuca/zero-lib-react";

import {Button as JotaButton} from "@meiuca/jota-lib-react";
import {Cardbase as JotaCardbase} from "@meiuca/jota-lib-react";
import {Typography as JotaTypography} from "@meiuca/jota-lib-react";
import {TagCategory as JotaTagCategory} from "@meiuca/jota-lib-react";

function App() {

  return (
    <div className="App" style={{margin: '50px'}}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={4} alignItems="center">
          <Grid item xs={4} lg={4} xl={4} className="ProductCard">
            <div  className="text-center">
              <JotaTypography component="subtitle" size="small">Marca 1</JotaTypography>
            </div>
            <JotaCardbase>
              <JotaTagCategory label="Tag Category"></JotaTagCategory>
              <JotaTypography component="heading" size="medium" variant="h2">Heading Medium</JotaTypography>
              <JotaTypography component="paragraph" size="small" variant="h2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam deleniti et in qui nulla minima cupiditate est veritatis laudantium.</JotaTypography>
              <JotaButton label="Botão do Jota" type="primary"></JotaButton>
            </JotaCardbase>
          </Grid>
          <Grid item xs={4} lg={4} xl={4} justifyContent="flex-start" className="ProductCard">
            <div className="text-center">
              <ZeroTypography component="subtitle" size="small">Marca 2</ZeroTypography>
            </div>
            <ZeroCardbase>
              <ZeroTagCategory label="Tag Category"></ZeroTagCategory>
              <ZeroTypography component="heading" size="medium" variant="h2">Heading Medium</ZeroTypography>
              <ZeroTypography component="paragraph" size="small" variant="h2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam deleniti et in qui nulla minima cupiditate est veritatis laudantium.</ZeroTypography>
              <ZeroButton label="Botão do Zero" type="primary"></ZeroButton>
            </ZeroCardbase>
          </Grid>
        </Grid>
      </Container>
      
      
     
    </div>
  );
}

export default App;
