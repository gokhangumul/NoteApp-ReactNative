import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text, Textarea } from 'native-base';
import { CardSection } from '../../common/index';
import { UpdatePub } from '../../actions/index';

class UpdateMyPublish extends Component {
    state = { PubTitle: '', PubContent: '', Id: 0 };
    componentWillMount() {
        const { PubTitle, PubContent, Id } = this.props.udata;
        this.setState({ PubTitle, PubContent, Id });
    }
    Update() {
        const { PubTitle, PubContent, Id } = this.state;
        this.props.UpdatePub({ PubTitle, PubContent, Id });
    }
    render() {
        const { inputStyle, inputIcon, main, save, note } = styles;
        return (
                <View style={main}>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/subtitles.png' }} />
                    <TextInput
                    placeholder="Başlık"
                    style={inputStyle}
                    value={this.state.PubTitle}
                    underlineColorAndroid='transparent'
                    onChangeText={PubTitle => this.setState({ PubTitle })}
                    />
                    </CardSection>
                    <View style={note}>
                    <Textarea
                    value={this.state.PubContent}
                    rowSpan={7} 
                    bordered 
                    placeholder="Notunuz" 
                    style={{ backgroundColor: 'white' }} 
                    onChangeText={PubContent => this.setState({ PubContent })}
                    />
                    </View>
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
      note: {
        marginLeft: 70,  
      },
      save: {
          marginTop: 10,
          marginLeft: 70
      }
});
export default connect(null, { UpdatePub })(UpdateMyPublish);

