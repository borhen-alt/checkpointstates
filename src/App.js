import React from "react";
import "./App.css";
import Profile from "./Component/exer";
class App extends React.Component {
  state= {
shows: true ,
fullName:"mimouni borhen",
profession:"technicien supérieur en marketing et multimédia",
bio: "La vie finie par remettre chaque personne à sa juste place",
imgSrc: (
<img src ="/moimeme.png" alt=""/>
),
  };
  render (){
const buttonSH = this.state.shows ? "Hide profile" : "Show profile";
return (
  <div className="App">
   <div className="monprof">
     <h1>profile</h1>
   </div> 
    {this.state.shows ? (
      <div className="profileElement">
        <h2>{this.state.fullName}</h2>
        <h3>{this.state.profession} </h3>
        <div>{this.state.imgSrc}</div>
<p>
  <b>Bio:</b>
  <br/>
  {this.state.bio}
</p>
      </div>
    ) : null}
<button onClick = {() => this.setState({shows: ! this.state.shows}) }>
  {buttonSH}
</button>
<Profile/>
  </div>
);
  }
}
export default App;