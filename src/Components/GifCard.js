import React, { Component } from "react";
import SearchField from "./SearchField";
import axios from "axios";



class GifCard extends Component {
    constructor(props){
      super(props);
        this.state={
          gifData: [],
          randomData: "",
          searchInput: "",
          showRandom: null,
        };
      }
  
  
  handleInput = (event) => {
    this.setState({searchInput: event.target.value});
  }
  handleSearch = () =>{
    const searchInput = this.state.searchInput;
    const API_KEY = "vY6Stl3KZeePYnRRiShdC9o3ohkcNGmX";
    const url = "http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=" + API_KEY;
    axios
      .get(url, { params: {key: API_KEY}})
      .then((response) =>{
       this.setState({gifData: response.data.data});
       this.setState({showRandom : false});
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleTrend = () =>{
    const API_KEY = "vY6Stl3KZeePYnRRiShdC9o3ohkcNGmX";
    const url = " http://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY;
     axios
      .get(url, { params: {key: API_KEY}})
      .then((response) =>{
       this.setState({gifData: response.data.data});
       this.setState({showRandom : false})
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleRandom = () =>{
    const API_KEY = "vY6Stl3KZeePYnRRiShdC9o3ohkcNGmX";
    const url = "http://api.giphy.com/v1/gifs/random?api_key=" + API_KEY;
    axios
      .get(url, { params: {key: API_KEY}})
      .then((response) =>{
        this.setState({randomData: response.data.data.images.downsized_large.url});
        this.setState({showRandom : true});
       console.log(this.state.randomData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render(){
    let displayRandom = this.state.showrandom;
     return(
       <div>
         <SearchField
           value = {this.state.searchInput}
           onChange = {this.handleInput}
           onSearch = {this.handleSearch}
           onTrend = {this.handleTrend}
           onRandom = {this.handleRandom}
         />
        <div className="content">
          {this.state.gifData.map(data => {
            if(this.state.showRandom!==true){return (
              <div  className ="gifCardnText">
                <div><h3 class="gifText">{data.title}</h3></div>
                <div class="card" >
                   <div><img src={data.images.downsized_large.url} class="GifOut" alt="gif"></img>  </div>  
                </div>
             </div>
            )}
          })}
             <div><img src={this.state.randomData}/></div>
        </div>
       </div>
     );
    }
  }
  
  export default GifCard;