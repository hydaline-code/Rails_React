# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb
greetings = [
  "Hello, how can I assist you today?",
  "Greetings! What can I do for you?",
  "Hi there! Need any help?",
  "Welcome! How may I help you?",
  "Hey! How can I be of service?"
]

greetings.each do |greeting|
  Greeting.create(content: greeting)
end
