import React , {Component} from 'react';

import './search.css';



class Search extends Component {

searching(){
  var input = document.getElementById('Search');
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('element');

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
  
}

  render (){
  return (
    < div >
      <label>Search :</label>
	    <input type="text" id="Search" onKeyUp={this.searching} placeholder="Search by track name" />
      </div >
  );
}
}

export default Search;