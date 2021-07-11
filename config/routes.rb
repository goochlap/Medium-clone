Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  
  root to: 'posts#index'

  resources :users, only: %i[show]

  resources :posts do
    resources :likes, only: %i[create destroy]
    resources :reviews, only: %i[create new]
  end
end
