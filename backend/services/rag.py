import re
import fitz


def extract_pdf_text(pdf_path):
    """
    Extract text from PDF while preserving page numbers.
    """

    try:
        document = fitz.open(pdf_path)

        pages = []

        for page_number, page in enumerate(document):

            text = page.get_text()

            if text.strip():
                pages.append(
                    f"\n--- Page {page_number + 1} ---\n{text}"
                )

        document.close()

        return "\n".join(pages)

    except Exception as e:
        raise RuntimeError(
            f"Could not read PDF: {e}"
        )


def clean_text(text):
    """
    Clean extracted PDF text.
    """

    text = re.sub(
        r"\n{3,}",
        "\n\n",
        text
    )

    text = re.sub(
        r"[ \t]+",
        " ",
        text
    )

    return text.strip()


def create_chunks(
    text,
    chunk_size=3000,
    overlap=300
):
    """
    Split document into overlapping chunks.
    """

    chunks = []

    start = 0

    while start < len(text):

        end = start + chunk_size

        chunk = text[start:end].strip()

        if chunk:
            chunks.append(chunk)

        start += chunk_size - overlap

    return chunks


def tokenize(text):
    """
    Convert text into searchable words.
    """

    return set(
        re.findall(
            r"\b[a-zA-Z0-9]{2,}\b",
            text.lower()
        )
    )


def retrieve_chunks(
    question,
    chunks,
    top_k=5
):
    """
    Retrieve the most relevant chunks
    using keyword overlap.
    """

    question_words = tokenize(question)

    scored_chunks = []

    for chunk in chunks:

        chunk_words = tokenize(chunk)

        overlap = (
            question_words.intersection(
                chunk_words
            )
        )

        score = len(overlap)

        scored_chunks.append(
            (score, chunk)
        )

    scored_chunks.sort(
        key=lambda x: x[0],
        reverse=True
    )

    selected = [
        chunk
        for score, chunk
        in scored_chunks[:top_k]
        if score > 0
    ]

    # If no direct keyword match,
    # provide first chunks so Qwen can
    # determine whether information exists.
    if not selected:
        selected = chunks[:top_k]

    return selected


def load_knowledge(pdf_path):
    """
    Load PDF and prepare chunks.
    """

    text = extract_pdf_text(pdf_path)

    if not text.strip():
        raise RuntimeError(
            "No readable text found in PDF."
        )

    text = clean_text(text)

    chunks = create_chunks(text)

    return {
        "text": text,
        "chunks": chunks
    }