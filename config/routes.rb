Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  
  root to: 'posts#index'

  resources :users

  resources :posts do 
    resources :reviews, only: [:create, new]
  end

  resources :reviews, only: [:destroy]
end
