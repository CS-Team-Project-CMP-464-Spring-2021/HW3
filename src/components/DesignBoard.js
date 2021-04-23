import React from 'react';
import '../DesignBoard.css';


const DesignBoard = () => {

    return(
        <div class="flex-container">
            <div class="flex-container flex-wrap" id="designPad">
                <div class="layout"></div>
                <div class="layout"></div>
                <div class="layout"></div>
                <div class="layout"></div>
            </div>

        </div>
    );

}



// const DesignBoard = () => {
//     return(
//         <div>
//             <DesignPad /> //originally what the constant above that returns the Flex-container was supposed to be called
            
//         </div>

//     );
    
// }

export default DesignBoard;