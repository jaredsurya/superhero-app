class HerosController < ApplicationController

  def index
    heroes = Hero.all
    render json: heroes
  end

  def create
    # create new hero here
  end

end
