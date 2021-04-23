import React from 'react';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';


class DesignContainer extends React.Component {
    constructor(props){
        super(props)
          
    }



    render(){

        return(
            <div className="container">
                <h1 style={{color:"black"}}>DESIGN PAD</h1>

                <DesignBoard />
    
                
            </div>
    
        );
    }
}

export default DesignContainer;
