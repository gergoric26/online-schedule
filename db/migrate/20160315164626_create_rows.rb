class CreateRows < ActiveRecord::Migration
  def change
    create_table :rows do |t|
      t.reference :worker
      t.string :monday
      t.string :tuesday
      t.string :wednesday
      t.string :thursday
      t.string :friday
      t.string :saturday
      t.string :sunday

      t.timestamps null: false
    end
    add_index :rows, :worker
  end
end
