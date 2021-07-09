Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  
  root to: 'posts#index'

  resources :users

  resources :posts do
    resources :likes
    resources :reviews, only: %i[create new]
  end

  resources :reviews, only: %i[destroy]
end
