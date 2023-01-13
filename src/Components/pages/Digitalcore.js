import {React , useState} from 'react';
import DA from "./digitalcore.module.css";
import {BiSearchAlt2} from "react-icons/bi";
import {AiOutlineClear} from "react-icons/ai";


import {AiOutlineFile} from "react-icons/ai";
import {AiOutlineFileAdd} from "react-icons/ai";
import {ImFilesEmpty} from "react-icons/im";
import {MdDelete} from "react-icons/md";


import {AiOutlineDoubleRight} from "react-icons/ai";
import {TiTick} from "react-icons/ti";
import {IoIosCloseCircle} from "react-icons/io";
import {GrChapterAdd} from "react-icons/gr";
import {IoMdSettings} from "react-icons/io";
import { BsChevronDown } from 'react-icons/bs';


const Digitalcore = () => {

    const [toggleT1,setToggleT1] = useState(false);

    const toggleHandlerT1 =(e) =>{
            e.preventDefault();
        setToggleT1(!toggleT1);

    }
    
  return (
    <>
    <section class={DA.signupBody} style={{height:"100vh",paddingTop:"20px",textAlign:"center"}}>
        <div className={DA.forms}>
          <div>
            <label className={DA.fclabel} htmlFor="">Search</label> <br />
              <input className={DA.fcinp} type="text" placeholder='Search' />
          </div>
          <div>
            <label className={DA.fclabel} htmlFor="">Grouping Key</label> <br />
            <select id="gkey" name="status" className={DA.fcfield} placeholder='ALL' >
                                <option value="111">ALL</option>
                                <option value="222">gk1</option>
                                <option value="333">gk2</option>
                                <option value="444">gk3</option>
                        </select>
          </div>
          <div>
            <label className={DA.fclabel} htmlFor="">Group Name</label> <br />
            <select id="gname" name="gname" className={DA.fcfield} placeholder='ALL'>
                                <option value="111">ALL</option>
                                <option value="222">AP CC</option>
                                <option value="333">testing09</option>
                                <option value="444">SGT_VIT</option>
                        </select>
          </div>
          <div>
            <label className={DA.fclabel} htmlFor="">Status</label> <br />
            <select id="status" name="status" className={DA.fcfield} placeholder='ALL'>
                                <option value="111">ALL</option>
                                <option value="222">NEW</option>
                                <option value="333">OLD</option>
                                <option value="444">YESTERDAY</option>
                        </select>
          </div>
          <div className={DA.check}>
            <label className={DA.fclabel} htmlFor="">In-Active</label><input type="checkbox" />
          </div>
          <div className={DA.search}>
                <button><BiSearchAlt2/></button> 
                 <button><AiOutlineClear/></button>
                </div> 
          
</div>
      
    <div className={DA.btnsdiv}>
      <button onClick={toggleHandlerT1} >Object</button>
      <button>Business mapping</button>
      <button>Technical Steps</button>
      <button>Technical Mapping</button>
    </div>
   

    <div className={DA.iconsdiv}>
      <div className={DA.iconsdiv1}> 
        <button><BiSearchAlt2/></button>
        <button><AiOutlineFile/></button>
        <button><AiOutlineFileAdd/></button> 
        <button><ImFilesEmpty/></button>
        <button><MdDelete/></button>

       </div>


      <div className={DA.iconsdiv2}>
      <button><AiOutlineDoubleRight/></button>
      <button><TiTick/></button>
      <button><IoIosCloseCircle/></button>
      <button><GrChapterAdd/></button>
      <button><IoMdSettings/></button>
       </div>

      <div className={DA.iconsdiv3}> <button> Download<BsChevronDown/>  </button></div>
    </div>
    {toggleT1?<Demo/>:null}
    </section>
    </>
  )
}

export default Digitalcore;


