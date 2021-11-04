class DashboardController < ApplicationController
  def brother
    brother = %w( Groucho Harpo Chico ).sample
    render :plain => brother
  end

  def time
    time = Time.now
    render :plain => time
  end

  def uptime
    uptime = `uptime`
    render :plain => uptime
  end
end
