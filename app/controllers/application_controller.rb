class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path(resource)
    if resource.is_a?(Worker) 
      home_schedule_path(resource)
    end
  end

  def after_sign_in_path(resource)
    if resource.is_a?(Boss) 
      allworkers_index_path(resource)
    end
  end

  protected

  def authenticate!
    unless current_boss || current_worker
      flash[:error] = "You must be logged in to do that"
      redirect_to home_index_path
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name, :email, :password, :password_confirmation) }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:name, :email, :password, :password_confirmation) }
  end
end
