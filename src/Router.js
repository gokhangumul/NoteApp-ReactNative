import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions, Drawer } from 'react-native-router-flux';
import LoginForm from './components/User/UserLogin';
import PersonalNote from './components/Note/PersonalNote';
import Register from './components/User/Register';
import NewPersonalNote from './components/Note/NewPersonalNote';
import ListCategory from './components/Category/ListCategory';
import AddUserCategory from './components/Category/AddUserCategory';
import UpdatePersonalNote from './components/Note/UpdatePersonalNote';
import UpdateCategory from './components/Category/UpdateCategory';
import MyFriend from './components/Friend/ListMyFriend';
import AddMyFriend from './components/Friend/GetAddMyFriend';
import PostMyFriend from './components/Friend/PostAddMyFriend';
import FriendRequest from './components/Friend/MyFriendRequest';
import MyPublish from './components/Publish/MyPublishList';
import NewPublish from './components/Publish/NewPublish';
import UpdatePublish from './components/Publish/UpdateMyPublish';
import GetComments from './components/Publish/GetCommentPub';
import AddComments from './components/Publish/AddComment';
import FriendPublish from './components/Publish/FriendPublish';
import FriendComment from './components/Publish/FriendComments';
import NoteShare from './components/Share/NoteShare';
import ShareResult from './components/Share/ShareResult';
import ShareMe from './components/Share/ShareMe';
import ShareMeUpdate from './components/Share/ShareMeUpdate';
import ShareUser from './components/Share/ShareWithUsr';
import ShareUserResult from './components/Share/ShareUserResult';
import GetProfil from './components/User/Profil';
import UpdateProfil from './components/User/ProfilUpdate';
import Files from './components/Publish/GetFile';
import Menu from './common/Menu';

const RouterComponent = () => {
    return (
    <Router >   
        <Scene key="root">
          <Scene 
            key="register"
            component={Register} 
            title="" 
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle}
          /> 
          <Scene 
            key="login" 
            component={LoginForm} title="" 
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle} 
            initial
          />
          <Scene
            key="updatenote"
            title="Notu Güncelle"
            component={UpdatePersonalNote}
            titleStyle={styles.navTitle2}
            back
          /> 
          <Scene
            key="catupdate"
            title="Kategori Güncelle"
            component={UpdateCategory}
            titleStyle={styles.navTitle2}
            back 
          />
          <Scene
            key="postf"
            title="Arkadaş Ekle"
            component={PostMyFriend}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="updatemypub"
            title="Etkinlik Güncelle"
            component={UpdatePublish}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="publishcom"
            title="Yorumlar"
            component={GetComments}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="addcom"
            title="Yorum Ekle"
            component={AddComments}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="friendpub"
            title="Arkadaş Etkinlikleri"
            component={FriendPublish}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="friendcom"
            title="Yorum Ekle"
            component={FriendComment}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="sget"
            title="Notu Paylaş"
            component={NoteShare}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="shareres"
            title="Paylaşım"
            component={ShareResult}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="sharewithme"
            title="Arkadaş Paylaşımları"
            component={ShareMe}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="sharemeupdate"
            title="Paylaşım Güncelle"
            component={ShareMeUpdate}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="shareuser"
            title="Paylaşımlarım"
            component={ShareUser}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="sharresult"
            title="Paylaşınlar"
            component={ShareUserResult}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="profupdate"
            title="Profili Güncelle"
            component={UpdateProfil}
            titleStyle={styles.navTitle2}
            back
          />
          <Scene
            key="pubfile"
            title="Dosyalar"
            component={Files}
            titleStyle={styles.navTitle2}
            back
          />
          <Drawer key="drawer" contentComponent={Menu} hideNavBar>
          <Scene 
            key="note"
            title="Notlarım" 
            component={PersonalNote}
            navigationBarTitleImageStyle={styles.image}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
            rightTitle="Yeni Note"
            rightButtonIconStyle={styles.image2}
            onRight={() => Actions.newnote()}
            rightButtonTextStyle={styles.righttext}
          />
          <Scene
            key="newnote"
            title="Yeni Note"
            component={NewPersonalNote}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
          />
          <Scene
            key="mycat"
            title="Kategorilerim"
            rightTitle="Yeni Kategori"
            onRight={() => Actions.newmycat()}
            rightButtonTextStyle={styles.righttext}
            component={ListCategory}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
          />
          <Scene
            key="newmycat"
            title="Yeni Kategori"
            component={AddUserCategory}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
          /> 
          <Scene
            key="myfriend"
            title="Arkadaşlarım"
            rightTitle="Arkadaş Ekle"
            onRight={() => Actions.newmyfriend()}
            rightButtonTextStyle={styles.righttext}
            component={MyFriend}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
          />
           <Scene
            key="newmyfriend"
            title="Arkadaş Ekle"
            component={AddMyFriend}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
           />
           <Scene
            key="myfriendreq"
            title="Arkadaş İstekleri"
            component={FriendRequest}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
           />
          <Scene
            key="prof"
            title="Profilim"
            component={GetProfil}
            titleStyle={styles.navTitle3}
          />
           <Scene
            key="mypublish"
            title="Etkinliklerim"
            component={MyPublish}
            rightTitle="Yeni Etkinlik"
            onRight={() => Actions.newpublish()}
            navigationBarStyle={styles.navBar2} 
            titleStyle={styles.navTitle2}
           />
          <Scene
            key="newpublish"
            title="Etkinlik Oluştur"
            component={NewPublish}
            titleStyle={styles.navTitle2}
            back
          />
          </Drawer>
        </Scene>
    </Router>
    ); 
};

const styles = StyleSheet.create({
    navBar: {
      height: 0
    },
    navTitle: {
      color: 'white'
    },
    navBar2: {
      backgroundColor: 'white',
      
    },
    navBar3: {
      height: 0
    },
    navTitle2: {
      color: 'black',
      paddingLeft: 50
    },
    navTitle3: {
      color: 'black',
      paddingLeft: 85
    },
    image: {
      flex: 1,
      height: '60%',
      resizeMode: 'contain'
    },
    righttext: {
      color: 'black'
    }
  });
export default RouterComponent;
