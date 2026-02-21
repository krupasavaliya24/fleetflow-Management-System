from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import engine, Base
from app.routes import auth, vehicle, trip, maintenance, expense, driver

app = FastAPI(title="FleetFlow API")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create all tables in the database
Base.metadata.create_all(bind=engine)

# Include all routers
app.include_router(auth.router)
app.include_router(vehicle.router)
app.include_router(trip.router)
app.include_router(maintenance.router)
app.include_router(expense.router)
app.include_router(driver.router)

print("🚀 FleetFlow API is ready!")