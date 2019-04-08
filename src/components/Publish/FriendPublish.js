import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    Card,
    CardItem, 
    Text, 
    Left, 
    Body,
    Button
} from 'native-base';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/tr';
import { MyFriendPubList, DeletePub, MyPubComment } from '../../actions/index';

class FrPublish extends Component {
    state = { data: [] };
    componentWillMount() {
        moment.locale('tr');
        this.props.MyFriendPubList();
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.PublishArray });
    }
    Comments(item) {
      const pubid = item.PublishId;
      this.props.MyPubComment({ pubid });
    }
    CommentAdd(item) {
      Actions.friendcom({ ydata: item });
    }
    renderItem = ({ item }) => {
        return (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                 Etkinlik Sahibi :
                 {item.PublisherName}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/tag-window.png' }} />
                  Başlık :
                 {item.PublishTitle}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/calendar.png' }} />
                  Oluşturulma Tarihi:
                 {moment(item.PublishTime).format('Do MMMM YYYY HH:mm')}
                 </Text>
               </Body>
              </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text> {item.PublishContent}</Text>
                </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded info onPress={() => this.Comments(item)}>
              <Text> Yorumlar </Text>
              </Button>
              <Text />
              <Button rounded primary onPress={() => this.CommentAdd(item)}>
              <Text> Yorum Ekle </Text>
              </Button>
              <Text />
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
                   <Text>Henüz arkadaşlarınız bir etkinlik oluşturmamış.
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

const mapStateToProps = ({ friendpub }) => {
    const PublishArray = _.map(friendpub, (val, uid) => {
        return { ...val, uid };
    });
    return { PublishArray };
};
export default connect(mapStateToProps, { MyFriendPubList, DeletePub, MyPubComment })(FrPublish);
