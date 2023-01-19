class UserHerosController < ApplicationController

  def index
    all_teams = UserHero.all
    render json: all_teams
    
    # GET /user_heros
    # for ALL teams
  end
  
  def create
    user_hero_join = UserHero.create!(user_hero_params)
    render json: user_hero_join, status: :created
  end

  def show
    user_hero_team = UserHero.find_by(params[:user_id])
    render json: user_hero_team, status: 200
    # GET /user_heros/:id
    # for ONE team
  end
# WHEN THE USER COUNT IS FULL (=< 5), REJECT NEW REQUESTS  
# Backend only accepts 5 heros of a set user_id
# After 5 of the same user_id, return a custom error
  private

  def user_hero_params
    params.require(:user_hero).permit(:user_id, :hero_id)
  end

end
