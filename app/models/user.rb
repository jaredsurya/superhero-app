class User < ApplicationRecord
  has_secure_password

  has_many :user_heros, dependent: :delete_all
  has_many :heros, through: :user_heros

  validates :username, presence: true, uniqueness: true

  # write a custom route that takes a parameter of n and renders json back of all
  # the users who have total team power above that number. If there are no users
  # that have teams above that number render json that says so.
  
  def user_return
    allusers = User.all
    n = params[:n]
    selectedusers = allusers.select { |user| user.team_power > n }
    if selectedusers.length > 0
      render json: selectedusers
    else
      render json: { errors: ["There are no teams with power above #{n}."] }
    end
  end

  
end
