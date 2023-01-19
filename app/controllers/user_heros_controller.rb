class UserHerosController < ApplicationController

  def index
    all_teams = UserHero.all
    render json: all_teams
    
    # GET /user_heros
    # for ALL teams
  end
  
  def create
    #ONLY IF THE NUMBER OF ENTRIES FOR X USER ARE LESS THAN 5:
    
    user_hero_join = UserHero.create!(user_hero_params)
    
    #want this to return to frontend :USER_ID.HEROS all heros for current user
    # SEND BACK ALL OF THE HEROS (MAX 5) FOR THE CURRENT USER
    # INCLUDE A SUMMED POWER LEVEL, all heros => Team
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
