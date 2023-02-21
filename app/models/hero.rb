class Hero < ApplicationRecord
  has_many :user_heros
  has_many :users, through: :user_heros
  validates :name, uniqueness: true
  validates :publisher, presence: true
  validates :power_level, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 200, message: "must be a number between 1 and 200" }
  validates :image, presence: true
end
