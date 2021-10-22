class MixtapesController < ApplicationController
  before_action :check_for_login

  def new
    @mixtape = Mixtape.new
  end

  def create
    mixtape = Mixtape.create mixtape_params
    @current_user.mixtapes << mixtape # associate!
    # equivalently: @current_user.mixtapes.create mixtape_params
    redirect_to root_path
  end

  private
  def mixtape_params
    params.require(:mixtape).permit(:title)
  end
end
