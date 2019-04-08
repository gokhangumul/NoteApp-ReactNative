import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text, Textarea } from 'native-base';
import { AddPubComment, AddFriendComment } from '../../actions/index';

class AddComment extends Component {
    state = { CommentContent: '', PublishId: 0 };

    componentWillMount() {
        const { PublishId, CommentContent } = this.props.ydata;
        this.setState({ CommentContent, PublishId });
    }
    Add() {
        const { CommentContent, PublishId } = this.state;
        this.props.AddFriendComment({ CommentContent, PublishId });
    }
    render() {
        const { main, save, note } = styles;
        return (
                <View style={main}>
                    <View style={note}>
                    <Textarea
                    value={this.state.CommentContent}
                    rowSpan={8} 
                    bordered 
                    placeholder="Yorum" 
                    style={{ backgroundColor: 'white' }} 
                    onChangeText={CommentContent => this.setState({ CommentContent })}
                    />
                    </View>
                    <View style={save}>
                    <Button block warning onPress={this.Add.bind(this)}>
                    <Text>Ekle</Text>
                    </Button>
                    </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        marginTop: 120,
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
export default connect(null, { AddPubComment, AddFriendComment })(AddComment);

