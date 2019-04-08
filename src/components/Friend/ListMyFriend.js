import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, Image } from 'react-native';
import {
    Card,
    CardItem, 
    Text, 
    Left, 
    Body,
    Button
} from 'native-base';
import _ from 'lodash';
import { FriendList, DeleteFriend } from '../../actions/index';

class MyFriend extends Component {
    state = { data: [] };
    componentWillMount() {
        this.props.FriendList();
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.FriendArray });
    }
    DeleteFriend(item) {
      const id = item.Id;
      this.props.DeleteFriend({ id });
    }
    renderItem = ({ item }) => {
        return (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                 Ad Soyad :
                 {item.Name}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/office/16/000000/gender-neutral-user.png' }} />
                 Kullanıcı Adı:
                 {item.UserName}
                 </Text>
               </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded warning onPress={() => this.DeleteFriend(item)}>
              <Text> Arkadaşlarımdan Çıkar </Text>
              </Button>
              </Left>
            </CardItem>
          </Card>
        ); 
    }
    render() {
      if (this.state.data.length > 0) {
        return (
          
          <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}    
          />    
      );
      }
      return (
          <Card style={{ flex: 0 }}>
             <CardItem>
                 <Body>
                   <Text>Henüz arkadaşınız yok yandaki buton 
                       ile kolayca arkadaş ekleyebilirisiniz.
                    </Text>
                 </Body>
             </CardItem>
         </Card>
      ); 
    }
}

const styles = StyleSheet.create({
    catyok: {
        height: 0,
        width: 0
    },
    catvar: {

    },
    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        justifyContent: 'center'
    },
    empty: {
      height: 0
    },
    dolu: {
      flex: 1
    }

});

const mapStateToProps = ({ friends }) => {
    const FriendArray = _.map(friends, (val, uid) => {
        return { ...val, uid };
    });
    return { FriendArray };
};
export default connect(mapStateToProps, { FriendList, DeleteFriend })(MyFriend);
