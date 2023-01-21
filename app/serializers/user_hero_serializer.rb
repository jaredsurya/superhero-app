class UserHeroSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hero_id
  #belongs_to :user
  belongs_to :hero

  def team
    # get all heroes for a particular user
    # group them by user_id
    
  end
end
