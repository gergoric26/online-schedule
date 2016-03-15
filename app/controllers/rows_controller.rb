class AllworkersController < ApplicationController
  
  def create
    @row = Row.new(row_params)
    if Row.save
      redirect_to root_path
    else
      flash[:error] = "Error creating row. Please try again."
    end
  end

  def update
    
  end

  def edit
    
  end



end
