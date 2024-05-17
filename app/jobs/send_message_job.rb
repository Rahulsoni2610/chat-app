class SendMessageJob < ApplicationJob
  queue_as :default

  # def perform(message)
  #   renderer = ApplicationController.renderer_with_signed_in_user(message.user)
  #   html = renderer.render(
  #     partial: 'messages/message',
  #     locals: { message: message }
  #     )

  #   ActionCable.server.broadcast "chat_room_channel_#{message.room.id}", { message:message, html: MessagesController.render(partial: 'messages/message', locals: { message: message }) }
  # end
end
