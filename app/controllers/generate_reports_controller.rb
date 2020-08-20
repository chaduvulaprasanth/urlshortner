class GenerateReportsController < ApplicationController

  def new
  end

  def create
    email = params[:email]
    if email
      UserMailer.generate_report(email).deliver_now
      render status: :ok, json: { notice: "email sent"}
    else
      render status: :unporcessable_entity, json: { notice: "invalid email"}
    end
    
  end
end
