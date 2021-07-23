import './App.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
            <JotaCardbase>
              <JotaTagCategory label="Tag Category"></JotaTagCategory>
              <JotaTypography component="heading" size="medium" variant="h2">Heading Medium</JotaTypography>
              <JotaTypography component="paragraph" size="small" variant="h2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam deleniti et in qui nulla minima cupiditate est veritatis laudantium.</JotaTypography>
              <JotaButton label="Botão do Jota" type="primary"></JotaButton>
            </JotaCardbase>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
