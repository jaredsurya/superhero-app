require 'rest-client'

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

user1.team_power = Hero.find("7").power_level + Hero.find("2").power_level + Hero.find("19").power_level

user2.team_power = Hero.find("3").power_level + Hero.find("14").power_level + Hero.find("16").power_level + Hero.find("12").power_level + Hero.find("9").power_level

UserHero.create(user_id: "1", hero_id: "7")
UserHero.create(user_id: "1", hero_id: "2")
UserHero.create(user_id: "1", hero_id: "19")
UserHero.create(user_id: "2", hero_id: "3")
UserHero.create(user_id: "2", hero_id: "14")
UserHero.create(user_id: "2", hero_id: "16")
UserHero.create(user_id: "2", hero_id: "12")
UserHero.create(user_id: "2", hero_id: "9")

puts "DONE 💪🏽 🐉 ❗"
