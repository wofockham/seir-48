class PagesController < ApplicationController
  def hello
    render :hello # erb :hello
  end

  def goodbye
    render :goodbye
  end
end
