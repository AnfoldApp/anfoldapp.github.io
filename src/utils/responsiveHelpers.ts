import {
  breakpoints,
  type BreakpointKey,
  type ExtendedBreakpointKey,
} from "./breakpoints";

// Type definitions for responsive utilities
export type MediaQueryType = "min" | "max";
export type ResponsiveStyleConfig = Record<
  string,
  Partial<Record<ExtendedBreakpointKey, string>>
>;
export type DeviceType = "mobile" | "tablet" | "desktop";

/**
 * Generate dynamic media queries using Tailwind breakpoints
 */
export const createMediaQuery = (
  size: BreakpointKey,
  type: MediaQueryType = "min"
): string => {
  const value = breakpoints[size];
  if (!value) {
    console.warn(`Breakpoint "${size}" not found in Tailwind config`);
    return "";
  }

  if (type === "max") {
    // For max-width, subtract 1px to prevent overlap
    const numValue = parseInt(value.replace("px", "")) - 1;
    return `(max-width: ${numValue}px)`;
  }

  return `(min-width: ${value})`;
};

/**
 * Get CSS variable for breakpoint (for use in CSS)
 */
export const getBreakpointVar = (size: BreakpointKey): string =>
  `var(--breakpoint-${size})`;

/**
 * Check if screen matches breakpoint (synchronous)
 */
export const matchesBreakpoint = (
  size: BreakpointKey,
  type: MediaQueryType = "min"
): boolean => {
  if (typeof window === "undefined") return false;

  const mediaQuery = createMediaQuery(size, type);
  return window.matchMedia(mediaQuery).matches;
};

/**
 * Get responsive CSS values
 */
export const getResponsiveCSS = (
  values: Partial<Record<ExtendedBreakpointKey, string>>
): string => {
  const breakpointOrder: ExtendedBreakpointKey[] = [
    "base",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
  ];
  let css = "";

  breakpointOrder.forEach((bp) => {
    if (values[bp] !== undefined) {
      if (bp === "base") {
        css += `${values[bp]};`;
      } else {
        css += `
          @media (min-width: ${getBreakpointVar(bp as BreakpointKey)}) {
            ${values[bp]};
          }
        `;
      }
    }
  });

  return css;
};

/**
 * Create responsive style object for React components
 */
export const createResponsiveStyles = (
  config: ResponsiveStyleConfig
): Record<string, string> => {
  const styles: Record<string, string> = {};

  Object.entries(config).forEach(([property, values]) => {
    if (typeof values === "object" && values !== null) {
      // Find the appropriate value based on current screen size
      const breakpointOrder: ExtendedBreakpointKey[] = [
        "2xl",
        "xl",
        "lg",
        "md",
        "sm",
        "base",
      ];

      for (const bp of breakpointOrder) {
        if (
          values[bp] !== undefined &&
          (bp === "base" || matchesBreakpoint(bp as BreakpointKey))
        ) {
          styles[property] = values[bp];
          break;
        }
      }

      // Fallback to base value
      if (!styles[property] && values.base !== undefined) {
        styles[property] = values.base;
      }
    } else {
      styles[property] = values;
    }
  });

  return styles;
};

// Export commonly used breakpoint checks
export const isMobile = (): boolean => !matchesBreakpoint("sm");
export const isTablet = (): boolean =>
  matchesBreakpoint("sm") && !matchesBreakpoint("lg");
export const isDesktop = (): boolean => matchesBreakpoint("lg");

// Utility to get current breakpoint name
export const getCurrentBreakpoint = (): ExtendedBreakpointKey => {
  if (matchesBreakpoint("2xl")) return "2xl";
  if (matchesBreakpoint("xl")) return "xl";
  if (matchesBreakpoint("lg")) return "lg";
  if (matchesBreakpoint("md")) return "md";
  if (matchesBreakpoint("sm")) return "sm";
  return "base";
};

/**
 * Get device type based on current breakpoint
 */
export const getDeviceType = (): DeviceType => {
  if (isMobile()) return "mobile";
  if (isTablet()) return "tablet";
  return "desktop";
};

/**
 * Utility to create breakpoint-aware event listeners
 */
export const createBreakpointListener = (
  breakpoint: BreakpointKey,
  callback: (matches: boolean) => void,
  type: MediaQueryType = "min"
): (() => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia(createMediaQuery(breakpoint, type));

  const handleChange = (e: MediaQueryListEvent): void => {
    callback(e.matches);
  };

  // Set initial state
  callback(mediaQuery.matches);

  // Add listener
  mediaQuery.addEventListener("change", handleChange);

  // Return cleanup function
  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
};

/**
 * Utility to get responsive values with proper TypeScript inference
 */
export const getResponsiveValue = <T>(
  values: Partial<Record<ExtendedBreakpointKey, T>>,
  currentBreakpoint: ExtendedBreakpointKey = getCurrentBreakpoint()
): T | undefined => {
  // Check current breakpoint first
  if (values[currentBreakpoint] !== undefined) {
    return values[currentBreakpoint];
  }

  // Fallback cascade
  const fallbackOrder: ExtendedBreakpointKey[] = [
    "xl",
    "lg",
    "md",
    "sm",
    "base",
  ];

  for (const bp of fallbackOrder) {
    if (values[bp] !== undefined) {
      return values[bp];
    }
  }

  return undefined;
};
