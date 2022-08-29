// Automatically generated with Reach 0.1.11 (2d125008)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (2d125008)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_Object({
    addr: ctc0,
    project: ctc1
    });
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Bool;
  
  return {
    infos: {
      State: {
        ideaAndAdddress: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v382, v383, v384, v385, v390, v391, v392, v393] = svs;
              return (await ((async () => {
                
                
                return v383;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
              const [v383, v384, v385, v390, v391, v392, v393] = svs;
              return (await ((async () => {
                
                
                return v383;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v383, v384, v385, v390, v392, v443, v444, v448, v449] = svs;
              return (await ((async () => {
                
                
                return v383;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v383, v384, v385, v390, v392, v443, v444, v448, v449, v495, v500] = svs;
              return (await ((async () => {
                
                
                return v383;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          }
        }
      },
    views: {
      1: [ctc0, ctc3, ctc4, ctc5, ctc0, ctc1, ctc0, ctc1],
      2: [ctc3, ctc4, ctc5, ctc0, ctc1, ctc0, ctc1],
      3: [ctc3, ctc4, ctc5, ctc0, ctc0, ctc6, ctc7, ctc6, ctc7],
      4: [ctc3, ctc4, ctc5, ctc0, ctc0, ctc6, ctc7, ctc6, ctc7, ctc7, ctc7]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_Object({
    addr: ctc0,
    project: ctc1
    });
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Null;
  
  
  const v370 = stdlib.protect(ctc3, await interact.setIdeaAndAddresses(), {
    at: './mindex.rsh:46:73:application',
    fs: ['at ./mindex.rsh:45:18:application call to [unknown function] (defined at: ./mindex.rsh:45:22:function exp)'],
    msg: 'setIdeaAndAddresses',
    who: 'Deployer'
    });
  const v377 = stdlib.protect(ctc4, await interact.setVoterAddresses(), {
    at: './mindex.rsh:47:69:application',
    fs: ['at ./mindex.rsh:45:18:application call to [unknown function] (defined at: ./mindex.rsh:45:22:function exp)'],
    msg: 'setVoterAddresses',
    who: 'Deployer'
    });
  const v381 = stdlib.protect(ctc5, await interact.setAmountToVoteOn(), {
    at: './mindex.rsh:48:69:application',
    fs: ['at ./mindex.rsh:45:18:application call to [unknown function] (defined at: ./mindex.rsh:45:22:function exp)'],
    msg: 'setAmountToVoteOn',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v370, v377, v381],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./mindex.rsh:50:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4, ctc5],
    pay: [stdlib.checkedBigNumberify('./mindex.rsh:50:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v383, v384, v385], secs: v387, time: v386, didSend: v40, from: v382 } = txn1;
      
      ;
      const v388 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '0')];
      const v389 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '1')];
      const v390 = v388.addr;
      const v391 = v388.project;
      const v392 = v389.addr;
      const v393 = v389.project;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v383, v384, v385], secs: v387, time: v386, didSend: v40, from: v382 } = txn1;
  ;
  const v388 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '0')];
  const v389 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '1')];
  const v390 = v388.addr;
  const v391 = v388.project;
  const v392 = v389.addr;
  const v393 = v389.project;
  const txn2 = await (ctc.sendrecv({
    args: [v382, v383, v384, v385, v390, v391, v392, v393],
    evt_cnt: 0,
    funcNum: 1,
    lct: v386,
    onlyIf: true,
    out_tys: [],
    pay: [v385, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v396, time: v395, didSend: v53, from: v394 } = txn2;
      
      sim_r.txns.push({
        amt: v385,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc3, ctc4, ctc5, ctc0, ctc1, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v396, time: v395, didSend: v53, from: v394 } = txn2;
  ;
  const v399 = stdlib.addressEq(v382, v394);
  stdlib.assert(v399, {
    at: './mindex.rsh:53:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v429], secs: v431, time: v430, didSend: v92, from: v428 } = txn3;
  ;
  const v432 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v434], v433, v435) => {
    const v436 = stdlib.addressEq(v434, v428);
    const v437 = stdlib.add(v433, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v438 = v436 ? v437 : v433;
    
    return v438;})
  const v439 = stdlib.ge(v432, stdlib.checkedBigNumberify('./mindex.rsh:63:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v439, {
    at: './mindex.rsh:63:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Deployer'
    });
  const v442 = stdlib.digest(ctc6, [v429]);
  const v443 = stdlib.digest(ctc6, [v391]);
  const v444 = stdlib.digestEq(v442, v443);
  const v448 = stdlib.digest(ctc6, [v393]);
  const v449 = stdlib.digestEq(v442, v448);
  const v450 = v444 ? true : v449;
  stdlib.assert(v450, {
    at: './mindex.rsh:64:12:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v480], secs: v482, time: v481, didSend: v155, from: v479 } = txn4;
  ;
  const v483 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v485], v484, v486) => {
    const v487 = stdlib.addressEq(v485, v479);
    const v488 = stdlib.add(v484, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v489 = v487 ? v488 : v484;
    
    return v489;})
  const v490 = stdlib.ge(v483, stdlib.checkedBigNumberify('./mindex.rsh:73:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v490, {
    at: './mindex.rsh:73:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Deployer'
    });
  const v493 = stdlib.digest(ctc6, [v480]);
  const v495 = stdlib.digestEq(v493, v443);
  const v500 = stdlib.digestEq(v493, v448);
  const v501 = v495 ? true : v500;
  stdlib.assert(v501, {
    at: './mindex.rsh:74:12:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v531], secs: v533, time: v532, didSend: v218, from: v530 } = txn5;
  ;
  const v534 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v536], v535, v537) => {
    const v538 = stdlib.addressEq(v536, v530);
    const v539 = stdlib.add(v535, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v540 = v538 ? v539 : v535;
    
    return v540;})
  const v541 = stdlib.ge(v534, stdlib.checkedBigNumberify('./mindex.rsh:83:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v541, {
    at: './mindex.rsh:83:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Deployer'
    });
  const v544 = stdlib.digest(ctc6, [v531]);
  const v546 = stdlib.digestEq(v544, v443);
  const v551 = stdlib.digestEq(v544, v448);
  const v552 = v546 ? true : v551;
  stdlib.assert(v552, {
    at: './mindex.rsh:84:12:application',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const v563 = v444 ? v495 : false;
  if (v563) {
    ;
    stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
      at: './mindex.rsh:40:30:application',
      fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
      msg: 'seeOutcome',
      who: 'Deployer'
      });
    
    return;
    }
  else {
    const v591 = v449 ? v500 : false;
    if (v591) {
      ;
      stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
        at: './mindex.rsh:40:30:application',
        fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
        msg: 'seeOutcome',
        who: 'Deployer'
        });
      
      return;
      }
    else {
      const v619 = v444 ? v546 : false;
      if (v619) {
        ;
        stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
          at: './mindex.rsh:40:30:application',
          fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
          msg: 'seeOutcome',
          who: 'Deployer'
          });
        
        return;
        }
      else {
        const v647 = v449 ? v551 : false;
        if (v647) {
          ;
          stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
            at: './mindex.rsh:40:30:application',
            fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
            msg: 'seeOutcome',
            who: 'Deployer'
            });
          
          return;
          }
        else {
          const v675 = v500 ? v551 : false;
          if (v675) {
            ;
            stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
              at: './mindex.rsh:40:30:application',
              fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
              msg: 'seeOutcome',
              who: 'Deployer'
              });
            
            return;
            }
          else {
            const v703 = v495 ? v546 : false;
            if (v703) {
              ;
              stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
                at: './mindex.rsh:40:30:application',
                fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
                msg: 'seeOutcome',
                who: 'Deployer'
                });
              
              return;
              }
            else {
              stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
                at: './mindex.rsh:40:30:application',
                fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
                msg: 'seeOutcome',
                who: 'Deployer'
                });
              
              return;
              }}}}}}
  
  
  
  
  
  
  
  
  
  };
export async function Voter1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_Object({
    addr: ctc0,
    project: ctc1
    });
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc3, ctc4, ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v383, v384, v385], secs: v387, time: v386, didSend: v40, from: v382 } = txn1;
  ;
  const v388 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '0')];
  const v389 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '1')];
  const v390 = v388.addr;
  const v391 = v388.project;
  const v392 = v389.addr;
  const v393 = v389.project;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v396, time: v395, didSend: v53, from: v394 } = txn2;
  ;
  const v399 = stdlib.addressEq(v382, v394);
  stdlib.assert(v399, {
    at: './mindex.rsh:53:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter1'
    });
  const v400 = ctc.selfAddress();
  const v408 = stdlib.protect(ctc1, await interact.vote(v383), {
    at: './mindex.rsh:58:47:application',
    fs: ['at ./mindex.rsh:57:16:application call to [unknown function] (defined at: ./mindex.rsh:57:20:function exp)'],
    msg: 'vote',
    who: 'Voter1'
    });
  const v411 = stdlib.digest(ctc6, [v408]);
  const v412 = stdlib.digest(ctc6, [v391]);
  const v413 = stdlib.digestEq(v411, v412);
  const v417 = stdlib.digest(ctc6, [v393]);
  const v418 = stdlib.digestEq(v411, v417);
  const v419 = v413 ? true : v418;
  stdlib.assert(v419, {
    at: './mindex.rsh:59:15:application',
    fs: ['at ./mindex.rsh:57:16:application call to [unknown function] (defined at: ./mindex.rsh:57:20:function exp)'],
    msg: null,
    who: 'Voter1'
    });
  const v420 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v422], v421, v423) => {
    const v424 = stdlib.addressEq(v422, v400);
    const v425 = stdlib.add(v421, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v426 = v424 ? v425 : v421;
    
    return v426;})
  const v427 = stdlib.ge(v420, stdlib.checkedBigNumberify('./mindex.rsh:60:57:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v427, {
    at: './mindex.rsh:60:14:application',
    fs: ['at ./mindex.rsh:57:16:application call to [unknown function] (defined at: ./mindex.rsh:57:20:function exp)'],
    msg: 'not a valid voter',
    who: 'Voter1'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v383, v384, v385, v390, v391, v392, v393, v408],
    evt_cnt: 1,
    funcNum: 2,
    lct: v395,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./mindex.rsh:62:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v429], secs: v431, time: v430, didSend: v92, from: v428 } = txn3;
      
      ;
      const v442 = stdlib.digest(ctc6, [v429]);
      const v443 = stdlib.digest(ctc6, [v391]);
      const v444 = stdlib.digestEq(v442, v443);
      const v448 = stdlib.digest(ctc6, [v393]);
      const v449 = stdlib.digestEq(v442, v448);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc0, ctc1, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v429], secs: v431, time: v430, didSend: v92, from: v428 } = txn3;
  ;
  const v432 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v434], v433, v435) => {
    const v436 = stdlib.addressEq(v434, v428);
    const v437 = stdlib.add(v433, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v438 = v436 ? v437 : v433;
    
    return v438;})
  const v439 = stdlib.ge(v432, stdlib.checkedBigNumberify('./mindex.rsh:63:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v439, {
    at: './mindex.rsh:63:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter1'
    });
  const v442 = stdlib.digest(ctc6, [v429]);
  const v443 = stdlib.digest(ctc6, [v391]);
  const v444 = stdlib.digestEq(v442, v443);
  const v448 = stdlib.digest(ctc6, [v393]);
  const v449 = stdlib.digestEq(v442, v448);
  const v450 = v444 ? true : v449;
  stdlib.assert(v450, {
    at: './mindex.rsh:64:12:application',
    fs: [],
    msg: null,
    who: 'Voter1'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v480], secs: v482, time: v481, didSend: v155, from: v479 } = txn4;
  ;
  const v483 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v485], v484, v486) => {
    const v487 = stdlib.addressEq(v485, v479);
    const v488 = stdlib.add(v484, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v489 = v487 ? v488 : v484;
    
    return v489;})
  const v490 = stdlib.ge(v483, stdlib.checkedBigNumberify('./mindex.rsh:73:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v490, {
    at: './mindex.rsh:73:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter1'
    });
  const v493 = stdlib.digest(ctc6, [v480]);
  const v495 = stdlib.digestEq(v493, v443);
  const v500 = stdlib.digestEq(v493, v448);
  const v501 = v495 ? true : v500;
  stdlib.assert(v501, {
    at: './mindex.rsh:74:12:application',
    fs: [],
    msg: null,
    who: 'Voter1'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v531], secs: v533, time: v532, didSend: v218, from: v530 } = txn5;
  ;
  const v534 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v536], v535, v537) => {
    const v538 = stdlib.addressEq(v536, v530);
    const v539 = stdlib.add(v535, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v540 = v538 ? v539 : v535;
    
    return v540;})
  const v541 = stdlib.ge(v534, stdlib.checkedBigNumberify('./mindex.rsh:83:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v541, {
    at: './mindex.rsh:83:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter1'
    });
  const v544 = stdlib.digest(ctc6, [v531]);
  const v546 = stdlib.digestEq(v544, v443);
  const v551 = stdlib.digestEq(v544, v448);
  const v552 = v546 ? true : v551;
  stdlib.assert(v552, {
    at: './mindex.rsh:84:12:application',
    fs: [],
    msg: null,
    who: 'Voter1'
    });
  const v563 = v444 ? v495 : false;
  if (v563) {
    ;
    stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
      at: './mindex.rsh:40:30:application',
      fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
      msg: 'seeOutcome',
      who: 'Voter1'
      });
    
    return;
    }
  else {
    const v591 = v449 ? v500 : false;
    if (v591) {
      ;
      stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
        at: './mindex.rsh:40:30:application',
        fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
        msg: 'seeOutcome',
        who: 'Voter1'
        });
      
      return;
      }
    else {
      const v619 = v444 ? v546 : false;
      if (v619) {
        ;
        stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
          at: './mindex.rsh:40:30:application',
          fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
          msg: 'seeOutcome',
          who: 'Voter1'
          });
        
        return;
        }
      else {
        const v647 = v449 ? v551 : false;
        if (v647) {
          ;
          stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
            at: './mindex.rsh:40:30:application',
            fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
            msg: 'seeOutcome',
            who: 'Voter1'
            });
          
          return;
          }
        else {
          const v675 = v500 ? v551 : false;
          if (v675) {
            ;
            stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
              at: './mindex.rsh:40:30:application',
              fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
              msg: 'seeOutcome',
              who: 'Voter1'
              });
            
            return;
            }
          else {
            const v703 = v495 ? v546 : false;
            if (v703) {
              ;
              stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
                at: './mindex.rsh:40:30:application',
                fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
                msg: 'seeOutcome',
                who: 'Voter1'
                });
              
              return;
              }
            else {
              stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
                at: './mindex.rsh:40:30:application',
                fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
                msg: 'seeOutcome',
                who: 'Voter1'
                });
              
              return;
              }}}}}}
  
  
  
  
  
  
  
  
  
  };
export async function Voter2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_Object({
    addr: ctc0,
    project: ctc1
    });
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Digest;
  const ctc9 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc3, ctc4, ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v383, v384, v385], secs: v387, time: v386, didSend: v40, from: v382 } = txn1;
  ;
  const v388 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '0')];
  const v389 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '1')];
  const v390 = v388.addr;
  const v391 = v388.project;
  const v392 = v389.addr;
  const v393 = v389.project;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v396, time: v395, didSend: v53, from: v394 } = txn2;
  ;
  const v399 = stdlib.addressEq(v382, v394);
  stdlib.assert(v399, {
    at: './mindex.rsh:53:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter2'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v429], secs: v431, time: v430, didSend: v92, from: v428 } = txn3;
  ;
  const v432 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v434], v433, v435) => {
    const v436 = stdlib.addressEq(v434, v428);
    const v437 = stdlib.add(v433, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v438 = v436 ? v437 : v433;
    
    return v438;})
  const v439 = stdlib.ge(v432, stdlib.checkedBigNumberify('./mindex.rsh:63:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v439, {
    at: './mindex.rsh:63:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter2'
    });
  const v442 = stdlib.digest(ctc6, [v429]);
  const v443 = stdlib.digest(ctc6, [v391]);
  const v444 = stdlib.digestEq(v442, v443);
  const v448 = stdlib.digest(ctc6, [v393]);
  const v449 = stdlib.digestEq(v442, v448);
  const v450 = v444 ? true : v449;
  stdlib.assert(v450, {
    at: './mindex.rsh:64:12:application',
    fs: [],
    msg: null,
    who: 'Voter2'
    });
  const v451 = ctc.selfAddress();
  const v459 = stdlib.protect(ctc1, await interact.vote(v383), {
    at: './mindex.rsh:68:47:application',
    fs: ['at ./mindex.rsh:67:16:application call to [unknown function] (defined at: ./mindex.rsh:67:20:function exp)'],
    msg: 'vote',
    who: 'Voter2'
    });
  const v462 = stdlib.digest(ctc6, [v459]);
  const v464 = stdlib.digestEq(v462, v443);
  const v469 = stdlib.digestEq(v462, v448);
  const v470 = v464 ? true : v469;
  stdlib.assert(v470, {
    at: './mindex.rsh:69:15:application',
    fs: ['at ./mindex.rsh:67:16:application call to [unknown function] (defined at: ./mindex.rsh:67:20:function exp)'],
    msg: null,
    who: 'Voter2'
    });
  const v471 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v473], v472, v474) => {
    const v475 = stdlib.addressEq(v473, v451);
    const v476 = stdlib.add(v472, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v477 = v475 ? v476 : v472;
    
    return v477;})
  const v478 = stdlib.ge(v471, stdlib.checkedBigNumberify('./mindex.rsh:70:57:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v478, {
    at: './mindex.rsh:70:14:application',
    fs: ['at ./mindex.rsh:67:16:application call to [unknown function] (defined at: ./mindex.rsh:67:20:function exp)'],
    msg: 'not a valid voter',
    who: 'Voter2'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v383, v384, v385, v390, v392, v443, v444, v448, v449, v459],
    evt_cnt: 1,
    funcNum: 3,
    lct: v430,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./mindex.rsh:72:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v480], secs: v482, time: v481, didSend: v155, from: v479 } = txn4;
      
      ;
      const v493 = stdlib.digest(ctc6, [v480]);
      const v495 = stdlib.digestEq(v493, v443);
      const v500 = stdlib.digestEq(v493, v448);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc0, ctc0, ctc8, ctc9, ctc8, ctc9, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v480], secs: v482, time: v481, didSend: v155, from: v479 } = txn4;
  ;
  const v483 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v485], v484, v486) => {
    const v487 = stdlib.addressEq(v485, v479);
    const v488 = stdlib.add(v484, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v489 = v487 ? v488 : v484;
    
    return v489;})
  const v490 = stdlib.ge(v483, stdlib.checkedBigNumberify('./mindex.rsh:73:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v490, {
    at: './mindex.rsh:73:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter2'
    });
  const v493 = stdlib.digest(ctc6, [v480]);
  const v495 = stdlib.digestEq(v493, v443);
  const v500 = stdlib.digestEq(v493, v448);
  const v501 = v495 ? true : v500;
  stdlib.assert(v501, {
    at: './mindex.rsh:74:12:application',
    fs: [],
    msg: null,
    who: 'Voter2'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v531], secs: v533, time: v532, didSend: v218, from: v530 } = txn5;
  ;
  const v534 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v536], v535, v537) => {
    const v538 = stdlib.addressEq(v536, v530);
    const v539 = stdlib.add(v535, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v540 = v538 ? v539 : v535;
    
    return v540;})
  const v541 = stdlib.ge(v534, stdlib.checkedBigNumberify('./mindex.rsh:83:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v541, {
    at: './mindex.rsh:83:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter2'
    });
  const v544 = stdlib.digest(ctc6, [v531]);
  const v546 = stdlib.digestEq(v544, v443);
  const v551 = stdlib.digestEq(v544, v448);
  const v552 = v546 ? true : v551;
  stdlib.assert(v552, {
    at: './mindex.rsh:84:12:application',
    fs: [],
    msg: null,
    who: 'Voter2'
    });
  const v563 = v444 ? v495 : false;
  if (v563) {
    ;
    stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
      at: './mindex.rsh:40:30:application',
      fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
      msg: 'seeOutcome',
      who: 'Voter2'
      });
    
    return;
    }
  else {
    const v591 = v449 ? v500 : false;
    if (v591) {
      ;
      stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
        at: './mindex.rsh:40:30:application',
        fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
        msg: 'seeOutcome',
        who: 'Voter2'
        });
      
      return;
      }
    else {
      const v619 = v444 ? v546 : false;
      if (v619) {
        ;
        stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
          at: './mindex.rsh:40:30:application',
          fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
          msg: 'seeOutcome',
          who: 'Voter2'
          });
        
        return;
        }
      else {
        const v647 = v449 ? v551 : false;
        if (v647) {
          ;
          stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
            at: './mindex.rsh:40:30:application',
            fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
            msg: 'seeOutcome',
            who: 'Voter2'
            });
          
          return;
          }
        else {
          const v675 = v500 ? v551 : false;
          if (v675) {
            ;
            stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
              at: './mindex.rsh:40:30:application',
              fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
              msg: 'seeOutcome',
              who: 'Voter2'
              });
            
            return;
            }
          else {
            const v703 = v495 ? v546 : false;
            if (v703) {
              ;
              stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
                at: './mindex.rsh:40:30:application',
                fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
                msg: 'seeOutcome',
                who: 'Voter2'
                });
              
              return;
              }
            else {
              stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
                at: './mindex.rsh:40:30:application',
                fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
                msg: 'seeOutcome',
                who: 'Voter2'
                });
              
              return;
              }}}}}}
  
  
  
  
  
  
  
  
  
  };
export async function Voter3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_Object({
    addr: ctc0,
    project: ctc1
    });
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Digest;
  const ctc9 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc3, ctc4, ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v383, v384, v385], secs: v387, time: v386, didSend: v40, from: v382 } = txn1;
  ;
  const v388 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '0')];
  const v389 = v383[stdlib.checkedBigNumberify('./mindex.rsh:51:30:application', stdlib.UInt_max, '1')];
  const v390 = v388.addr;
  const v391 = v388.project;
  const v392 = v389.addr;
  const v393 = v389.project;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v396, time: v395, didSend: v53, from: v394 } = txn2;
  ;
  const v399 = stdlib.addressEq(v382, v394);
  stdlib.assert(v399, {
    at: './mindex.rsh:53:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter3'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v429], secs: v431, time: v430, didSend: v92, from: v428 } = txn3;
  ;
  const v432 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v434], v433, v435) => {
    const v436 = stdlib.addressEq(v434, v428);
    const v437 = stdlib.add(v433, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v438 = v436 ? v437 : v433;
    
    return v438;})
  const v439 = stdlib.ge(v432, stdlib.checkedBigNumberify('./mindex.rsh:63:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v439, {
    at: './mindex.rsh:63:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter3'
    });
  const v442 = stdlib.digest(ctc6, [v429]);
  const v443 = stdlib.digest(ctc6, [v391]);
  const v444 = stdlib.digestEq(v442, v443);
  const v448 = stdlib.digest(ctc6, [v393]);
  const v449 = stdlib.digestEq(v442, v448);
  const v450 = v444 ? true : v449;
  stdlib.assert(v450, {
    at: './mindex.rsh:64:12:application',
    fs: [],
    msg: null,
    who: 'Voter3'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v480], secs: v482, time: v481, didSend: v155, from: v479 } = txn4;
  ;
  const v483 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v485], v484, v486) => {
    const v487 = stdlib.addressEq(v485, v479);
    const v488 = stdlib.add(v484, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v489 = v487 ? v488 : v484;
    
    return v489;})
  const v490 = stdlib.ge(v483, stdlib.checkedBigNumberify('./mindex.rsh:73:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v490, {
    at: './mindex.rsh:73:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter3'
    });
  const v493 = stdlib.digest(ctc6, [v480]);
  const v495 = stdlib.digestEq(v493, v443);
  const v500 = stdlib.digestEq(v493, v448);
  const v501 = v495 ? true : v500;
  stdlib.assert(v501, {
    at: './mindex.rsh:74:12:application',
    fs: [],
    msg: null,
    who: 'Voter3'
    });
  const v502 = ctc.selfAddress();
  const v510 = stdlib.protect(ctc1, await interact.vote(v383), {
    at: './mindex.rsh:78:47:application',
    fs: ['at ./mindex.rsh:77:16:application call to [unknown function] (defined at: ./mindex.rsh:77:20:function exp)'],
    msg: 'vote',
    who: 'Voter3'
    });
  const v513 = stdlib.digest(ctc6, [v510]);
  const v515 = stdlib.digestEq(v513, v443);
  const v520 = stdlib.digestEq(v513, v448);
  const v521 = v515 ? true : v520;
  stdlib.assert(v521, {
    at: './mindex.rsh:79:15:application',
    fs: ['at ./mindex.rsh:77:16:application call to [unknown function] (defined at: ./mindex.rsh:77:20:function exp)'],
    msg: null,
    who: 'Voter3'
    });
  const v522 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v524], v523, v525) => {
    const v526 = stdlib.addressEq(v524, v502);
    const v527 = stdlib.add(v523, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v528 = v526 ? v527 : v523;
    
    return v528;})
  const v529 = stdlib.ge(v522, stdlib.checkedBigNumberify('./mindex.rsh:80:57:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v529, {
    at: './mindex.rsh:80:14:application',
    fs: ['at ./mindex.rsh:77:16:application call to [unknown function] (defined at: ./mindex.rsh:77:20:function exp)'],
    msg: 'not a valid voter',
    who: 'Voter3'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v383, v384, v385, v390, v392, v443, v444, v448, v449, v495, v500, v510],
    evt_cnt: 1,
    funcNum: 4,
    lct: v481,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./mindex.rsh:82:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v531], secs: v533, time: v532, didSend: v218, from: v530 } = txn5;
      
      ;
      const v544 = stdlib.digest(ctc6, [v531]);
      const v546 = stdlib.digestEq(v544, v443);
      const v551 = stdlib.digestEq(v544, v448);
      const v563 = v444 ? v495 : false;
      if (v563) {
        sim_r.txns.push({
          kind: 'from',
          to: v390,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v591 = v449 ? v500 : false;
        if (v591) {
          sim_r.txns.push({
            kind: 'from',
            to: v392,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v619 = v444 ? v546 : false;
          if (v619) {
            sim_r.txns.push({
              kind: 'from',
              to: v390,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v647 = v449 ? v551 : false;
            if (v647) {
              sim_r.txns.push({
                kind: 'from',
                to: v392,
                tok: undefined /* Nothing */
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v675 = v500 ? v551 : false;
              if (v675) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v392,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v703 = v495 ? v546 : false;
                if (v703) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v390,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc5, ctc0, ctc0, ctc8, ctc9, ctc8, ctc9, ctc9, ctc9, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v531], secs: v533, time: v532, didSend: v218, from: v530 } = txn5;
  ;
  const v534 = await stdlib.Array_asyncReduce([v384], stdlib.checkedBigNumberify('reach standard library:162:22:decimal', stdlib.UInt_max, '0'), async([v536], v535, v537) => {
    const v538 = stdlib.addressEq(v536, v530);
    const v539 = stdlib.add(v535, stdlib.checkedBigNumberify('reach standard library:163:18:decimal', stdlib.UInt_max, '1'));
    const v540 = v538 ? v539 : v535;
    
    return v540;})
  const v541 = stdlib.ge(v534, stdlib.checkedBigNumberify('./mindex.rsh:83:55:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v541, {
    at: './mindex.rsh:83:10:application',
    fs: [],
    msg: 'not a valid voter',
    who: 'Voter3'
    });
  const v544 = stdlib.digest(ctc6, [v531]);
  const v546 = stdlib.digestEq(v544, v443);
  const v551 = stdlib.digestEq(v544, v448);
  const v552 = v546 ? true : v551;
  stdlib.assert(v552, {
    at: './mindex.rsh:84:12:application',
    fs: [],
    msg: null,
    who: 'Voter3'
    });
  const v563 = v444 ? v495 : false;
  if (v563) {
    ;
    stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
      at: './mindex.rsh:40:30:application',
      fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
      msg: 'seeOutcome',
      who: 'Voter3'
      });
    
    return;
    }
  else {
    const v591 = v449 ? v500 : false;
    if (v591) {
      ;
      stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
        at: './mindex.rsh:40:30:application',
        fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
        msg: 'seeOutcome',
        who: 'Voter3'
        });
      
      return;
      }
    else {
      const v619 = v444 ? v546 : false;
      if (v619) {
        ;
        stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
          at: './mindex.rsh:40:30:application',
          fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
          msg: 'seeOutcome',
          who: 'Voter3'
          });
        
        return;
        }
      else {
        const v647 = v449 ? v551 : false;
        if (v647) {
          ;
          stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
            at: './mindex.rsh:40:30:application',
            fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
            msg: 'seeOutcome',
            who: 'Voter3'
            });
          
          return;
          }
        else {
          const v675 = v500 ? v551 : false;
          if (v675) {
            ;
            stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
              at: './mindex.rsh:40:30:application',
              fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
              msg: 'seeOutcome',
              who: 'Voter3'
              });
            
            return;
            }
          else {
            const v703 = v495 ? v546 : false;
            if (v703) {
              ;
              stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
                at: './mindex.rsh:40:30:application',
                fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
                msg: 'seeOutcome',
                who: 'Voter3'
                });
              
              return;
              }
            else {
              stdlib.protect(ctc7, await interact.seeOutcome(v429, v480, v531), {
                at: './mindex.rsh:40:30:application',
                fs: ['at ./mindex.rsh:39:13:application call to [unknown function] (defined at: ./mindex.rsh:39:52:function exp)', 'at ./mindex.rsh:93:15:application call to "seeOutcome" (defined at: ./mindex.rsh:38:46:function exp)'],
                msg: 'seeOutcome',
                who: 'Voter3'
                });
              
              return;
              }}}}}}
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`State_ideaAndAdddress()(address,byte[10])[2]`],
    sigs: [`State_ideaAndAdddress()(address,byte[10])[2]`]
    },
  appApproval: `BiAMAQAgAwQCtAGcAr0CnQKGAgomBAEAAQEBAgAjNQAxGEEFaStkSSNbNQGBCFs1AjYaABdJQQB5IzUEIjUGgajCxuQHEkQ0AUklDEAAMkkhBAxAABchBBJEKGQpZFAqZFBJNQNXAFQ1B0IFGUgoZClkUCpkUEk1A1cAVDUHQgUFSSEFDEAAFEgoZClkUCpkUEk1A1cAVDUHQgTqIhJEKGQpZFAqZFBJNQNXIFQ1B0IE1DYaAhc1BDYaAzYaARdJIQUMQANASSUMQAJWSSEEDEABVSEEEkQhBDQBEkQ0BEkjEkw0AhIRRChkKWRQKmRQSTUDSUpKSSEGWzX/V7wgNf5X3CA1/SEHIlgXNfwhCCJYFzX7gb4CIlgXNfqBvwIiWBc1+Uk1BTX4gARO4/BQNPhQsCM19yM19jQDV1RgJDT2CyRYNfU090kiCDT1MQASTTX3NPYiCEk19iUMQP/aNPciD0Q0+AFJNfY0A1f8IBI19TT2NAMhCSRYEjX0NPU09BFENPw0+hBBABOxI7IBNP+yCCKyEDT+sgezQgOgNPs0+RBBABOxI7IBNP+yCCKyEDT9sgezQgOFNPw09RBBABOxI7IBNP+yCCKyEDT+sgezQgNqNPs09BBBABOxI7IBNP+yCCKyEDT9sgezQgNPNPk09BBBABOxI7IBNP+yCCKyEDT9sgezQgM0NPo09RBBABOxI7IBNP+yCCKyEDT+sgezQgMZQgMWSCU0ARJENARJIxJMNAISEUQoZClkUCpkUEk1A0lKSkpJVwBUNf9XVGA1/iEGWzX9V7wgNfxX3CA1+1f8IDX6IQciWBc1+SEJJFg1+CEIIlgXNfdJNQU19oAEOItDWjT2ULAjNfUjNfQ0/iQ09AskWDXzNPVJIgg08zEAEk019TT0IghJNfQlDED/3TT1Ig9ENPYBSTX0NPoSNfM09DT4EjXyNPM08hFENP80/lA0/RZQNPxQNPtQNPpQNPkWUQcIUDT4UDT3FlEHCFA08xZRBwhQNPIWUQcIUChLAVcAf2cpSwFXf39nKksBV/5CZ0ghBDUBMgY1AkICOEghBTQBEkQ0BEkjEkw0AhIRRChkKWRQKmRQSTUDSUpJVwBUNf9XVGA1/iEGWzX9V7wgNfxX5iA1+0k1BTX6gASVyq76NPpQsCM1+SM1+DT+JDT4CyRYNfc0+UkiCDT3MQASTTX5NPgiCEk1+CUMQP/dNPkiD0Q0+gE1+DQDV9wKATX3NPg09xI19jQDIQohC1gBNfU0+DT1EjX0NPY09BFENP80/lA0/RZQNPxQNPtQNPdQNPYWUQcIUDT1UDT0FlEHCFAoSwFXAH9nKUsBV39/ZypLAVf+QGdIJTUBMgY1AkIBVEkiDEAAk0giNAESRDQESSMSTDQCEhFEKGQpZFAqZFBJNQNJSkpJVyBUNf9XdGA1/oHUAVs1/VfcIDX8V/wKNfshCiRYNfqBpgIhC1g1+YAEmouRdLA0/YgBTDQDVwAgMQASRDT/NP5QNP0WUDT8UDT7UDT6UDT5UChLAVcAf2cpSwFXf39nKksBV/4SZ0ghBTUBMgY1AkIAu0iBoI0GiAEFIzQBEkQ0BEkjEkw0AhIRREk1BUlJVwBUNf9XVGA1/iEGWzX9gATDZ03fNP9QNP5QNP0WULA0/1cAKjX8NP9XKio1+zT8VwAgNfo0/FcgCjX5NPtXACA1+DT7VyAKNfcxADT/UDT+UDT9FlA0+lA0+VA0+FA091AoSwFXAH9nKUsBV39/ZypLAVf+MmdIIjUBMgY1AkIAHDEZgQUSRLEjsgEjsggishAyCbIJMgqyB7NCAAUxGSMSRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSIIMgQSRDEWEkQiQzEZIxJEQv/fIzE0EkQhBDE1EkQjMTYSRCMxNxJEIzUBIzUCQv+uNABJSiIINQA4BzIKEkQ4ECISRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 320,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes10",
                        "name": "elem0",
                        "type": "bytes10"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_project",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T1[2]",
                "name": "v383",
                "type": "tuple[2]"
              },
              {
                "internalType": "address payable[3]",
                "name": "v384",
                "type": "address[3]"
              },
              {
                "internalType": "uint256",
                "name": "v385",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes10",
                        "name": "elem0",
                        "type": "bytes10"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_project",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T1[2]",
                "name": "v383",
                "type": "tuple[2]"
              },
              {
                "internalType": "address payable[3]",
                "name": "v384",
                "type": "address[3]"
              },
              {
                "internalType": "uint256",
                "name": "v385",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v429",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v480",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v531",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "State_ideaAndAdddress",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "_addr",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "bytes10",
                "name": "elem0",
                "type": "bytes10"
              }
            ],
            "internalType": "struct T0",
            "name": "_project",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1[2]",
        "name": "",
        "type": "tuple[2]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v429",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v480",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes10",
                    "name": "elem0",
                    "type": "bytes10"
                  }
                ],
                "internalType": "struct T0",
                "name": "v531",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200251a3803806200251a83398101604081905262000026916200041d565b60008055436003556040517fe7de9f41514593959775ac2b1aade50853213011d008c350b35f3285c5d5ee2c90620000629033908490620005bf565b60405180910390a162000078341560086200012d565b6200008262000157565b33815260208281018051518284015280518201516040808501919091528151810151606085015281515151516001600160a01b0390811660808601528251515184015160a0860152825151840151511660c085015290515182015182015160e08401526001600081905543905551620000fe9183910162000617565b6040516020818303038152906040526002908051906020019062000124929190620001e7565b505050620006eb565b81620001535760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60405180610100016040528060006001600160a01b031681526020016200017d62000276565b81526020016200018c620002c3565b81526020016000815260200160006001600160a01b03168152602001620001c9604051806020016040528060006001600160b01b03191681525090565b81526000602080830182905260408051918201815291815291015290565b828054620001f590620006ae565b90600052602060002090601f01602090048101928262000219576000855562000264565b82601f106200023457805160ff191683800117855562000264565b8280016001018555821562000264579182015b828111156200026457825182559160200191906001019062000247565b5062000272929150620002e1565b5090565b60405180604001604052806002905b620002ac604080518082018252600080825282516020818101909452908152909182015290565b815260200190600190039081620002855790505090565b60405180606001604052806003906020820280368337509192915050565b5b80821115620002725760008155600101620002e2565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620003335762000333620002f8565b60405290565b604051606081016001600160401b0381118282101715620003335762000333620002f8565b604051602081016001600160401b0381118282101715620003335762000333620002f8565b80516001600160a01b03811681146200039b57600080fd5b919050565b600082601f830112620003b257600080fd5b604051606081016001600160401b0381118282101715620003d757620003d7620002f8565b604052806060840185811115620003ed57600080fd5b845b818110156200041257620004038162000383565b835260209283019201620003ef565b509195945050505050565b60008183036101208112156200043257600080fd5b6200043c6200030e565b835181526020610100601f198181860112156200045857600080fd5b6200046262000339565b945087603f8801126200047457600080fd5b6200047e6200030e565b8060a089018a8111156200049157600080fd5b858a015b818110156200051a57808c036040811215620004b15760008081fd5b620004bb6200030e565b620004c68362000383565b8152888783011215620004d95760008081fd5b620004e36200035e565b838a01519092506001600160b01b031981168114620005025760008081fd5b82528089019190915284529286019260400162000495565b508188526200052a8b82620003a0565b8887015250505050949094015160408301529283015250919050565b8060005b60028110156200058b57815180516001600160a01b03168552602090810151516001600160b01b03191681860152604090940193909101906001016200054a565b50505050565b8060005b60038110156200058b5781516001600160a01b031684526020938401939091019060010162000595565b60006101408201905060018060a01b0384168252825160208301526020830151620005ef60408401825162000546565b60208101516200060360c085018262000591565b506040810151610120840152509392505050565b81516001600160a01b0390811682526020808401516101a084019291620006419085018262000546565b5060408401516200065660a085018262000591565b50606084015161010084015260808401511661012083015260a0830151516001600160b01b031990811661014084015260c08401516001600160a01b031661016084015260e090930151519092166101809091015290565b600181811c90821680620006c357607f821691505b60208210811415620006e557634e487b7160e01b600052602260045260246000fd5b50919050565b611e1f80620006fb6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df5780639081f2f4146100f4578063ab53f2c614610116578063ba9bec701461013957005b8063011d4b67146100825780631e93b0f1146100955780632c10a159146100b95780637c298666146100cc57005b3661008057005b005b61008061009036600461147b565b61014c565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100c736600461147b565b610467565b6100806100da36600461147b565b610637565b3480156100eb57600080fd5b506001546100a6565b34801561010057600080fd5b50610109610ae8565b6040516100b091906114c6565b34801561012257600080fd5b5061012b610dbc565b6040516100b09291906114fd565b61008061014736600461147b565b610e59565b61015c60036000541460156111c1565b6101768135158061016f57506001548235145b60166111c1565b6000808055600280546101889061155a565b80601f01602080910402602001604051908101604052809291908181526020018280546101b49061155a565b80156102015780601f106101d657610100808354040283529160200191610201565b820191906000526020600020905b8154815290600101906020018083116101e457829003601f168201915b505050505080602001905181019061021991906117ed565b90506102616040518060c00160405280600081526020016000815260200160006001600160a01b03168152602001600081526020016000151581526020016000151581525090565b7f390824e83e4c4cf1c3544e4230895bda05eaa2ffb8ffb8cda8a6aa39b3db3f4f33846040516102929291906118c1565b60405180910390a16102a6341560126111c1565b6000602082018190525b600381101561031c57826020015181600381106102cf576102cf6118de565b60200201516001600160a01b03166040830181905233146102f4578160200151610305565b60018260200151610305919061190a565b60208301528061031481611922565b9150506102b0565b506020810151808252610334906001111560136111c1565b604051610347906020808601910161193d565b60408051601f1981840301815291905280516020909101206060820181905260a08084015182146080840181905260e08501519092149083015261039d90610393578160a00151610396565b60015b60146111c1565b6103a56111ea565b8251815260208084015181830152604080850151818401526060808601516001600160a01b03908116918501919091526080808701519091168185015260a0808701518186015260c08088015115159086015260e080880151908601526101008088015115159086015290850151151561012085015284015115156101408401526004600055436001555161043c918391016119b3565b60405160208183030381529060405260029080519060200190610460929190611252565b5050505050565b610477600160005414600b6111c1565b6104918135158061048a57506001548235145b600c6111c1565b6000808055600280546104a39061155a565b80601f01602080910402602001604051908101604052809291908181526020018280546104cf9061155a565b801561051c5780601f106104f15761010080835404028352916020019161051c565b820191906000526020600020905b8154815290600101906020018083116104ff57829003601f168201915b50505050508060200190518101906105349190611a72565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610567929190611b18565b60405180910390a16105808160600151341460096111c1565b8051610598906001600160a01b03163314600a6111c1565b6105a06112d6565b602080830151825260408084015183830152606080850151828501526080808601516001600160a01b039081169286019290925260a0808701519186019190915260c0808701519092169085015260e0850151908401526002600055436001555161060d91839101611b50565b60405160208183030381529060405260029080519060200190610631929190611252565b50505050565b610647600460005414601a6111c1565b6106618135158061065a57506001548235145b601b6111c1565b6000808055600280546106739061155a565b80601f016020809104026020016040519081016040528092919081815260200182805461069f9061155a565b80156106ec5780601f106106c1576101008083540402835291602001916106ec565b820191906000526020600020905b8154815290600101906020018083116106cf57829003601f168201915b50505050508060200190518101906107049190611bd1565b905061074c6040518060c00160405280600081526020016000815260200160006001600160a01b03168152602001600081526020016000151581526020016000151581525090565b7fe41c0d6286f3d37decf310cc51a89dbec86bb6a60978663238c945c4fb1d3508338460405161077d9291906118c1565b60405180910390a1610791341560176111c1565b6000602082018190525b600381101561080757826020015181600381106107ba576107ba6118de565b60200201516001600160a01b03166040830181905233146107df5781602001516107f0565b600182602001516107f0919061190a565b6020830152806107ff81611922565b91505061079b565b50602081015180825261081f906001111560186111c1565b604051610832906020808601910161193d565b60408051601f1981840301815291905280516020909101206060820181905260a08084015182146080840181905260e0850151909214908301526108889061087e578160a00151610881565b60015b60196111c1565b8160c0015161089857600061089f565b8161012001515b156109015781606001516001600160a01b03166108fc83604001519081150290604051600060405180830381858888f193505050501580156108e5573d6000803e3d6000fd5b50600080805560018190556108fc90600290611350565b505050565b816101000151610912576000610919565b8161014001515b1561095f5781608001516001600160a01b03166108fc83604001519081150290604051600060405180830381858888f193505050501580156108e5573d6000803e3d6000fd5b8160c0015161096f576000610975565b80608001515b156109bb5781606001516001600160a01b03166108fc83604001519081150290604051600060405180830381858888f193505050501580156108e5573d6000803e3d6000fd5b8161010001516109cc5760006109d2565b8060a001515b15610a185781608001516001600160a01b03166108fc83604001519081150290604051600060405180830381858888f193505050501580156108e5573d6000803e3d6000fd5b816101400151610a29576000610a2f565b8060a001515b15610a755781608001516001600160a01b03166108fc83604001519081150290604051600060405180830381858888f193505050501580156108e5573d6000803e3d6000fd5b816101200151610a86576000610a8c565b80608001515b15610ad25781606001516001600160a01b03166108fc83604001519081150290604051600060405180830381858888f193505050501580156108e5573d6000803e3d6000fd5b600080805560018190556108fc90600290611350565b610af061138d565b60016000541415610ba557600060028054610b0a9061155a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b369061155a565b8015610b835780601f10610b5857610100808354040283529160200191610b83565b820191906000526020600020905b815481529060010190602001808311610b6657829003601f168201915b5050505050806020019051810190610b9b9190611a72565b6020015192915050565b60026000541415610c5757600060028054610bbf9061155a565b80601f0160208091040260200160405190810160405280929190818152602001828054610beb9061155a565b8015610c385780601f10610c0d57610100808354040283529160200191610c38565b820191906000526020600020905b815481529060010190602001808311610c1b57829003601f168201915b5050505050806020019051810190610c509190611ca0565b5192915050565b60036000541415610d0257600060028054610c719061155a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9d9061155a565b8015610cea5780601f10610cbf57610100808354040283529160200191610cea565b820191906000526020600020905b815481529060010190602001808311610ccd57829003601f168201915b5050505050806020019051810190610c5091906117ed565b60046000541415610dad57600060028054610d1c9061155a565b80601f0160208091040260200160405190810160405280929190818152602001828054610d489061155a565b8015610d955780601f10610d6a57610100808354040283529160200191610d95565b820191906000526020600020905b815481529060010190602001808311610d7857829003601f168201915b5050505050806020019051810190610c509190611bd1565b610db9600060076111c1565b90565b600060606000546002808054610dd19061155a565b80601f0160208091040260200160405190810160405280929190818152602001828054610dfd9061155a565b8015610e4a5780601f10610e1f57610100808354040283529160200191610e4a565b820191906000526020600020905b815481529060010190602001808311610e2d57829003601f168201915b50505050509050915091509091565b610e6960026000541460106111c1565b610e8381351580610e7c57506001548235145b60116111c1565b600080805560028054610e959061155a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec19061155a565b8015610f0e5780601f10610ee357610100808354040283529160200191610f0e565b820191906000526020600020905b815481529060010190602001808311610ef157829003601f168201915b5050505050806020019051810190610f269190611ca0565b9050610f7d604051806101000160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600015158152602001600081526020016000151581525090565b7f5ccc647c49d217150df806d88db2c7ec1e8b7ae41c33bdab26ec16fc3db625d73384604051610fae9291906118c1565b60405180910390a1610fc23415600d6111c1565b6000602082018190525b60038110156110385782602001518160038110610feb57610feb6118de565b60200201516001600160a01b0316604083018190523314611010578160200151611021565b60018260200151611021919061190a565b60208301528061103081611922565b915050610fcc565b5060208101518082526110509060011115600e6111c1565b604051611063906020808601910161193d565b60408051601f1981840301815291815281516020928301206060840152608084015190516110a0920190516001600160b01b031916815260200190565b60408051601f1981840301815291815281516020928301206080840181905260608401511460a084015260c084015190516110ea920190516001600160b01b031916815260200190565b60408051601f19818403018152919052805160209091012060c0820181905260608201511460e082015260a08101516111359061112b578160e0015161112e565b60015b600f6111c1565b61113d6113d8565b8251815260208084015181830152604080850151818401526060808601516001600160a01b039081169185019190915260a08087015190911660808086019190915285015181850152840151151560c08085019190915284015160e08085019190915284015115156101008401526003600055436001555161043c91839101611d52565b816111e65760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518061016001604052806111fe61138d565b815260200161120b611430565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101209091015290565b82805461125e9061155a565b90600052602060002090601f01602090048101928261128057600085556112c6565b82601f1061129957805160ff19168380011785556112c6565b828001600101855582156112c6579182015b828111156112c65782518255916020019190600101906112ab565b506112d292915061144e565b5090565b6040518060e001604052806112e961138d565b81526020016112f6611430565b81526020016000815260200160006001600160a01b03168152602001611332604051806020016040528060006001600160b01b03191681525090565b81526000602080830182905260408051918201815291815291015290565b50805461135c9061155a565b6000825580601f1061136c575050565b601f01602090049060005260206000209081019061138a919061144e565b50565b60405180604001604052806002905b6113c2604080518082018252600080825282516020818101909452908152909182015290565b81526020019060019003908161139c5790505090565b6040518061012001604052806113ec61138d565b81526020016113f9611430565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e09091015290565b60405180606001604052806003906020820280368337509192915050565b5b808211156112d2576000815560010161144f565b60006040828403121561147557600080fd5b50919050565b60006040828403121561148d57600080fd5b6114978383611463565b9392505050565b80516001600160a01b03168252602090810151516001600160b01b0319169082015260400190565b60808101818360005b60028110156114f4576114e383835161149e565b9250602091909101906001016114cf565b50505092915050565b82815260006020604081840152835180604085015260005b8181101561153157858101830151858201606001528201611515565b81811115611543576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061156e57607f821691505b6020821081141561147557634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156115c9576115c961158f565b60405290565b604051610100810167ffffffffffffffff811182821017156115c9576115c961158f565b604051610160810167ffffffffffffffff811182821017156115c9576115c961158f565b6040805190810167ffffffffffffffff811182821017156115c9576115c961158f565b80516001600160a01b038116811461165157600080fd5b919050565b6001600160b01b03198116811461138a57600080fd5b60006020828403121561167e57600080fd5b6040516020810181811067ffffffffffffffff821117156116a1576116a161158f565b806040525080915082516116b481611656565b905292915050565b600082601f8301126116cd57600080fd5b6116d5611617565b8060808401858111156116e757600080fd5b845b818110156117545760408082890312156117035760008081fd5b805181810181811067ffffffffffffffff821117156117245761172461158f565b825261172f8361163a565b8152602091506117418983850161166c565b81830152855293909301926040016116e9565b509095945050505050565b600082601f83011261177057600080fd5b6040516060810181811067ffffffffffffffff821117156117935761179361158f565b6040528060608401858111156117a857600080fd5b845b818110156117c9576117bb8161163a565b8352602092830192016117aa565b509195945050505050565b801515811461138a57600080fd5b8051611651816117d4565b60006101c0828403121561180057600080fd5b6118086115a5565b61181284846116bc565b8152611821846080850161175f565b602082015260e0830151604082015261010061183e81850161163a565b6060830152611850610120850161163a565b608083015261014084015160a083015261186d61016085016117e2565b60c083015261018084015160e083015261188a6101a085016117e2565b908201529392505050565b8035825260208101356118a781611656565b69ffffffffffffffffffff60b01b81166020840152505050565b6001600160a01b0383168152606081016114976020830184611895565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561191d5761191d6118f4565b500190565b6000600019821415611936576119366118f4565b5060010190565b60208101823561194c81611656565b6001600160b01b031916909152919050565b8060005b60028110156106315761197684835161149e565b935060209190910190600101611962565b8060005b60038110156106315781516001600160a01b031684526020938401939091019060010161198b565b6000610200820190506119c782845161195e565b60208301516119d96080840182611987565b50604083015160e08301526060830151610100611a00818501836001600160a01b03169052565b60808501519150610120611a1e818601846001600160a01b03169052565b60a08601516101408681019190915260c0870151151561016087015260e08701516101808701529186015115156101a086015285015115156101c08501528401518015156101e085015290505b5092915050565b60006101a08284031215611a8557600080fd5b611a8d6115cf565b611a968361163a565b8152611aa584602085016116bc565b6020820152611ab78460a0850161175f565b60408201526101008301516060820152611ad4610120840161163a565b6080820152611ae784610140850161166c565b60a0820152611af9610160840161163a565b60c0820152611b0c84610180850161166c565b60e08201529392505050565b6001600160a01b038316815281356020808301919091526060820190830135611b40816117d4565b8015156040840152509392505050565b600061018082019050611b6482845161195e565b6020830151611b766080840182611987565b50604083015160e083015260608301516001600160a01b039081166101008401526080840151516001600160b01b031990811661012085015260a085015190911661014084015260c090930151519092166101609091015290565b60006102008284031215611be457600080fd5b611bec6115f3565b611bf684846116bc565b8152611c05846080850161175f565b602082015260e08301516040820152610100611c2281850161163a565b6060830152610120611c3581860161163a565b60808401526101408086015160a0850152611c5361016087016117e2565b60c085015261018086015160e0850152611c706101a087016117e2565b83850152611c816101c087016117e2565b82850152611c926101e087016117e2565b908401525090949350505050565b60006101808284031215611cb357600080fd5b60405160e0810181811067ffffffffffffffff82111715611cd657611cd661158f565b604052611ce384846116bc565b8152611cf2846080850161175f565b602082015260e08301516040820152611d0e610100840161163a565b6060820152611d2184610120850161166c565b6080820152611d33610140840161163a565b60a0820152611d4684610160850161166c565b60c08201529392505050565b60006101c082019050611d6682845161195e565b6020830151611d786080840182611987565b50604083015160e08301526060830151610100611d9f818501836001600160a01b03169052565b60808501516001600160a01b031661012085015260a085015161014085015260c0850151151561016085015260e08501516101808501528401518015156101a08501529050611a6b56fea2646970667358221220cdb25c21f625970865fc069b6a15e20b6d18d199db429240d6d817d53343a83664736f6c634300080c0033`,
  BytecodeLen: 9498,
  Which: `oD`,
  version: 7,
  views: {
    State: {
      ideaAndAdddress: `State_ideaAndAdddress`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './mindex.rsh:52:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './mindex.rsh:54:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './mindex.rsh:65:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './mindex.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './mindex.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './mindex.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './mindex.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './mindex.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './mindex.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './mindex.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './mindex.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Voter1": Voter1,
  "Voter2": Voter2,
  "Voter3": Voter3
  };
export const _APIs = {
  };
