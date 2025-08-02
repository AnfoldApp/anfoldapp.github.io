import React from "react";

// Re-export types for easy importing
export type {
  BreakpointKey,
  BreakpointValue,
  Breakpoints,
  ExtendedBreakpointKey,
} from "../utils/breakpoints";

export type { ResponsiveValue } from "../hooks/useBreakpoint";

export type {
  MediaQueryType,
  ResponsiveStyleConfig,
  DeviceType,
} from "../utils/responsiveHelpers";

// Import types for use in this file only
import type {
  ExtendedBreakpointKey,
  BreakpointKey,
} from "../utils/breakpoints";
import type { ResponsiveValue as RV } from "../hooks/useBreakpoint";

// Additional utility types for common responsive patterns
export type ResponsiveSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ResponsiveSpacing = RV<string | number>;
export type ResponsiveDisplay = RV<
  "block" | "inline" | "flex" | "grid" | "none"
>;

// Type for creating responsive CSS classes
export type ResponsiveCSSClass = Partial<Record<ExtendedBreakpointKey, string>>;

// Type for responsive component props
export interface ResponsiveProps {
  className?: ResponsiveCSSClass;
  style?: RV<React.CSSProperties>;
}

// Utility type for responsive configuration objects
export type ResponsiveConfig<T> = {
  [K in ExtendedBreakpointKey]?: T;
};

// Type for breakpoint-specific event handlers
export type BreakpointEventHandler = (
  breakpoint: ExtendedBreakpointKey
) => void;
export type MediaQueryEventHandler = (
  matches: boolean,
  breakpoint: BreakpointKey
) => void;
