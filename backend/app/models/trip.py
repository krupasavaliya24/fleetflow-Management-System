from sqlalchemy import Column, Integer, String, Float, Enum, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.core.database import Base
import enum
from datetime import datetime

class TripStatus(str, enum.Enum):
    DRAFT = "Draft"
    DISPATCHED = "Dispatched"
    COMPLETED = "Completed"
    CANCELLED = "Cancelled"

class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    driver_id = Column(Integer, ForeignKey("drivers.id"))
    cargo_description = Column(String, nullable=True)
    cargo_weight_kg = Column(Float, nullable=False)
    origin = Column(String, nullable=False)
    destination = Column(String, nullable=False)
    status = Column(Enum(TripStatus), default=TripStatus.DRAFT)
    start_time = Column(DateTime, nullable=True)
    end_time = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    vehicle = relationship("Vehicle")
    driver = relationship("Driver")