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

export interface StorageSize {
    id: string;
    capacity: number; // GB
}

export interface StorageType {
    id: string;
    name: string; // "NVMe SSD", "HDD 3.5-inch", etc.
    speed: string; // "7,400 MB/s read", "220 MB/s read", etc.
}

export interface ComputerBuild {
    cpu: CPU | null;
    gpu: GPU | null;
    ram: RAM | null;
    storageSizeId: string | null;
    storageTypeId: string | null;
}

// Sample data - these would come from a database
export const cpus: CPU[] = [
    // Intel 13th Gen (Raptor Lake)
    {
        id: "cpu-1",
        name: "Intel Core i3-13100",
        cores: 4,
        baseFrequency: 3.4,
        boostFrequency: 4.5,
        tdp: 60,
    },
    {
        id: "cpu-2",
        name: "Intel Core i5-13600K",
        cores: 14,
        baseFrequency: 3.0,
        boostFrequency: 5.1,
        tdp: 125,
    },
    {
        id: "cpu-3",
        name: "Intel Core i7-13700K",
        cores: 16,
        baseFrequency: 3.4,
        boostFrequency: 5.4,
        tdp: 253,
    },
    {
        id: "cpu-4",
        name: "Intel Core i9-13900K",
        cores: 24,
        baseFrequency: 3.0,
        boostFrequency: 5.8,
        tdp: 253,
    },
    // Intel 14th Gen (Raptor Lake Refresh)
    {
        id: "cpu-5",
        name: "Intel Core i5-14600K",
        cores: 14,
        baseFrequency: 3.5,
        boostFrequency: 5.3,
        tdp: 125,
    },
    {
        id: "cpu-6",
        name: "Intel Core i7-14700K",
        cores: 20,
        baseFrequency: 3.4,
        boostFrequency: 5.6,
        tdp: 253,
    },
    {
        id: "cpu-7",
        name: "Intel Core i9-14900K",
        cores: 24,
        baseFrequency: 3.2,
        boostFrequency: 6.0,
        tdp: 253,
    },
    // AMD Ryzen 7000 Series
    {
        id: "cpu-8",
        name: "AMD Ryzen 5 5600",
        cores: 6,
        baseFrequency: 3.5,
        boostFrequency: 4.6,
        tdp: 65,
    },
    {
        id: "cpu-9",
        name: "AMD Ryzen 5 7600",
        cores: 6,
        baseFrequency: 3.8,
        boostFrequency: 5.1,
        tdp: 65,
    },
    {
        id: "cpu-10",
        name: "AMD Ryzen 5 7600X",
        cores: 6,
        baseFrequency: 4.7,
        boostFrequency: 5.3,
        tdp: 105,
    },
    {
        id: "cpu-11",
        name: "AMD Ryzen 7 7700",
        cores: 8,
        baseFrequency: 3.8,
        boostFrequency: 5.4,
        tdp: 65,
    },
    {
        id: "cpu-12",
        name: "AMD Ryzen 7 7700X",
        cores: 8,
        baseFrequency: 4.5,
        boostFrequency: 5.4,
        tdp: 105,
    },
    {
        id: "cpu-13",
        name: "AMD Ryzen 9 7900",
        cores: 12,
        baseFrequency: 3.7,
        boostFrequency: 5.6,
        tdp: 65,
    },
    {
        id: "cpu-14",
        name: "AMD Ryzen 9 7900X",
        cores: 12,
        baseFrequency: 4.7,
        boostFrequency: 5.6,
        tdp: 105,
    },
    {
        id: "cpu-15",
        name: "AMD Ryzen 9 7950X",
        cores: 16,
        baseFrequency: 4.5,
        boostFrequency: 5.7,
        tdp: 162,
    },
    // AMD Ryzen 9000 Series
    {
        id: "cpu-16",
        name: "AMD Ryzen 5 9600X",
        cores: 6,
        baseFrequency: 4.4,
        boostFrequency: 5.4,
        tdp: 65,
    },
    {
        id: "cpu-17",
        name: "AMD Ryzen 7 9700X",
        cores: 8,
        baseFrequency: 4.5,
        boostFrequency: 5.5,
        tdp: 105,
    },
    {
        id: "cpu-18",
        name: "AMD Ryzen 9 9900X",
        cores: 12,
        baseFrequency: 4.4,
        boostFrequency: 5.6,
        tdp: 120,
    },
    {
        id: "cpu-19",
        name: "AMD Ryzen 9 9950X",
        cores: 16,
        baseFrequency: 4.3,
        boostFrequency: 5.7,
        tdp: 162,
    },
    // Budget/Energy Efficient
    {
        id: "cpu-20",
        name: "Intel Core i5-12400",
        cores: 6,
        baseFrequency: 2.5,
        boostFrequency: 4.4,
        tdp: 65,
    },
    {
        id: "cpu-21",
        name: "AMD Ryzen 3 4100",
        cores: 4,
        baseFrequency: 3.4,
        boostFrequency: 4.0,
        tdp: 35,
    },
    // 11th Gen Intel
    {
        id: "cpu-22",
        name: "Intel Core i9-11900K",
        cores: 8,
        baseFrequency: 3.5,
        boostFrequency: 5.2,
        tdp: 125,
    },
    {
        id: "cpu-23",
        name: "Intel Core i7-11700K",
        cores: 8,
        baseFrequency: 3.6,
        boostFrequency: 4.9,
        tdp: 125,
    },
    {
        id: "cpu-24",
        name: "Intel Core i5-11600K",
        cores: 6,
        baseFrequency: 3.9,
        boostFrequency: 4.9,
        tdp: 125,
    },
    // 10th Gen Intel
    {
        id: "cpu-25",
        name: "Intel Core i9-10900K",
        cores: 10,
        baseFrequency: 3.7,
        boostFrequency: 5.3,
        tdp: 125,
    },
    {
        id: "cpu-26",
        name: "Intel Core i7-10700K",
        cores: 8,
        baseFrequency: 3.8,
        boostFrequency: 5.1,
        tdp: 125,
    },
    // AMD Ryzen 5000 Series
    {
        id: "cpu-27",
        name: "AMD Ryzen 9 5950X",
        cores: 16,
        baseFrequency: 3.4,
        boostFrequency: 4.9,
        tdp: 105,
    },
    {
        id: "cpu-28",
        name: "AMD Ryzen 7 5800X",
        cores: 8,
        baseFrequency: 3.8,
        boostFrequency: 4.7,
        tdp: 105,
    },
    {
        id: "cpu-29",
        name: "AMD Ryzen 5 5600X",
        cores: 6,
        baseFrequency: 3.7,
        boostFrequency: 4.6,
        tdp: 65,
    },
    // AMD Ryzen 3000 Series
    {
        id: "cpu-30",
        name: "AMD Ryzen 9 3950X",
        cores: 16,
        baseFrequency: 3.5,
        boostFrequency: 4.7,
        tdp: 105,
    },
    {
        id: "cpu-31",
        name: "AMD Ryzen 7 3700X",
        cores: 8,
        baseFrequency: 3.6,
        boostFrequency: 4.4,
        tdp: 65,
    },
    // Ultra Budget
    {
        id: "cpu-32",
        name: "Intel Core i3-10100",
        cores: 4,
        baseFrequency: 3.6,
        boostFrequency: 4.3,
        tdp: 65,
    },
    {
        id: "cpu-33",
        name: "AMD Ryzen 3 3100",
        cores: 4,
        baseFrequency: 3.6,
        boostFrequency: 3.9,
        tdp: 65,
    },
];

export const gpus: GPU[] = [
    // NVIDIA GeForce RTX 40 Series
    {
        id: "gpu-1",
        name: "NVIDIA RTX 4050",
        memory: 6,
        flops: 8.13,
        vram: "GDDR6",
    },
    {
        id: "gpu-2",
        name: "NVIDIA RTX 4060",
        memory: 8,
        flops: 15.1,
        vram: "GDDR6",
    },
    {
        id: "gpu-3",
        name: "NVIDIA RTX 4070",
        memory: 12,
        flops: 29.1,
        vram: "GDDR6X",
    },
    {
        id: "gpu-4",
        name: "NVIDIA RTX 4080",
        memory: 16,
        flops: 60.1,
        vram: "GDDR6X",
    },
    {
        id: "gpu-5",
        name: "NVIDIA RTX 4090",
        memory: 24,
        flops: 82.6,
        vram: "GDDR6X",
    },
    // NVIDIA RTX 50 Series
    {
        id: "gpu-6",
        name: "NVIDIA RTX 5090",
        memory: 32,
        flops: 145.0,
        vram: "GDDR7",
    },
    {
        id: "gpu-7",
        name: "NVIDIA RTX 5880",
        memory: 48,
        flops: 120.0,
        vram: "GDDR7",
    },
    {
        id: "gpu-8",
        name: "NVIDIA RTX 5080",
        memory: 16,
        flops: 92.0,
        vram: "GDDR7",
    },
    // AMD Radeon RX Series
    {
        id: "gpu-9",
        name: "AMD Radeon RX 6650 XT",
        memory: 10,
        flops: 13.0,
        vram: "GDDR6",
    },
    {
        id: "gpu-10",
        name: "AMD Radeon RX 6700",
        memory: 12,
        flops: 20.5,
        vram: "GDDR6",
    },
    {
        id: "gpu-11",
        name: "AMD Radeon RX 6800",
        memory: 16,
        flops: 30.0,
        vram: "GDDR6",
    },
    {
        id: "gpu-12",
        name: "AMD Radeon RX 6900 XT",
        memory: 16,
        flops: 36.0,
        vram: "GDDR6",
    },
    {
        id: "gpu-13",
        name: "AMD Radeon RX 7600",
        memory: 16,
        flops: 13.1,
        vram: "GDDR6",
    },
    {
        id: "gpu-14",
        name: "AMD Radeon RX 7800 XT",
        memory: 16,
        flops: 42.5,
        vram: "GDDR6",
    },
    {
        id: "gpu-15",
        name: "AMD Radeon RX 7900 XTX",
        memory: 24,
        flops: 61.0,
        vram: "GDDR6",
    },
    // Intel Arc Series
    {
        id: "gpu-16",
        name: "Intel Arc A750",
        memory: 8,
        flops: 16.7,
        vram: "GDDR6",
    },
    {
        id: "gpu-17",
        name: "Intel Arc A770",
        memory: 8,
        flops: 31.2,
        vram: "GDDR6",
    },
    {
        id: "gpu-18",
        name: "Intel Arc B580",
        memory: 12,
        flops: 25.5,
        vram: "GDDR6",
    },
    // Professional/Data Center
    {
        id: "gpu-19",
        name: "NVIDIA H100",
        memory: 80,
        flops: 1133.0,
        vram: "HBM3",
    },
    {
        id: "gpu-20",
        name: "NVIDIA L40S",
        memory: 48,
        flops: 568.0,
        vram: "GDDR6",
    },
    {
        id: "gpu-21",
        name: "AMD MI300X",
        memory: 192,
        flops: 1457.0,
        vram: "HBM3",
    },
    // Older NVIDIA GeForce (10-20 Series)
    {
        id: "gpu-22",
        name: "NVIDIA RTX 2060",
        memory: 6,
        flops: 6.5,
        vram: "GDDR6",
    },
    {
        id: "gpu-23",
        name: "NVIDIA RTX 2080",
        memory: 8,
        flops: 14.0,
        vram: "GDDR6",
    },
    {
        id: "gpu-24",
        name: "NVIDIA RTX 3050",
        memory: 8,
        flops: 12.8,
        vram: "GDDR6",
    },
    {
        id: "gpu-25",
        name: "NVIDIA RTX 3060",
        memory: 12,
        flops: 13.1,
        vram: "GDDR6",
    },
    {
        id: "gpu-26",
        name: "NVIDIA GTX 1660",
        memory: 6,
        flops: 5.0,
        vram: "GDDR6",
    },
    // Entry Level & Mobile
    {
        id: "gpu-27",
        name: "NVIDIA GeForce MX450",
        memory: 2,
        flops: 2.4,
        vram: "GDDR6",
    },
    {
        id: "gpu-28",
        name: "NVIDIA UHD Graphics 630",
        memory: 0.064,
        flops: 0.5,
        vram: "Shared System RAM",
    },
    // AMD Older Series
    {
        id: "gpu-29",
        name: "AMD Radeon RX 5700",
        memory: 8,
        flops: 9.8,
        vram: "GDDR6",
    },
    {
        id: "gpu-30",
        name: "AMD Radeon RX 5700 XT",
        memory: 8,
        flops: 12.3,
        vram: "GDDR6",
    },
    // Arc Entry Level
    {
        id: "gpu-31",
        name: "Intel Arc A380",
        memory: 6,
        flops: 8.0,
        vram: "GDDR6",
    },
];

export const rams: RAM[] = [
    // DDR4 Standard
    {
        id: "ram-1",
        name: "DDR4 8GB 3200MHz",
        capacity: 8,
        speed: 3200,
        type: "DDR4",
    },
    {
        id: "ram-2",
        name: "DDR4 16GB 3200MHz",
        capacity: 16,
        speed: 3200,
        type: "DDR4",
    },
    {
        id: "ram-3",
        name: "DDR4 32GB 3200MHz",
        capacity: 32,
        speed: 3200,
        type: "DDR4",
    },
    {
        id: "ram-4",
        name: "DDR4 64GB 3200MHz",
        capacity: 64,
        speed: 3200,
        type: "DDR4",
    },
    // DDR4 High Speed
    {
        id: "ram-5",
        name: "DDR4 16GB 3600MHz",
        capacity: 16,
        speed: 3600,
        type: "DDR4",
    },
    {
        id: "ram-6",
        name: "DDR4 32GB 3600MHz",
        capacity: 32,
        speed: 3600,
        type: "DDR4",
    },
    {
        id: "ram-7",
        name: "DDR4 16GB 4000MHz",
        capacity: 16,
        speed: 4000,
        type: "DDR4",
    },
    {
        id: "ram-8",
        name: "DDR4 32GB 4000MHz",
        capacity: 32,
        speed: 4000,
        type: "DDR4",
    },
    // DDR5 Standard
    {
        id: "ram-9",
        name: "DDR5 16GB 4800MHz",
        capacity: 16,
        speed: 4800,
        type: "DDR5",
    },
    {
        id: "ram-10",
        name: "DDR5 32GB 4800MHz",
        capacity: 32,
        speed: 4800,
        type: "DDR5",
    },
    {
        id: "ram-11",
        name: "DDR5 64GB 4800MHz",
        capacity: 64,
        speed: 4800,
        type: "DDR5",
    },
    // DDR5 High Speed
    {
        id: "ram-12",
        name: "DDR5 16GB 5600MHz",
        capacity: 16,
        speed: 5600,
        type: "DDR5",
    },
    {
        id: "ram-13",
        name: "DDR5 32GB 5600MHz",
        capacity: 32,
        speed: 5600,
        type: "DDR5",
    },
    {
        id: "ram-14",
        name: "DDR5 64GB 5600MHz",
        capacity: 64,
        speed: 5600,
        type: "DDR5",
    },
    {
        id: "ram-15",
        name: "DDR5 32GB 6000MHz",
        capacity: 32,
        speed: 6000,
        type: "DDR5",
    },
    {
        id: "ram-16",
        name: "DDR5 64GB 6000MHz",
        capacity: 64,
        speed: 6000,
        type: "DDR5",
    },
    // DDR5 Ultra High Speed
    {
        id: "ram-17",
        name: "DDR5 32GB 6400MHz",
        capacity: 32,
        speed: 6400,
        type: "DDR5",
    },
    {
        id: "ram-18",
        name: "DDR5 64GB 6400MHz",
        capacity: 64,
        speed: 6400,
        type: "DDR5",
    },
    {
        id: "ram-19",
        name: "DDR5 32GB 7200MHz",
        capacity: 32,
        speed: 7200,
        type: "DDR5",
    },
    {
        id: "ram-20",
        name: "DDR5 64GB 7200MHz",
        capacity: 64,
        speed: 7200,
        type: "DDR5",
    },
    // Server Grade (ECC)
    {
        id: "ram-21",
        name: "DDR4 ECC 16GB 3200MHz",
        capacity: 16,
        speed: 3200,
        type: "DDR4 ECC",
    },
    {
        id: "ram-22",
        name: "DDR5 ECC 32GB 4800MHz",
        capacity: 32,
        speed: 4800,
        type: "DDR5 ECC",
    },
    // Budget/Low Power Options
    {
        id: "ram-23",
        name: "DDR4 4GB 2400MHz",
        capacity: 4,
        speed: 2400,
        type: "DDR4",
    },
    {
        id: "ram-24",
        name: "DDR5 8GB 4800MHz",
        capacity: 8,
        speed: 4800,
        type: "DDR5",
    },
    // DDR3 Legacy
    {
        id: "ram-25",
        name: "DDR3 2GB 1600MHz",
        capacity: 2,
        speed: 1600,
        type: "DDR3",
    },
    {
        id: "ram-26",
        name: "DDR3 4GB 1600MHz",
        capacity: 4,
        speed: 1600,
        type: "DDR3",
    },
    {
        id: "ram-27",
        name: "DDR3 8GB 1600MHz",
        capacity: 8,
        speed: 1600,
        type: "DDR3",
    },
    {
        id: "ram-28",
        name: "DDR3 16GB 1600MHz",
        capacity: 16,
        speed: 1600,
        type: "DDR3",
    },
    // DDR2 Very Legacy
    {
        id: "ram-29",
        name: "DDR2 1GB 833MHz",
        capacity: 1,
        speed: 833,
        type: "DDR2",
    },
    {
        id: "ram-30",
        name: "DDR2 2GB 833MHz",
        capacity: 2,
        speed: 833,
        type: "DDR2",
    },
    {
        id: "ram-31",
        name: "DDR2 4GB 833MHz",
        capacity: 4,
        speed: 833,
        type: "DDR2",
    },
    // Ultra Low Memory
    {
        id: "ram-32",
        name: "DDR4 2GB 2400MHz",
        capacity: 2,
        speed: 2400,
        type: "DDR4",
    },
    {
        id: "ram-33",
        name: "DDR3 1GB 1333MHz",
        capacity: 1,
        speed: 1333,
        type: "DDR3",
    },
    {
        id: "ram-34",
        name: "DDR 512MB 400MHz",
        capacity: 0.5,
        speed: 400,
        type: "DDR",
    },
];

export const storageSizes: StorageSize[] = [
    // Tiny/Embedded   
    { id: "size-32mb", capacity: 32 / 1000 },
    { id: "size-64mb", capacity: 64 / 1000 },
    { id: "size-128mb", capacity: 128 / 1000 },
    { id: "size-256mb", capacity: 256 / 1000 },
    { id: "size-512mb", capacity: 512 / 1000 },
    { id: "size-1gb", capacity: 1 },
    { id: "size-2gb", capacity: 2 },
    { id: "size-4gb", capacity: 4 },
    // Standard SSD Range
    { id: "size-256", capacity: 256 },
    { id: "size-512", capacity: 512 },
    // TB Range
    { id: "size-1000", capacity: 1000 },
    { id: "size-2000", capacity: 2000 },
    { id: "size-4000", capacity: 4000 },
    { id: "size-6000", capacity: 6000 },
    { id: "size-8000", capacity: 8000 },
    { id: "size-10000", capacity: 10000 },
    { id: "size-12000", capacity: 12000 },
    { id: "size-16000", capacity: 16000 },
    { id: "size-20000", capacity: 20000 },
];

export const storageTypes: StorageType[] = [
    { id: "type-nvme-gen5", name: "NVMe Gen5 SSD", speed: "7,400 MB/s read" },
    { id: "type-nvme-gen4", name: "NVMe Gen4 SSD", speed: "5,000 MB/s read" },
    { id: "type-nvme-gen3", name: "NVMe Gen3 SSD", speed: "3,500 MB/s read" },
    { id: "type-sata-ssd", name: "SATA SSD", speed: "550 MB/s read" },
    { id: "type-hdd-25", name: "HDD 2.5-inch", speed: "140 MB/s read" },
    { id: "type-hdd-35", name: "HDD 3.5-inch", speed: "220 MB/s read" },
    { id: "type-m2-2242", name: "M.2 2242 NVMe", speed: "4,500 MB/s read" },
    { id: "type-optane", name: "Intel Optane Memory", speed: "3,400 MB/s read" },
    { id: "type-hybrid", name: "Hybrid SSD+HDD", speed: "200 MB/s read" },
];

// Legacy storage array for reference (keeping some data for backward compatibility)
export const storages: any[] = [
    // NVMe SSDs (Fast)
    {
        id: "storage-1",
        name: "NVMe SSD 256GB",
        capacity: 256,
        type: "NVMe SSD",
        speed: "3,500 MB/s read",
    },
    {
        id: "storage-2",
        name: "NVMe SSD 512GB",
        capacity: 512,
        type: "NVMe SSD",
        speed: "3,500 MB/s read",
    },
    {
        id: "storage-3",
        name: "NVMe SSD 1TB",
        capacity: 1000,
        type: "NVMe SSD",
        speed: "3,500 MB/s read",
    },
    {
        id: "storage-4",
        name: "NVMe SSD 2TB",
        capacity: 2000,
        type: "NVMe SSD",
        speed: "3,500 MB/s read",
    },
    {
        id: "storage-5",
        name: "NVMe SSD 4TB",
        capacity: 4000,
        type: "NVMe SSD",
        speed: "3,500 MB/s read",
    },
    // NVMe Gen4 SSDs (Very Fast)
    {
        id: "storage-6",
        name: "NVMe Gen4 SSD 500GB",
        capacity: 500,
        type: "NVMe Gen4 SSD",
        speed: "5,000 MB/s read",
    },
    {
        id: "storage-7",
        name: "NVMe Gen4 SSD 1TB",
        capacity: 1000,
        type: "NVMe Gen4 SSD",
        speed: "5,000 MB/s read",
    },
    {
        id: "storage-8",
        name: "NVMe Gen4 SSD 2TB",
        capacity: 2000,
        type: "NVMe Gen4 SSD",
        speed: "5,000 MB/s read",
    },
    {
        id: "storage-9",
        name: "NVMe Gen4 SSD 4TB",
        capacity: 4000,
        type: "NVMe Gen4 SSD",
        speed: "5,000 MB/s read",
    },
    {
        id: "storage-10",
        name: "NVMe Gen4 SSD 8TB",
        capacity: 8000,
        type: "NVMe Gen4 SSD",
        speed: "5,000 MB/s read",
    },
    // NVMe Gen5 SSDs (Ultra Fast)
    {
        id: "storage-11",
        name: "NVMe Gen5 SSD 1TB",
        capacity: 1000,
        type: "NVMe Gen5 SSD",
        speed: "7,400 MB/s read",
    },
    {
        id: "storage-12",
        name: "NVMe Gen5 SSD 2TB",
        capacity: 2000,
        type: "NVMe Gen5 SSD",
        speed: "7,400 MB/s read",
    },
    {
        id: "storage-13",
        name: "NVMe Gen5 SSD 4TB",
        capacity: 4000,
        type: "NVMe Gen5 SSD",
        speed: "7,400 MB/s read",
    },
    // SATA SSDs (Moderate Speed)
    {
        id: "storage-14",
        name: "SATA SSD 256GB",
        capacity: 256,
        type: "SATA SSD",
        speed: "550 MB/s read",
    },
    {
        id: "storage-15",
        name: "SATA SSD 512GB",
        capacity: 512,
        type: "SATA SSD",
        speed: "550 MB/s read",
    },
    {
        id: "storage-16",
        name: "SATA SSD 1TB",
        capacity: 1000,
        type: "SATA SSD",
        speed: "550 MB/s read",
    },
    {
        id: "storage-17",
        name: "SATA SSD 2TB",
        capacity: 2000,
        type: "SATA SSD",
        speed: "550 MB/s read",
    },
    {
        id: "storage-18",
        name: "SATA SSD 4TB",
        capacity: 4000,
        type: "SATA SSD",
        speed: "550 MB/s read",
    },
    // 2.5" SATA HDDs (Large Capacity, Slow)
    {
        id: "storage-19",
        name: "2.5\" HDD 500GB",
        capacity: 500,
        type: "HDD 2.5-inch",
        speed: "140 MB/s read",
    },
    {
        id: "storage-20",
        name: "2.5\" HDD 1TB",
        capacity: 1000,
        type: "HDD 2.5-inch",
        speed: "140 MB/s read",
    },
    {
        id: "storage-21",
        name: "2.5\" HDD 2TB",
        capacity: 2000,
        type: "HDD 2.5-inch",
        speed: "140 MB/s read",
    },
    // 3.5" SATA HDDs (Large Capacity, Affordable)
    {
        id: "storage-22",
        name: "3.5\" HDD 2TB",
        capacity: 2000,
        type: "HDD 3.5-inch",
        speed: "220 MB/s read",
    },
    {
        id: "storage-23",
        name: "3.5\" HDD 4TB",
        capacity: 4000,
        type: "HDD 3.5-inch",
        speed: "220 MB/s read",
    },
    {
        id: "storage-24",
        name: "3.5\" HDD 6TB",
        capacity: 6000,
        type: "HDD 3.5-inch",
        speed: "220 MB/s read",
    },
    {
        id: "storage-25",
        name: "3.5\" HDD 8TB",
        capacity: 8000,
        type: "HDD 3.5-inch",
        speed: "220 MB/s read",
    },
    {
        id: "storage-26",
        name: "3.5\" HDD 10TB",
        capacity: 10000,
        type: "HDD 3.5-inch",
        speed: "220 MB/s read",
    },
    {
        id: "storage-27",
        name: "3.5\" HDD 12TB",
        capacity: 12000,
        type: "HDD 3.5-inch",
        speed: "220 MB/s read",
    },
    // M.2 2242 Small Form Factor
    {
        id: "storage-28",
        name: "M.2 2242 NVMe 256GB",
        capacity: 256,
        type: "NVMe Gen4 SSD (2242)",
        speed: "4,500 MB/s read",
    },
    {
        id: "storage-29",
        name: "M.2 2242 NVMe 512GB",
        capacity: 512,
        type: "NVMe Gen4 SSD (2242)",
        speed: "4,500 MB/s read",
    },
    // Optane Memory (Ultra Low Latency)
    {
        id: "storage-30",
        name: "Intel Optane Memory H20 32GB",
        capacity: 32,
        type: "Optane Memory",
        speed: "3,400 MB/s read",
    },
    // Hybrid Drives
    {
        id: "storage-31",
        name: "Hybrid SSHD 1TB",
        capacity: 1000,
        type: "Hybrid SSD+HDD",
        speed: "200 MB/s read",
    },
];

export interface Supercomputer {
    id: string;
    name: string;
    year: number;
    teraflops: number; // TFLOPS (Tera = Trillion FLOPS)
    factoid: string;
}

// Historical supercomputers from the past century (based on Wikipedia's list of fastest computers)
export const supercomputers: Supercomputer[] = [
    {
        id: "sc-1",
        name: "Z1",
        year: 1938,
        teraflops: 0.000001, // 1 IPS ≈ 0.000001 TFLOPS (estimation)
        factoid: "Konrad Zuse's first programmable computing machine, Germany.",
    },
    {
        id: "sc-2",
        name: "ENIAC",
        year: 1945,
        teraflops: 0.0000001, // ~0.005 kIPS (estimation)
        factoid: "Electronic Numerical Integrator and Computer. First general-purpose electronic computer at University of Pennsylvania.",
    },
    {
        id: "sc-3",
        name: "Whirlwind I",
        year: 1951,
        teraflops: 0.00002, // 20 kIPS ≈ 0.00002 TFLOPS
        factoid: "MIT's real-time computer. Used in the SAGE air defense system.",
    },
    {
        id: "sc-4",
        name: "AN/FSQ-7",
        year: 1958,
        teraflops: 0.000075, // 75 kIPS
        factoid: "IBM's massive computer for SAGE system. Filled an entire building.",
    },
    {
        id: "sc-5",
        name: "IBM 7090",
        year: 1960,
        teraflops: 0.000229, // 229 kIPS
        factoid: "First commercial transistorized supercomputer. Used for weather forecasting.",
    },
    {
        id: "sc-6",
        name: "LARC",
        year: 1960,
        teraflops: 0.00025, // 250 kIPS
        factoid: "Remington Rand's UNIVAC LARC. Competing system to IBM 7090.",
    },
    {
        id: "sc-7",
        name: "IBM 7030 Stretch",
        year: 1961,
        teraflops: 0.0012, // 1.20 MIPS
        factoid: "Advanced computer designed for intensive calculations at Los Alamos.",
    },
    {
        id: "sc-8",
        name: "Atlas",
        year: 1962,
        teraflops: 0.001, // 1.00 MFLOPS
        factoid: "University of Manchester's Atlas. Among the most powerful computers of its era.",
    },
    {
        id: "sc-9",
        name: "CDC 6600",
        year: 1964,
        teraflops: 0.003, // 3.00 MFLOPS
        factoid: "Control Data Corporation's iconic supercomputer. Dominated 1960s.",
    },
    {
        id: "sc-10",
        name: "CDC 7600",
        year: 1969,
        teraflops: 0.036, // 36.00 MFLOPS
        factoid: "CDC 6600's successor. Fastest computer of the early 1970s.",
    },
    {
        id: "sc-11",
        name: "CDC STAR-100",
        year: 1974,
        teraflops: 0.1, // 100.00 MFLOPS
        factoid: "Vector supercomputer featuring advanced parallel processing.",
    },
    {
        id: "sc-12",
        name: "Cray-1",
        year: 1976,
        teraflops: 0.16, // 160.00 MFLOPS
        factoid: "Seymour Cray's iconic C-shaped design. Legendary supercomputer of the 70s.",
    },
    {
        id: "sc-13",
        name: "CDC Cyber 205",
        year: 1980,
        teraflops: 0.4, // 400.00 MFLOPS
        factoid: "Control Data's vector supercomputer. Used for weather and climate modeling.",
    },
    {
        id: "sc-14",
        name: "Cray X-MP/4",
        year: 1983,
        teraflops: 0.713, // 713.00 MFLOPS
        factoid: "Cray's 4-processor parallel supercomputer. Used for national security classified work.",
    },
    {
        id: "sc-15",
        name: "Cray-2",
        year: 1985,
        teraflops: 1.41, // 1.41 GFLOPS
        factoid: "Liquid-cooled supercomputer with unique design. Fastest computer of 1985.",
    },
    {
        id: "sc-16",
        name: "Cray Y-MP/832",
        year: 1988,
        teraflops: 2.14, // 2.14 GFLOPS
        factoid: "Cray's 8-processor system. Used in scientific research and simulations.",
    },
    {
        id: "sc-17",
        name: "Fujitsu VP2600/10",
        year: 1990,
        teraflops: 4.0, // 4.00 GFLOPS
        factoid: "Japanese vector supercomputer. Marks Asia's growing supercomputing power.",
    },
    {
        id: "sc-18",
        name: "NEC SX-3/44",
        year: 1992,
        teraflops: 20.0, // 20.00 GFLOPS
        factoid: "NEC's 44-processor supercomputer. Leading edge for climate modeling.",
    },
    {
        id: "sc-19",
        name: "Thinking Machines CM-5/1024",
        year: 1993,
        teraflops: 59.7, // 59.70 GFLOPS
        factoid: "Massive parallel supercomputer with 1024 processors.",
    },
    {
        id: "sc-20",
        name: "Fujitsu Numerical Wind Tunnel",
        year: 1993,
        teraflops: 124.2, // 124.20 GFLOPS
        factoid: "First supercomputer to sustain 100+ GFLOPS. Specialized for climate research.",
    },
    {
        id: "sc-21",
        name: "Intel Paragon XP/S 140",
        year: 1994,
        teraflops: 143.4, // 143.40 GFLOPS
        factoid: "Massive parallel computer with thousands of Intel processors.",
    },
    {
        id: "sc-22",
        name: "Hitachi SR2201",
        year: 1996,
        teraflops: 232.4, // 232.40 GFLOPS
        factoid: "Japanese supercomputer with distributed-memory architecture.",
    },
    {
        id: "sc-23",
        name: "CP-PACS",
        year: 1996,
        teraflops: 368.2, // 368.20 GFLOPS
        factoid: "University of Tsukuba's supercomputer. Designed for particle physics.",
    },
    {
        id: "sc-24",
        name: "Intel ASCI Red",
        year: 1997,
        teraflops: 1.06, // 1.06 TFLOPS
        factoid: "First to sustain 1 Teraflop/s. Named to celebrate achievement. Used for nuclear weapons simulation.",
    },
    {
        id: "sc-25",
        name: "IBM ASCI White",
        year: 2000,
        teraflops: 4.93, // 4.93 TFLOPS
        factoid: "IBM's massive parallel computer. Located at Lawrence Livermore National Laboratory.",
    },
    {
        id: "sc-26",
        name: "NEC Earth Simulator",
        year: 2002,
        teraflops: 35.86, // 35.86 TFLOPS
        factoid: "Japanese supercomputer built specifically for climate and global warming simulations.",
    },
    {
        id: "sc-27",
        name: "IBM Blue Gene/L",
        year: 2005,
        teraflops: 280.6, // 280.60 TFLOPS
        factoid: "Innovative massively parallel architecture. Reached 280.6 TFLOPS peak performance.",
    },
    {
        id: "sc-28",
        name: "IBM Roadrunner",
        year: 2008,
        teraflops: 1020, // 1.02 PFLOPS
        factoid: "First petaflop supercomputer! Used hybrid CPU-GPU architecture at Los Alamos.",
    },
    {
        id: "sc-29",
        name: "Cray Jaguar",
        year: 2009,
        teraflops: 1750, // 1.75 PFLOPS
        factoid: "Upgraded system reaching 1.75 PFLOPS. Used for climate and materials science.",
    },
    {
        id: "sc-30",
        name: "National University of Defense Technology Tianhe-1A",
        year: 2010,
        teraflops: 2570, // 2.57 PFLOPS
        factoid: "China's first petaflop supercomputer. Marked shift in global supercomputing balance.",
    },
    {
        id: "sc-31",
        name: "Fujitsu K Computer",
        year: 2011,
        teraflops: 10510, // 10.51 PFLOPS
        factoid: "Japan's return to #1 ranking. Used for earthquake/tsunami simulations.",
    },
    {
        id: "sc-32",
        name: "IBM Sequoia (Blue Gene/Q)",
        year: 2012,
        teraflops: 16320, // 16.32 PFLOPS
        factoid: "US supercomputer at Lawrence Livermore. Efficient design with over 1.5 million cores.",
    },
    {
        id: "sc-33",
        name: "Cray Titan",
        year: 2012,
        teraflops: 17590, // 17.59 PFLOPS
        factoid: "GPU-accelerated Cray system at Oak Ridge. 18.7 PFLOPS peak performance.",
    },
    {
        id: "sc-34",
        name: "National University of Defense Technology Tianhe-2",
        year: 2013,
        teraflops: 33860, // 33.86 PFLOPS
        factoid: "China returns to top with MilkyWay-2. 3 million+ cores and hybrid architecture.",
    },
    {
        id: "sc-35",
        name: "NRCPC Sunway TaihuLight",
        year: 2016,
        teraflops: 93010, // 93.01 PFLOPS
        factoid: "China's indigenous supercomputer using many-core SW26010 processors.",
    },
    {
        id: "sc-36",
        name: "IBM Summit",
        year: 2018,
        teraflops: 122300, // 122.30 PFLOPS (peak 200 PFLOPS)
        factoid: "US reclaims #1. GPU-accelerated with IBM POWER CPUs. 4,608 NVIDIA V100 GPUs.",
    },
    {
        id: "sc-37",
        name: "Summit (Peak)",
        year: 2019,
        teraflops: 148600, // 148.60 PFLOPS
        factoid: "Summit's peak performance rating reached 200.8 PFLOPS.",
    },
    {
        id: "sc-38",
        name: "Fujitsu Fugaku",
        year: 2020,
        teraflops: 442010, // 442.01 PFLOPS
        factoid: "Japan's incredible supercomputer. Used for COVID-19 simulations and drug discovery.",
    },
    {
        id: "sc-39",
        name: "HPE Cray Frontier",
        year: 2022,
        teraflops: 1102000, // 1.102 EFLOPS
        factoid: "First supercomputer to reach exascale (1+ exaflops). Uses AMD EPYC and GPU.",
    },
    {
        id: "sc-40",
        name: "Frontier (Peak)",
        year: 2023,
        teraflops: 1194000, // 1.194 EFLOPS
        factoid: "Frontier upgraded to achieve 1.194 exaflops peak performance.",
    },
    {
        id: "sc-41",
        name: "Lawrence Livermore El Capitan",
        year: 2024,
        teraflops: 1742000, // 1.742 EFLOPS
        factoid: "US supercomputer at Lawrence Livermore. Reached 1.742 exaflops in 2025.",
    },
];
