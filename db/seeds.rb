# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts 'Cleaning database...'
User.destroy_all
Post.destroy_all

puts "Populate database"

10.times do
  user = User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: '123456'
  )

  post = Post.new(title: Faker::ChuckNorris.fact, content: Faker::Lorem.paragraph(sentence_count: 600), published: true)
  post.user = user
  post.save
end

puts "Job finish!"