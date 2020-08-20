require 'test_helper'

class UrlTest < ActiveSupport::TestCase
  
  def setup
    @url = Url.new(original_url: "https://github.com/")
    @url.set_slug
    @url.save
  end

  test "url should be present" do
    assert @url.valid?
  end

  test "original url should not be empty" do
    @url.original_url = ""
    assert_not @url.valid?
    assert_equal ["Original url can't be blank"], @url.errors.full_messages
  end

  test "original url should be unique"do
    new_url = Url.new(original_url: @url.original_url)
    new_url.set_slug
    new_url.save
    assert_not new_url.valid?
    assert_equal ["Original url has already been taken"], new_url.errors.full_messages
  end

  test "slug should not be empty" do
    @url.slug = ""
    assert_not @url.valid?
    assert_equal ["Slug can't be blank", "Slug has already been taken", "Slug is the wrong length (should be 6 characters)"], @url.errors.full_messages
  end

  test "slug should be unique" do
    new_url = Url.new(original_url: "https://twitter.com/", slug: @url.slug)
    assert_not new_url.valid?
    assert_equal ["Slug has already been taken"], new_url.errors.full_messages
  end

end
