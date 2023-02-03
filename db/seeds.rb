require 'rest-client'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://www.superheroapi.com/api.php/165372752915293/732
# superhero API with 732 characters 
# randomly generate 20 of them and add selected data into database
# every superhero has many reviews and many users through reviews

# my app has a user log in
# once logged in the user can see their team selection of (5) heroes displayed
# user can edit their selection of 5 by picking from 25 randomly generated heroes (superheroapi.com)
# users team is ranked by overall strength and sorted in a list with other users' teams
# users can leave comments on other users' teams, edit and delete comments as well

 user1 = User.create(username: "GreenMan1", password: "1234", first_name: "Jemal")
 user2 = User.create(username: "Torch1212", password: "1234", first_name: "Torchlight")

puts "Seeding! ..."


def heroesdata
  hero = RestClient.get("https://www.superheroapi.com/api.php/165372752915293/#{rand(1..732)}")
  hero_array = JSON.parse(hero)
  power_level = hero_array["powerstats"]["strength"].to_i+hero_array["powerstats"]["power"].to_i
  if power_level == 0
    power_level = rand(1..150)
  end
  full_name = hero_array["biography"]["full-name"]
  if full_name == ""
    full_name = "not known"
  end
  
  final_hero = {
    name: hero_array["name"], 
    full_name: full_name, 
    power_level: power_level,
    publisher: hero_array["biography"]["publisher"],
    image: hero_array["image"]["url"]
  }
  Hero.create(final_hero)
end

35.times { heroesdata() }

UserHero.create(user_id: "1", hero_id: "7")
UserHero.create(user_id: "1", hero_id: "2")
UserHero.create(user_id: "1", hero_id: "19")
UserHero.create(user_id: "2", hero_id: "3")
UserHero.create(user_id: "2", hero_id: "14")
UserHero.create(user_id: "2", hero_id: "16")
UserHero.create(user_id: "2", hero_id: "12")
UserHero.create(user_id: "2", hero_id: "9")

puts "DONE 💪🏽 🐉 ❗"
