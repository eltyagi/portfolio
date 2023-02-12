import React from 'react';
import './home_body_1.css';


class home_body_1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
  return (
    <div className="home_body_1">
      <div className = 'home_body_1_horizontal-line'></div>
      <div className = 'home_body_1_text'>g</div>
      <div className = 'home_body_1_circle'></div>
      <div className = 'home_body_1_text'>i</div>
      <div className = 'home_body_1_horizontal-line'></div>
    </div>
  );
  }
}

export default home_body_1;