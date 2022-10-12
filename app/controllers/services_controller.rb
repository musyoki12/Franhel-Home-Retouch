class ServicesController < ApplicationController

  def index
    services = Service.all
    if services
      render json: services, status: :ok
    else
      render json: {error: "No services found"}, status: :not_found
    end
  end

  def show
    service = Service.find_by(id: params[:id])
    if service
      render json: service, status: :ok
    else
      render json: {error: "Service not found"}, status: :not_found
    end
  end

  def create
    service = Service.create(service_params)
    if service.valid?
      render json: service, status: :created
    else
      render json: [error: "validation errors"], status: :unprocessable_entity
    end
  end

  
end
