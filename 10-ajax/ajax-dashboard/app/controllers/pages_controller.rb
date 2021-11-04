class PagesController < ApplicationController
  def home
    @brother = %w( Groucho Harpo Chico ).sample
    @time = Time.now
    @uptime = `uptime` # Backticks won't work on Heroku
    @calls_on_hold = rand 1..10
    @bushfires = rand 50..1000
  end
end
