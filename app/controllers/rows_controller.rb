class AllworkersController < ApplicationController
  
  def create
    @row = Row.new(row_params)
    if @row.save
      redirect_to root_path
    else
      flash[:error] = "Error creating row. Please try again."
      render :edit
    end
  end

  def edit
    @row = Row.find(params[:id])
  end

  def update
    @row = Row.find(params[:id])
    @row.assign_attributes(row_params)
    if @row.save
      redirect_to root_path
    else
      flash[:error] = "Error creating row. Please try again."
      render :edit
    end
  end


  private

  def row_params
    params.require(:row).permit(:worker_id, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday)
  end

end
