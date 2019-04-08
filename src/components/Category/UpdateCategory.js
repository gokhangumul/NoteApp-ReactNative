import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';
import { CardSection } from '../../common/index';
import { UpdateUserCategory } from '../../actions/index';

class UpdateCategory extends Component {
    state = { CategoryName: '', Seflink: '' };
    componentWillMount() {
        const { CategoryName, Seflink } = this.props.cdata;
        this.setState({ CategoryName, Seflink });
    }
    Update() {
        const { CategoryName, Seflink } = this.state;
        this.props.UpdateUserCategory({ CategoryName, Seflink });
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
                    value={this.state.CategoryName}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={CategoryName => this.setState({ CategoryName })}
                    />
                    </CardSection>
                    <View style={save}>
                    <Button block warning onPress={this.Update.bind(this)}>
                    <Text>Güncelle</Text>
                    </Button>
                    </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        marginTop: 80,
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
      save: {
          marginTop: 10,
          marginLeft: 70
      }
});
export default connect(null, { UpdateUserCategory })(UpdateCategory);

