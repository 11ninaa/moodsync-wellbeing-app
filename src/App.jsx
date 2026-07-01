import Header from './components/Header';
import MoodForm from './components/MoodForm';
import ScoreCard from './components/ScoreCard';
import RecommendationCard from './components/RecommendationCard';
import History from './components/History';
import MoodChart from './components/MoodChart';
import { useLocalStorage } from './hooks/useLocalStorage';
import { calculateScore } from './utils/scoring';

export default function App() {
    const [myHistory, setMyHistory] = useLocalStorage('moodsync:history', []);

    const addEntry = (formData) => {
        const now = new Date();
        const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        const newEntry = {
            id: Date.now(),
            timestamp: timeString,
            calculatedScore: calculateScore(formData),
            ...formData,
        };

        setMyHistory([newEntry, ...myHistory]);
    };

    const deleteEntry = (id) => {
        setMyHistory(myHistory.filter((entry) => entry.id !== id));
    };

    const averageScore = myHistory.length > 0
        ? Math.round(myHistory.reduce((acc, curr) => acc + curr.calculatedScore, 0) / myHistory.length)
        : 0;

    return (
        <div className="app-shell">
            <div className="app-container">
                <Header />

                <div className="app-grid">
                    <div>
                        <MoodForm onEntrySubmit={addEntry} />
                    </div>
                    <div className="stack">
                        <ScoreCard averageScore={averageScore} />
                        <RecommendationCard averageScore={averageScore} />
                        <MoodChart myHistory={myHistory} />
                        <History myHistory={myHistory} onDeleteEntry={deleteEntry} />
                    </div>
                </div>
            </div>
        </div>
    );
}
