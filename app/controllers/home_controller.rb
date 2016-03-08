class HomeController < ApplicationController
  before_action :authenticate!, only:[:schedule]

  def index
  end

  def schedule
    
  end
end
