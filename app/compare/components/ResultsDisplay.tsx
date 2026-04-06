"use client";

/**
 * Displays supercomputer comparison results
 */

import { SupercomputerComparison } from "../comparator";

interface ResultsDisplayProps {
    result: SupercomputerComparison;
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
    return (
        <div className="mt-8 w-full max-w-2xl">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 space-y-6">
                {/* Main Summary */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {result.summary}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {result.factoid}
                    </p>
                </div>

                {/* Performance FLOPS */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Total Performance
                    </p>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {result.userTeraflops.toFixed(2)} TFLOPS
                    </div>
                </div>

                {/* Breakdown */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 uppercase tracking-wide">
                            CPU
                        </p>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {result.userFlopsBreakdown.cpuTeraflops.toFixed(2)} T
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 uppercase tracking-wide">
                            GPU
                        </p>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {result.userFlopsBreakdown.gpuTeraflops.toFixed(2)} T
                        </p>
                    </div>
                </div>

                {/* Supercomputer Comparison */}
                {result.closestSupercomputer && (
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                        <p className="text-xs text-orange-700 dark:text-orange-400 mb-1 uppercase tracking-wide font-semibold">
                            Next Supercomputer
                        </p>
                        <p className="text-lg font-bold text-orange-900 dark:text-orange-300">
                            {result.closestSupercomputer.name}
                        </p>
                        <p className="text-sm text-orange-800 dark:text-orange-400 mt-1">
                            {result.closestSupercomputer.year} • {result.closestSupercomputer.teraflops.toFixed(2)} TFLOPS
                        </p>
                    </div>
                )}

                {/* Better Than Count */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <p className="text-xs text-green-700 dark:text-green-400 mb-1 uppercase tracking-wide font-semibold">
                        Historical Ranking
                    </p>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-300">
                        {result.percentileRank}%
                    </p>
                    <p className="text-sm text-green-800 dark:text-green-400 mt-2">
                        Better than {result.betterThanSupercomputers.length} historic supercomputers
                    </p>
                </div>

                {/* Time Period */}
                {result.equalsToYear && (
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                        <p className="text-xs text-purple-700 dark:text-purple-400 mb-1 uppercase tracking-wide font-semibold">
                            Equivalent Era
                        </p>
                        <p className="text-lg font-bold text-purple-900 dark:text-purple-300">
                            ~{result.equalsToYear}
                        </p>
                        <p className="text-sm text-purple-800 dark:text-purple-400 mt-1">
                            Matches top supercomputers from this time period
                        </p>
                    </div>
                )}

                {/* Supercomputer List */}
                {result.betterThanSupercomputers.length > 0 && (
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Supercomputers You Exceed
                        </h3>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {result.betterThanSupercomputers.map((sc) => (
                                <div
                                    key={sc.id}
                                    className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 transition-colors"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">
                                                {sc.name}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                {sc.year} • {sc.teraflops.toFixed(4)} TFLOPS
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 italic">
                                                {sc.factoid}
                                            </p>
                                        </div>
                                        <div className="text-green-600 dark:text-green-400 font-bold text-lg">✓</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
