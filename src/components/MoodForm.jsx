import { useState } from 'react';

const MOOD_OPTIONS = [
    'Високо ниво на ентузијазам',
    'Стабилно',
    'Премореност и исцрпеност',
    'Анксиозност и притисок',
    'Апатија и демотивираност',
];

const initialFormState = {
    mood: 'Стабилно',
    sleepHours: 7,
    stressLevel: 3,
    note: '',
};

export default function MoodForm({ onEntrySubmit }) {
    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEntrySubmit(formData);
        setFormData(initialFormState);
    };

    return (
        <div className="card">
            <h2 className="card-title">Дневен запис</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="field-label" htmlFor="mood">Расположение денес</label>
                    <select
                        id="mood"
                        name="mood"
                        value={formData.mood}
                        onChange={handleInputChange}
                        className="field-input"
                    >
                        {MOOD_OPTIONS.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className="field">
                    <label className="field-label" htmlFor="sleepHours">Часови сон претходната ноќ</label>
                    <input
                        id="sleepHours"
                        type="number"
                        name="sleepHours"
                        min="1"
                        max="24"
                        value={formData.sleepHours}
                        onChange={handleInputChange}
                        className="field-input"
                    />
                </div>

                <div className="field">
                    <label className="field-label" htmlFor="stressLevel">
                        Ниво на стрес (1 - минимален, 10 - висок)
                    </label>
                    <input
                        id="stressLevel"
                        type="range"
                        name="stressLevel"
                        min="1"
                        max="10"
                        value={formData.stressLevel}
                        onChange={handleInputChange}
                        className="field-range"
                    />
                    <div className="field-range-value">
                        Индекс: {formData.stressLevel} / 10
                    </div>
                </div>

                <div className="field">
                    <label className="field-label" htmlFor="note">Забелешка (опционално)</label>
                    <input
                        id="note"
                        type="text"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder="Што влијаеше денес?"
                        className="field-input"
                    />
                </div>

                <button type="submit" className="submit-button">
                    Зачувај запис
                </button>
            </form>
        </div>
    );
}
