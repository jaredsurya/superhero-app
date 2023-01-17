class SessionsController < ApplicationController
  before_action :authorize, only: :destroy

    def create
        @user = User.find_by(username: params[:username])
        if @user&.authenticate(params[:password])
            login_user
            render json: @user, status: 201
        else 
            render json: { errors: ["Username or password did not match"]}, status: :unauthorized
        end
    end  

    def destroy
        session.delete :user_id 
        head :no_content
    end

    private

    def authorize
        render json: {error: ["Not Authorized"] }, status: 401 unless session[:user_id]
    end

end
