# 🔄 Shadow Me 360 – Data Flow Overview

This document describes how data flows through the Shadow Me 360 Core Edition system.  
It outlines the full lifecycle: from input, to AI analysis, to simulation and storage.

---

## 🧭 High-Level Flow

🧩 Step-by-Step Breakdown
1. 📝 User Input

    Users manually enter data (e.g. budget, mood, sleep hours) via UI forms.

    Data categories include:

        Financial (budget, expenses)

        Mental (mood, sleep)

        Physical (steps, GPS)

        Nutrition (food intake)

        Social (time spent)

        Digital (screen time)

2. 🧠 Local Preprocessing

    Inputs are formatted into the structure defined in data-schema/user-model.json

    Pre-checks run locally (e.g., budget limits, missing values)

    Data is temporarily held in memory

3. 🤖 LLM Simulation (Offline AI)

    User triggers a prompt like:

        "What happens if I stop exercising for 2 weeks?"

    The system:

        Loads local LLM model (Phi-3, TinyLlama...) using WebLLM or MLC.js

        Builds a full prompt from user input + recent data

        Sends it to the local model for analysis (no cloud)

    AI returns a human-like summary or prediction

4. 📤 Output Generation

    The AI response is displayed to the user

    System may visualize patterns (e.g., budget graphs, mood trends)

    Optional: response is logged to history (locally)

5. 🔐 Encrypted Storage

    After every session or input:

        The full user-model object is encrypted using AES-256 or ChaCha20

        Key is derived from the user's password (PBKDF2)

        Encrypted blob is saved to IndexedDB or local file

🛡️ Security Notes

    No raw data is stored in plain text

    AI never sends or receives external queries

    Everything is local – no cloud, no tracking

⬆️ Optional Export

Users can choose to:

    Export the encrypted data to a .json or .db file

    Import it later on another device with the same password

🔄 Future Enhancements

    Integration with scheduled background analysis

    Local alerts based on trends (e.g., sleep dropping, budget overspending)

    Cross-domain pattern detection (e.g., mood + sleep + spending)
