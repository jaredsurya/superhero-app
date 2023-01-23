class UserHerosController < ApplicationController

  def index
    all_teams = UserHero.all
    render json: all_teams
    
    # 
  end
  

  # UserHero.length.where(user_id = params[user_id])
  def create
    team_count = User.find(params[:user_id]).heros.count
    
    if team_count < 5
      user_hero_join = UserHero.create!(user_hero_params)
      user = User.find(params[:user_id])
      team = user.heros
      team_power = team.sum(&:power_level)
      user.team_power = team_power
      user.save
    
      team_data = { team_power: team_power, heroes: team }
    
    # byebug
      render json: team_data, status: :created
    elsif UserHero.find_by(user_hero_params)
      render json: { errors: ["You've already added this hero. Please select another!"] }, status: :unprocessable_entity
    else
      render json: { errors: ["No more than 5 heros per team!"] }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find(params[:id])
    team_data = { team_power: user.team_power, heroes: user.heros }
    render json: team_data, status: 200
  end

  def destroy
    user_hero = UserHero.find_by(hero_id: params[:id])
    user_hero.destroy
    hero = Hero.find(params[:id])
    user = current_user
    user.team_power -= hero.power_level
    user.save
    render json: user_hero
  end

  private

  def user_hero_params
    params.require(:user_hero).permit(:user_id, :hero_id)
  end

end
