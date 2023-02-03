class UserHero < ApplicationRecord
  belongs_to :user
  belongs_to :hero
end
