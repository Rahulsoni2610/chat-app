import consumer from "channels/consumer"

// document.ready(function () {
//   console.log("TL load2")
// });

// (function() {
//   console.log("TL load1")
//    // your page initialization code here
//    // the DOM will be available here

// })();

// document.addEventListener('turbo:before-stream-render' , function() {
//   console.log("TL load")
//   // setTimeout(fadeOutAlert, 5000);
// });
// document.addEventListener("ready turbolinks:load", () => {
//   console.log("TL load")
// });

var roomId = document.getElementById('room-id').getAttribute('data-room-id')
consumer.subscriptions.create({ channel: "ChatRoomChannel", room: roomId }, {
  connected() {
    console.log('connected...'+ roomId )
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const msgContainer = document.getElementById('messages')
    const currentUserId = document.getElementById('user-id').getAttribute('data-user-id')

    let html;
    let msgUserId = data.message.user_id
    if (currentUserId === msgUserId.toString()) {
      html = data.html
    } else {
      html = data.html.replace('my-msg', '')
      html = html.replace('color-9','color-8')
    }

    msgContainer.innerHTML = msgContainer.innerHTML + html
    document.getElementById('msg-form').reset();
    msgContainer.lastElementChild.scrollIntoView()
  }
});
