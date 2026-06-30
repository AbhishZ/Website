# Koash Technologies — Website

Modern static website for [koash.tech](https://koash.tech). Three practice areas: **Security**, **Software Development**, and **AI & Automation**. Pure HTML/CSS/JS — no build tools, no dependencies. Drop it on GitHub Pages and it's live.

---

## Pages (20 total)

### Core
| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, tabbed services, why us, process, contact |
| `pages/about.html` | About Koash Technologies |

### Security (7 pages)
| File | Service |
|------|---------|
| `pages/penetration-testing.html` | Web, mobile, API & network pentesting |
| `pages/security-assessment.html` | Risk identification & prioritisation |
| `pages/offensive-security.html` | Red team & adversary simulation |
| `pages/defensive-security.html` | Detection engineering & hardening |
| `pages/managed-security.html` | 24/7 SIEM, IDS/IPS, SOC |
| `pages/secure-sdlc.html` | Shift-left, SAST/DAST, secure code review |
| `pages/vciso.html` | Virtual CISO advisory |

### Software Development (6 pages)
| File | Service |
|------|---------|
| `pages/web-development.html` | Full-stack web apps (React, Next.js, Java) |
| `pages/mobile-development.html` | iOS, Android & React Native |
| `pages/cloud-devops.html` | AWS/Azure/GCP, Terraform, DevSecOps |
| `pages/ui-ux-design.html` | Product design, Figma, design systems |
| `pages/api-integration.html` | REST, GraphQL, third-party integrations |
| `pages/software-consulting.html` | Architecture review & fractional CTO |

### AI & Automation (6 pages)
| File | Service |
|------|---------|
| `pages/ai-product-development.html` | LLM apps, RAG pipelines, AI copilots |
| `pages/llm-security.html` | OWASP LLM Top 10, prompt injection testing |
| `pages/intelligent-automation.html` | Agentic workflows, process automation |
| `pages/data-analytics.html` | Data pipelines, BI, predictive analytics |
| `pages/conversational-ai.html` | Enterprise chatbots & AI assistants |
| `pages/ai-consulting.html` | AI strategy, governance, readiness |

---

## Deploy to GitHub Pages (5 minutes)

**Step 1 — Push to GitHub**
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/koash-tech.git
git push -u origin main
```

**Step 2 — Enable Pages**
- Go to your repo → **Settings → Pages**
- Source: **Deploy from a branch → main → / (root)**
- Your site is live at `https://YOUR_USERNAME.github.io/koash-tech`

**Step 3 — Custom domain (koash.tech)**

In **Settings → Pages → Custom domain**, enter `koash.tech`, then add these DNS records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

Check **Enforce HTTPS** once DNS propagates (up to 24h).

---

## Enable the contact form

The form uses [Formspree](https://formspree.io) — free up to 50 submissions/month.

1. Sign up at formspree.io → create a new form → copy your form ID
2. In `index.html`, replace `your-form-id`:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

---

## Customise

| What | Where |
|------|-------|
| Brand colours | CSS variables at top of `css/style.css` |
| Hero headline & stats | `index.html` hero section |
| Email address | Search `hello@koash.tech` across all files |
| LinkedIn URL | Search `linkedin.com/company/koash-technologies` |
| Copyright year | Search `2025` in footer sections |
| Service page content | Edit individual files in `pages/` |

---

## File structure

```
koash-tech/
├── index.html              # Homepage
├── css/
│   └── style.css           # Full design system + responsive
├── js/
│   └── main.js             # Nav, tabs, radar canvas, scroll reveal
└── pages/
    ├── about.html
    ├── penetration-testing.html
    ├── security-assessment.html
    ├── offensive-security.html
    ├── defensive-security.html
    ├── managed-security.html
    ├── secure-sdlc.html
    ├── vciso.html
    ├── web-development.html
    ├── mobile-development.html
    ├── cloud-devops.html
    ├── ui-ux-design.html
    ├── api-integration.html
    ├── software-consulting.html
    ├── ai-product-development.html
    ├── llm-security.html
    ├── intelligent-automation.html
    ├── data-analytics.html
    ├── conversational-ai.html
    └── ai-consulting.html
```
