"use client";

import { useState } from "react";
import { ComponentSelector } from "./components/ComponentSelector";
import { ResultsDisplay } from "./components/ResultsDisplay";
import { SuperCalculator, SupercomputerComparison } from "./comparator";
import { cpus, gpus, rams, storageSizes, storageTypes, ComputerBuild } from "./data";

export default function ComparePage() {
    const [selectedCpuId, setSelectedCpuId] = useState<string | null>(null);
    const [selectedGpuId, setSelectedGpuId] = useState<string | null>(null);
    const [selectedRamId, setSelectedRamId] = useState<string | null>(null);
    const [selectedStorageSizeId, setSelectedStorageSizeId] = useState<string | null>(
        null
    );
    const [selectedStorageTypeId, setSelectedStorageTypeId] = useState<string | null>(
        null
    );
    const [result, setResult] = useState<SupercomputerComparison | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCompare = () => {
        setError(null);

        try {
            const selectedCpu = cpus.find((cpu) => cpu.id === selectedCpuId) || null;
            const selectedGpu = gpus.find((gpu) => gpu.id === selectedGpuId) || null;
            const selectedRam = rams.find((ram) => ram.id === selectedRamId) || null;
            const selectedStorageSize =
                storageSizes.find((size) => size.id === selectedStorageSizeId) || null;
            const selectedStorageType =
                storageTypes.find((type) => type.id === selectedStorageTypeId) || null;

            const build: ComputerBuild = {
                cpu: selectedCpu,
                gpu: selectedGpu,
                ram: selectedRam,
                storageSizeId: selectedStorageSizeId,
                storageTypeId: selectedStorageTypeId,
            };

            const comparisonResult = SuperCalculator.compareBuild(build);
            setResult(comparisonResult);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "An error occurred during comparison"
            );
        }
    };

    const isFormComplete =
        selectedCpuId && selectedGpuId && selectedRamId && selectedStorageSizeId && selectedStorageTypeId;

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Build Your Computer
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Select components and compare your build's performance
                    </p>
                </div>

                {/* Selection Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <ComponentSelector
                            label="CPU"
                            options={cpus.map((cpu) => ({ id: cpu.id, name: cpu.name }))}
                            value={selectedCpuId}
                            onChange={setSelectedCpuId}
                        />
                        <ComponentSelector
                            label="GPU"
                            options={gpus.map((gpu) => ({ id: gpu.id, name: gpu.name }))}
                            value={selectedGpuId}
                            onChange={setSelectedGpuId}
                        />
                        <ComponentSelector
                            label="RAM"
                            options={rams.map((ram) => ({ id: ram.id, name: ram.name }))}
                            value={selectedRamId}
                            onChange={setSelectedRamId}
                        />
                        <ComponentSelector
                            label="Storage Size"
                            options={storageSizes.map((size) => ({
                                id: size.id,
                                name: `${size.capacity < 1 ? size.capacity * 1000 : size.capacity} ${size.capacity < 1 ? "MB" : "GB"}`,
                            }))}
                            value={selectedStorageSizeId}
                            onChange={setSelectedStorageSizeId}
                        />
                        <ComponentSelector
                            label="Storage Type"
                            options={storageTypes.map((type) => ({
                                id: type.id,
                                name: type.name,
                            }))}
                            value={selectedStorageTypeId}
                            onChange={setSelectedStorageTypeId}
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800">
                            <p className="text-red-700 dark:text-red-200 font-medium">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Compare Button */}
                    <button
                        onClick={handleCompare}
                        disabled={!isFormComplete}
                        className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${isFormComplete
                            ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
                            : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        Compare Build
                    </button>

                    {!isFormComplete && (
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                            Please select all components to compare
                        </p>
                    )}
                </div>

                {/* Results */}
                {result && <ResultsDisplay result={result} />}
            </div>
        </main>
    );
}
