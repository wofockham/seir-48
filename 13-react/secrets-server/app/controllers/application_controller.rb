class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # This needs to be turned off for APIs.
end
