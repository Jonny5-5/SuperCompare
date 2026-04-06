export interface Supercomputer {
    name: string;
    year: number;
    gigaflops: number; // We'll use Gigaflops as our base unit
    factoid: string;
}

const supercomputerData: Supercomputer[] = [
    {
        name: "Cray-2",
        year: 1985,
        gigaflops: 1.9,
        factoid: "The fastest computer in the world when it was released, cooled by liquid 'Fluorinert'."
    },
    {
        name: "Fujitsu Numerical Wind Tunnel",
        year: 1993,
        gigaflops: 124,
        factoid: "It was the first supercomputer with a sustained performance of close to 100 Gflop/s for a wide range of fluid dynamics application programs."
    },
    {
        name: "ASCI Red",
        year: 1997,
        gigaflops: 1338,
        factoid: "The first computer to sustain 1 Teraflop/s, used for nuclear simulation."
    },
    {
        name: "Earth Simulator",
        year: 2002,
        gigaflops: 35860,
        factoid: "Created by the Japanese government to track global warming."
    },
    {
        name: "iPhone 15 Pro (GPU)",
        year: 2023,
        gigaflops: 2150,
        factoid: "Technically faster than the most powerful supercomputer from 1997."
    }
];

export class SuperCalculator {
    /**
     * Compares user power vs a specific supercomputer
     * @param userGigaflops The power of the user's device
     * @param supercomputer The supercomputer object to compare against
     */
    static compare(userGigaflops: number): string {
        if (userGigaflops <= 0) return "Please enter a valid power rating.";

        const supercomputer = this.getSupercomputerByGFlops(userGigaflops);
        const ratio = userGigaflops / supercomputer.gigaflops;

        if (ratio >= 1) {
            return `Your rig is ${ratio.toFixed(2)}x more powerful than the ${supercomputer.name} (${supercomputer.year})!`;
        } else {
            const percentage = (ratio * 100).toFixed(2);
            return `Your rig has about ${percentage}% of the power of the ${supercomputer.name} (${supercomputer.year}).`;
        }
    }

    /**
     * Finds the best match supercomputer based on a specific year
     */
    static getSupercomputerByYear(year: number): Supercomputer {
        return supercomputerData.find(sc => sc.year === year) ?? supercomputerData[0];
    }

    /**
     * Finds the best match supercomputer based on GFLOPS
     */
    static getSupercomputerByGFlops(gflops: number): Supercomputer {
        let supercomputer = supercomputerData[0];
        let distance: number = Math.abs(supercomputer.gigaflops - gflops);

        supercomputerData.forEach(sc => {
            let d = Math.abs(sc.gigaflops - gflops);
            if (d < distance) {
                distance = d;
                supercomputer = sc;
            }
        });

        return supercomputer;
    }
}
