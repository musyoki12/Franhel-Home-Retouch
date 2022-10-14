Rails.application.routes.draw do

  resources :services

  # login / signup / logout routes
  post "/signup", to: "clients#create"
  get "/me", to: "clients#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
