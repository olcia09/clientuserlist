
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class UserList extends React.Component {

  state = {
    results: [
      { name: 'Mariola' },
      { name: 'Kazik' },
      { name: 'Mieczysław' }
    ]
  }

  render() {

    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      this.setState(data);
    })

    return (
      <View style={styles.container}>
        <Text>Lista fajnych ludzi</Text>
        <Text style={styles.text}>Siemka</Text>
        {this.state.results.map(item => (
          <View>
            <Text>{item.name.first}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 27
  }
});


 export default UserList;