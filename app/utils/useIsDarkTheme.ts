import { useEffect, useState } from "react";

/**
 * Tracks the `.dark` class that ThemeToggle/ThemeScript put on <html>.
 *
 * The theme is applied imperatively (no React state backs it), so anything that
 * needs the theme in JS — rather than in CSS — has to observe the class itself.
 * Starts as `false` on the server and syncs on mount; CSS-driven visuals should
 * keep using Tailwind's `dark:` variants so they are correct on first paint.
 */
function useIsDarkTheme(): boolean {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains("dark"));

    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default useIsDarkTheme;
