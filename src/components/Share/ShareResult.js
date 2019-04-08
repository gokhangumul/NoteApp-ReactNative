import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text, Card, CardItem, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

class ShareRes extends Component {
    render() {
        if (this.props.yourfriend) {
            return (
                <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Body>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/cotton/64/000000/checkmark.png' }} />
                     {this.props.yourfriend}
                     </Text>
                   </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                  <Button block info onPress={() => Actions.drawer()}>
                  <Text> Anasayfa </Text>
                  </Button>
                  </Left>
                </CardItem>
              </Card>
                   
            );
        }
        if (this.props.sharefail) {
            return (
                <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Body>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/bubbles/50/000000/close-window.png' }} />
                     {this.props.sharefail}
                     </Text>
                   </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                  <Button block primary onPress={() => Actions.drawer()}>
                  <Text> Anasayfa </Text>
                  </Button>
                  </Left>
                </CardItem>
              </Card>
                   
            );
        }
    }
}
const styles = StyleSheet.create({
      inputIcon: {
          width: 30,
          height: 30,
          marginLeft: 15,
          justifyContent: 'center'
      }
    
});
export default connect(null, { })(ShareRes);

