class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 23212.009
    @large_number = 12322323
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @story = 'A very very very very very very very very very very very long time ago in a galaxy far far far away'
    @friend_count = 1
    @enemy_count = 153
  end

  def assets
  end

  def urls
  end
end
