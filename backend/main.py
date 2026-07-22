from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # Allows requests from your React app
    allow_credentials=True,         # Allows cookies and authorization headers
    allow_methods=["*"],            # Allows all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],            # Allows all headers
)

@app.get("/")
def home():
    return {"message": "Backend is running!"}

@app.get("/hello/{name}")
def hello(name: str):
    return {
        "message": f"Hello {name}! Everything is working fine from backend to frontend."
    }