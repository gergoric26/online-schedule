Rails.application.routes.draw do
  
  root 'home#schedule'

  get 'home/index'

  get 'home/schedule'

  devise_for :bosses
  devise_for :workers, controllers: { registrations: 'workers/registrations' }

  resources :workers
  resources :bosses
  get 'allworkers/index'

  get 'allworkers/api'

  post 'rows/upsert'

  resources :rows



end
