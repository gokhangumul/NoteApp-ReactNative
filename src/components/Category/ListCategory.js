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
import { UserCategoriesList, UserCategoryDelete } from '../../actions/index';

class PerNote extends Component {
    state = { data: [] };
    componentWillMount() {
        this.props.UserCategoriesList();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.catArray });
    }
    Update(item) {
        Actions.catupdate({ cdata: item });
    }
    Delete(item) {
      const sef = item.Seflink;
      this.props.UserCategoryDelete({ sef });
    }
    renderItem = ({ item }) => {
        return (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                 <Text> 
                 <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/opened-folder.png' }} />
                 {item.CategoryName}
                 </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded danger onPress={() => this.Update(item)}><Text> Güncelle </Text></Button>
              <Text />
              <Button rounded warning onPress={() => this.Delete(item)}><Text> Sil </Text></Button>
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
                   <Text>Henüz kategori oluşturmadınız</Text>
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

const mapStateToProps = ({ listcat }) => {
    const catArray = _.map(listcat, (val, uid) => {
        return { ...val, uid };
    });
    
    return { catArray };  
};
export default connect(mapStateToProps, { UserCategoriesList, UserCategoryDelete })(PerNote);
