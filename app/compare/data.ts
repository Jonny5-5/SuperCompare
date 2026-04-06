/**
 * Computer component data
 * This will eventually be moved to a server-side database
 */

export interface CPU {
    id: string;
    name: string;
    cores: number;
    baseFrequency: number; // GHz
    boostFrequency: number; // GHz
    tdp: number; // Watts
    singleThreadFlops?: number; // Optional: manual override for FLOPS
}

export interface GPU {
    id: string;
    name: string;
    memory: number; // GB
    flops: number; // TFLOPS (Tera Floating Point Operations Per Second)
    vram: string;
}

export interface RAM {
    id: string;
    name: string;
    capacity: number; // GB
    speed: number; // MHz
    type: string; // DDR4, DDR5, etc.
}

export interface Storage {
    id: string;
    name: string;
    capacity: number; // GB
    type: string; // SSD, HDD
    speed: string; // Read/Write speed description
}

export interface ComputerBuild {
    cpu: CPU | null;
    gpu: GPU | null;
    ram: RAM | null;
    storage: Storage | null;
}

// Sample data - these would come from a database
export const cpus: CPU[] = [
    {
        id: "cpu-1",
        name: "Intel Core i5-13600K",
        cores: 14,
        baseFrequency: 3.0,
        boostFrequency: 5.1,
        tdp: 125,
    },
    {
        id: "cpu-2",
        name: "Intel Core i7-13700K",
        cores: 16,
        baseFrequency: 3.4,
        boostFrequency: 5.4,
        tdp: 253,
    },
    {
        id: "cpu-3",
        name: "AMD Ryzen 5 7600X",
        cores: 6,
        baseFrequency: 4.7,
        boostFrequency: 5.3,
        tdp: 105,
    },
    {
        id: "cpu-4",
        name: "AMD Ryzen 9 7950X",
        cores: 16,
        baseFrequency: 4.5,
        boostFrequency: 5.7,
        tdp: 162,
    },
];

export const gpus: GPU[] = [
    {
        id: "gpu-1",
        name: "NVIDIA RTX 4060",
        memory: 8,
        flops: 15.1,
        vram: "GDDR6",
    },
    {
        id: "gpu-2",
        name: "NVIDIA RTX 4070",
        memory: 12,
        flops: 29.1,
        vram: "GDDR6X",
    },
    {
        id: "gpu-3",
        name: "NVIDIA RTX 4090",
        memory: 24,
        flops: 82.6,
        vram: "GDDR6X",
    },
    {
        id: "gpu-4",
        name: "AMD Radeon RX 7600",
        memory: 16,
        flops: 13.1,
        vram: "GDDR6",
    },
];

export const rams: RAM[] = [
    {
        id: "ram-1",
        name: "DDR4 32GB 3200MHz",
        capacity: 32,
        speed: 3200,
        type: "DDR4",
    },
    {
        id: "ram-2",
        name: "DDR5 32GB 6000MHz",
        capacity: 32,
        speed: 6000,
        type: "DDR5",
    },
    {
        id: "ram-3",
        name: "DDR5 64GB 6400MHz",
        capacity: 64,
        speed: 6400,
        type: "DDR5",
    },
    {
        id: "ram-4",
        name: "DDR4 16GB 3600MHz",
        capacity: 16,
        speed: 3600,
        type: "DDR4",
    },
];

export const storages: Storage[] = [
    {
        id: "storage-1",
        name: "Samsung 980 Pro 1TB",
        capacity: 1000,
        type: "NVMe SSD",
        speed: "7,100 MB/s read",
    },
    {
        id: "storage-2",
        name: "WD Blue 2TB",
        capacity: 2000,
        type: "SATA SSD",
        speed: "550 MB/s read",
    },
    {
        id: "storage-3",
        name: "Crucial P5 Plus 2TB",
        capacity: 2000,
        type: "NVMe SSD",
        speed: "6,600 MB/s read",
    },
    {
        id: "storage-4",
        name: "Seagate Barracuda 4TB",
        capacity: 4000,
        type: "HDD",
        speed: "272 MB/s read",
    },
];

export interface Supercomputer {
    id: string;
    name: string;
    year: number;
    teraflops: number; // TFLOPS (Tera = Trillion FLOPS)
    factoid: string;
}

// Historical supercomputers from the past century
export const supercomputers: Supercomputer[] = [
    {
        id: "sc-1",
        name: "Cray-2",
        year: 1985,
        teraflops: 0.00195, // 1.95 GFLOPS
        factoid: "The fastest computer in the world when released, cooled by liquid Fluorinert. Used for nuclear simulation.",
    },
    {
        id: "sc-2",
        name: "Fujitsu Numerical Wind Tunnel",
        year: 1993,
        teraflops: 0.124, // 124 GFLOPS
        factoid: "First supercomputer with sustained performance near 100 Gflop/s for fluid dynamics applications.",
    },
    {
        id: "sc-3",
        name: "ASCI Red",
        year: 1997,
        teraflops: 1.338, // 1.338 TFLOPS
        factoid: "First computer to sustain 1 Teraflop/s. Used for nuclear weapons simulation.",
    },
    {
        id: "sc-4",
        name: "Earth Simulator",
        year: 2002,
        teraflops: 35.86, // 35.86 TFLOPS
        factoid: "Japanese supercomputer built to track global warming and climate models.",
    },
    {
        id: "sc-5",
        name: "IBM BlueGene/L",
        year: 2005,
        teraflops: 280.6, // 280.6 TFLOPS
        factoid: "Peak performance reached 280.6 TFLOPS. Used for molecular dynamics simulations.",
    },
    {
        id: "sc-6",
        name: "Jaguar (Cray XT5)",
        year: 2009,
        teraflops: 1457, // 1.457 PFLOPS
        factoid: "One of the first petaflop-scale supercomputers. Used for climate and fusion research.",
    },
    {
        id: "sc-7",
        name: "Titan (Cray XK7)",
        year: 2012,
        teraflops: 17590, // 17.59 PFLOPS
        factoid: "GPU-accelerated supercomputer. Used for scientific discovery in diverse fields.",
    },
    {
        id: "sc-8",
        name: "Sunway TaihuLight",
        year: 2016,
        teraflops: 93015, // 93.01 PFLOPS
        factoid: "Chinese supercomputer with over 10 million cores. Held #1 spot.",
    },
    {
        id: "sc-9",
        name: "Summit (IBM)",
        year: 2018,
        teraflops: 200794, // 200.79 PFLOPS
        factoid: "US supercomputer with 4,608 NVIDIA GPUs. First exascale computations achieved.",
    },
    {
        id: "sc-10",
        name: "Fugaku (Riken)",
        year: 2020,
        teraflops: 442010, // 442.01 PFLOPS
        factoid: "Japanese supercomputer. Used for COVID-19 simulations and drug discovery.",
    },
];
