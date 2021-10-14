require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX: Show all butterflies
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# NEW: Shows a form for new butterfly data
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE: Inserts a new butterfly into the database
post '/butterflies' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  redirect to('/butterflies')
end

# SHOW: Show all the information about a SINGLE butterfly
get '/butterflies/:id' do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }" # returns an array
  @butterfly = butterflies.first # extract the first butterfly from the array
  erb :butterflies_show
end

def query_db(sql_statement)
  puts sql_statement # Optional but very nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicit return
end
