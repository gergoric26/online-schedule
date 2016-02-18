Rails.application.routes.draw do
  

  devise_for :bosses
  devise_for :workers

  resources :workers
  get 'allworkers/index'



end
