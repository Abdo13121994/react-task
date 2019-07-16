import React , {Component} from 'react';
import './song.css'

class Song extends Component {
    render (){
    return (
      <div className='element'>
      {this.props.id} &nbsp; - &nbsp;
      <h6>{this.props.track}</h6> &nbsp; - &nbsp; <h6>{this.props.artist}</h6>
      <button className="remove" onClick={this.props.delete}>X</button>
      <br/>{this.props.length}<br/>
      </div>
    );
  }
  }
  
  export default Song;
  