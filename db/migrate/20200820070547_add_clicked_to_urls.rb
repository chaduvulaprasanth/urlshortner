class AddClickedToUrls < ActiveRecord::Migration[6.0]
  def change
    add_column :urls, :clicked, :integer, null: false, default: 0
  end
end
