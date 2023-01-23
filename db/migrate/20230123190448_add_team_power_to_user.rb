class AddTeamPowerToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :team_power, :integer
  end
end
