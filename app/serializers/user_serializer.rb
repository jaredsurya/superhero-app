class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name
  has_one :team
  has_many :heros, through: :team
end
