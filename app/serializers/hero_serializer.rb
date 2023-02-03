class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :full_name, :power_level, :publisher, :image
  has_many :user_heros
end
