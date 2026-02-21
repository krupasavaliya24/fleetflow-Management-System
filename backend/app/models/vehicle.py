from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime, Date, Enum
from datetime import datetime
from app.core.database import Base
import enum

class VehicleType(str, enum.Enum):
    TRUCK = "Truck"
    VAN = "Van"
    BIKE = "Bike"

class VehicleStatus(str, enum.Enum):
    AVAILABLE = "Available"
    ON_TRIP = "OnTrip"
    IN_SHOP = "InShop"
    RETIRED = "Retired"

class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    model = Column(String, nullable=True)
    license_plate = Column(String, unique=True, nullable=False)
    max_load_kg = Column(Float, nullable=False)
    odometer_km = Column(Float, default=0.0)
    type = Column(Enum(VehicleType), nullable=False)
    status = Column(Enum(VehicleStatus), default=VehicleStatus.AVAILABLE)
    created_at = Column(DateTime, default=datetime.utcnow)