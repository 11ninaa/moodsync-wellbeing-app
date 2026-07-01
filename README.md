# MoodSync - Digital Wellbeing Assessment Platform

MoodSync is a React-based web application designed to evaluate and track the digital and mental wellbeing of young people. The platform enables easy monitoring and analysis of affective states, sleep quality, and levels of perceived psychosomatic stress among the youth population.

By implementing comparative reports directly inspired by the methodology and findings of the international **HBSC (Health Behaviour in School-aged Children)** study, the system offers dynamic insights and actionable guidance to help stabilize cognitive, emotional, and psychosomatic balance during adolescence (ages 11-15).

---

## Features

- **Daily Indicators (Your Balance):** A quantitative assessment scoring system that calculates a wellbeing index from 0 to 100, tailored specifically for younger audiences.
- **Dynamic HBSC Trend Chart:** A real-time visual line graph mapping out historical entry scores, threshold metrics (50, 75, 100), and custom timestamps.
- **Smart Recommendations:** Contextual feedback and mental health action items driven by current and average wellbeing percentages.
- **Entry History Management:** An organized list view of past submissions with custom user notes regarding school and daily life stress contexts, including full data removal capabilities.

---

## Project Structure

Based on the core workspace layout, the project is structured as follows:

```text
src/
├── assets/                  # Static assets and media files
├── components/              # Reusable React UI components
│   ├── Header.jsx           # Application branding and navigation header
│   ├── History.jsx          # Logged entry tables and deletion handlers
│   ├── MoodChart.jsx        # SVG-rendered trend tracking visualization
│   ├── MoodForm.jsx         # Controlled questionnaire input form
│   ├── RecommendationCard.jsx # Dynamic advice generator based on trends
│   └── ScoreCard.jsx        # Aggregate and average metric display
├── hooks/
│   └── useLocalStorage.js   # Custom hook for persistent browser state
└── utils/
    └── scoring.js           # Algorithmic logic for HBSC weight evaluations
    
```

## 1. Install Dependencies
Before running the application for the first time, install the required node packages using your terminal:

```bash 
npm install
```

## 2. Launch the Development Server
To spin up Vite's local development environment, execute the following script:

```bash 
npm run dev
```
Once compilation completes, open your browser and navigate to the local environment port (typically http://localhost:5173).