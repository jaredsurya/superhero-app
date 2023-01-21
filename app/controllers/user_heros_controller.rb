class UserHerosController < ApplicationController

  def index
    all_teams = UserHero.all
    render json: all_teams
    
    # 
  end
  

  # UserHero.length.where(user_id = params[user_id])
  def create
    team_count = User.find(params[:user_id]).heros.count
    # byebug
    if team_count < 5
      user_hero_join = UserHero.create!(user_hero_params)
      team = User.find(params[:user_id]).heros
      team_power = team.sum(&:power_level)
      # byebug
      render json: { team_data: team, team_power: team_power }, status: :created
    else
      render json: { errors: ["No more than 5 heros per team!"] }, status: :unprocessable_entity
    end
  end
    #ONLY IF THE NUMBER OF ENTRIES FOR X USER ARE LESS THAN 5:
    
    #want this to return to frontend :USER_ID.HEROS all heros for current user
    # SEND BACK ALL OF THE HEROS (MAX 5) FOR THE CURRENT USER
    # INCLUDE A SUMMED POWER LEVEL, all heros => Team

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
