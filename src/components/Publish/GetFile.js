import React, { Component } from 'react';
import { Image, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import FileDown from 'js-file-download';
import {
    Card,
    CardItem, 
    Text, 
    Left, 
    Body,
    Button
} from 'native-base';
import {} from '../../actions/index';
import Token from '../../const/const';


class GetFile extends Component {
    state = { data: [] }
   componentWillMount() {
        this.setState({ data: this.props.FileArray });
    }
   Dowload(item) {
      const id = item.Id;
        axios({
            url: 'http://tezservis.azurewebsites.net/api/publish/download/'.concat(id),
            method: 'get',
            headers: {
                Authorization: `Bearer ${Token.data}`
            }
        })
        .then(response => this.FileOk(response))
        .catch(error => console.log(error.response));
    }
    FileOk(response) {
        console.log(response);
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
                 {item.FileName}
                 </Text>
               </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded info onPress={() => this.Dowload(item)}>
              <Text> İndir </Text>
              </Button>    
              </Left>
            </CardItem>
          </Card>
        ); 
    }
    render() {
        return (
          
          <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}    
          />    
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
const mapStateToProps = ({ files }) => {
    const FileArray = _.map(files, (val, uid) => {
        return { ...val, uid };
    });
    return { FileArray };
};
export default connect(mapStateToProps, {})(GetFile);
