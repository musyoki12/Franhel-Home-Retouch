class Service < ApplicationRecord

  validates :contact_info, {
    presence: true,
    length: {in: 10..13}
  }
end
