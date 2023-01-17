class CreateHeros < ActiveRecord::Migration[6.1]
  def change
    create_table :heros do |t|
      t.string :name
      t.string :full_name
      t.integer :power_level
      t.string :publisher
      t.string :image
      t.timestamps
    end
  end
end
