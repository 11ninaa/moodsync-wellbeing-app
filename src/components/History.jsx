import { getScoreTier } from '../utils/scoring';

export default function History({ myHistory, onDeleteEntry }) {
    return (
        <div className="card">
            <h2 className="card-title">Историја на записи</h2>
            {myHistory.length === 0 ? (
                <p className="history-empty">Сѐ уште нема внесени записи.</p>
            ) : (
                <div className="history-list">
                    {myHistory.map((entry) => {
                        const tier = getScoreTier(entry.calculatedScore);
                        return (
                            <div key={entry.id} className={`history-item ${tier}`}>
                                <div className="history-item-header">
                                    <span className="history-item-time">
                                        Внесено во {entry.timestamp}
                                    </span>
                                    <span className={`history-item-score history-item-score--${tier}`}>
                                        {entry.calculatedScore} поени
                                    </span>
                                    <button
                                        type="button"
                                        className="history-item-delete"
                                        onClick={() => onDeleteEntry(entry.id)}
                                        aria-label="Избриши запис"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="history-item-details">
                                    Состојба: <strong>{entry.mood}</strong> | Сон: <strong>{entry.sleepHours}ч</strong> | Стрес: <strong>{entry.stressLevel}/10</strong>
                                </div>
                                {entry.note && (
                                    <p className="history-item-note">Контекст: „{entry.note}"</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
