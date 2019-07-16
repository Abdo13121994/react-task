import React , {Component} from 'react';

import './audio.css';

class Audio extends Component {
  
  render (){
  return (
    <div >
     <audio id="audio" controls>
     <source   src={this.props.path} type="audio/mpeg" />
	  </audio>
    </div>
  );
}
}

export default Audio;