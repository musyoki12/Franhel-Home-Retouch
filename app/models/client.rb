class Client < ApplicationRecord
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

    has_many :services
end
