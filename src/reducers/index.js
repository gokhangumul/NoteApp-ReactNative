import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import RegisterReducers from './RegisterReducers';
import PerNoteReducers from './note/PerNoteReducers';
import SystemCategoryReducers from './note/SystemCategoryReducers';
import UserCategories from './note/UserCategories';
import NewNoteReducers from './note/NewNoteReducers';
import ListCategory from './category/ListCategryReducers';
import AddCategory from './category/AddCategoryReducers';
import ListFriend from './friend/FriendListReducers';
import GetFriend from './friend/GetFriendReducers';
import GetFriendReq from './friend/FriendReqReducers';
import MyPublish from './publish/MyListPublishReducers';
import NewPublish from './publish/NewMyPublishReducers';
import PubCom from './publish/GetCommentReducers';
import FriendPub from './publish/FriendPublishReducers';
import ShareWithMe from './share/ShareWithMeReducers';
import ShareUser from './share/ShareWithUserReducers';
import ShareResult from './share/ShareResultReducers';
import Profil from './user/ProfilReducers';
import File from './publish/FileReducers';

export default combineReducers({
   kimlikresponse: AuthReducers,
   registerresponse: RegisterReducers,
   personalnoteresponse: PerNoteReducers,
   syscategory: SystemCategoryReducers,
   usrcategory: UserCategories,
   newnote: NewNoteReducers,
   listcat: ListCategory,
   newcat: AddCategory,
   friends: ListFriend,
   getfriend: GetFriend,
   friendreq: GetFriendReq,
   listmypub: MyPublish,
   newpublish: NewPublish,
   pubcom: PubCom,
   friendpub: FriendPub,
   shareme: ShareWithMe,
   shareuser: ShareUser,
   shareresult: ShareResult,
   prof: Profil,
   files: File
});
