import { useEffect, useMemo, useRef, useState } from "react";

import viteLogo from "@/assets/vite.svg";
import reactLogo from "@/assests/react.svg";
import dragon2Logo from "@/assests/dragon2Logo.svg";


type ThemeName = "light" | "dark" | "brand" | "mint";
const STORAGE_KEY = "storage-theme";

export default function Home() {
    const heroRef = useRef<HTMLElement>(null);

    const themes = useMemo<ThemeName[]>(() => ["light", "dark", "brand", "mint"], []);

    const getInitialTheme = (): ThemeName => {
        const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
        if (saved && themes.includes(saved))
            return saved;
        const preferDark = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
        return preferDark ? "dark" : "light";
    };

    const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        el.setAttribute("data-theme", theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const onKeyNav: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key !== "ArrowRight" && e.key === "ArrowLeft") return;
        e.preventDefault();
        const i = themes.indexOf(theme);
        const next = e.key === "ArrowRight" ? (i + 1) % themes.length : (i - 1 + themes.length) % themes.length;
        setTheme(themes[next]);
    };

    return (
        <main className="min-h-dvh">
            <section
                ref={heroRef}
                data-theme={theme}
                className="relative flex min-h-[100dvh] items-center overflow-hidden bg-background"
            >
                    <div className="fixed z-50"
                        style={{
                            insetInlineEnd: 'max(1rem, env(safe-area-inset-right))',
                            insetBlockStart: 'max(1rem, env(safe-area-inset-top))'
                        }}
                    >
                            <div
                                role='tablist'
                                aria-label="Theme Switcher"
                                onKeyDown={onKeyNav}
                                className="inline-flex rounded-full bg-secondary/70 p-1 shadow-soft ring-1 ring-border backdrop-blur"
                            >
                                {themes.map((t) => {
                                    const active = theme === t;
                                    return (
                                      <button
                                        key={t}
                                        role="tab"
                                        aria-selected={active}
                                        onClick={() => setTheme(t)}
                                        className={['rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none',
                                            active
                                            ? 'bg-primary text-primary-foreground shadow-soft'
                                            : 'text-muted-foreground hover:text-foreground',
                                        ].join(' ')}
                                        title={`Theme: ${t}`}
                                      >
                                        {t[0].toUpperCase() + t.slice(1)}
                                        </button>
                                    );
                                })}
                            </div>
                    </div>
                    <div
                    aria-hidden
                    className='pointer-events-none absolute inset-0 -z-10 opacity-25 mix-blend-overlay'
                    style={{
                        backgroundImage: 
                        'repeating-linear-gradient(60% 60% at 75% 25%, hsl(var(--accent) / 0.25) 0%, transparent 60%), radial-gradient(45% 45% at 20% 80%, hsl(var(--primary) / 0.18) 0%, transparent 60%)',
                    }}
                    />
                    <div 
                    aria-hidden
                    className="absolute inset-0 -z-10"
                    style={{
                        background:
                        'radial-gradient(120% 120% at 50% 80%, transparent 40%, hsl(var(--background)) 100%)',
                    }}
                    />
                    <div className="container relative grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-7">
                            <span className="badge">Welcome to Scribbyforge</span>
                            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-muted-foreground sm:text-5xl">
                                <span className="bg-gradient-to-tr from-accent to-primary bg-clip-text text-transparent">3D Prints, and More Coming Soon!</span>{' '}
                                Switch the theme using the buttons in the top right!
                            </h1>
                            <p className="max-w-prose text-lg text-muted-foreground">
                                Store Under Development
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#" className="btn btn-primary">
                                    Get Started
                                </a>        
                                <a
                                    href="#" className="btn btn-secondary">
                                    Secondary
                                </a>
                            </div>
                            <ul className="mt-2 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-accent" /> Section-only theme switching.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-primary" /> Token via CSS variable.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-accent" /> Tailwind utilities only.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-2 w-2 rounded-full bg-primary" /> No recompile on toggle.
                                </li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div
                                aria-hidden
                                className="absolute -inset-10 -z-10 opacity-50 blur-3xl"
                                style={{
                                    background:
                                        'radial-gradient(40% 40% at 60% 30%, hsl(var(--accent) / 0.6) transparent 60%), radial-gradient(35% 35% at 20% 70%, hsl(var(--primary) / 0.6), transparent 60%)',
                                }}
                            />
                        <div className="aspect-[16/10] overflow-hidden rounded-xl by-muted">
                            <div className='flex h-full w-full items-center justify-center'>
                                <div className='text-center'>
                                    <div className='flex items-center justify-center'>
                                        <div className='animate-float mr-4 rounded-2xl bg-background p-3 shadow-soft ring-1 ring-border'>
                                            <img src={viteLogo} className="h-8 w-8 sm:h-10 sm:w-10" alt="Vite Logo" loading="lazy" />
                                        </div>
                                        <div className='animate-float mr-4 rounded-2xl bg-background p-3 shadow-soft ring-1 ring-border'>
                                            <img src={reactLogo} className="h-8 w-8 sm:h-10 sm:w-10" alt="React Logo" loading="lazy" />
                                        </div>
                                        <div className='animate-float mr-4 rounded-2xl bg-background p-3 shadow-soft ring-1 ring-border'>
                                            <img src={dragon2Logo} className="h-8 w-8 sm:h-10 sm:w-10" alt="Dragon2 Logo" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className='mt-5 text-center text-sm text-muted-foreground'>
                                        <span className="font-medium text-foreground">Vite</span>{' '}+{' '}
                                        <span className="font-medium text-foreground">React</span>{' '}+{' '}
                                        <span className="text-xs text-muted-foreground">(Tailwind)</span>{' '}equals Rapid UI.
                                    </div>
                                    <div className='mx-auto mt-5 h-20 w-20 rounded-2xl bg-gradient-to-tr from-accent to-primary'></div>
                                    <div className="mt-4 text-sm text-muted-foreground">
                                        (This is a placeholder for future content)
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                    Color Palette
                                <div className="flex items-center gap-2">
                                    <span className="inline-block h-3 w-3 rounded-full bg-primary" />
                                    <span className="inline-block h-3 w-3 rounded-full bg-accent" />
                                    <span className="inline-block h-3 w-3 rounded-full bg-secondary" />
                                </div>
                                </div>
                            </div>
                        <p className="mt-3 text-center text-sm text-muted-foreground">
                            (This is a demo, the store is under development)
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
