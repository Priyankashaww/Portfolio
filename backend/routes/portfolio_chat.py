from pathlib import Path

from fastapi import APIRouter
from pydantic import BaseModel

from services.rag import (
    load_knowledge,
    retrieve_chunks
)

from services.groq_service import (
    generate_answer
)


router = APIRouter()


# =========================================================
# KNOWLEDGE BASE
# =========================================================

BASE_DIR = Path(__file__).resolve().parents[1]

PDF_PATH = (
    BASE_DIR
    / "knowledge"
    / "resume.pdf"
)


print(f"📄 Looking for resume at: {PDF_PATH}")


if not PDF_PATH.exists():
    raise FileNotFoundError(
        f"Resume PDF not found at: {PDF_PATH}"
    )


knowledge = load_knowledge(
    str(PDF_PATH)
)


print(
    f"✅ Knowledge base loaded successfully."
)

print(
    f"🧩 Chunks created: {len(knowledge['chunks'])}"
)


# =========================================================
# REQUEST MODEL
# =========================================================

class PortfolioQuestion(BaseModel):

    question: str


# =========================================================
# CHAT
# =========================================================

@router.post("/portfolio-chat")
async def portfolio_chat(
    request: PortfolioQuestion
):

    question = request.question.strip()

    if not question:

        return {
            "answer": "Please enter a question."
        }


    relevant_chunks = retrieve_chunks(
        question,
        knowledge["chunks"],
        top_k=5
    )


    context = "\n\n".join(
        relevant_chunks
    )


    answer = generate_answer(
        question,
        context
    )


    return {
        "answer": answer
    }