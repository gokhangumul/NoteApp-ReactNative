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
import { ShareUser, ShareResult } from '../../actions/index';

class ShareUserh extends Component {
    state = { data: [] };
    componentWillMount() {
        moment.locale('tr');
        this.props.ShareUser();
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.noteArray });
    }
    ShareResult(item) {
      const notid = item.Id;
      this.props.ShareResult({ notid });
    }
    renderItem = ({ item }) => {
      if (item.privateNoteCategoryId) {
        return (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                 Paylaşan:
                 {item.FromUserName}
                 </Text>
                 <Text style={item.ModifiedName ? styles.guncelvar : styles.guncelyok}> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                 Son Güncelleyen:
                 {item.ModifiedName}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/tag-window.png' }} />
                 {item.NoteTitle}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/align-justify.png' }} />
                 {item.NoteDescription}
                 </Text>
                 <Text>
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/opened-folder.png' }} />
                 {item.PCategoryName}
                 </Text>
                  <Text>
                  <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/calendar.png' }} />
                  Oluşturulma:
                  {moment(item.NoteCreatedDate).format('Do MMMM YYYY HH:mm')}
                 </Text>
                 <Text style={item.NoteModifiedDate ? styles.guncelvar : styles.guncelyok}>
                  <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/calendar.png' }} />
                  Güncellenme:
                  {moment(item.NoteModifiedDate).format('Do MMMM YYYY HH:mm')}
                 </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {item.NoteContent}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded danger onPress={() => this.ShareResult(item)}>
              <Text> Paylaşınları Gör </Text>
              </Button>
              <Text />
              </Left>
            </CardItem>
          </Card>
        ); 
      }
        return (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                 Paylaşan:
                 {item.FromUserName}
                 </Text>
                 <Text style={item.ModifiedName ? styles.guncelvar : styles.guncelyok}> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png' }} />
                 Son Güncelleyen:
                 {item.ModifiedName}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/tag-window.png' }} />
                 {item.NoteTitle}
                 </Text>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/align-justify.png' }} />
                 {item.NoteDescription}
                 </Text>
                 <Text>
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/opened-folder.png' }} />
                 {item.CategoryName}
                 </Text>
                  <Text>
                  <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/calendar.png' }} />
                  Oluşturulma:
                  {moment(item.NoteCreatedDate).format('Do MMMM YYYY HH:mm')}
                 </Text>
                 <Text style={item.NoteModifiedDate ? styles.guncelvar : styles.guncelyok}>
                  <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/calendar.png' }} />
                  Güncellenme:
                  {moment(item.NoteModifiedDate).format('Do MMMM YYYY HH:mm')}
                 </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {item.NoteContent}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded danger onPress={() => this.ShareResult(item)}>
              <Text> Paylaşınları Gör </Text>
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
                   <Text>Henüz kimse ile not paylaşılmadı.</Text>
                 </Body>
             </CardItem>
         </Card>
      ); 
    }
}

const styles = StyleSheet.create({
    guncelvar: {
       
    },
    guncelyok: {
        height: 0,
        width: 0
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

const mapStateToProps = ({ shareuser }) => {
    const noteArray = _.map(shareuser, (val, uid) => {
        return { ...val, uid };
    });
    return { noteArray };
};
export default connect(mapStateToProps, { ShareUser, ShareResult })(ShareUserh);
