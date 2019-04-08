import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text, Card, CardItem, Left, Body } from 'native-base';
import { PostAddNewFriend } from '../../actions/index';

class PostNewFriend extends Component {
    Add() {
       const id = this.props.data.Id;
       this.props.PostAddNewFriend({ id });
    }
    render() {
        if (this.props.data) {
            return (
                <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Body>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                     Ad Soyad :
                     {this.props.data.Name}
                     </Text>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/gender-neutral-user.png' }} />
                     Kullanıcı Adı:
                     {this.props.data.UserName}
                     </Text>
                   </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                  <Button rounded warning onPress={() => this.Add()}>
                  <Text> {this.props.addfriend} </Text>
                  </Button>
                  </Left>
                </CardItem>
              </Card>
                   
            );
        }
        if (this.props.datax) {
            return (
                <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Body>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                     Ad Soyad :
                     {this.props.datax.Name}
                     </Text>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/gender-neutral-user.png' }} />
                     Kullanıcı Adı:
                     {this.props.datax.UserName}
                     </Text>
                   </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                  <Button rounded danger >
                  <Text> {this.props.yourfriend} </Text>
                  </Button>
                  </Left>
                </CardItem>
              </Card>
                   
            );
        }
        if (this.props.dataz) {
            return (
                <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Body>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                     Ad Soyad :
                     {this.props.dataz.Name}
                     </Text>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/gender-neutral-user.png' }} />
                     Kullanıcı Adı:
                     {this.props.dataz.UserName}
                     </Text>
                   </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                  <Button rounded info >
                  <Text> {this.props.reqfriend} </Text>
                  </Button>
                  </Left>
                </CardItem>
              </Card>
                   
            );
        }
        if (this.props.retfriend) {
            return (
                <Card style={{ flex: 0 }}>
                <CardItem>
                    <Body>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/bubbles/50/000000/box-important.png' }} />
                     {this.props.retfriend} :)
                     </Text>
                   </Body>
                </CardItem>
              </Card>
                   
            );
        }
        if (this.props.nofriend) {
            return (
                <Card style={{ flex: 0 }}>
                <CardItem>
                    <Body>
                     <Text> 
                     <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/bubbles/50/000000/box-important.png' }} />
                     {this.props.nofriend}
                     </Text>
                   </Body>
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
export default connect(null, { PostAddNewFriend })(PostNewFriend);

