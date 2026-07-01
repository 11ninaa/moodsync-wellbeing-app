import React, { useState } from 'react';

export default function MoodForm({ onEntrySubmit }) {
    const [formData, setFormData] = useState({
        mood: 'Стабилно',
        sleepHours: 7,
        stressLevel: 3,
        note: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEntrySubmit(formData);
        setFormData({ mood: 'Стабилно', sleepHours: 7, stressLevel: 3, note: '' });
    };

    const cardStyle = {
        backgroundColor: '#111827',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        border: '1px solid #1f2937',
        boxSizing: 'border-box'
    };

    const labelStyle = { display: 'block', fontWeight: '600', marginBottom: '8px', color: '#9ca3af', fontSize: '0.85rem' };
    const inputStyle = { width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#1f2937', color: '#f9fafb', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', marginBottom: '20px' };

    return (
        <div style={cardStyle}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#f8fafc', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em', borderLeft: '4px solid #38bdf8', paddingLeft: '12px' }}>
                Клинички параметри
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle}>Примарна афективна состојба</label>
                    <select name="mood" value={formData.mood} onChange={handleInputChange} style={inputStyle}>
                        <option value="Високо ниво на ентузијазам">Високо ниво на ентузијазам</option>
                        <option value="Стабилно">Стабилно / Балансирано</option>
                        <option value="Премореност и исцрпеност">Премореност и исцрпеност</option>
                        <option value="Анксиозност и притисок">Анксиозност и притисок</option>
                        <option value="Апатија и демотивираност">Апатија и демотивираност</option>
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Квантитет на сон во претходниот циклус (часови)</label>
                    <input type="number" name="sleepHours" min="1" max="24" value={formData.sleepHours} onChange={handleInputChange} style={inputStyle} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Степен на перципиран психосоматски стрес (1 - Минимален, 10 - Акутен)</label>
                    <input type="range" name="stressLevel" min="1" max="10" value={formData.stressLevel} onChange={handleInputChange} style={{ width: '100%', accentColor: '#38bdf8' }} />
                    <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#38bdf8', marginTop: '6px', fontWeight: 'bold' }}>
                        Индекс: {formData.stressLevel} / 10
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Забелешка за контекстот на состојбата</label>
                    <input type="text" name="note" value={formData.note} onChange={handleInputChange} placeholder="Внесете екстерни фактори..." style={inputStyle} />
                </div>

                <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#0284c7', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '0.95rem', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Пресметај вредности
                </button>
            </form>
        </div>
    );
}