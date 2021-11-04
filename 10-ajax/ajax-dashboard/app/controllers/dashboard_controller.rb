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

  def calls
    calls = rand 1..10
    render :plain => calls
  end

  def bushfires
    bushfires = rand 50..1000
    render :plain => bushfires
  end

  def info
    brother = %w( Groucho Harpo Chico ).sample
    time = Time.now
    uptime = `uptime`

    render :json => {
      :brother => brother,
      :time => time,
      :uptime => uptime,
      :calls => rand(1..10),
      :bushfires => rand(50..1000)
    }
  end
end
