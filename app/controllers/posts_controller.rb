class PostsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
  end

  def create
  end

  def destroy; end
end
