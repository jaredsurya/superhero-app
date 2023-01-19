class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name
  has_many :user_heros
  has_many :heros, through: :user_heros
end
