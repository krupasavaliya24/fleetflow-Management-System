from pydantic import BaseModel, EmailStr
from app.models.user import UserRole
from typing import Optional

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    phone: Optional[str]
    address: Optional[str]
    role: UserRole

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: Optional[str]
    address: Optional[str]
    role: UserRole

    class Config:
        orm_mode = True