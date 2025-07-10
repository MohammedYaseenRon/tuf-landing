import { useTheme } from "next-themes";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";


const themes = [
    { key: "light", icon: IconSunFilled, label: "Light theme" },
    { key: "dark", icon: IconMoonFilled, label: "Dark theme" },

]

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [mounted,setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    return (
        <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={cn("cursor-pointer relative h-8 flex rounded-full bg-background p-1 ring-1 ring-border")}>
            {themes.map(({ key, icon: Icon, label }) => {
                const isActive = theme === key;
                return (
                    <button
                        type="button"
                        key={key}
                        aria-label={label}
                        className="relative h-6 w-6 rounded-md cursor-pointer">

                        {isActive && (
                            <motion.div
                                layoutId="activeTheme"
                                className="absolute inset-0 rounded-full bg-secondary"
                                transition={{type: "spring", duration: 0.5}}
                            />
                        )}
                        <Icon
                            className={cn("relative m-auto h-4 w-4", isActive ? "text-foreground" : "text-muted-foregrounf")}
                        />

                    </button>
                )
            })}
        </div>
    )
}