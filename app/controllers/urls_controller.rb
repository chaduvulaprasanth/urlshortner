class UrlsController < ApplicationController

  before_action :set_url, only: [:show, :update]

  def index
    @urls = Url.order("pinned DESC, created_at DESC")
  end


  def create
    @url = Url.new(url_params)
    @url.set_slug
    if @url.save
      render status: :ok, json: { notice: "successfully created"}
    else 
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end


  def show
    @url.clicked = @url.clicked + 1
    if @url.save
      render status: :ok, json: { notice: "successfully incremnted clicked count", url: @url}
    else 
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end

  def update
    @url.toggle!(:pinned)
    if @url.save
      render status: :ok, json: { notice: "pin updated successfully"}
    else 
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end


  private

  def url_params
    params.require(:url).permit(:original_url)
  end

  def set_url
    @url = Url.find(params[:id])
    unless @url 
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end

end
