// import { SectionGeometry } from '@tridyme/aec';

import { FaMinus } from "react-icons/fa";
import { pick } from "reactstrap/lib/utils";

// Option 1: utilisation de la librairie @tridyme/aec: https://github.com/tridyme/aec
// const calculations = {
//   outputs: (inputs) => {
//     return {
//       A: new SectionGeometry.RectangularSection(inputs).A,
//       Ixx: new SectionGeometry.RectangularSection(inputs).Iy
//     }
//   }
// }

// export default calculations;

// Option 2: calcul manuel
const calculations = {
  // OUTPUTS
  outputs: (inputs) => {
    return {
      zc: calculations.zc(inputs),
      zt: calculations.zt(inputs),
      eN: calculations.eN(inputs),
      m: calculations.m(inputs),
      ex: calculations.ex(inputs),
      w: calculations.w(inputs),
      leffcp: calculations.leffcp(inputs),
      leffnc: calculations.leffnc(inputs),
      leff1: calculations.leff1(inputs),
      leff2: calculations.leff2(inputs),
      mplRd: calculations.mplRd(inputs),
      Mpl1Rd: calculations.Mpl1Rd(inputs),
      Mpl2Rd: calculations.Mpl2Rd(inputs),
      FTRdmode1: calculations.FTRdmode1(inputs),
      FTRdmode2: calculations.FTRdmode2(inputs),
      FTRdmode3: calculations.FTRdmode3(inputs),
      FTRd: calculations.FTRd(inputs),
      FcRd: calculations.FcRd(inputs),
      combinaison: calculations.combinaison(inputs),
      z: calculations.z(inputs),
      Mr: calculations.Mr(inputs),
      verification: calculations.verification(inputs),
      fs: calculations.fs(inputs),
      sc: calculations.sc(inputs),
      c: calculations.c(inputs),
      s1: calculations.s1(inputs),
      s2: calculations.s2(inputs)
    }
  }, // NE PAS OUBLIER LA VIRGULE
  // CALCULATION FUNCTIONS
  zc: (inputs) => {
    const {
      d1,
      e1
    } = inputs;
    return (d1- e1)/2000;
  }, // NE PAS OUBLIER LA VIRGULE

  zt: (inputs) => {
    const {
      d3
    } = inputs;
    return d3 / 2000;
  }, // NE PAS OUBLIER LA VIRGULE

  eN: (inputs) => {
    const {
      MEd,
      NEd
    } = inputs;
    return MEd / NEd;
  }, // NE PAS OUBLIER LA VIRGULE

  m: (inputs) => {
    const {
      d1,
      d3
    } = inputs;
    return (d3 - d1) / 2;
  }, // NE PAS OUBLIER LA VIRGULE

  ex: (inputs) => {
    const {
      d2,
      d3
    } = inputs;
    return (d2-d3) / 2;
  }, // NE PAS OUBLIER LA VIRGULE

  w: (inputs) => {
    const {
      d3,
      n
    } = inputs;
    return d3 / n;
  }, // NE PAS OUBLIER LA VIRGULE

  leffcp: (inputs) => {
    const {
      // m,
      // ex,
      // w
    } = inputs;
    const m=calculations.m(inputs)
    const ex=calculations.ex(inputs)
    const w=calculations.w(inputs)
    return Math.min(2*Math.PI*m,Math.PI*m+w,Math.PI*m+2*ex);
  }, // NE PAS OUBLIER LA VIRGULE

  leffnc: (inputs) => {
    const {
      // m
      // ex
      e1,
      // w
    } = inputs;

    const m=calculations.m(inputs)
    const ex=calculations.ex(inputs)
    const w=calculations.w(inputs)
    return Math.min(4*m+1.25*ex,0.5*w+4*m+1.25*ex);
  }, // NE PAS OUBLIER LA VIRGULE

  leff1: (inputs) => {
    const {
    } = inputs;
    const leffnc=calculations.leffnc(inputs)
    const leffcp=calculations.leffcp(inputs)
    return Math.min(leffcp,leffnc);
  }, // NE PAS OUBLIER LA VIRGULE

  leff2: (inputs) => {
    const {
    } = inputs;
    const leffnc=calculations.leffnc(inputs)
    return leffnc;
  }, // NE PAS OUBLIER LA VIRGULE

  mplRd: (inputs) => {
    const {
      e2,
      fyp
    } = inputs;
    return e2 * e2 * fyp/(4*1*1000);
  }, // NE PAS OUBLIER LA VIRGULE

  Mpl1Rd: (inputs) => {
    const {
    } = inputs;
    const mplRd=calculations.mplRd(inputs);
    const leff1=calculations.leff1(inputs);
    return leff1*mplRd ;
  }, // NE PAS OUBLIER LA VIRGULE

  Mpl2Rd: (inputs) => {
    const {
    } = inputs;
    const mplRd=calculations.mplRd(inputs);
    const leff2=calculations.leff2(inputs);
    return leff2*mplRd ;
  }, // NE PAS OUBLIER LA VIRGULE

  FTRdmode1: (inputs) => {
    const {
    } = inputs;
    const Mpl1Rd=calculations.Mpl1Rd(inputs);
    const m=calculations.m(inputs);
    return 4*Mpl1Rd/m ;
  }, // NE PAS OUBLIER LA VIRGULE

  FTRdmode2: (inputs) => {
    const {
      n,
      FtRd
    } = inputs;
    const m=calculations.m(inputs)
    const ex=calculations.ex(inputs)
    const Mpl2Rd=calculations.Mpl2Rd(inputs)
    return (2* Mpl2Rd+ ex*2*FtRd)/(m+ex) ;
  }, // NE PAS OUBLIER LA VIRGULE

  FTRdmode3: (inputs) => {
    const {
      FtRd
    } = inputs;
    return 2*FtRd ;
  }, // NE PAS OUBLIER LA VIRGULE

  FTRd: (inputs) => {
    const {
    } = inputs;
    const FTRdmode1=calculations.FTRdmode1(inputs)
    const FTRdmode2=calculations.FTRdmode2(inputs)
    const FTRdmode3=calculations.FTRdmode3(inputs)
    return Math.min (FTRdmode1,FTRdmode2,FTRdmode3) ;
  }, // NE PAS OUBLIER LA VIRGULE

  c: (inputs) => {
    const {
      e2,
      fyp,
      fck
    } = inputs;
    return (e2*(fyp*1.5/(3*fck))**0.5) ;
  }, // NE PAS OUBLIER LA VIRGULE 
  
  s1: (inputs) => {
    const {
      d1,
      e1,
    } = inputs;
    const c=calculations.c(inputs);
    return ( Math.PI *(d1-2*e1-2*c)**2 /4 ) ;
  }, // NE PAS OUBLIER LA VIRGULE

  s2: (inputs) => {
    const {
      d1,
      //c
    } = inputs;
    const c=calculations.c(inputs);
    return ( Math.PI *(d1+2*c)**2/4) ;
  }, // NE PAS OUBLIER LA VIRGULE

  sc: (inputs) => {
    const {
    } = inputs;
    const s1=calculations.s1(inputs);
    const s2=calculations.s2(inputs);
    return (s2-s1) ;
  }, // NE PAS OUBLIER LA VIRGULE

  FcRd: (inputs) => {
    const {
      fck,
    } = inputs;
    const sc=calculations.sc(inputs);
    return (fck/1.5)*sc / 1000;
  }, // NE PAS OUBLIER LA VIRGULE

  combinaison: (inputs) => {
    const {
      NEd,
    } = inputs;
    const eN=calculations.eN(inputs);
    const zt=calculations.zt(inputs);
    const zc=calculations.zc(inputs);
    if(NEd<=0)
      if(-zc<eN)
      return "combinaison a" 
      if(eN<=-zc)
      return "combinaison d"
    else 
    return ("error")
    if(NEd>0)
      if(eN<zt)
      return "combinaison b" 
      if(eN>=zt)
      return "combinaison c"
    else 
    return ("error");
  }, // NE PAS OUBLIER LA VIRGULE

  z: (inputs) => {
    const {
    } = inputs;
    const zt=calculations.zt(inputs);
    const zc=calculations.zc(inputs);
    const combinaison=calculations.combinaison(inputs);
    if (combinaison=="combinaison a")
    return 2*zc;
    if (combinaison=="combinaison b")
    return 2*zt;
    if (combinaison=="combinaison c" )
    return zc+zt;
    if (combinaison=="combinaison d" )
    return zc+zt;
    else 
    return ("error")
  }, // NE PAS OUBLIER LA VIRGULE

  Mr: (inputs) => {
    const {
    } = inputs;
    const z=calculations.z(inputs);
    const zc=calculations.zc(inputs);
    const zt=calculations.zt(inputs);
    const combinaison=calculations.combinaison(inputs);
    const eN=calculations.eN(inputs);
    const FcRd=calculations.FcRd(inputs);
    const FTRd=calculations.FTRd(inputs);
    if (combinaison=="combinaison a")
    return (-FcRd*z/(zc/eN-1));
    if (combinaison=="combinaison b")
    return (FTRd*z/(zt/eN+1));
    if (combinaison=="combinaison c" )
    return Math.min(FTRd*z/(zc/eN+1),-FcRd*z/(zt/eN-1));
    if (combinaison=="combinaison d" )
    return Math.min(FTRd*z/(zc/eN+1),-FcRd*z/(zt/eN-1));
    else 
    return ("error")  
  }, // NE PAS OUBLIER LA VIRGULE

  verification: (inputs) => {
    const {
      MEd
    } = inputs;
    const combinaison=calculations.combinaison(inputs);
    const Mr=calculations.Mr(inputs);
    if (Math.abs(Mr)<Math.abs(MEd))
    return "nok"
    if (Math.abs(Mr)>=Math.abs(MEd))
    return "ok"
    else 
    return ("error")
  }, // NE PAS OUBLIER LA VIRGULE

  fs: (inputs) => {
    const {
      MEd,
    } = inputs;
    const verification=calculations.verification(inputs);
    const Mr=calculations.Mr(inputs);
    if (verification=="ok")
    return Mr/MEd
    if (verification=="nok")
    return Mr/MEd
    else 
    return ("error")
  }, // NE PAS OUBLIER LA VIRGULE
}

export default calculations;
