import React, {Component} from 'react';
import moment from 'moment'

class Calender extends Component {

    constructor(){
        super();
        this.state = {
        }
    }

    

    render(){

        console.table(moment.weekdaysShort());

        return(
            <div id="calender-container">
                <h2>Calender</h2>
            </div>
        );
    }
}


export default Calender;