class PostsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    if params[:query].present?
      @posts = Post.where("title ILIKE ?", "%#{params[:query]}%")
    else
      @posts = Post.all
    end
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
