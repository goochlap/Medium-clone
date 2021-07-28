class Post < ApplicationRecord
  # before_create :default_values
  belongs_to :user
  has_many :reviews, dependent: :destroy
  has_many :likes, dependent: :destroy

  has_rich_text :content

  validates :title, presence: true
  validates :content, presence: true

  def default_values
    # Comment this method when run the seed
    self.published = false
  end
end
