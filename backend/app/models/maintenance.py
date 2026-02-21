from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Enum
from sqlalchemy.orm import relationship
from app.core.database import Base
import enum
from datetime import datetime

class MaintenanceType(str, enum.Enum):
    PREVENTIVE = "Preventive"
    REACTIVE = "Reactive"

class MaintenanceStatus(str, enum.Enum):
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"

class Maintenance(Base):
    __tablename__ = "maintenance_logs"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    description = Column(String, nullable=False)
    cost = Column(Float, default=0.0)
    maintenance_type = Column(Enum(MaintenanceType), nullable=False)
    status = Column(Enum(MaintenanceStatus), default=MaintenanceStatus.IN_PROGRESS)
    performed_at = Column(DateTime, default=datetime.utcnow)

    vehicle = relationship("Vehicle")