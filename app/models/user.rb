class User < ApplicationRecord
  has_secure_password

  has_many :user_heros
  has_many :heros, through: :user_heros

  validates :username, presence: true, uniqueness: true
  validates :bio, presence: true
  validates :email, presence: true
end
