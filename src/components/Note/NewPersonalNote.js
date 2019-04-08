import React, { Component } from 'react';
import { Picker, View, Image, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Textarea, Button, Text } from 'native-base';
import { CardSection } from '../../common/index';
import { 
    SystemCategory,
    UserCategories,
    AddNewNoteUsr,
    AddNewNoteSys,
    contentchanged,
    descchanged, 
    titlechanged,
    categoryidchanged } from '../../actions/index';

class NewUserNote extends Component {
    state = { usr: [], sys: [] };
    componentWillMount() {
        this.props.UserCategories();
        this.props.SystemCategory();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.noteArray.length > 0) {
            this.setState({ usr: nextProps.noteArray });
        } else {
            this.setState({ sys: nextProps.noteArray2 });
        }    
    }
    Add() {
        if (this.state.usr.length > 0) {
            const { title, description, content, categoryid } = this.props;
            this.props.AddNewNoteUsr({ title, description, content, categoryid });
        } else {
            const { title, description, content, categoryid } = this.props;
            this.props.AddNewNoteSys({ title, description, content, categoryid });
        }
    }
    renderCategory() {
        if (this.state.usr.length > 0) {
            return this.state.usr.map((res, Id) => 
            <Picker.Item
            key={Id} 
            label={res.CategoryName} 
            value={res.Id} 
            />
            );
        } 
        return this.state.sys.map((kategoriler, Id) =>
            <Picker.Item 
                key={Id} 
                label={kategoriler.Name} 
                value={kategoriler.Id} 
            />
        ); 
    }

    render() {
        const { inputStyle, inputIcon, main, picker, note, save } = styles;
        const deger = 0;
        return (
                <View style={main}>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/subtitles.png' }} />
                    <TextInput
                    placeholder="Başlık"
                    style={inputStyle}
                    value={this.props.title}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={title => this.props.titlechanged(title)}
                    />
                    </CardSection>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/create-new.png' }} />
                    <TextInput
                    placeholder="Açıklama"
                    style={inputStyle}
                    value={this.props.description}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={description => this.props.descchanged(description)}
                    />
                    </CardSection>
                    <View style={picker}>
                    <Picker
                    selectedValue={this.props.categoryid}
                    onValueChange={categoryid => this.props.categoryidchanged(categoryid)}
                    >
                    <Picker.Item label='Seçim Yapınız' value={deger} key='key' />
                    { this.renderCategory() }
                    </Picker>
                    </View>
                    <View style={note}>
                    <Textarea
                    value={this.props.content}
                    rowSpan={5} 
                    bordered 
                    placeholder="Notunuz" 
                    style={{ backgroundColor: 'white' }} 
                    onChangeText={content => this.props.contentchanged(content)}
                    />
                    </View>
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
const mapStateToProps = ({ usrcategory, syscategory, newnote }) => {
        const noteArray = _.map(usrcategory, (val, uid) => {
            return { ...val, uid };
        });
        const noteArray2 = _.map(syscategory, (val, uid) => {
            return { ...val, uid };
        });
        const { title, description, content, categoryid } = newnote; 
        return { noteArray, noteArray2, title, description, content, categoryid };
};
export default connect(mapStateToProps, 
    { UserCategories,
      SystemCategory,
      titlechanged,
      contentchanged,
      descchanged,
      categoryidchanged,
      AddNewNoteSys,
      AddNewNoteUsr })(NewUserNote);

