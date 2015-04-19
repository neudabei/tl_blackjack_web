require 'rubygems'
require 'sinatra'
require 'pry'

set :sessions, true

get '/' do
  erb :set_name
end

post '/set_name' do
  session[:pn] = params[:player_name]
  redirect '/game'
end

get '/game' do
  erb :game
end