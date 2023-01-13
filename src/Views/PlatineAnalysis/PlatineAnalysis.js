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
import OutputDetails from '../../Components/OutputDetails';
import OutputElem from '../../Components/OutputElem';


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
    MEd: 1002,      // Inputs: Moment de calcul
    eN: -17.13,      // Inputs: Excentrement de charge
    combinaison: "combinaison d",      // Inputs: Choix de la combinaison
    z: 1.327,      // Inputs: Bras de Levier
    Mr: 622.97,         // Inputs: Moment résistant
    verification: "NOK",      // Inputs: vérification
    fs: 0.62,      // Inputs: Facteur de sécurité
    m: 50,         
    ex: 55,         
    w: 57.5,         
    leffcp: 214.57,      
    leffnc: 268.75,   
    leff1: 214.57,
    leff2: 268.75,
    mplRd: 94,
    Mpl1Rd: 20170.48,
    Mpl2Rd: 25262.5,
    FtRd: 226,
    FTRdmode1: 1613.64,
    FTRdmode2: 717.95,
    FTRdmode3: 452,
    FTRd: 452,
    c: 86.72,
    s1: 940962.48,
    s2: 1659134.63,
    sc: 718172.148,
    FcRd: 11969.53
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

            <Grid container item md={12}  >
              <Grid item md={6}>
              <Grid container = {true} alignItems="center"
           >
              <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Diamètre exterieur du poteau : d1"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.d1}
                text={'d1'}
                description={'Diamètre exterieur du poteau:'}
                unit={'mm'}
                onChange={handleChangeValues('d1')}
              />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Épaisseur du poteau : e1"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.e1}
                text={'e1'}
                description={'Épaisseur du poteau'}
                unit={'mm'}
                onChange={handleChangeValues('e1')}
              />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Diamètre extérieur de la platine : d2"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.d2}
                text={'d2'}
                description={'Diamètre extérieur de la platine'}
                unit={'mm'}
                onChange={handleChangeValues('d2')}
              />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Diamètre de percage : d3"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.d3}
                text={'d3'}
                description={'Diamètre de percage de la platine'}
                unit={'mm'}
                onChange={handleChangeValues('d3')}
              />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Épaisseur de la platine : e2"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.e2}
                text={'e2'}
                description={'Épaisseur de la platine'}
                unit={'mm'}
                onChange={handleChangeValues('e2')}
              />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Nombre de tijes : n"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.n}
                text={'n'}
                description={'Nombre de tijes'}
                onChange={handleChangeValues('n')}
              />
              </Grid>
              </Grid>
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/images/4.png" alt="" width="500px" />
          </Grid>
          </Grid>
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

<Grid container item md={12}  >
              <Grid item md={6}>
              <Grid container = {true} alignItems="center"
           >
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"résistance en compression du béton : fck"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.fck}
                text={'fck'}
                description={'résistance en compression du béton:'}
                unit={'MPa'}
                onChange={handleChangeValues('fck')}
              />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"limite élastique de la platine : fyp"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.fyp}
                text={'fyp'}
                description={'limite élastique de la platine '}
                unit={'MPa'}
                onChange={handleChangeValues('fyp')}
              />
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Résistance ultime à la traction du boulon : ftRd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
              <InputElem
                value={values.FtRd}
                text={'FtRd'}
                description={'Résistance ultime à la traction du boulon'}
                unit={'KN'}
                onChange={handleChangeValues('FtRd')}
              />
              </Grid>
              </Grid>
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/images/5.jpg" alt="" width="300px" />
              </Grid>
              </Grid>
            </CardElem>
            
            <CardElem
              title="Efforts"
              subtitle="Effort Axial et Moment"
              >
                
                <Grid container item md={12}  >
              <Grid item md={6}>
              <Grid container = {true} alignItems="center"
           >
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Effort Axial de calcul : NEd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                <InputElem
                  value={values.NEd}
                  text={'NEd'}
                  description={'Effort Axial de calcul:'}
                  unit={'KN'}
                  onChange={handleChangeValues('NEd')}
                />
                </Grid>
                <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Moment de calcul : MEd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>            
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                <InputElem
                  value={values.MEd}
                  text={'MEd'}
                  description={'Moment de calcul:'}
                  unit={'KN.m'}
                  onChange={handleChangeValues('MEd')}
                />
                </Grid> 
                <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Excentrement de Charge: eN"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ backgroundColor: 'white', display: "flex" }} >   
                <InputElem
                  value={values.eN}
                  text={'eN'}
                  description={'Excentrement de Charge:'}
                  unit={'m'}
                  onChange={handleChangeValues('eN')}
                />
                </Grid>
              </Grid>
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/1.svg" alt="" width="400px" />
              </Grid>
            </Grid>
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
                <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"zc "}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
              value={values.zc}
              // text={'zc'}
              // description={'zc'}
              unit={'m'}
              onChange={handleChangeValues('zc')}
              />
                  </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"zt"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.zt}
                //text={'zt'}
                //description={'zt'}
                unit={'m'}
                onChange={handleChangeValues('zt')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"m"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.m}
                //text={'m'}
                //description={'m:'}
                unit={'mm'}
                onChange={handleChangeValues('m')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"ex"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.ex}
                //text={'ex'}
                //description={'ex:'}
                unit={'mm'}
                onChange={handleChangeValues('ex')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"w"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.w}
                //text={'w'}
                //description={'w:'}
                unit={'mm'}
                onChange={handleChangeValues('w')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"leffcp "}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.leffcp}
                //text={'leffcp'}
                //description={'leffcp:'}
                unit={'mm'}
                onChange={handleChangeValues('leffcp')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"leffnc "}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.leffnc}
                //text={'leffnc'}
                //description={'leffnc:'}
                unit={'mm'}
                onChange={handleChangeValues('leffnc')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"leff1"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.leff1}
                //text={'leff1'}
                //description={'leff1:'}
                unit={'mm'}
                onChange={handleChangeValues('leff1')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"leff2"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.leff2}
                //text={'leff2'}
                //description={'leff2:'}
                unit={'mm'}
                onChange={handleChangeValues('leff2')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"mplRd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.mplRd}
                //text={'mplRd'}
                //description={'mplRd'}
                unit={'kN.mm/mm'}
                onChange={handleChangeValues('mplRd')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Mpl1Rd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.Mpl1Rd}
                //text={'Mpl1Rd'}
                //description={'Mpl1Rd'}
                unit={'kN.mm'}
                onChange={handleChangeValues('Mpl1Rd')}
              />
               </Grid>
               </Grid>
               <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Mpl2Rd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.Mpl2Rd}
                //text={'Mpl2Rd'}
                //description={'Mpl2Rd'}
                unit={'kN.mm'}
                onChange={handleChangeValues('Mpl2Rd')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"FtRd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.FtRd}
                //text={'FtRd'}
                //description={'FtRd'}
                unit={'kN'}
                onChange={handleChangeValues('FtRd')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"FTRdmode1"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.FTRdmode1}
                //text={'FTRdmode1'}
                //description={'FTRdmode1=4 x Mpl,1,Rd /m'}
                unit={'kN'}
                onChange={handleChangeValues('FTRdmode1')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"FTRdmode2"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.FTRdmode2}
                //text={'FTRdmode2'}
                //description={'FTRdmode2=(2 x Mpl,2,Rd + n ∑ Ft,Rd)/(m+n)'}
                unit={'kN'}
                onChange={handleChangeValues('FTRdmode2')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"FTRdmode3"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.FTRdmode3}
                //text={'FTRdmode3'}
                //description={'FTRdmode3=∑ Ft,Rd'}
                unit={'kN'}
                onChange={handleChangeValues('FTRdmode3')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"FTRd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.FTRd}
                //text={'FTRd'}
                //description={'FTRd'}
                unit={'kN'}
                onChange={handleChangeValues('FTRd')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"c"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.c}
                //text={'c'}
                //description={'c'}
                unit={'mm'}
                onChange={handleChangeValues('c')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"s1"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.s1}
                //text={'s1'}
                //description={'surface 1'}
                unit={'mm2'}
                onChange={handleChangeValues('s1')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"s2"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.s2}
                //text={'s2'}
                //description={'surface 2'}
                unit={'mm2'}
                onChange={handleChangeValues('s2')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"sc"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                      description={'combinaison:'}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails       
                value={values.sc}
                //text={'sc'}
                //description={'surface de compression'}
                unit={'mm2'}
                onChange={handleChangeValues('sc')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"FcRd"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails 
                value={values.FcRd}
                //text={'FcRd'}
                //description={'FcRd'}
                unit={'kN'}
                onChange={handleChangeValues('FcRd')}
              />
              </Grid>
              </Grid>
            </CardElem>
         )}    
      </Grid>
      <Grid item md={12}>
        {tabIndex === 2 && (
          <CardElem
            title="Résistance"
            subtitle="Moment Résistant"
          >
        <Grid container item md={12}  >
          <Grid item md={6}>
          <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"combinaison"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                  <OutputDetails
                value={values.combinaison}
                //text={'z'}
                //description={'Bras de Levier z:'}
                onChange={handleChangeValues('combinaison')}
              />
                  {/* <FormControl fullWidth style={{ padding: '6px', textAlign: "center" }} variant='outlined'>
                      <Select
                        style={{ backgroundColor: 'white' }}
                        value={"hello"}
                        label={values.combinaison}
                      >
                  <MenuItem value={"combinaison a"}>{values.combinaison}</MenuItem>
                </Select>
                    </FormControl> */}
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"z"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.z}
                //text={'z'}
                //description={'Bras de Levier z:'}
                unit={'m'}
                onChange={handleChangeValues('z')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"Mr"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.Mr}
                //text={'Mr'}
                //description={'Moment Resistant:'}
                unit={'KN.m'}
                onChange={handleChangeValues('Mr')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"verification"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputElem
                value={values.verification}
                //text={'verification'}
                //description={'verification:'}
                onChange={handleChangeValues('verification')}
              />
              </Grid>
              </Grid>
              <Grid container={true} alignItems="center">
                  <Grid item  xs={6} style={{ backgroundColor: 'white', display: "flex" }} >
                    <TextField
                      variant="outlined"
                      defaultValue={"fs"}
                      inputProps={{ readOnly: true, style: { textAlign: 'left' }, }}
                      style={{ height: '48px', width: '100%', justifyContent: 'center' }}
                    />
                  </Grid>
                  <Grid  xs={6} >
                    <OutputDetails
                value={values.fs}
                //text={'fs'}
                //description={'fs:'}
                onChange={handleChangeValues('fs')}
              />
              </Grid>
              </Grid>
            </Grid>
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/images/3.png" alt="" width="500px" />
          </Grid>
        </Grid>
        </CardElem>
        )}
      </Grid>
    </Grid >
  );
}

export default PlatineAnalysis;

