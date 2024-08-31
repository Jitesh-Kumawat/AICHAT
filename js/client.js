const socket = io('http://localhost:8000');



var username;

var chats =document.querySelector(".chats");
var users_list =document.querySelector(".users-list");
var users_count =document.querySelector(".users-count");

var msg_send=document.querySelector("#user-send");
var user_msg =document.querySelector("#user-msg");

do{
  username=prompt("Enter your name :");
}while(!username);