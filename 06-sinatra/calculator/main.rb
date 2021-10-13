require 'sinatra'
require 'sinatra/reloader'

require 'pry'

# ERB: Embedded Ruby: HTML with chunks of Ruby in it!

# Convention over configuration

get '/' do
  erb :home
end

get '/result' do
  x = params[:x].to_f
  y = params[:y].to_f

  @result = case params[:operator]
  when '+' then x + y
  when '-' then x - y
  when '*' then x * y
  when '/' then x / y
  end

  puts "The result is #{ @result }"

  erb :result
end
