import React from 'react';
import '../DesignBoard.css';
import designPad from './DesignPad';

class DesignBoard extends React.Component {
    constructor(props) {
        super(props)
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