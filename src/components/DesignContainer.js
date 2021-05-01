import React from 'react';
import DesignBoard from './DesignBoard';
import PadInput from './PadInput';


class DesignContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            black: true,
            disabled: true,
        }
          
    }

    changeColor = () => {

        this.setState({black: !this.state.black});
        this.setState({
        disabled: !this.state.disabled,
        });
    }



    render(){

        const simple = this.state; 
        const btn = simple.black ? "blackButton" : "redButton";

        return(

            <div className="container">
                <h1 style={{color:"black"}}>DESIGN PAD</h1>
                <button className={btn} onClick={this.changeColor.bind(this)}>Edit</button>

                <div>
                    <div disabled={this.state.disabled}>
                        <PadInput />
                     </div>
                    <DesignBoard />
                </div>
                
            </div>

    
        );
    }
}

export default DesignContainer;
