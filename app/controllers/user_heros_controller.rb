class UserHerosController < ApplicationController

  def index
    all_teams = UserHero.all
    render json: all_teams
    
    # 
  end
  
  # if hero_id is present within User.find(params[:user_id]).heros
  # if 5 heros have been added render "NO MORE..." error
  # if the team already includes the team, render "ALREADY" error
  # else, add new user_hero instance and return team_data

  def create
    user = User.find(params[:user_id])
    team_count = user.heros.count
    existing_team = user.heros
    if team_count >= 5
      render json: { errors: ["No more than 5 heros per team!"] }, status: :unprocessable_entity
    elsif existing_team.one? { |hero| hero.id == params[:hero_id] }
      render json: { errors: ["You've already added this hero. Please select another!"] }, status: :unprocessable_entity
    else
      user_hero_join = UserHero.create!(user_hero_params)
      user = User.find(params[:user_id])
      team = user.heros
      # take all users heros power levels, add them up and use it to update user
      team_power = team.sum(&:power_level)
      user.team_power = team_power
      user.save
      team_data = { team_power: user.team_power, heroes: team, user_hero_join: user_hero_join }
      # byebug
      # render user include: user.heros
      # Doesn't sum all of the numbers in teampower
      render json: team_data, status: :created
    end
  end

  def show
    user = User.find(params[:id])
    user_hero_join = user.user_heros
    team_data = { team_power: user.team_power, heroes: user.heros, user_hero_join: user_hero_join }
    render json: team_data, status: 200
  end

  def destroy
    user = current_user
    hero = Hero.find(params[:id])
    user_hero = UserHero.find_by(hero_id: params[:id])
    user.team_power -= hero.power_level
    user.save
    user_hero.destroy
    render json: user_hero
  end

  private

  def user_hero_params
    params.require(:user_hero).permit(:user_id, :hero_id, :nickname)
  end

end
