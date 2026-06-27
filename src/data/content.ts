export const profile = {
  name: 'Vidhyalakshmi',
  firstNameLower: 'vidhya',
  tagline: 'an ai/ml engineer driven by building intelligent, real-world systems',
  email: 'vidhyalakshmib1305@gmail.com',
  phone: '+91 6374295846',
  linkedin: 'https://www.linkedin.com/in/b-vidhyalakshmi/',
  github: 'https://github.com/Vidhyalakshmib1305',
};

export const about = {
  paragraph:
    "I did my B.Tech in Artificial Intelligence and Data Science, and I build systems that turn messy real-world data into working intelligence -- retrieval pipelines, multi-agent workflows, and computer vision models that hold up outside a notebook. I enjoy the part where research meets production: indexing thousands of files into a vector store, getting agents to reason over live data, or pushing a model's accuracy past what a benchmark expects. Let's build something intelligent together!",
};

export const education = [
  {
    school: 'SRM Easwari Engineering College, Anna University',
    location: 'Chennai, India',
    degree: 'B.Tech -- Artificial Intelligence and Data Science (CGPA: 9.01)',
    period: 'Nov 2022 -- Jun 2026',
  },
  {
    school: 'Modern Senior Secondary School (Grade XII)',
    location: 'Chennai, India',
    degree: 'CBSE -- Percentage: 95.2%',
    period: 'Jun 2021 -- Jun 2022',
  },
  {
    school: 'Modern Senior Secondary School (Grade X)',
    location: 'Chennai, India',
    degree: 'CBSE -- Percentage: 96%',
    period: 'Jun 2019 -- Jun 2020',
  },
];

export const experience = [
  {
    company: 'NEC Corporation India Pvt. Ltd.',
    role: 'Trainee (Intern) -- Generative AI, SpectralWave® WX Series',
    period: 'Aug 2025 -- Nov 2025',
    points: [
      'Developed a Retrieval-Augmented Generation (RAG) pipeline using Ollama with CodeLlama-34B-Instruct for context-aware code retrieval and intelligent documentation search.',
      'Processed and indexed over 20,000 code files via automated parsing and chunking, storing vector embeddings in Redis through the LlamaIndex framework.',
      'Implemented a dynamic function retrieval system with prompt-driven workflows to fetch and update relevant code functions from natural language queries.',
    ],
    tech: 'Python, Redis Vector Database, LlamaIndex, Ollama, CodeLlama-34B-Instruct',
  },
  {
    company: 'GDSC -- University Club',
    role: 'Competitive Programming',
    period: 'Nov 2022 -- Dec 2024',
    points: ['Active competitive programmer, solving algorithmic problems on LeetCode.'],
    tech: 'LeetCode',
    link: 'https://leetcode.com/u/VidhyalakshmiB_310622243057/',
  },
];

export const skills = [
  {
    number: '01',
    name: 'Programming Languages',
    description: 'Python, C, C++, HTML/CSS, SQL -- the core languages I reach for across modeling, backend services, and data work.',
  },
  {
    number: '02',
    name: 'AI / ML Frameworks',
    description: 'PyTorch, TensorFlow, Scikit-learn, Hugging Face, LangChain, LlamaIndex, OpenCV -- for building, training, and orchestrating models and agents.',
  },
  {
    number: '03',
    name: 'Developer Tools',
    description: 'Git, GitHub, VS Code, Jupyter Notebooks, Docker -- the everyday toolkit for shipping and collaborating on code.',
  },
  {
    number: '04',
    name: 'Databases & MLOps',
    description: 'MySQL, Vector Databases (Redis, FAISS), GitHub Actions, CI/CD, model versioning, experiment tracking, and MLflow.',
  },
  {
    number: '05',
    name: 'Machine Learning Concepts',
    description: 'Supervised & unsupervised learning, deep learning, NLP, RAG pipelines, LLMs, and generative AI.',
  },
];

export const projects = [
  {
    number: '01',
    category: 'Computer Vision · Research',
    name: 'Vattezhuthu Script Digitization using AI',
    period: 'Dec 2025 -- Mar 2026',
    tech: 'Python, OpenCV, TensorFlow, CNN, Computer Vision, Deep Learning',
    points: [
      'Benchmarked CNN-CRNN, TrOCR, PARSeq, and DBNet for ancient script recognition; selected DBNet for superior layout detection on degraded historical textures.',
      'Achieved 98% character accuracy and 95% word accuracy via a hybrid DBNet + TrOCR architecture (Precision 0.90, Recall 0.80, F1 0.87, IoU 0.85).',
      'Applied domain-specific preprocessing -- binarization, stroke normalization, segmentation -- to handle ink degradation and irregular spacing in 8th-century Tamil inscriptions.',
    ],
    link: 'https://github.com/Vidhyalakshmib1305/Vattezhuthu-Script-Digitization-using-AI.git',
  },
  {
    number: '02',
    category: 'Multi-Agent Systems',
    name: 'Maritime Container Repositioning',
    period: 'Mar 2026 -- Apr 2026',
    tech: 'Python, LangGraph, LangChain, Ollama (Llama 3.1), ChromaDB, FastAPI, React.js',
    points: [
      'Architected a 4-agent LangGraph StateGraph pipeline (Demand, Supply, Optimization, Orchestrator) for autonomous container repositioning across 10 global ports.',
      'Built 3 ReAct agents using Ollama Llama 3.1 with LangChain tool calls, reasoning dynamically over live port congestion and TEU availability.',
      'Integrated ChromaDB vector memory for semantic retrieval of past routing decisions and deployed a FastAPI + React/Tailwind frontend showing real-time agent progress.',
    ],
    link: 'https://github.com/Vidhyalakshmib1305/Marine-Container-Repositioning.git',
  },
  {
    number: '03',
    category: 'Agentic SaaS',
    name: 'Sponsorship Prospector',
    period: 'May 2026 -- Jun 2026',
    tech: 'Node.js, React, Vite, Tailwind CSS, Supabase, Groq (LLaMA 3.3-70B), OpenRouter, Three.js',
    points: [
      'Architected a 5-agent autonomous pipeline (BrandFinder -> Scorer -> PitchWriter -> PageBuilder -> Deployer) that discovers brands, scores fit, writes pitches, and deploys live pages end-to-end in under 3 minutes per creator.',
      'Built a multi-LLM routing system (Groq primary, OpenRouter fallback) across 4 model tiers with automatic failover and 30+ niche-aware brand matching rules across India, US, UK, UAE, and Southeast Asia.',
      'Engineered a GitHub API file-push system that triggers Render auto-deploy and returns shareable URLs, delivering 5 live pitch pages per run in 142 seconds.',
    ],
    link: 'https://github.com/Vidhyalakshmib1305/Sponsorship.git',
  },
  {
    number: '04',
    category: 'Full-Stack AI Product',
    name: 'AI-Powered Video Loan Onboarding',
    period: 'Apr 2026 -- May 2026',
    tech: 'FastAPI, React 18, SQLite, Docker, OpenAI Whisper, Groq Llama-3 70B, DeepFace, Tesseract OCR, Nginx',
    points: [
      'Built a full-stack video loan onboarding platform: a React 18 frontend and a FastAPI backend with 8 microservices (face recognition, STT, LLM extraction, OCR, KFS generation, credit bureau, risk engine, sessions), containerized via Docker Compose.',
      'Engineered a 3-stage AI pipeline: Whisper for transcription, Groq Llama-3 70B for structured loan-parameter extraction, and DeepFace/Facenet512 for liveness and identity verification against Aadhaar/PAN.',
      'Implemented an RBI Digital Lending Directions 2025-compliant risk engine (FOIR <= 50%), credit bureau integration, automated KFS generation, and a full SQLite audit trail for regulatory traceability.',
    ],
    link: 'https://github.com/Vidhyalakshmib1305/AI-Powered-Video-Loan-Onboarding-System.git',
  },
];

export const certifications = [
  { name: 'Python Essentials from Cisco Networking Academy', date: 'Oct 2024', link: 'https://drive.google.com/file/d/1v3Po_5qQRht8Kn_zk6N1eGqF6ls1pLaw/view?usp=sharing' },
  { name: 'Advanced Large Language Model Agents MOOC', date: 'Sep 2025', link: 'https://drive.google.com/file/d/1XxpzjOiWY2TAVUejC3jyRRVZRcmqawon/view?usp=sharing' },
  { name: 'Introduction to Industry 4.0 and Industrial Internet of Things', date: 'Jul 2024', link: 'https://drive.google.com/file/d/1cnmOoWK7geEHRsGieoUEG5ZrU-nPhWpe/view?usp=sharing' },
  { name: 'IBM Z Day 2025 -- AI & Data', date: 'Dec 2025', link: 'https://drive.google.com/file/d/1pfsTqLInPs7GQZp6eUQFDSSpbYTawAr-/view?usp=sharing' },
];

export const publication = {
  title: 'Decoding the Stones: Vision-based Recognition of 8th-Century Tamil Vattezhuthu Inscriptions: A Systematic Review',
  venue: 'IEEE International Conference on Research and Technology Innovative Data Communication Technologies and Application (ICIDCA 2025)',
  link: 'https://ieeexplore.ieee.org/document/11280443?denied=',
};

export const leadership = [
  { name: 'Flipkart GRiD 7.0', detail: 'National Semi-Finalist (Aug 2025)', link: 'https://drive.google.com/file/d/19X9uxBvkqUrNT_P2945y6Qm7111YBLmc/view?usp=sharing' },
  { name: 'McKinsey.com Forward Learning Program', detail: 'Focus on problem-solving, communication, and professional effectiveness (Dec 2025)', link: 'https://drive.google.com/file/d/1Yu1bxZciC4V1W7SjFhVOsy_aNFUhXb_t/view?usp=sharing' },
  { name: 'Spark-Wars 4.0', detail: 'Semi-Finalist, global Databricks hackathon by Celebal Technologies (Feb 2026)', link: 'https://drive.google.com/file/d/1lPPS5VobOw8qwkjTjg2szCJlf1COZNZh/view?usp=sharing' },
];

export const marqueeWords = [
  'PYTHON', 'PYTORCH', 'TENSORFLOW', 'LANGCHAIN', 'LANGGRAPH', 'LLAMAINDEX',
  'REACT', 'FASTAPI', 'DOCKER', 'REDIS', 'FAISS', 'CHROMADB',
  'OPENCV', 'HUGGING FACE', 'SCIKIT-LEARN', 'GROQ', 'OLLAMA', 'SQL',
  'GIT', 'CI/CD', 'NLP', 'RAG', 'LLMS', 'GENERATIVE AI',
];
