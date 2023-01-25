class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :team_power
  has_many :user_heros
  has_many :heros, through: :user_heros
end
