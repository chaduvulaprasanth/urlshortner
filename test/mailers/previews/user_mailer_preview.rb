# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/generate_report
  def generate_report
    email = "chaduvulaprasanth1998@gmail.com"
    UserMailer.generate_report(email)
  end
end
