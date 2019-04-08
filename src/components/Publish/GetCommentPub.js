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
import moment from 'moment';
import 'moment/locale/tr';
import { } from '../../actions/index';

class PublishGetComment extends Component {
    state = { data: [], pubdata: [] };
    componentWillMount() {
        moment.locale('tr');
        if (this.props.publish) {
            this.setState({ data: this.props.PublishCommentArray });
            this.setState({ pubdata: this.props.publish });
        } else {
            this.setState({ data: this.props.PublishCommentArray });
        }
    }
    renderItem = ({ item }) => {
        return (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                  Adsoyad :
                 {item.CommenterName}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                  Kullanıcı Adı :
                 {item.CommenterUserName}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/calendar.png' }} />
                  Yorum Tarihi:
                 {moment(item.CommentTime).format('Do MMMM YYYY HH:mm')}
                 </Text>
               </Body>
              </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text> {item.CommentContent}</Text>
                </Body>
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
                   <Text>
                       Bu etkinliğe henüz yorum yapılmamış.
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

const mapStateToProps = ({ pubcom }) => {
    const PublishCommentArray = _.map(pubcom.Comments, (val, uid) => {
        return { ...val, uid };
    });
    const publish = pubcom.Publish;
    return { PublishCommentArray, publish };
};
export default connect(mapStateToProps, { })(PublishGetComment);
