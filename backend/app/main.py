from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.portfolio_chat import router as portfolio_router


app = FastAPI(
    title="Priyanka Shaw Portfolio AI",
    description="RAG-powered portfolio assistant",
    version="1.0.0"
)


# ---------------------------------------------------------
# CORS
# ---------------------------------------------------------

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


# ---------------------------------------------------------
# ROUTES
# ---------------------------------------------------------

app.include_router(
    portfolio_router,
    prefix="/api"
)


# ---------------------------------------------------------
# HEALTH
# ---------------------------------------------------------

@app.get("/")
def root():
    return {
        "message": "Priyanka Portfolio AI is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }