class UserHeroSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hero_id
  belongs_to :user
  belongs_to :hero
end
