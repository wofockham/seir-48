require 'sinatra'
require 'sinatra/reloader' # c/o sinatra-contrib

require 'pry' # where do you look for the pry output? NOT IN THE BROWSER

# Paths
# Routes

get '/' do
  "wowowowow this is the homepage -- bonus hotdogs"
end

get '/hello' do
  "Hello World From Sinatra -- wow the reloader makes this dynamic" # implicitly returned AND SO appear in the browser
end

get '/goodbye' do
  "This static text just says goodbye cruel world"
end

# Dynamic content:
get '/lucky_number' do
  "Here is your lucky number: #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is #{ `uptime` }"
end

# Marx Brothers Fan Club: $500

# Dynamic URLs: :something indicates a dynamic part of the URL.

# Infinite number of URLs:
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a member of the Marx Brothers fan club"
end

# Premium Fan Club: $600
get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fan club"
end

# Platinum Fan Club: $1000
get '/fanclub/:first/:last/:favorite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a platinum member of the Marx Brothers fan club and their favorite brother is #{ params[:favorite].capitalize }"
end

# Second crappiest calculator of the course
# /multiply/5/3 => 15
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }</strong>"
end

# Two serious complaints:
# If this is a web server, WHERE IS THE GODDAMN HTML?
# How do we get user input without making the poor slobs edit the URL by hand?
