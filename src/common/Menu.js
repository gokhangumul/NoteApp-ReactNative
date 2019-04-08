import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Content, ListItem, Left } from 'native-base';
import { Logout } from '../actions/index';

class Menu extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                    <Content>
                        <ListItem onPress={() => Actions.note()}>
                           <Left>
                            <Image style={{ width: 20, height: 20, marginTop: 20 }} source={{ uri: 'https://img.icons8.com/dusk/64/000000/note.png' }} />
                            <Text style={{ marginTop: 20, marginLeft: 15 }}>Notlarım</Text>
                           </Left> 
                        </ListItem>
                        <ListItem onPress={() => Actions.shareuser()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/office/16/000000/note.png' }} />
                            <Text style={{ marginLeft: 15 }}>Paylaşımlarım</Text>
                           </Left>
                        </ListItem>
                        <ListItem onPress={() => Actions.sharewithme()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/note.png' }} /> 
                            <Text style={{ marginLeft: 15 }}>Arkadaş Paylaşımları</Text>
                           </Left>
                        </ListItem>
                        <ListItem onPress={() => Actions.mycat()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/opened-folder.png' }} />
                            <Text style={{ marginLeft: 15 }}>Kategoriler</Text>
                           </Left> 
                        </ListItem>
                        <ListItem onPress={() => Actions.mypublish()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/conference-call.png' }} />
                            <Text style={{ marginLeft: 15 }}>Etkinliklerim</Text>
                           </Left> 
                        </ListItem>
                        <ListItem onPress={() => Actions.friendpub()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/conference-call.png' }} />
                            <Text style={{ marginLeft: 15 }}>Arkadaş Etkinlikleri</Text>
                           </Left> 
                        </ListItem>
                        <ListItem onPress={() => Actions.myfriend()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/color/48/000000/friends.png' }} />
                            <Text style={{ marginLeft: 15 }}>Arkadaşlar </Text>
                           </Left>
                        </ListItem>
                        <ListItem onPress={() => Actions.myfriendreq()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/color/48/000000/friends.png' }} />
                            <Text style={{ marginLeft: 15 }}>İstekler </Text>
                           </Left>
                        </ListItem>
                        <ListItem onPress={() => Actions.prof()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/dusk/64/000000/add-user-group-woman-man.png' }} />
                            <Text style={{ marginLeft: 15 }}>Profil </Text>
                           </Left>
                        </ListItem>
                        <ListItem onPress={() => this.props.Logout()}>
                           <Left>
                            <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/shutdown.png' }} /> 
                            <Text style={{ marginLeft: 15 }}>Çıkış yap</Text>
                           </Left>  
                        </ListItem>
                        
                    </Content>
            </View>
        );
    }
}

export default connect(null, { Logout })(Menu);
