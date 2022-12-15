import calculations from './calculations';


const d1 = 1280 ;
const e1 = 6 ; 

test('calculations.zc', () => {
    const result = calculations.zc(({d1,e1}))

    console.log("My results is " + result)
    expect(result).toEqual(0.637)
})

const d3 = 1380 ;
test('calculations.zt', () => {
    const result = calculations.zt(({d3}))

    console.log("My results is " + result)
    expect(result).toEqual(0.69)
})

const MEd = 1002 ;
const NEd = -58.5 ;
test('calculations.eN', () => {
    const result = calculations.eN(({MEd,NEd}))

    console.log("My results is " + result)
    expect(result).toEqual(-17.128205128205128)
})

test('calculations.m', () => {
    const result = calculations.m(({d1,d3}))

    console.log("My results is " + result)
    expect(result).toEqual(50)
})

const d2 = 1490 ;
test('calculations.ex', () => {
    const result = calculations.ex(({d2,d3}))

    console.log("My results is " + result)
    expect(result).toEqual(55)
})

const n = 24 ;
test('calculations.w', () => {
    const result = calculations.w(({n,d3}))

    console.log("My results is " + result)
    expect(result).toEqual(57.5)
})

const m = 50 ;
const ex = 55 ;
const w = 57.5 ;
test('calculations.leffcp', () => {
    const result = calculations.leffcp(({m,ex,w}))

    console.log("My results is " + result)
    expect(result).toEqual(214.57963267948966)
})

test('calculations.leffnc', () => {
    const result = calculations.leffnc(({m,e1,ex,w}))

    console.log("My results is " + result)
    expect(result).toEqual(57.5)
})

const leffnc = 57.5 ;
const leffcp = 214.57 ;
test('calculations.leff1', () => {
    const result = calculations.leff1(({leffnc,leffcp}))

    console.log("My results is " + result)
    expect(result).toEqual(57.5)
})


test('calculations.leff2', () => {
    const result = calculations.leff2(({leffnc}))

    console.log("My results is " + result)
    expect(result).toEqual(57.5)
})

const leff1 = 57.5 ;
const leff2 = 57.5 ;
const e2 = 40 ;
const fyp = 235 ; 
test('calculations.mplRd', () => {
    const result = calculations.mplRd(({e2,fyp}))

    console.log("My results is " + result)
    expect(result).toEqual(94)
})

const mplRd = 94;
test('calculations.Mpl1Rd', () => {
    const result = calculations.Mpl1Rd(({leff1,mplRd}))

    console.log("My results is " + result)
    expect(result).toEqual(5405)
})

test('calculations.Mpl2Rd', () => {
    const result = calculations.Mpl2Rd(({leff2,mplRd}))

    console.log("My results is " + result)
    expect(result).toEqual(5405)
})

const Mpl1Rd = 5405;
test('calculations.FTRdmode1', () => {
    const result = calculations.FTRdmode1(({Mpl1Rd,m}))

    console.log("My results is " + result)
    expect(result).toEqual(432.4)
})

const Mpl2Rd = 5405;
const FtRd = 226;
test('calculations.FTRdmode2', () => {
    const result = calculations.FTRdmode2(({Mpl2Rd,m,n,ex,FtRd}))

    console.log("My results is " + result)
    expect(result).toEqual(2944.095238095238)
})

test('calculations.FTRdmode3', () => {
    const result = calculations.FTRdmode3(({Mpl2Rd,m,n,ex,FtRd}))

    console.log("My results is " + result)
    expect(result).toEqual(5424)
})

const FTRdmode1 = 432.4 ;
const FTRdmode2 = 2944.095238 ;
const FTRdmode3 = 5424 ;
test('calculations.FTRd', () => {
    const result = calculations.FTRd(({FTRdmode1,FTRdmode2,FTRdmode3}))

    console.log("My results is " + result)
    expect(result).toEqual(432.4)
})

const fck = 25 ;
test('calculations.c', () => {
    const result = calculations.c(({e2,fyp,fck}))

    console.log("My results is " + result)
    expect(result).toEqual(86.7179335547152)
})

const c = 86.7179 ;
test('calculations.s1', () => {
    const result = calculations.s1(({d1,e1,c}))

    console.log("My results is " + result)
    expect(result).toEqual(940962.5964537899)
})

test('calculations.s2', () => {
    const result = calculations.s2(({d1,c}))

    console.log("My results is " + result)
    expect(result).toEqual(1659134.475878253)
})

const s1 = 940962.5965 ;
const s2 = 1659134.476 ;
test('calculations.sc', () => {
    const result = calculations.sc(({s1,s2}))

    console.log("My results is " + result)
    expect(result).toEqual(718171.8795)
})

const sc = 718171.8795 ;
test('calculations.FcRd', () => {
    const result = calculations.FcRd(({fck,sc}))

    console.log("My results is " + result)
    expect(result).toEqual(11969.531325000002)
})

const eN = -17.13096256 ;
const zt = 0.69 ;
const zc = 0.637;
test('calculations.combinaison', () => {
    const result = calculations.combinaison(({NEd,eN,zt,zc}))

    console.log("My results is " + result)
    expect(result).toEqual("combinaison d")
})

const combinaison = "combinaison d";
test('calculations.z', () => {
    const result = calculations.z(({zt,zc,combinaison}))

    console.log("My results is " + result)
    expect(result).toEqual(1.327)
})

const z = 1.327 ;
const FcRd = 11969.5358 ;
const FTRd = 432.4 ;
test('calculations.Mr', () => {
    const result = calculations.Mr(({zt,zc,combinaison,z,eN,FcRd,FTRd}))
    console.log("My results is " + result)
    expect(result).toEqual(595.9548653130134)
})

const Mr = 595.9548653130134 ;
test('calculations.verification', () => {
    const result = calculations.verification(({Mr,MEd}))
    console.log("My results is " + result)
    expect(result).toEqual("nok")
})

const verification = "nok"
test('calculations.fs', () => {
    const result = calculations.fs(({Mr,MEd,verification}))
    console.log("My results is " + result)
    expect(result).toEqual(0.5947653346437259)
})