import React from 'react';
import '../PadInput.css';



class PadInput extends React.Component {
    constructor(props) {
        super(props)
        
    }


render() {
    return (
        
        <div className="Container-Row" id = "pad-container">
          
            <div className="column-flex box-container">

                <div className="min-rectangle " id="blue" draggable = {"true"} onDragStart= {this.drag}>1</div>
                <div className="min-rectangle">2</div>
                <div className="min-rectangle">3</div>
                <div className="min-rectangle">4</div>
                <div className="min-rectangle">5</div>
                <div className="min-rectangle">6</div>
                <div className="min-rectangle">7</div>
                <div className="min-rectangle">8</div>

            </div>


        </div>



    );
}
    
}



export default PadInput;