import React, {Component} from 'react';
import './MovieOutput.css';


class MovieOutput extends Component {
    render(){
        


        return(
                <li className="media-info">
                    <strong>{this.props.media.title}</strong>:  {this.props.media.release} {this.props.media.category} <a href="#" onClick={this.deleteMedia.bind(this)}>X</a> 
                </li>
        );
    }
}

export default MovieOutput;