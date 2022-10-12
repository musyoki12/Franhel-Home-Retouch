class ApplicationController < ActionController::API

  def index
    services = Service.all
    if services
      render json: services, status: :ok
    else
      render json: {error: "No services found"}, status: :not_found
    end
  end

  
end
