import React from 'react';

export default function RecommendationCard({ averageScore }) {
    const getHbscMessage = (score) => {
        if (score === 0) return { text: "Внесете ги првите параметри за да се генерира HBSC компаративен извештај за благосостојба.", color: '#64748b', bg: '#1f2937', border: '#4b5563' };
        if (score >= 75) return { text: "Резултатот е во согласност со високите социјални стандарди на HBSC за позитивно ментално здравје. Ниското ниво на психосоматски симптоми укажува на одлична когнитивна стабилност и балансиран биоритам.", color: '#4ade80', bg: 'rgba(20, 83, 45, 0.2)', border: '#22c55e' };
        if (score >= 50) return { text: "Умерена благосостојба. Според HBSC трендовите кај студентите, ова ниво рефлектира моментален академски притисок кој бара внимание за да не премине во хроничен замор. Обезбедете подобра поддршка од врсниците.", color: '#60a5fa', bg: 'rgba(30, 58, 138, 0.2)', border: '#3b82f6' };
        return { text: "Критичен индекс. Индикаторите на HBSC за прегореност сугерираат акутна депресија на психолошката отпорност предизвикана од дефицит на сон и висок перципиран стрес. Итно е потребна редукција на обврските.", color: '#f87171', bg: 'rgba(127, 29, 29, 0.2)', border: '#ef4444' };
    };

    const hbscMeta = getHbscMessage(averageScore);

    return (
        <div style={{
            padding: '18px',
            borderRadius: '12px',
            fontSize: '0.9rem',
            lineHeight: '1.5',
            borderLeft: '5px solid',
            backgroundColor: hbscMeta.bg,
            borderColor: hbscMeta.border,
            color: hbscMeta.color
        }}>
            <strong>Медицински HBSC Контекст:</strong> {hbscMeta.text}
        </div>
    );
}