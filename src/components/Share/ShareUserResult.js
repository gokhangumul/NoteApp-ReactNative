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
import { DeleteShare } from '../../actions/index';

class ShareUres extends Component {
    state = { data: [] };
    componentWillMount() {
        moment.locale('tr');
        this.setState({ data: this.props.ShareArray });
    }
    DeleteShareUser(item) {
      const userid = item.UserId;
      const notid = item.NotId;
      this.props.DeleteShare({ userid, notid });
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
                 <Text>
                  <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/calendar.png' }} />
                  Paylaşılma Tarihi:
                  {moment(item.ShareDate).format('Do MMMM YYYY HH:mm')}
                 </Text>
               </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded warning onPress={() => this.DeleteShareUser(item)}>
              <Text> Paylaşımı kaldır </Text>
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
                   <Text />
                 </Body>
             </CardItem>
         </Card>
      ); 
    }
}

const styles = StyleSheet.create({
    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        justifyContent: 'center'
    }
});

const mapStateToProps = ({ shareresult }) => {
    const ShareArray = _.map(shareresult, (val, uid) => {
        return { ...val, uid };
    });
    return { ShareArray };
};
export default connect(mapStateToProps, { DeleteShare })(ShareUres);
