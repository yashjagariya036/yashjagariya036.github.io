# Yash Jagariya — Personal Brand Site

A dark, glassmorphic personal site. Matte black background, purple accent,
Poppins type, Apple-style motion.

## Files

```
index.html   → structure & content
style.css    → theme, layout, animations
script.js    → loading screen, scroll progress, active nav, reveal, cursor glow
assets/      → put your logo.png and qr.png here
README.md    → this file
```

## Already wired in

Your real logo, QR code, UPI ID, and social links are all in place:
- `assets/logo.jpg` and `assets/qr.png` are your actual files
- Connect section links to your real YouTube, Instagram, Spotify, GitHub,
  and Discord (`stoic_yash`)
- Support section shows your real UPI ID (`yashjagariya036@oksbi`)
- Featured card links point to YouTube (Valorant), Instagram (AMVs), and
  GitHub (Coding Journey) — update these individually if you'd rather link
  to specific videos/posts/repos instead of your profile pages.

## Running locally

No build step needed — it's plain HTML/CSS/JS. Just open `index.html` in a
browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this folder to a repo named `yashjagariya036.github.io`
   (or any repo, then enable Pages in Settings → Pages).
2. Set the Pages source to the `main` branch, root folder.
3. Your site goes live at `https://yashjagariya036.github.io`.

## What's already built

- Loading screen with fade-out
- Scroll progress bar
- Cursor glow follower (desktop only, respects reduced-motion)
- Active nav-link highlighting on scroll
- Scroll-triggered reveal animations on each section
- Floating hero logo + purple hero glow
- Glassmorphic cards with hover lift + glow (Featured, Connect, Support)
- Responsive mobile nav with hamburger toggle
- Auto-updating footer year
- `prefers-reduced-motion` respected throughout

## Ready for later

The structure leaves room to add, without a redesign:
- YouTube embeds inside the Featured cards
- A GitHub repo/projects grid
- A blog section
- A contact form
- Analytics script tag in `<head>`
- Custom domain (add a `CNAME` file for GitHub Pages)
