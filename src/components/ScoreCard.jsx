import React from 'react';

export default function ScoreCard({ averageScore }) {
    return (
        <div style={{ backgroundColor: '#111827', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)', border: '1px solid #1f2937', boxSizing: 'border-box' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#f8fafc', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em', borderLeft: '4px solid #38bdf8', paddingLeft: '12px' }}>
                Твојот биланс
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.85rem', textTransform: 'uppercase' }}>Индекс на благосостојба</p>
                    <h3 style={{ fontSize: '2.5rem', margin: '5px 0 0 0', fontWeight: '900', color: '#38bdf8' }}>
                        {averageScore} <span style={{ fontSize: '1.1rem', color: '#4b5563' }}>/ 100</span>
                    </h3>
                </div>
                <span style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    backgroundColor: averageScore >= 75 ? 'rgba(34, 197, 94, 0.1)' : averageScore >= 50 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: averageScore >= 75 ? '#4ade80' : averageScore >= 50 ? '#60a5fa' : '#f87171',
                    border: `1px solid ${averageScore >= 75 ? '#22c55e' : averageScore >= 50 ? '#3b82f6' : '#ef4444'}`
                }}>
          {averageScore === 0 ? 'Нема податоци' : averageScore >= 75 ? 'Реципрочна стабилност' : averageScore >= 50 ? 'Компензиран ризик' : 'Акутна декомпензација'}
        </span>
            </div>
        </div>
    );
}