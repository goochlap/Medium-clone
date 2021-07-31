class PostsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[show index]
  before_action :find_post, only: %i[show update]

  def index
    if params[:query].present?
      @posts = Post.where("title ILIKE ?", "%#{params[:query]}%")
    else
      @posts = Post.all
    end
    @users = User.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.published = false
    @post.user = current_user
    if @post.save!
      redirect_to user_path(current_user), alert: 'Post created with success!'
    else
      render :new
    end
  end

  def update
    @post.published = true
    @post.save!
    redirect_to user_path(current_user)
  end

  def show
    @review = Review.new
  end

  def destroy; end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
