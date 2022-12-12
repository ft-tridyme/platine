import React, { useState } from 'react';
import {  
  FormControl,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Tabs,
  Tab,
  Box,
  
} from '@material-ui/core';
import CardElem from '../../Components/CardElem/CardElem';
import InputElem from '../../Components/InputElem/InputElem';
import ChartElem from '../../Components/ChartElem/ChartElem';
import calculations from './calculations';


function PlatineAnalysis() {
  const [values, setValues] = useState({
    d1: 1280,         // Inputs: Diamètre extérieur du Poteau
    e1: 6,         // Inputs: épaisseur du poteau
    d2: 1490,         // Inputs: diamètre extérieur de la platine
    d3: 1380,      // Inputs: Diamètre de percage de la platine
    e2: 40,      // Inputs: Épaisseur de la platine
    n: 24,         // Inputs: Nombre de tijes
    zc: 0.637,      // Outputs: ZC
    zt: 0.69,      // Outputs: ZT
    fck: 25,         // Inputs: Résistance du Béton à la compression
    fyp: 235,      // Inputs: limite élastique de la platine
    FtRd: 226,      // Inputs: Résistance ultime à la traction du boulon
    NEd: -58.5,         // Inputs: Effort Axial de calcul
    MEd: -1002,      // Inputs: Moment de calcul
    eN: 17.13,      // Inputs: Excentrement de charge
    combinaison: "combinaison d",      // Inputs: Choix de la combinaison
    z: 1.327,      // Inputs: Bras de Levier
    Mr: -830.5,         // Inputs: Moment résistant
    verification: "ok",      // Inputs: vérification
    fs: 1.118,      // Inputs: Facteur de sécurité
    m: 50,         
    ex: 55,         
    w: 57.5,         
    leffcp: 214.57,      
    leffnc: 57.5,      
    leff1: 57.5,
    leff2: 57.5,
    mplRd: 94,
    Mpl1Rd: 5405,
    Mpl2Rd: 5405,
    FtRd: 226,
    FTRdmode1: 432.4,
    FTRdmode2: 2944.09,
    FTRdmode3: 5424,
    FTRd: 432.4,
    FcRd: 877.97,
    sc: 52678
  });


  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const handleChangeValues = (prop) => (event) => {
    const newValues = { ...values, [prop]: Number(event.target.value) };

    const calculatedValues = calculations.outputs(newValues);

    const updatedValues = {
      ...newValues,
      ...calculatedValues
    }
    setValues(updatedValues);
  };



  return (
    <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
      <CardElem>
        <Grid item md={12}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h2">Verification of Anchor plate under Normal Effort and Moment</Typography>
            <Typography variant="h5" component="h3">According to: Eurocode 3, partie 1-8</Typography>
            <Typography variant="h5" component="h3">National annexe: NF EN 1993-1-8: 2005</Typography>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          </Grid>
        </Grid>
      </CardElem>
      <Grid item md={12}>
          <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth"
            TabIndicatorProps={{ style: { background: 'blue' } }}>
            <Tab label="Geometry" />
            <Tab label="Material" />
            <Tab label="Results" />
            <Tab label="Calculation details" />
          </Tabs>
      </Grid>
      <Grid item md={12}>
        {tabIndex === 0 && (
          <Grid item md={12}>
            <CardElem
              title="Géométrie"
              subtitle="dimensions"
            >
              <InputElem
                value={values.d1}
                text={'d1'}
                description={'Diamètre exterieur du poteau:'}
                unit={'mm'}
                onChange={handleChangeValues('d1')}
              />
              <InputElem
                value={values.e1}
                text={'e1'}
                description={'Épaisseur du poteau'}
                unit={'mm'}
                onChange={handleChangeValues('e1')}
              />
              <InputElem
                value={values.d2}
                text={'d2'}
                description={'Diamètre extérieur de la platine'}
                unit={'mm'}
                onChange={handleChangeValues('d2')}
              />
              <InputElem
                value={values.d3}
                text={'d3'}
                description={'Diamètre de percage de la platine'}
                unit={'mm'}
                onChange={handleChangeValues('d3')}
              />
              <InputElem
                value={values.e2}
                text={'e2'}
                description={'Épaisseur de la platine'}
                unit={'mm'}
                onChange={handleChangeValues('e2')}
              />
              <InputElem
                value={values.n}
                text={'n'}
                description={'Nombre de tijes'}
                onChange={handleChangeValues('n')}
              />
            </CardElem>
          </Grid>
        )}
      </Grid>
      <Grid item md={12}>
        {tabIndex === 1 && (
          <Grid item md={12}>
            <CardElem
              title="Matériau"
              subtitle="Valeurs"
            >
              <InputElem
                value={values.fck}
                text={'fck'}
                description={'résistance en compression du béton:'}
                unit={'MPa'}
                onChange={handleChangeValues('fck')}
              />
              <InputElem
                value={values.fyp}
                text={'fyp'}
                description={'limite élastique de la platine '}
                unit={'MPa'}
                onChange={handleChangeValues('fyp')}
              />
              <InputElem
                value={values.FtRd}
                text={'FtRd'}
                description={'Résistance ultime à la traction du boulon'}
                unit={'MPa'}
                onChange={handleChangeValues('FtRd')}
              />
            </CardElem>
            <CardElem
              title="Efforts"
              subtitle="Effort Axial et Moment"
              >
              <InputElem
                value={values.NEd}
                text={'NEd'}
                description={'Effort Axial de calcul:'}
                unit={'KN'}
                onChange={handleChangeValues('NEd')}
              />
              <InputElem
                value={values.MEd}
                text={'MEd'}
                description={'Moment de calcul:'}
                unit={'KN.m'}
                onChange={handleChangeValues('MEd')}
              />
              <InputElem
                value={values.eN}
                text={'eN'}
                description={'Excentrement de Charge:'}
                unit={'m'}
                onChange={handleChangeValues('eN')}
              />
            </CardElem>
              
          </Grid>

        )}
      </Grid>
      <Grid item md={12}>
        {tabIndex === 3 && (
            <CardElem
              title="Résistance FT et FC"
              subtitle="Calcul et résultat"
            >
              <InputElem
              value={values.zc}
              text={'zc'}
              description={'zc'}
              unit={'m'}
              onChange={handleChangeValues('zc')}
              />
              <InputElem
                value={values.zt}
                text={'zt'}
                description={'zt'}
                unit={'m'}
                onChange={handleChangeValues('zt')}
              />
              <InputElem
                value={values.m}
                text={'m'}
                description={'m:'}
                unit={'mm'}
                onChange={handleChangeValues('m')}
              />
              <InputElem
                value={values.ex}
                text={'ex'}
                description={'ex:'}
                unit={'mm'}
                onChange={handleChangeValues('ex')}
              />
              <InputElem
                value={values.w}
                text={'w'}
                description={'w:'}
                unit={'mm'}
                onChange={handleChangeValues('w')}
              />
              <InputElem
                value={values.leffcp}
                text={'leffcp'}
                description={'leffcp:'}
                unit={'mm'}
                onChange={handleChangeValues('leffcp')}
              />
              <InputElem
                value={values.leffnc}
                text={'leffnc'}
                description={'leffnc:'}
                unit={'mm'}
                onChange={handleChangeValues('leffnc')}
              />
              <InputElem
                value={values.leff1}
                text={'leff1'}
                description={'leff1:'}
                unit={'mm'}
                onChange={handleChangeValues('leff1')}
              />
              <InputElem
                value={values.leff2}
                text={'leff2'}
                description={'leff2:'}
                unit={'mm'}
                onChange={handleChangeValues('leff2')}
              />
              <InputElem
                value={values.mplRd}
                text={'mplRd'}
                description={'mplRd'}
                unit={'kN.mm/mm'}
                onChange={handleChangeValues('mplRd')}
              />
              <InputElem
                value={values.Mpl1Rd}
                text={'Mpl1Rd'}
                description={'Mpl1Rd'}
                unit={'kN.mm'}
                onChange={handleChangeValues('Mpl1Rd')}
              />
              <InputElem
                value={values.Mpl2Rd}
                text={'Mpl2Rd'}
                description={'Mpl2Rd'}
                unit={'kN.mm'}
                onChange={handleChangeValues('Mpl2Rd')}
              />
              <InputElem
                value={values.FtRd}
                text={'FtRd'}
                description={'FtRd'}
                unit={'kN'}
                onChange={handleChangeValues('FtRd')}
              />
              <InputElem
                value={values.FTRdmode1}
                text={'FTRdmode1'}
                description={'FTRdmode1=4 x Mpl,1,Rd /m'}
                unit={'kN'}
                onChange={handleChangeValues('FTRdmode1')}
              />
              <InputElem
                value={values.FTRdmode2}
                text={'FTRdmode2'}
                description={'FTRdmode2=(2 x Mpl,2,Rd + n ∑ Ft,Rd)/(m+n)'}
                unit={'kN'}
                onChange={handleChangeValues('FTRdmode2')}
              />
              <InputElem
                value={values.FTRdmode3}
                text={'FTRdmode3'}
                description={'FTRdmode3=∑ Ft,Rd'}
                unit={'kN'}
                onChange={handleChangeValues('FTRdmode3')}
              />
              <InputElem
                value={values.FTRd}
                text={'FTRd'}
                description={'FTRd'}
                unit={'kN'}
                onChange={handleChangeValues('FTRd')}
              />
              <InputElem
                value={values.sc}
                text={'sc'}
                description={'surface de compression'}
                unit={'mm2'}
                onChange={handleChangeValues('sc')}
              />
              <InputElem
                value={values.FcRd}
                text={'FcRd'}
                description={'FcRd'}
                unit={'kN'}
                onChange={handleChangeValues('FcRd')}
              />
            </CardElem>
         )}    
      </Grid>
      <Grid item md={12}>
        {tabIndex === 2 && (
          <Grid item md={12}>
            <CardElem
              title="Résistance"
              subtitle="Moment Résistant"
            >
              <InputElem
                value={values.combinaison}
                text={'combinaison'}
                description={'combinaison:'}
                onChange={handleChangeValues('combinaison')}
              />
              <InputElem
                value={values.z}
                text={'z'}
                description={'Bras de Levier z:'}
                unit={'m'}
                onChange={handleChangeValues('z')}
              />
              <InputElem
                value={values.Mr}
                text={'Mr'}
                description={'Moment Resistant:'}
                unit={'KN.m'}
                onChange={handleChangeValues('Mr')}
              />
              <InputElem
                value={values.verification}
                text={'verification'}
                description={'verification:'}
                onChange={handleChangeValues('verification')}
              />
              <InputElem
                value={values.fs}
                text={'fs'}
                description={'fs:'}
                onChange={handleChangeValues('fs')}
              />
            </CardElem>
          </Grid>
        )}
      </Grid>
    </Grid >
  );
}

export default PlatineAnalysis;

