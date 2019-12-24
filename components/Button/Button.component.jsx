import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ( props )  => {   
     
    return(
            
             <button className={props.buttons} onClick={props.click}>
                <FontAwesomeIcon 
                 icon={props.logo} 
                 className={props.align} 
                 />{props.title}
             </button>
          )
}

export default Button;