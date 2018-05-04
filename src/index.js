import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'
import $ from 'jquery';

class Alarm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        alarms: [],
      };
    }

    componentDidMount(){
        var that = this;
        $.ajax({
            method: 'GET',
            url: 'http://localhost:8000/api/alarms/',
            success: function (result) {
                that.setState({
                    alarms: result,
                });
            }
        });
    }
  
    render() {  
      return (
        <div>
          {this.state.alarms.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Alarm />,
    document.getElementById('root')
  );