/**
 * Computer build comparison calculator
 * Compares selected components against historical supercomputers
 */

import { ComputerBuild, CPU, GPU, supercomputers, Supercomputer } from "./data";

export interface SupercomputerComparison {
    userTeraflops: number;
    userFlopsBreakdown: {
        cpuTeraflops: number;
        gpuTeraflops: number;
    };
    closestSupercomputer: Supercomputer | null;
    betterThanSupercomputers: Supercomputer[];
    equalsToYear: number | null;
    percentileRank: number; // What % of supercomputers is this better than
    summary: string;
    factoid: string;
}

export class SuperCalculator {
    /**
     * Calculates CPU theoretical floating point performance in TFLOPS
     * Assumes modern x86-64 CPUs can do ~2 FP operations per cycle per core
     * Uses boost frequency as that's typical for FP workloads
     */
    private static calculateCpuTeraflops(cpu: CPU): number {
        // cores * boost frequency (GHz) * 2 (FP ops per cycle) * 2 (AVX-256 FMA = 2 ops per instruction)
        // = cores * boost frequency * 4
        const teraflops = (cpu.cores * cpu.boostFrequency * 4) / 1000; // Convert GHz to TFLOPS
        return parseFloat(teraflops.toFixed(3));
    }

    /**
     * Calculates GPU theoretical floating point performance in TFLOPS
     * GPU flops are already provided in TFLOPS
     */
    private static calculateGpuTeraflops(gpu: GPU): number {
        return gpu.flops;
    }

    /**
     * Compares user's build against historical supercomputers
     */
    static compareBuild(build: ComputerBuild): SupercomputerComparison {
        if (!build.cpu || !build.gpu || !build.ram || !build.storageSizeId || !build.storageTypeId) {
            throw new Error("All components must be selected for comparison");
        }

        const cpuTeraflops = this.calculateCpuTeraflops(build.cpu);
        const gpuTeraflops = this.calculateGpuTeraflops(build.gpu);
        const userTeraflops = cpuTeraflops + gpuTeraflops;

        // Find supercomputers this build is better than
        const betterThanSupercomputers = supercomputers.filter(
            (sc) => userTeraflops > sc.teraflops
        );

        // Find closest supercomputer (the one just ahead)
        const sortedSupercomputers = [...supercomputers].sort(
            (a, b) => a.teraflops - b.teraflops
        );
        const closestSupercomputer =
            sortedSupercomputers.find((sc) => sc.teraflops >= userTeraflops) ||
            null;

        // Find what year we match
        const equalsToYear = this.findEquivalentYear(userTeraflops);

        // Calculate percentile
        const percentileRank = (betterThanSupercomputers.length / supercomputers.length) * 100;

        const { summary, factoid } = this.generateComparison(
            userTeraflops,
            closestSupercomputer,
            betterThanSupercomputers,
            build
        );

        return {
            userTeraflops: parseFloat(userTeraflops.toFixed(3)),
            userFlopsBreakdown: {
                cpuTeraflops,
                gpuTeraflops,
            },
            closestSupercomputer,
            betterThanSupercomputers,
            equalsToYear,
            percentileRank: Math.round(percentileRank),
            summary,
            factoid,
        };
    }

    private static findEquivalentYear(userTeraflops: number): number | null {
        // Find the supercomputer from the closest year
        let closest = supercomputers[0];
        let smallestDiff = Math.abs(userTeraflops - closest.teraflops);

        for (const sc of supercomputers) {
            const diff = Math.abs(userTeraflops - sc.teraflops);
            if (diff < smallestDiff) {
                smallestDiff = diff;
                closest = sc;
            }
        }

        return closest.year;
    }

    private static generateComparison(
        userTeraflops: number,
        closest: Supercomputer | null,
        betterThan: Supercomputer[],
        build: ComputerBuild
    ): { summary: string; factoid: string } {
        if (closest === supercomputers[supercomputers.length - 1]) {
            // User is more powerful than the fastest supercomputer in database
            return {
                summary: `🚀 Your build (${userTeraflops.toFixed(2)} TFLOPS) exceeds the most powerful supercomputer in our database!`,
                factoid: `Only the most cutting-edge supercomputers in the world can match your performance.`,
            };
        }

        if (betterThan.length === 0 && closest) {
            // Less powerful than earliest supercomputer
            return {
                summary: `This build (${userTeraflops.toFixed(3)} TFLOPS) is less powerful than the ${closest.name} (${closest.year})`,
                factoid: closest.factoid,
            };
        }

        return {
            summary: `Your build (${userTeraflops.toFixed(2)} TFLOPS) is equivalent to the ${closest?.name} from ${closest?.year}!`,
            factoid: `${closest?.factoid || ""}`,
        };
    }
}
