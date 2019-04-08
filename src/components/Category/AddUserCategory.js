import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { CardSection } from '../../common/index';
import { addcatchanged, AddNewUserCategory } from '../../actions/index';

class NewUserNote extends Component {
    Add() {
        const { category } = this.props; 
        this.props.AddNewUserCategory({ category });
    }
    render() {
        const { inputStyle, inputIcon, main, save } = styles;
        return (
                <View style={main}>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/subtitles.png' }} />
                    <TextInput
                    placeholder="Kategori Adı"
                    style={inputStyle}
                    value={this.props.category}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={category => this.props.addcatchanged(category)}
                    />
                    </CardSection>
                    <View style={save}>
                    <Button block info onPress={this.Add.bind(this)}>
                    <Text>Ekle</Text>
                    </Button>
                    </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        marginTop: 40,
        flex: 1,
        width: 320        
    },
    inputStyle: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1
      },
      inputIcon: {
          width: 30,
          height: 30,
          marginLeft: 15,
          justifyContent: 'center'
      },
      picker: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        width: 250,
        height: 45,
        marginBottom: 15,
        marginLeft: 70
      },
      note: {
        marginLeft: 70,  
      },
      save: {
          marginTop: 10,
          marginLeft: 70
      }
});
const mapStateToProps = ({ newcat }) => {
       const { category } = newcat;
       return {
           category
       };
};
export default connect(mapStateToProps, { addcatchanged, AddNewUserCategory })(NewUserNote);

