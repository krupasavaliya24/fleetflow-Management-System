from fastapi import FastAPI
from app.core.database import engine
from sqlalchemy import text

app = FastAPI()

@app.get("/")
def check_database():
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
    return {"status": "Database Connected Successfully"}