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
import { FriendReqList, AcFriendReq, RejFriendReq } from '../../actions/index';

class MyFriendRequest extends Component {
    state = { data: [] };
    componentWillMount() {
        this.props.FriendReqList();
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.FriendArray });
    }
    AcceptReq(item) {
        const id = item.Id;
        this.props.AcFriendReq({ id });
    }
    RejectReq(item) {
        const id = item.Id;
        this.props.RejFriendReq({ id });
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
              <Button rounded info onPress={() => this.AcceptReq(item)}>
              <Text> Kabul et </Text>
              </Button>
              <Text />
              <Button rounded danger onPress={() => this.RejectReq(item)} >
              <Text> Sil </Text>
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
                   <Text>Henüz bir arkadaşlık isteğininiz yok.</Text>
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

const mapStateToProps = ({ friendreq }) => {
    const FriendArray = _.map(friendreq, (val, uid) => {
        return { ...val, uid };
    });
    return { FriendArray };
};
export default connect(mapStateToProps, { 
  FriendReqList, AcFriendReq, RejFriendReq })(MyFriendRequest);
