import { useState, useEffect } from "react";
import {
  breakpoints,
  getBreakpointValue,
  type BreakpointKey,
  type ExtendedBreakpointKey,
} from "../utils/breakpoints";

// Type for responsive value configuration
export type ResponsiveValue<T> = Partial<Record<ExtendedBreakpointKey, T>>;

/**
 * Hook to detect current breakpoint
 * @returns {ExtendedBreakpointKey} Current breakpoint name (e.g., 'base', 'sm', 'md', 'lg', etc.)
 */
export const useBreakpoint = (): ExtendedBreakpointKey => {
  const [breakpoint, setBreakpoint] = useState<ExtendedBreakpointKey>("base");

  useEffect(() => {
    const calculateBreakpoint = (): ExtendedBreakpointKey => {
      const width = window.innerWidth;

      if (width >= getBreakpointValue("2xl")) return "2xl";
      if (width >= getBreakpointValue("xl")) return "xl";
      if (width >= getBreakpointValue("lg")) return "lg";
      if (width >= getBreakpointValue("md")) return "md";
      if (width >= getBreakpointValue("sm")) return "sm";
      return "base";
    };

    const handleResize = (): void => {
      setBreakpoint(calculateBreakpoint());
    };

    // Set initial breakpoint
    setBreakpoint(calculateBreakpoint());

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

/**
 * Hook to check if current screen matches specific breakpoint
 * @param {BreakpointKey} size - Breakpoint size ('sm', 'md', 'lg', etc.)
 * @returns {boolean} Whether current screen matches the breakpoint
 */
export const useMediaQuery = (size: BreakpointKey): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[size]})`);

    const handleChange = (e: MediaQueryListEvent): void =>
      setMatches(e.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [size]);

  return matches;
};

/**
 * Hook that returns responsive values based on current breakpoint
 * @param {ResponsiveValue<T>} values - Object with breakpoint keys and values
 * @returns {T | undefined} Current value based on breakpoint
 */
export const useResponsiveValue = <T>(
  values: ResponsiveValue<T>
): T | undefined => {
  const currentBreakpoint = useBreakpoint();

  // Return value for current breakpoint or fallback to smaller breakpoints
  return (
    values[currentBreakpoint] ||
    values.xl ||
    values.lg ||
    values.md ||
    values.sm ||
    values.base
  );
};

/**
 * Hook to get multiple breakpoint matches at once
 * @param {BreakpointKey[]} breakpoints - Array of breakpoints to check
 * @returns {Record<BreakpointKey, boolean>} Object with breakpoint matches
 */
export const useMultipleMediaQueries = (
  breakpointKeys: BreakpointKey[]
): Record<string, boolean> => {
  const [matches, setMatches] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueries = breakpointKeys.map((key) => ({
      key,
      query: window.matchMedia(`(min-width: ${breakpoints[key]})`),
    }));

    const updateMatches = (): void => {
      const newMatches: Record<string, boolean> = {};
      mediaQueries.forEach(({ key, query }) => {
        newMatches[key] = query.matches;
      });
      setMatches(newMatches);
    };

    // Set initial matches
    updateMatches();

    // Add listeners
    mediaQueries.forEach(({ query }) => {
      query.addEventListener("change", updateMatches);
    });

    // Cleanup
    return () => {
      mediaQueries.forEach(({ query }) => {
        query.removeEventListener("change", updateMatches);
      });
    };
  }, [breakpointKeys]);

  return matches;
};

export default useBreakpoint;
