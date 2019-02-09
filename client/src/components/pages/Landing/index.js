import React from "react";

class Landing extends React.Component {
  state = {
  };
  
  fileSelectedHandler = event => {
    console.log(event.target.files);
  }

  render() {
    return (
   <div className= "App">
      <input type="file" onChange= {this.fileSelectedHandler}/>
   </div>
    );
  }
}

export default Landing;
