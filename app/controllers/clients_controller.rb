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


    private

    def client_params
      params.permit(:username, :password, :password_confirmation)
    end

end
