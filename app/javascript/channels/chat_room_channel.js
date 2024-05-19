import consumer from "channels/consumer"

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
    debugger
    let msgUserId = data.message.user_id
    if (currentUserId === msgUserId.toString()) {
      html = data.html
    } else {
      html = data.html.replace('right-msg', 'left-msg')
    }

    msgContainer.innerHTML = msgContainer.innerHTML + html
    document.getElementById('msg-form').reset();
    msgContainer.lastElementChild.scrollIntoView()
  }
});
