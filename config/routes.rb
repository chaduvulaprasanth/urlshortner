Rails.application.routes.draw do
  root "urls#index"
  resources "urls"
  resources "generate_reports"
end
