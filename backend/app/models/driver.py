from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime, Date, Enum
from datetime import datetime
from app.core.database import Base
import enum


class DriverStatus(str, enum.Enum):
    ON_DUTY = "OnDuty"
    OFF_DUTY = "OffDuty"
    SUSPENDED = "Suspended"

class Driver(Base):
    __tablename__ = "drivers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    license_number = Column(String, unique=True, nullable=False)
    license_expiry = Column(Date, nullable=False)
    contact_number = Column(String, nullable=True)
    status = Column(Enum(DriverStatus), default=DriverStatus.OFF_DUTY)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)