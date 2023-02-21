class HerosController < ApplicationController

  def index
    heroes = Hero.all
    render json: heroes
  end

  def create
    # create new hero here
    Hero.create!(full_name: params[:full_name], name: params[:name], power_level: params[:power_level], publisher: params[:publisher], image: params[:image])
    heroes = Hero.all
    render json: heroes
  end

end
