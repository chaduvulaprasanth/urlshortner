class UrlsController < ApplicationController

  def create
    @url = Url.new(url_params)
    @url.set_slug
    if @url.save
      render status: :ok, json: { notice: "successfully created"}
    else 
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end


 def create
    @url = Url.find(id: params[:id])
    @url.clicked = @url.clicked + 1
    if @url.save
      render status: :ok, json: { notice: "successfully incremnted clicked count"}
    else 
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end


  private

  def url_params
    params.require(:url).permit(:original_url)
  end

end
