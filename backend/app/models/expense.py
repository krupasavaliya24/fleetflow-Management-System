from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime, String
from sqlalchemy.orm import relationship
from app.core.database import Base
from datetime import datetime

class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)
    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))
    fuel_liters = Column(Float, nullable=False)
    fuel_cost = Column(Float, nullable=False)
    other_cost = Column(Float, default=0.0)
    recorded_at = Column(DateTime, default=datetime.utcnow)

    vehicle = relationship("Vehicle")