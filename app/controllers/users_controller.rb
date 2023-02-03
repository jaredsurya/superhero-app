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
    user = User.find(params[:id])
    user.update(email: params[:email], bio: params[:bio])
    render json: user, status: 202
  end

  def destroy
    user = User.find(params[:id])
    session.delete :user_id
    user.destroy
    head :no_content
  end

  private

  def user_params 
    params.permit(:id, :username, :first_name, :password, :password_confirmation, :email, :bio)
  end

end
