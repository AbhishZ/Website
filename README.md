# Koash Technologies — Website

Modern static website for [koash.tech](https://koash.tech), built with pure HTML, CSS, and vanilla JS. No build tools or dependencies — drop it on GitHub Pages and you're live.

## Pages

| File | URL |
|------|-----|
| `index.html` | Homepage |
| `pages/about.html` | About |
| `pages/penetration-testing.html` | Penetration Testing |
| `pages/security-assessment.html` | Security Assessment |
| `pages/offensive-security.html` | Offensive Security |
| `pages/defensive-security.html` | Defensive Security |
| `pages/managed-security.html` | Managed Security |
| `pages/secure-sdlc.html` | Secure Software Development |
| `pages/vciso.html` | vCISO Advisory |

## Deploy to GitHub Pages

1. Create a new repo at [github.com/new](https://github.com/new) — name it `koash-tech` (or anything you like)
2. Upload all files (drag & drop in the GitHub UI, or push via git):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo
4. Under **Source**, select **Deploy from a branch → main → / (root)**
5. Your site goes live at `https://YOUR_USERNAME.github.io/REPO_NAME`

### Custom domain (koash.tech)

1. In **Settings → Pages → Custom domain**, enter `koash.tech`
2. Add these DNS records at your domain registrar:

   | Type | Name | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | YOUR_USERNAME.github.io |

3. Check **Enforce HTTPS** once DNS propagates (can take up to 24h)

## Enable the contact form

The contact form uses [Formspree](https://formspree.io) — free for up to 50 submissions/month.

1. Sign up at formspree.io
2. Create a new form and copy your form ID (looks like `xabcdefg`)
3. In `index.html`, find this line:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/your-form-id" method="POST">
   ```
   Replace `your-form-id` with your actual Formspree ID.

## Customise

- **Colours** — edit CSS variables at the top of `css/style.css`
- **Stats** — edit the hero stats in `index.html` (50+ engagements etc.)
- **Email address** — search for `hello@koash.tech` and replace
- **LinkedIn URL** — search for the LinkedIn href and update
- **Copyright year** — search for `2025` in footer sections

## Structure

```
koash-tech/
├── index.html          # Homepage
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Nav, radar animation, scroll reveal
└── pages/
    ├── about.html
    ├── penetration-testing.html
    ├── security-assessment.html
    ├── offensive-security.html
    ├── defensive-security.html
    ├── managed-security.html
    ├── secure-sdlc.html
    └── vciso.html
```
