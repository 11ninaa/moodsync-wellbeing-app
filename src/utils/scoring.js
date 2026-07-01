export const MOOD_WEIGHTS = {
    'Високо ниво на ентузијазам': 40,
    'Стабилно': 35,
    'Премореност и исцрпеност': 15,
    'Анксиозност и притисок': 10,
    'Апатија и демотивираност': 12,
};

export function scoreSleep(hours) {
    const h = Number(hours);
    if (h >= 7 && h <= 9) return 30;
    if (h === 6 || h === 10) return 20;
    return 10;
}

export function scoreStress(level) {
    const s = Number(level);
    return (10 - s) * 3;
}

export function calculateScore({ mood, sleepHours, stressLevel }) {
    const moodScore = MOOD_WEIGHTS[mood] ?? 0;
    const sleepScore = scoreSleep(sleepHours);
    const stressScore = scoreStress(stressLevel);
    return moodScore + sleepScore + stressScore;
}

export function getScoreTier(score) {
    if (score === 0) return 'empty';
    if (score >= 75) return 'good';
    if (score >= 50) return 'moderate';
    return 'low';
}
