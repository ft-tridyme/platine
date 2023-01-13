import calculations from './calculations';


const d1 = 1280 ;
const e1 = 6 ;
const d2 = 1490 ; 
const d3 = 1380 ; 
const e2 = 40 ; 
const n = 24 ;
const zc = 0.637 ;
const zt = 0.69 ;

const fck = 25 ;
const fyp = 235 ;

const NEd = -58.49 ;
const MEd = 1002 ;
const eN = -17.13 ;

const m = 50;
const ex = 55 ;
const w = 57.5 ;
const leffcp = 214.58 ;
const leffnc = 268.75 ;
const leff1 = 214.58 ;
const leff2 = 268.75 ;
const mplRd = 94 ;
const Mpl1Rd = 20170.49 ;
const Mpl2Rd = 25262.5 ;
const FtRd = 226 ;
const FTRdmode1 = 1613.64 ;
const FTRdmode2 = 717.95 ;
const FTRdmode3 = 452 ;
const c = 86.72 ;
const s1 = 940962.48 ;
const s2 = 1659134.63 ;
const sc = 718172.15 ;
const FcRd = 11969.54 ;
const combinaison = "combinaison d" ;
const z = 1.327 ;
const FTRd = 452 ;
const Mr = 622.97 ;

const verification = "NOK" ;
const fs = 0.62 ;



test('calculations.zc', () => {
    const Newzc = Number( calculations.zc(({d1,e1})))
    expect(Newzc).toEqual(zc)
})

test('calculations.zt', () => {
    const Newzt = Number(calculations.zt(({d3})))
    expect(Newzt).toEqual(zt)
})

test('calculations.eN', () => {
    const NeweN = Number(calculations.eN(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(NeweN).toEqual(eN)
})

test('calculations.m', () => {
    const Newm = Number(calculations.m(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})))
    expect(Newm).toEqual(m)
})

test('calculations.ex', () => {
    const Newex = Number(calculations.ex(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})))
    expect(Newex).toEqual(ex)
})

test('calculations.w', () => {
    const Neww = Number(calculations.w(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})))
    expect(Neww).toEqual(w)
})

test('calculations.leffcp', () => {
    const Newleffcp = Number(calculations.leffcp(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(Newleffcp).toEqual(leffcp)
})

test('calculations.leffnc', () => {
    const Newleffnc = Number(calculations.leffnc(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})))
    expect(Newleffnc).toEqual(leffnc)
})

test('calculations.leff1', () => {
    const Newleff1 = Number(calculations.leff1(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(Newleff1).toEqual(leff1)
})


test('calculations.leff2', () => {
    const Newleff2 = Number(calculations.leff2(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(Newleff2).toEqual(leff2)
})

test('calculations.mplRd', () => {
    const NewmplRd= Number(calculations.mplRd(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})))
    expect(NewmplRd).toEqual(mplRd)
})

test('calculations.Mpl1Rd', () => {
    const NewMpl1Rd = Number(calculations.Mpl1Rd(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(NewMpl1Rd).toEqual(Mpl1Rd)
})

test('calculations.Mpl2Rd', () => {
    const NewMpl2Rd = Number(calculations.Mpl2Rd(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(NewMpl2Rd).toEqual(Mpl2Rd)
})

test('calculations.FTRdmode1', () => {
    const NewFTRdmode1 = Number(calculations.FTRdmode1(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(NewFTRdmode1).toEqual(FTRdmode1)
})

test('calculations.FTRdmode2', () => {
    const NewFTRdmode2 = Number(calculations.FTRdmode2(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(NewFTRdmode2).toEqual(FTRdmode2)
})

test('calculations.FTRdmode3', () => {
    const NewFTRdmode3 = Number(calculations.FTRdmode3(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})))
    expect(NewFTRdmode3).toEqual(FTRdmode3)
})

test('calculations.FTRd', () => {
    const NewFTRd = Number(calculations.FTRd(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})))
    expect(NewFTRd).toEqual(FTRd)
})

test('calculations.c', () => {
    const Newc = Number(calculations.c(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(Newc).toEqual(c)
})

test('calculations.s1', () => {
    const News1 = Number(calculations.s1(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(News1).toEqual(s1)
})

test('calculations.s2', () => {
    const News2 = Number(calculations.s2(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(News2).toEqual(s2)
})

test('calculations.sc', () => {
    const Newsc = Number(calculations.sc(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(Newsc).toEqual(sc)
})

test('calculations.FcRd', () => {
    const NewFcRd = Number(calculations.FcRd(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(NewFcRd).toEqual(FcRd)
})

test('calculations.combinaison', () => {
    const Newcombinaison = calculations.combinaison(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs}))
    expect(Newcombinaison).toEqual(combinaison)
})

test('calculations.z', () => {
    const Newz = Number(calculations.z(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})))
    expect(Newz).toEqual(z)
})

test('calculations.Mr', () => {
    const NewMr = Number(calculations.Mr(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2));
    expect(NewMr).toEqual(Mr)
})

test('calculations.verification', () => {
    const Newverification = calculations.verification(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs}))
    expect(Newverification).toEqual(verification)
})

test('calculations.fs', () => {
    const Newfs = Number(calculations.fs(({d1,e1,d2,d3,e2,n,zc,zt,fck,fyp,NEd,MEd,eN,m,ex,w,leffcp,leffnc,leff1,leff2,mplRd,Mpl1Rd,Mpl2Rd,FtRd,FTRdmode1,FTRdmode2,FTRdmode3,FTRd,c,s1,s2,sc,FcRd,combinaison,z,FTRd,Mr,MEd,verification,fs})).toFixed(2))
    expect(Newfs).toEqual(fs)
})