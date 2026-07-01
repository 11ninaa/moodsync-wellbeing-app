import React from 'react';

const WIDTH = 550;
const HEIGHT = 200;
const PADDING_LEFT = 40;
const PADDING_RIGHT = 24;
const PADDING_TOP = 24;
const PADDING_BOTTOM = 35;

export default function MoodChart({ myHistory }) {
    if (!myHistory || myHistory.length < 2) {
        return (
            <div className="card">
                <h2 className="card-title">Графикон на благосостојба</h2>
                <p className="chart-empty">
                    Потребни се барем 2 записи за да се прикаже графиконот.
                </p>
            </div>
        );
    }

    const points = [...myHistory].reverse();
    const maxScore = 100;

    const stepX = (WIDTH - PADDING_LEFT - PADDING_RIGHT) / (points.length - 1);

    const toXY = (score, index) => {
        const x = PADDING_LEFT + index * stepX;
        const y = HEIGHT - PADDING_BOTTOM - (score / maxScore) * (HEIGHT - PADDING_TOP - PADDING_BOTTOM);
        return [x, y];
    };

    const linePath = points
        .map((entry, i) => {
            const [x, y] = toXY(entry.calculatedScore, i);
            return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(' ');

    return (
        <div className="card">
            <h2 className="card-title">Графикон на благосостојба</h2>
            <svg
                className="chart-svg"
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                role="img"
                aria-label="Графикон на индексот на благосостојба низ време"
                style={{ width: '100%', height: 'auto' }}
            >
                {[0, 50, 75, 100].map((ref) => {
                    const y = HEIGHT - PADDING_BOTTOM - (ref / maxScore) * (HEIGHT - PADDING_TOP - PADDING_BOTTOM);
                    return (
                        <g key={ref}>
                            {ref > 0 && (
                                <line
                                    x1={PADDING_LEFT}
                                    x2={WIDTH - PADDING_RIGHT}
                                    y1={y}
                                    y2={y}
                                    stroke="#374151"
                                    strokeDasharray="4 4"
                                    strokeWidth="1"
                                />
                            )}
                            <text
                                x={PADDING_LEFT - 10}
                                y={y + 4}
                                fill="#9ca3af"
                                fontSize="12"
                                textAnchor="end"
                                fontFamily="sans-serif"
                            >
                                {ref}
                            </text>
                        </g>
                    );
                })}

                <path d={linePath} fill="none" stroke="#38bdf8" strokeWidth="3" />

                {points.map((entry, i) => {
                    const [x, y] = toXY(entry.calculatedScore, i);
                    const timeString = entry.timestamp || `П.${i + 1}`;

                    return (
                        <g key={entry.id || i}>
                            <circle cx={x} cy={y} r="5" fill="#38bdf8" />

                            <text
                                x={x}
                                y={y - 10}
                                fill="#fff"
                                fontSize="11"
                                fontWeight="bold"
                                textAnchor="middle"
                                fontFamily="sans-serif"
                            >
                                {Math.round(entry.calculatedScore)}
                            </text>

                            <text
                                x={x}
                                y={HEIGHT - 12}
                                fill="#6b7280"
                                fontSize="11"
                                textAnchor="middle"
                                fontFamily="sans-serif"
                            >
                                {timeString}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}