let socket = new WebSocket("ws://"+ window.location.host);

// send message from the form
document.forms.publish.onsubmit = function() {
  let outgoingMessage = this.message.value;
  socket.send(outgoingMessage), this.message.value="", !1
  return true;
};

document.forms.handle.onsubmit = function(){
  return socket.send("username"+this.username.value), !1
};

// message received - show the message in div#messages
socket.onmessage = function(event) {
  let message = event.data;
  let messageElem = document.createElement('div');
  messageElem.innerHTML="<span class='handle'></span><span class='message></span>",
  messageElem.querySelector(".handle").textContent=message.slice(3).split(":")[0],
  messageElem.querySelector(".message").textContent=message.slice(3).split(":")[1],
  document.getElementById('messages').prepend(messageElem);
};