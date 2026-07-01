import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MoodForm from './components/MoodForm';
import ScoreCard from './components/ScoreCard';
import RecommendationCard from './components/RecommendationCard';
import History from './components/History';

export default function App() {
    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.backgroundColor = '#0b0f19';
    }, []);

    const [myHistory, setMyHistory] = useState([]);

    const addEntry = (formData) => {
        let score = 0;

        if (formData.mood === 'Високо ниво на ентузијазам') score += 40;
        else if (formData.mood === 'Стабилно') score += 35;
        else if (formData.mood === 'Премореност и исцрпеност') score += 15;
        else if (formData.mood === 'Анксиозност и притисок') score += 10;
        else if (formData.mood === 'Апатија и демотивираност') score += 12;

        const sleep = Number(formData.sleepHours);
        if (sleep >= 7 && sleep <= 9) score += 30;
        else if (sleep === 6 || sleep === 10) score += 20;
        else score += 10;

        const stress = Number(formData.stressLevel);
        score += (10 - stress) * 3;

        const now = new Date();
        const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        const newEntry = {
            id: Date.now(),
            timestamp: timeString,
            calculatedScore: score,
            ...formData
        };

        setMyHistory([newEntry, ...myHistory]);
    };

    const averageScore = myHistory.length > 0
        ? Math.round(myHistory.reduce((acc, curr) => acc + curr.calculatedScore, 0) / myHistory.length)
        : 0;

    return (
        <div style={{
            fontFamily: '"Inter", "Segoe UI", sans-serif',
            backgroundColor: '#0b0f19',
            color: '#f1f5f9',
            minHeight: '100vh',
            width: '100%',
            padding: '40px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ width: '100%', maxWidth: '1200px', boxSizing: 'border-box' }}>
                <Header />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '30px', width: '100%' }}>
                    <div>
                        <MoodForm onEntrySubmit={addEntry} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <ScoreCard averageScore={averageScore} />
                        <RecommendationCard averageScore={averageScore} />
                        <History myHistory={myHistory} />
                    </div>
                </div>
            </div>
        </div>
    );
}