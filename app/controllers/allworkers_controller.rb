class AllworkersController < ApplicationController
  
  before_action :authenticate_boss!

  def index
    @workers = Worker.all
  end
end
