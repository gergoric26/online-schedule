class CreateRows < ActiveRecord::Migration
  def change
    create_table :rows do |t|
      t.references :worker
      t.string :monday
      t.string :tuesday
      t.string :wednesday
      t.string :thursday
      t.string :friday
      t.string :saturday
      t.string :sunday

      t.timestamps null: false
    end
  end
end
