class SessionsController < ApplicationController

# Login Feature
    def create
        client = Client.find_by(username: params[:username])
        if client&.authenticate(params[:password])
            session[:client_id] = client.id 
            render json: client, status: :created
        else 
            render json: { errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

# Logout Feature
    def destroy
        client = Client.find_by(id: session[:client_id])
        if client 
            session.delete :client_id
            head :no_content
        else
            render json: { errors: ["Not authorized"]}, status: :unauthorized
        end 
    end

end
