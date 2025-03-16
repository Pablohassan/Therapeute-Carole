/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ... existing theme extensions
    },
  },
  plugins: [],
  // Add custom utilities for long press hover
  variants: {
    extend: {
      scale: [
        "active",
        "group-hover",
        "group-focus",
        "hover",
        "focus",
        "long-press",
      ],
      backgroundColor: [
        "active",
        "group-hover",
        "group-focus",
        "hover",
        "focus",
        "long-press",
      ],
      textColor: [
        "active",
        "group-hover",
        "group-focus",
        "hover",
        "focus",
        "long-press",
      ],
      borderColor: [
        "active",
        "group-hover",
        "group-focus",
        "hover",
        "focus",
        "long-press",
      ],
      shadow: [
        "active",
        "group-hover",
        "group-focus",
        "hover",
        "focus",
        "long-press",
      ],
    },
  },
};
