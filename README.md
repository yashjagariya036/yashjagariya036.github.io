# Yash Jagariya — Personal Space

Matte black, grain texture, asymmetric layout, terminal-style accents.
Space Grotesk + JetBrains Mono. No glassmorphism, no centered symmetric grids.

## Files

```
index.html   -> structure & content
style.css    -> theme, layout, animations, texture
script.js    -> loader, scroll progress, active nav, reveal, cursor glow,
                terminal typewriter effect
assets/      -> logo.jpg, qr.png (your real files)
README.md    -> this file
```

## What's different from a generic template

- **Asymmetric hero** - big left-aligned type, off-center layout, not
  centered-everything.
- **"Now" terminal card** replaces a generic About paragraph - a
  monospace terminal window that types itself out when scrolled into view.
  Edit the `lines` array near the top of `initTerminalTypewriter()` in
  `script.js` to update what it says.
- **Bento grid** in Featured - one large card + two smaller, not three
  equal boxes.
- **Grain + grid texture** in the background instead of a plain gradient -
  fills empty space without looking decorative.
- **Connect as a link list**, not app-tile buttons - simpler, less
  "dashboard."
- **Personal footer line** instead of a copyright notice.

## Things worth personalizing further

- **Terminal lines** (`script.js`) - the four "currently" lines are a
  reasonable guess; make them specifically true for you right now.
- **Featured card links** - currently point at your YouTube channel,
  Instagram, and GitHub profile pages. If you have one specific favorite
  clip, edit, or repo, linking directly to that instead of your profile
  homepage will feel more deliberate.
- **Footer line** - "Made with coffee, late nights, and a questionable
  sleep schedule" is a placeholder voice. Swap it for something that
  actually sounds like you.

## Running locally

```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

Push to `yashjagariya036.github.io` on the `main` branch, root folder -
same as your current setup. No build step needed.
