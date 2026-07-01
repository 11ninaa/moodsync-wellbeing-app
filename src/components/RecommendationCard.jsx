import { getScoreTier } from '../utils/scoring';

const TIER_MESSAGES = {
    empty: 'Внесете го првиот запис за да добиете преглед на вашата благосостојба.',
    good: 'Твоите одговори укажуваат на добар баланс - редовен сон и пониско ниво на стрес. Продолжи со истите навики.',
    moderate: 'Умерен резултат. Ова често се совпаѓа со период на поголем академски притисок. Обиди се да го подобриш квалитетот на сон и да земеш кратки паузи.',
    low: 'Пониско резултат од очекуваното. Ова може да значи недоволно сон или висок стрес во последно време. Ако ова трае подолго, разговарај со некој на доверба - наставник, родител или училишен психолог.',
};

export default function RecommendationCard({ averageScore }) {
    const tier = getScoreTier(averageScore);

    return (
        <div className={`recommendation ${tier}`}>
            <strong>Преглед:</strong> {TIER_MESSAGES[tier]}
        </div>
    );
}
