"use client"; // This tells Next.js this page uses buttons and state

import { useState } from 'react';
import { SuperCalculator } from './calculator';

export default function ComparePage() {
    const [userFlops, setUserFlops] = useState(0);
    const [result, setResult] = useState<string | null>(null);

    const handleCalculate = () => {
        var result = SuperCalculator.compare(userFlops);
        setResult(result);
    };

    return (
        <main style={{ padding: '20px' }}>
            <h1>Supercomputer Calculator</h1>

            <div style={{ marginBottom: '20px' }}>
                <p>Enter your computer's estimated Gigaflops:</p>
                <input
                    type="number"
                    onChange={(e) => setUserFlops(Number(e.target.value))}
                    placeholder="e.g. 100"
                    style={{ padding: '8px', color: 'black' }}
                />

                <button
                    onClick={handleCalculate}
                    style={{ marginLeft: '10px', padding: '8px 16px', cursor: 'pointer' }}
                >
                    Calculate
                </button>
            </div>

            {result && (
                <div style={{ marginTop: '20px', fontWeight: 'bold', color: 'green' }}>
                    {result}
                </div>
            )}
        </main>
    );
}
