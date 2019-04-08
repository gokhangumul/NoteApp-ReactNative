import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
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
import { PerNoteList, Delete } from '../../actions/index';

class PerNote extends Component {
    state = { data: [] };
    componentWillMount() {
        moment.locale('tr');
        this.props.PerNoteList();
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.noteArray });
    }
    Update(item) {
      Actions.updatenote({ data: item });
    }
    Delete(item) {
      const id = item.Id;
      this.props.Delete({ id });
    }
    Shares(item) {
      console.log('buradasın');
      Actions.sget({ sdata: item });
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
                 {item.Name}
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
                  {moment(item.NoteCreatedDate).format('dddd, Do MMMM YYYY HH:mm')}
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
              <Button rounded info onPress={() => this.Shares(item)} >
              <Text> Paylaş </Text>
              </Button>
              <Text />
              <Button rounded danger onPress={() => this.Update(item)}>
              <Text> Güncelle </Text>
              </Button>
              <Text />
              <Button rounded warning onPress={() => this.Delete(item)}>
              <Text> Sil </Text>
              </Button>
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
                 {item.Name}
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
                  {moment(item.NoteCreatedDate).format('dddd, Do MMMM YYYY HH:mm')}
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
              <Button rounded info onPress={() => this.Shares(item)}>
              <Text> Paylaş </Text>
              </Button>
              <Text />
              <Button rounded danger onPress={() => this.Update(item)}>
              <Text> Güncelle </Text>
              </Button>
              <Text />
              <Button rounded warning onPress={() => this.Delete(item)}>
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
                   <Text>Henüz not oluşturmadınız</Text>
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

const mapStateToProps = ({ personalnoteresponse }) => {
    const noteArray = _.map(personalnoteresponse, (val, uid) => {
        return { ...val, uid };
    });
    return { noteArray };
};
export default connect(mapStateToProps, { PerNoteList, Delete })(PerNote);
