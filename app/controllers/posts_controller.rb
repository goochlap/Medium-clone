class PostsController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :find_post, only: %i[show update]

  def index
    if params[:query].present?
      @posts = Post.where("title ILIKE ?", "%#{params[:query]}%")
    else
      @posts = Post.all
    end
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user
    if @post.save!
      redirect_to post_path(@post), alert: 'Post created with success!'
    else
      render :new
    end
  end

  def update
    @post.published = true
    @post.save!
    redirect_to user_path(current_user)
  end

  def show; end

  def destroy; end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
