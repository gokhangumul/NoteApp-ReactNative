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
import { MyPubList, DeletePub, MyPubComment, GetMyfile } from '../../actions/index';

class MyFriend extends Component {
    state = { data: [] };
    componentWillMount() {
        moment.locale('tr');
        this.props.MyPubList();
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.PublishArray });
    }
    Update(item) {
      Actions.updatemypub({ udata: item });
    }
    Delete(item) {
      const id = item.Id;
      this.props.DeletePub({ id });
    }
    Comments(item) {
      const pubid = item.Id;
      this.props.MyPubComment({ pubid });
    }
    CommentAdd(item) {
      Actions.addcom({ xdata: item });
    }
    GetFiles(item) {
      const id = item.Id;
      this.props.GetMyfile({ id });
    }
    renderItem = ({ item }) => {
        return (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/tag-window.png' }} />
                  Başlık :
                 {item.PubTitle}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/calendar.png' }} />
                  Oluşturulma Tarihi:
                 {moment(item.PubCreatedDate).format('Do MMMM YYYY HH:mm')}
                 </Text>
               </Body>
              </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text> {item.PubContent}</Text>
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
              <Button rounded primary onPress={() => this.GetFiles(item)}>
              <Text>Dosyalar</Text>
              </Button>
              </Left>
            </CardItem>
            <CardItem>
            <Left>
              <Button rounded warning onPress={() => this.Update(item)}>
                <Text> Güncelle </Text>
              </Button>
              <Text />
              <Button rounded danger onPress={() => this.Delete(item)}>
              <Text> Etkİnlİk Sİl </Text>
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
                   <Text>Henüz oluşturmuş olduğunuz bir etkinliğiniz yok yandaki buton 
                       ile kolayca etkinlik oluşturabilirsiniz.
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

const mapStateToProps = ({ listmypub }) => {
    const PublishArray = _.map(listmypub, (val, uid) => {
        return { ...val, uid };
    });
    return { PublishArray };
};
export default connect(mapStateToProps, {
   MyPubList, DeletePub, MyPubComment, GetMyfile })(MyFriend);
