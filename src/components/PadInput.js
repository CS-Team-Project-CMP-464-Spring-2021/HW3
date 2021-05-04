import React from 'react';
import '../PadInput.css';



class PadInput extends React.Component {
    constructor(props) {
        super(props)
        
    }

    drag = (event) => {
        event.dataTransfer.setData("text", event.target.id);

    }


render() {
    return (
        
        <div className="Container-Row" id = "pad-container">
          
            <div className="column-flex box-container">

                <div className="min-rectangle "id="blue" draggable = {"true"} onDragStart= {this.drag}>1</div>
                <div className="min-rectangle"id="red" draggable = {"true"} onDragStart= {this.drag}>2</div>
                <div className="min-rectangle"id="green" draggable = {"true"} onDragStart= {this.drag}>3</div>
                <div className="min-rectangle"id="yellow" draggable = {"true"} onDragStart= {this.drag}>4</div>
                <div className="min-rectangle"id="orange" draggable = {"true"} onDragStart= {this.drag}>5</div>
                <div className="min-rectangle"id="black" draggable = {"true"} onDragStart= {this.drag}>6</div>
                <div className="min-rectangle"id="white" draggable = {"true"} onDragStart= {this.drag}>7</div>
                <div className="min-rectangle"id="gray" draggable = {"true"} onDragStart= {this.drag}>8</div>

            </div>


        </div>



    );
}
    
}



export default PadInput;