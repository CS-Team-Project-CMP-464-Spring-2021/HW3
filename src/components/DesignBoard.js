import React from 'react';
import '../DesignBoard.css';
import DesignPad from './DesignPad';

class DesignBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    allowDrop = (event) => {
            event.preventDefault();
    }
    drop = (event) => {
            event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.style.backgroundColor = data;
    }

render() {
    return(
        <div className="flex-container">
            <div className="flex-containers flex-wrap" id="designPad">
                <div className="layout" id= "box1" onDrop= {this.drop} onDragOver={this.allowDrop}></div>
                <div className="layout"></div>
                <div className="layout"></div>
                <div className="layout"></div>
            </div>

        </div>
    );

}
}

export default DesignBoard;