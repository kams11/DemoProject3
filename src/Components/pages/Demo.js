import React from 'react';
import PRO from './demo.module.css';
import {BsPeople} from "react-icons/bs";
import {BiInfoCircle} from "react-icons/bi";
import {MdAutoGraph} from "react-icons/md";
import {GrFormNext} from "react-icons/gr";
import {GrFormPrevious} from "react-icons/gr";


export const Demo = () =>{
  return (
    <>
    <section>
    <div className={PRO.productcont}>
      
      <div className={PRO.protable}>
      
        <thead>
         <tr style={{backgroundColor:"silver"}}>
          <th><input type="checkbox"></input></th>
          <th className={PRO.tabhead1}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>Object</th>
          <th className={PRO.tabhead1}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>Rev</th>
          <th className={PRO.tabhead1}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>GKey</th>
          <th className={PRO.tabhead1}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>Group</th>
          <th className={PRO.tabhead1}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>Ver</th>
          <th className={PRO.tabhead1}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>Description</th>
          <th className={PRO.tabhead2}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>History</th>
          <th className={PRO.tabhead2}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>Labels</th>
          <th className={PRO.tabhead2}style={{textAlign:"center",color:"rgba(0, 0, 0, 0.897)"}}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className={PRO.tdata} style={{height:"4px"}}>
            <td><input type="checkbox"></input></td>
            <td>Consumer</td>
            <td>1</td>
            <td><BsPeople/></td>
            <td>AP CC</td>
            <td>1</td>
            <td><BiInfoCircle/></td>
            <td><BiInfoCircle/></td>
            <td>TestingDec810Jan26</td>
            <td>New</td>

        </tr>

        <tr style={{height:"2px"}}>
            <td><input type="checkbox"></input></td>
            <td>Consumer</td>
            <td>1</td>
            <td><BsPeople/></td>
            <td>testing09</td>
            <td>1</td>
            <td><BiInfoCircle/></td>
            <td><BiInfoCircle/></td>
            <td>TestingDec810Jan26</td>
            <td>New</td>

        </tr>

        <tr style={{height:"2px"}}>
            <td><input type="checkbox"></input></td>
            <td>Consumer_PROD</td>
            <td>1</td>
            <td><MdAutoGraph/></td>
            <td>SGT_VIT</td>
            <td>1</td>
            <td><BiInfoCircle/></td>
            <td><BiInfoCircle/></td>
            <td>TestLabel02</td>
            <td>New</td>

        </tr>

        
        
      </tbody>
      
    
    <div style={{display:"inline-flex",marginTop:"10px",gap:"20%"}}>
    <GrFormPrevious size={35}/>
    <button className={PRO.butn2}>1</button>
    <GrFormNext size={35}/>
    </div>
      </div>
    </div>
    </section>
    </>
    
  );
};

export default Demo;