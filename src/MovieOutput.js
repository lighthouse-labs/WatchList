import React, {Component} from 'react';
import './MovieOutput.css';


class MovieOutput extends Component {
    
    deleteMedia(id){
        this.props.onDelete(id);
    }


    render(){
        return(
                <li className="media-info">
                    <strong>{this.props.media.title}</strong>:  {this.props.media.release} {this.props.media.category} <button onClick={this.deleteMedia.bind(this, this.props.media.id)}>X</button> 
                </li>
        );
    }
}

export default MovieOutput;