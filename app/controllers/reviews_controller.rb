class ReviewsController < ApplicationController
  def new
    @post = Post.find(params[:post_id])
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @post = Post.find(params[:post_id])
    @review.post = @post
    if @review.save!
      redirect_to post_path(@post), notice: "review posted!"
    else
      render :new
    end
  end

  private

  def review_params
    params.require(:review).permit(:body)
  end
end
