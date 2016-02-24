Rails.application.routes.draw do
  
  root 'home#index'

  get 'home/index'

  devise_for :bosses
  devise_for :workers, controllers: { registrations: 'workers/registrations' }

  resources :workers
  get 'allworkers/index'



end
