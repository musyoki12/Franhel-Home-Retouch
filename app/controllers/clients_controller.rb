class ClientsController < ApplicationController

# Sign-up feature
    def create 
        client = Client.create(client_params)
        if client.valid? 
            session[:client_id] = client.id 
            render json: client, status: :created
        else
            render json: { errors: client.errors.full_messages }, status: :unprocessable_entity
        end
    end

# Log-in feature
    def show 
        client = Client.find_by(id: session[:client_id])
        if client 
            render json: client, status: :created
        else
            render json: { errors: "Not authorized" }, status: :unprocessable_entity
        end 
    end

    private

    def client_params
      params.permit(:username, :email, :name, :password, :password_confirmation)
    end

end
