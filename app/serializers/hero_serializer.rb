class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :full_name, :power_level, :publisher, :image
end
