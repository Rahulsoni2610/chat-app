class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_room_channel_#{params[:room]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
