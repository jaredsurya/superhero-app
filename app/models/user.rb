class User < ApplicationRecord
  has_secure_password

  has_one :team
  has_many :heros, through: :team

  validates :username, presence: true, uniqueness: true
end
