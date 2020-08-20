require 'test_helper'

class UrlTest < ActiveSupport::TestCase
  
  def setup
    @url = Url.new(original_url: "https://github.com/")
  end

  test "url should be present" do
    assert @url.valid?
  end

  test "original url should not be empty" do
    @url.original_url = ""
    assert_not @url.valid?
  end

  # test "original url should be unique"do
  #   new_url = @url
  #   new_url.save
  #   assert_not new_url.valid?
  # end

end
