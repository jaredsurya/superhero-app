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
      team = user.heros
      team_power = team.sum(&:power_level)
      user.team_power = team_power
      user.save
      team_data = { team_power: team_power, heroes: team }
      render json: team_data, status: :created
    end
  end

  # UserHero.length.where(user_id = params[user_id])
  # def create
  #   team_count = User.find(params[:user_id]).heros.count
  #   team = User.find(params[:user_id]).heros
    
  #   byebug
  #   if team_count < 5 and team[id:].exclude?(params[:hero_id])
  #     user_hero_join = UserHero.create!(user_hero_params)
  #     user = User.find(params[:user_id])
  #     team = user.heros
      
    
  #     team_data = { team_power: team_power, heroes: team }
    
  #   # byebug
  #     render json: team_data, status: :created
  #   elsif team.include?(params[:hero_id])
  #     render json: { errors: ["You've already added this hero. Please select another!"] }, status: :unprocessable_entity
  #   else
  #     render json: { errors: ["No more than 5 heros per team!"] }, status: :unprocessable_entity
  #   end
  # end

  def show
    user = User.find(params[:id])
    team_data = { team_power: user.team_power, heroes: user.heros }
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
