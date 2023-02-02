class UserHeroSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :hero_id
  dbelongs_to :user
  belongs_to :hero

  def team
    # get all heroes for a particular user
    # group them by user_id
    
  end
end
