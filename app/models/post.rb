class Post < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy
  has_many :likes, dependent: :destroy

  has_rich_text :content

  validates :title, presence: true
  validates :content, presence: true
end
