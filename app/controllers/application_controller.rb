class ApplicationController < ActionController::Base
  # protect_from_forgery with: :null_session

  # private
  # # Overwriting the sign_out redirect path method
  # def after_sign_out_path_for(resource_or_scope)
  #   build_path
  # end

  def self.renderer_with_signed_in_user(user)
    ActionController::Renderer::RACK_KEY_TRANSLATION['warden'] ||= 'warden'
    proxy = Warden::Proxy.new({}, Warden::Manager.new({})).tap { |i|
      i.set_user(user, scope: :user, store: false, run_callbacks: false)
    }
    renderer.new('warden' => proxy)
  end
end
