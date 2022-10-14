class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :service, :location, :address, :contact_info, :description
  
end
