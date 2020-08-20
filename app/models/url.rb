class Url < ApplicationRecord
  validates :original_url, presence: true, uniqueness: true
  validates :slug, presence: true, uniqueness: true, length: { is: 6 }
  validates :clicked, presence: true
  
  def set_slug
    self.slug = generate_slug
  end

  def generate_slug
    loop do
      token = SecureRandom.alphanumeric(6)
      break token unless Url.where(slug: token).exists?
    end
  end

end
