class UserHeroSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hero_id, :nickname
  belongs_to :user
  belongs_to :hero
end
