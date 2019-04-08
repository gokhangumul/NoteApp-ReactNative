import React, { Component } from 'react';
import { Picker, View, Image, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Textarea, Button, Text } from 'native-base';
import { CardSection } from '../../common/index';
import { 
    SystemCategory,
    UserCategories,
    UpdateNoteUsr,
    UpdateNoteSys } from '../../actions/index';

class UpdateUserNote extends Component {
    state = { 
        usr: [], 
        sys: [], 
        NoteTitle: '', 
        NoteContent: '', 
        NoteDescription: '',
        NoteSefLink: '',
        NoteCategoryId: 0, 
        privateNoteCategoryId: 0 };
    componentWillMount() {
        this.props.UserCategories();
        this.props.SystemCategory();
        if (this.props.data.NoteCategoryId) {
            const {
                NoteTitle, NoteContent, NoteDescription, NoteCategoryId, NoteSefLink
            } = this.props.data;
            this.setState({ NoteTitle, NoteContent, NoteDescription, NoteCategoryId, NoteSefLink });
        } else {
            const {
                NoteTitle, NoteContent, NoteDescription, privateNoteCategoryId, NoteSefLink
            } = this.props.data;
            this.setState({ NoteTitle, NoteContent, NoteDescription, privateNoteCategoryId, NoteSefLink });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.noteArray.length > 0) {
            this.setState({ usr: nextProps.noteArray });
        } else {
            this.setState({ sys: nextProps.noteArray2 });
        }    
    }
    Update() {
        if (this.state.usr.length > 0) {
            const { 
                NoteTitle, 
                NoteDescription, 
                NoteContent, 
                privateNoteCategoryId, 
                NoteSefLink } = this.state;
            this.props.UpdateNoteUsr({ 
                NoteTitle, 
                NoteDescription, 
                NoteContent, 
                privateNoteCategoryId, 
                NoteSefLink });
        } else {
            const { 
                NoteTitle, 
                NoteDescription, 
                NoteContent, 
                NoteCategoryId, 
                NoteSefLink } = this.state;
            this.props.UpdateNoteSys({ 
                NoteTitle, 
                NoteDescription, 
                NoteContent, 
                NoteCategoryId, 
                NoteSefLink });
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
        if (this.state.usr.length > 0) {
            return (
                <View style={main}>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/subtitles.png' }} />
                    <TextInput
                    placeholder="Başlık"
                    style={inputStyle}
                    value={this.state.NoteTitle}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={NoteTitle => this.setState({ NoteTitle })}
                    />
                    </CardSection>
                    <CardSection>
                    <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/create-new.png' }} />
                    <TextInput
                    placeholder="Açıklama"
                    style={inputStyle}
                    value={this.state.NoteDescription}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={NoteDescription => this.setState({ NoteDescription })}
                    />
                    </CardSection>
                    <View style={picker}>
                    <Picker
                    selectedValue={
                         this.state.privateNoteCategoryId
                        }
                    onValueChange={
                        privateNoteCategoryId => {
                             console.log(privateNoteCategoryId);
                            this.setState({ privateNoteCategoryId });
                         }}
                    >
                    <Picker.Item label='Seçim Yapınız' value={deger} key='key' />
                    { this.renderCategory() }
                    </Picker>
                    </View>
                    <View style={note}>
                    <Textarea
                    value={this.state.NoteContent}
                    rowSpan={5} 
                    bordered 
                    placeholder="Notunuz" 
                    style={{ backgroundColor: 'white' }} 
                    onChangeText={NoteContent => this.setState({ NoteContent })}
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
        return (
            <View style={main}>
                <CardSection>
                <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/subtitles.png' }} />
                <TextInput
                placeholder="Başlık"
                style={inputStyle}
                value={this.state.NoteTitle}
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={NoteTitle => this.setState({ NoteTitle })}
                />
                </CardSection>
                <CardSection>
                <Image style={inputIcon} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/create-new.png' }} />
                <TextInput
                placeholder="Açıklama"
                style={inputStyle}
                value={this.state.NoteDescription}
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={NoteDescription => this.setState({ NoteDescription })}
                />
                </CardSection>
                <View style={picker}>
                <Picker
                selectedValue={
                     this.state.NoteCategoryId
                    }
                onValueChange={
                    NoteCategoryId => {
                         console.log(NoteCategoryId);
                        this.setState({ NoteCategoryId });
                     }}
                >
                <Picker.Item label='Seçim Yapınız' value={deger} key='key' />
                { this.renderCategory() }
                </Picker>
                </View>
                <View style={note}>
                <Textarea
                value={this.state.NoteContent}
                rowSpan={5} 
                bordered 
                placeholder="Notunuz" 
                style={{ backgroundColor: 'white' }} 
                onChangeText={NoteContent => this.setState({ NoteContent })}
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
const mapStateToProps = ({ usrcategory, syscategory }) => {
        const noteArray = _.map(usrcategory, (val, uid) => {
            return { ...val, uid };
        });
        const noteArray2 = _.map(syscategory, (val, uid) => {
            return { ...val, uid };
        }); 
        return { noteArray, noteArray2 };
};
export default connect(mapStateToProps, 
    { UserCategories,
      SystemCategory,
      UpdateNoteUsr,
      UpdateNoteSys })(UpdateUserNote);

