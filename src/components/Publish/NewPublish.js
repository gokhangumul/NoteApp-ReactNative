import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Textarea, Button, Text } from 'native-base';
import { CardSection } from '../../common/index';
import { AddMyPub, pubcontentchanged, pubtitlechanged } from '../../actions/index';

class NewUserNote extends Component {
    Add() {
        const { title, content } = this.props;
        this.props.AddMyPub({ title, content });
    }
    render() {
        const { inputStyle, inputIcon, main, note, save } = styles;
        return (
                <View style={main}>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/subtitles.png' }} />
                    <TextInput
                    placeholder="Başlık"
                    style={inputStyle}
                    value={this.props.title}
                    underlineColorAndroid='transparent'
                    onChangeText={title => this.props.pubtitlechanged(title)}
                    />
                    </CardSection>
                    <View style={note}>
                    <Textarea
                    value={this.props.content}
                    rowSpan={5} 
                    bordered 
                    placeholder="Etkinlik İçerik" 
                    style={{ backgroundColor: 'white' }} 
                    onChangeText={content => this.props.pubcontentchanged(content)}
                    />
                    </View>
                    <View style={save}>
                    <Button block info onPress={this.Add.bind(this)}>
                    <Text>Oluştur</Text>
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
const mapStateToProps = ({ newpublish }) => {
        const { title, content } = newpublish; 
        return { title, content };
};
export default connect(mapStateToProps, { 
    AddMyPub, pubcontentchanged, pubtitlechanged })(NewUserNote);

