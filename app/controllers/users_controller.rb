class UsersController < ApplicationController
  def create
    @user = User.create!(user_params)
    login_user
    render json: @user, status: 201
  end

  def show
    if current_user
      render json: current_user, status: 201
    else 
      render json: { error: "Invalid Username or Password" }, status: 401
    end
  end

  def index
    users = User.all
    render json: users, include: :heros
  end 

  def update
    
  end

  def destroy
    
  end

  private

  def user_params 
    params.permit(:username, :first_name, :password, :password_confirmation)
  end

end
