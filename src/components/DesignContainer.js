import React from 'react';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';


class DesignContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            black: true
        }
          
    }

    changeColor = () => {

        this.setState({black: !this.state.black})
    }
    



    render(){

        // const simple = this.state; 
        const btn = this.state.black ? "blackButton" : "redButton";

        return(

            <div className="container">
                <h1 style={{color:"black"}}>DESIGN PAD</h1>
                <button className={btn} onClick={this.changeColor.bind(this.state.btn)}>Edit</button>

                <div>
                    <PadInput/>
                    <DesignBoard />
                </div>
                
            </div>
            

    
        );
    }
}

export default DesignContainer;
