# Mobile-Optimized Images Guide

This guide explains how to implement and use mobile-optimized images in your project.

## Overview

The project now includes components that conditionally render different images based on screen size. This approach:

- Improves page load times on mobile devices
- Reduces data usage for mobile users
- Provides better-framed images for smaller screens
- Maintains high-quality images on desktop

## Components

### 1. `useIsMobile` Hook

A custom React hook that detects if the current viewport is mobile.

```tsx
import { useIsMobile } from "../hooks/useIsMobile";

// In your component
const isMobile = useIsMobile(); // Default breakpoint is 768px
// or
const isSmallScreen = useIsMobile(480); // Custom breakpoint
```

### 2. `ConditionalImage` Component

A basic component that renders different images based on screen size.

```tsx
import ConditionalImage from "../components/ConditionalImage";

// In your JSX
<ConditionalImage
  desktopSrc="/images/desktop.jpg"
  mobileSrc="/images/mobile.jpg"
  alt="Description"
  width={800}
  height={600}
/>;
```

### 3. `ResponsiveConditionalImage` Component

An enhanced version with responsive features like `srcSet` and `sizes`.

```tsx
import ResponsiveConditionalImage from "../components/ResponsiveConditionalImage";

// In your JSX
<ResponsiveConditionalImage
  desktopSrc="/images/desktop.jpg"
  mobileSrc="/images/mobile.jpg"
  alt="Description"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={true} // For important above-the-fold images
/>;
```

## Creating Mobile Images

### Option 1: Manual Creation

1. Create mobile-optimized versions of your images
2. Name them with a `-mobile` suffix (e.g., `hero.jpg` → `hero-mobile.jpg`)
3. Place them in the same directory as the original images

### Option 2: Automated Script

We've included a script to automatically generate mobile versions:

1. Install dependencies:

   ```bash
   npm install sharp glob
   ```

2. Run the script:
   ```bash
   node scripts/generate-mobile-images.js
   ```

The script will:

- Find all images in the `src/assets` directory
- Create mobile versions with `-mobile` suffix
- Resize images to a width of 640px (configurable)
- Maintain aspect ratio
- Optimize quality

## Best Practices

1. **Image Dimensions**: Mobile images should be smaller but maintain the same aspect ratio
2. **Image Framing**: Consider different framing for mobile (e.g., closer crop on the subject)
3. **File Size**: Aim for mobile images to be 30-50% smaller than desktop versions
4. **Format**: Use WebP format when possible for better compression
5. **Loading Priority**: Use `priority={true}` for critical above-the-fold images

## Background Images

For background images in CSS, use the `useIsMobile` hook:

```tsx
const isMobile = useIsMobile();

<div
  style={{
    backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "center center" : "center",
  }}
>
  {/* Content */}
</div>;
```

## Troubleshooting

- **Images Not Switching**: Check that the mobile image path is correct
- **Performance Issues**: Ensure images are properly optimized
- **Layout Shifts**: Make sure both images have the same aspect ratio

## Example Implementation

See the following files for implementation examples:

- `src/pages/Family.tsx`
- `src/pages/Couple.tsx`
