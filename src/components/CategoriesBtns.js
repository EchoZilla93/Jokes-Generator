import React,{useState} from 'react';

const CategoriesBtns = () => {
    const [btnClick,setBtnClick] = useState(false);
/*
    const onBtnClick = () => {
        //const target = e.target;
            return function(){
                let btnStatus;
                if(btnClick){
                    return btnStatus = 'active'
                }else if(!btnClick){
                    return btnStatus = 'nonActive'
                }
                console.log(btnStatus);
                return btnStatus;
            }
    }

    let btnStatus;
   if(btnClick){
       return btnStatus = 'active'
   }else if(!btnClick){
       return btnStatus = 'nonActive'
   }
    */

    return(
        <span className="btnContainer">
            <button 
            className={`btnContainer__btn  ${btnClick? 'active': 'nonActive'}`} 
            onClick={()=> setBtnClick(!btnClick)}>animal</button>
            <button 
            className={`btnContainer__btn ${btnClick? 'active': 'nonActive'}`} 
            onClick={()=> setBtnClick(!btnClick)}>career</button>
            <button 
            className={`btnContainer__btn ${btnClick? 'active': 'nonActive'}`} 
            onClick={()=> setBtnClick(!btnClick)}>celebrity</button>
            <button 
            className={`btnContainer__btn ${btnClick? 'active': 'nonActive'}`} 
            onClick={()=> setBtnClick(!btnClick)}>dev</button>
        </span>
    );
};

export default CategoriesBtns;