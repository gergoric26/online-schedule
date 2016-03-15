class AllworkersController < ApplicationController
  
  before_action :authenticate_boss!

  def index
    @workers = Worker.all
  end

  def api
    @workers = Worker.all
    render json: @workers
  end
end
