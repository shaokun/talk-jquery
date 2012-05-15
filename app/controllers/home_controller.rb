class HomeController < ApplicationController
  def item
    @id = params[:id]
    raise
    render :text => "this is item: #{@id}, the details is: ..."
  end
  
  def register
    raise
    render :json => {
      :user => {
        :name => params[:name],
        :birthday => params[:birthday]
      }
    }
    # raise
  end
end
