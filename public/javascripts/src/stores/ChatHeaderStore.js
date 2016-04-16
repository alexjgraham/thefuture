/**
 * ChatHeaderStore.js
 * @flow
 * stores logic and state of components controlled by chat header
 */

 import AppDispatcher from "../dispatcher/AppDispatcher"
 import {ChatHeaderConstants} from "../constants/ChatHeaderConstants"
 import assign from "object-assign"
 import {EventEmitter} from "events"

 let CHANGE_EVENT = "change"
 var _sidebarState//state of the people/files  sidebar in chat view
 var _switchState//state of the question/chat switch, true is chat
 var _questionState//questionlist vs question discussion view
 var _questionCreateModal//modal for the create question button

 export const ChatHeaderStore = assign({}, EventEmitter.prototype, {

   emitChange() {
     this.emit(CHANGE_EVENT);
   },

   addChangeListener(callback) {
     this.on(CHANGE_EVENT, callback);
   },

   removeChangeListener(callback){
     this.removeListener(CHANGE_EVENT, callback)
   },

   getSidebarState(){
     return _sidebarState
   },

   getSwitchState(){
     return _switchState
   },

   getQuestionState(){
     return _questionState
   },

   getCreateQuestionModalState(){
     return _questionCreateModal
   }
 })

 AppDispatcher.register(function(action) {
   switch(action.actionType) {

     case ChatHeaderConstants.VIEW_FILES:
       _sidebarState = false;

       ChatHeaderStore.emitChange()
       break;

     case ChatHeaderConstants.VIEW_PEOPLE:
       _sidebarState = true;

       ChatHeaderStore.emitChange()
       break;

     case ChatHeaderConstants.SWITCH_VIEW_CHAT:
      //let _switchState = !_switchState;//need to figure out logic here
      _switchState = true//(_switchState ? false : true)
       ChatHeaderStore.emitChange()
       break;

      case ChatHeaderConstants.SWITCH_VIEW_QUESTIONS:
       _switchState = false

       ChatHeaderStore.emitChange()
       break;

      case ChatHeaderConstants.VIEW_QUESTION_LIST:
       _questionState = true

       ChatHeaderStore.emitChange()
       break;

      case ChatHeaderConstants.VIEW_QUESTION_DISCUSSION:
       _questionState = false

       ChatHeaderStore.emitChange()
       break;

      case ChatHeaderConstants.CREATE_QUESTION:
        _questionCreateModal = true

        ChatHeaderStore.emitChange()
        break;

      case ChatHeaderConstants.CLOSE_QUESTION_MODAL:
        _questionCreateModal = false

        ChatHeaderStore.emitChange()
        break;
     default:
   }
 })
