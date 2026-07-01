import React from 'react';

export default function History({ myHistory }) {
    return (
        <div style={{ backgroundColor: '#111827', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)', border: '1px solid #1f2937', boxSizing: 'border-box' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#f8fafc', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em', borderLeft: '4px solid #38bdf8', paddingLeft: '12px' }}>
                Историја на записи
            </h2>
            {myHistory.length === 0 ? (
                <p style={{ color: '#4b5563', fontStyle: 'italic', textAlign: 'center', padding: '10px 0' }}>
                    Системот чека внес на податоци.
                </p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxHeight: '250px', overflowY: 'auto' }}>
                    {myHistory.map((entry) => (
                        <div key={entry.id} style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '15px', borderLeft: `4px solid ${entry.calculatedScore >= 75 ? '#22c55e' : entry.calculatedScore >= 50 ? '#3b82f6' : '#ef4444'}` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: '600' }}>Интервал: {entry.timestamp} часот</span>
                                <span style={{ color: entry.calculatedScore >= 75 ? '#4ade80' : entry.calculatedScore >= 50 ? '#60a5fa' : '#f87171', fontWeight: 'bold', fontSize: '0.85rem' }}>
                  {entry.calculatedScore} поени
                </span>
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#d1d5db', lineHeight: '1.4' }}>
                                Состојба: <strong>{entry.mood}</strong> | Сон: <strong>{entry.sleepHours}ч</strong> | Стрес: <strong>{entry.stressLevel}/10</strong>
                            </div>
                            {entry.note && (
                                <p style={{ margin: '6px 0 0 0', color: '#9ca3af', fontSize: '0.8rem', fontStyle: 'italic', borderTop: '1px solid #374151', paddingTop: '4px' }}>
                                    Контекст: "{entry.note}"
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}