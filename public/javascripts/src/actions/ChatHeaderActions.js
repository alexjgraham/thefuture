/**
 * @flow
 * ChatHeaderActions.js
 *
 * These actions are triggered by changes in the chat header switches/buttons
 */

 import AppDispatcher from "../dispatcher/AppDispatcher"
 import {ChatHeaderConstants} from "../constants/ChatHeaderConstants"
 import request from "superagent"

 export const ChatHeaderActions = {
   viewFiles() {
     AppDispatcher.dispatch({
       actionType: ChatHeaderConstants.VIEW_FILES
     })
   },

   viewPeople(){
     AppDispatcher.dispatch({
       actionType:ChatHeaderConstants.VIEW_PEOPLE
     })
   },

   switchViewChat(){
     AppDispatcher.dispatch({
       actionType:ChatHeaderConstants.SWITCH_VIEW_CHAT
     })
   },

   switchViewQuestion(){
     AppDispatcher.dispatch({
       actionType: ChatHeaderConstants.SWITCH_VIEW_QUESTIONS
     })
   },

   switchViewQuestionList(){
     AppDispatcher.dispatch({
       actionType: ChatHeaderConstants.VIEW_QUESTION_LIST
     })
   },

   switchViewQuestionDiscussion(){
     AppDispatcher.dispatch({
       actionType: ChatHeaderConstants.VIEW_QUESTION_DISCUSSION
     })
   },

   createQuestion(){
     AppDispatcher.dispatch({
       actionType: ChatHeaderConstants.CREATE_QUESTION
     })
   },

   closeQuestionModal(){
     AppDispatcher.dispatch({
       actionType: ChatHeaderConstants.CLOSE_QUESTION_MODAL
     })
   }

 }
