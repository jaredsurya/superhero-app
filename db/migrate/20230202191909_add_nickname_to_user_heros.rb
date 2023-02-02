class AddNicknameToUserHeros < ActiveRecord::Migration[6.1]
  def change
    add_column :user_heros, :nickname, :string
  end
end
