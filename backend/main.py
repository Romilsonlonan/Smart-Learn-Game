from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Tech Frio Games API",
    description="Backend API for the Tech Frio Games project.",
    version="0.1.0"
)

# Configurando CORS para permitir que o frontend (React/Vite) faça requisições para a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, substitua pelo domínio do seu frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Bem-vindo à API do Tech Frio Games!"}

@app.get("/health")
def health_check():
    return {"status": "online"}
