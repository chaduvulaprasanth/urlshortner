class UserMailer < ApplicationMailer

  def generate_report(email)
    mail to: email, subject: "Generate Report"
  end
end
