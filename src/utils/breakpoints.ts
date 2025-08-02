// @ts-ignore - resolveConfig doesn't have TypeScript declarations
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

// Define a minimal Config type since tailwindcss types might not be available
interface TailwindConfig {
  theme: {
    screens: Record<string, string>;
  };
}

// Type definitions
export type BreakpointKey = "sm" | "md" | "lg" | "xl" | "2xl";
export type BreakpointValue = string;
export type Breakpoints = Record<BreakpointKey, BreakpointValue>;

// Extended breakpoint key that includes 'base' for mobile-first approach
export type ExtendedBreakpointKey = "base" | BreakpointKey;

// Get the full Tailwind configuration
const fullConfig = resolveConfig(tailwindConfig as TailwindConfig);

// Extract breakpoint values
export const breakpoints: Breakpoints = fullConfig.theme.screens as Breakpoints;

// Helper function to get a specific breakpoint
export const getBreakpoint = (
  size: BreakpointKey
): BreakpointValue | undefined => breakpoints[size];

// Helper to convert breakpoint to number (removes 'px')
export const getBreakpointValue = (size: BreakpointKey): number => {
  const value = breakpoints[size];
  if (!value) {
    throw new Error(`Breakpoint "${size}" not found in Tailwind config`);
  }
  return parseInt(value.replace("px", ""));
};

// Type guard to check if a string is a valid breakpoint key
export const isValidBreakpoint = (key: string): key is BreakpointKey => {
  return key in breakpoints;
};

// Type guard to check if a string is a valid extended breakpoint key
export const isValidExtendedBreakpoint = (
  key: string
): key is ExtendedBreakpointKey => {
  return key === "base" || isValidBreakpoint(key);
};

// Usage examples:
// console.log(breakpoints.md)     // "768px"
// console.log(getBreakpointValue('lg'))  // 1024

export default breakpoints;
