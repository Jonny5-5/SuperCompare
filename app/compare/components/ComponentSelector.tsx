"use client";

/**
 * Reusable component selector dropdown
 * Follows React/Next.js 19 best practices
 */

interface ComponentSelectorProps {
    label: string;
    options: Array<{ id: string; name: string }>;
    value: string | null;
    onChange: (id: string) => void;
}

export function ComponentSelector({
    label,
    options,
    value,
    onChange,
}: ComponentSelectorProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <select
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
                <option value="">Select {label.toLowerCase()}...</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
