import React , {Component} from 'react';

import './App.css';
import Title from './components/title/title'
import Search from './components/search/search'
import Audio from './components/audio/audio'
import Song from './components/song/Song'


class App extends Component {
  constructor(){
    super();
    this.postID=0;
    this.Track="";
    this.Artist="";
    this.Length="";
    this.Path="";
    this.state = {
      postArray:[]
      
      }
    
    }
  deleteEvent =(ind)=>{
    const  copyPostArray =Object.assign([],this.state.postArray);
    copyPostArray.splice(ind,1);
    this.setState({postArray:copyPostArray})
    }
    
    setTrack=(element) => {
    this.Track=element.target.value;
    
    }
    
    setArtist=(element) => {
      this.Artist=element.target.value;
      
      }
    
    setLength=(element) => {
        this.Length=element.target.value;
        
        }
    setPath=(element)=>{
        this.Path=element.target.value;
        }

    addTrack=()=>{
    
    this.postID=this.postID+1;
    const copyPostArray=Object.assign([],this.state.postArray);
    copyPostArray.push({
    id:this.postID,
    track:this.Track,
    artist:this.Artist,
    length:this.Length,
    path:this.Path
    });
    this.setState({postArray:copyPostArray})
    

    var audio = document.getElementById('audio');
    audio.load();
    audio.play();
    }
    
    
    
  render (){
  return (
    <div >
      
      <Title />
      <Search />
      <Audio path={this.Path}/>
      {this.state.postArray.map((post,ind)=>{
        return(
        
          <Song key={post.id} id={post.id} track={post.track} artist={post.artist} length={post.length} delete={this.deleteEvent.bind(this,ind)} />
        )
      })}
     <button className="add" onClick={this.addTrack}>Add New Track</button>
     <form>
     
       <input type="text" onBlur={this.setTrack} placeholder="...enter track name"/>
       <input type="text" onBlur={this.setArtist} placeholder="...enter artist name"/>
       <input type="number" onBlur={this.setLength} placeholder="...enter track length"/>
       <input type="text" onBlur={this.setPath} placeholder="...enter track path"/>
      </form>
      
    </div>
  );
}
}

export default App;
