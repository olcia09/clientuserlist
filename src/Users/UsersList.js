
import React from 'react';


class UserList extends React.Component {


  state = {
    results: [
      
    ]
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
        console.log(data)
      this.setState(data);
    })
}

  render() {
    return (
      <div >
        <div>Lista fajnych ludzi</div>
        <div >Siemka</div>
        {this.state.results.map(item => (
          <div>
            <div>{item.name.first}</div>
          </div>
        ))}
      </div>
    );
  }
}

 export default UserList;