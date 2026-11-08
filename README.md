# Quy Nhơn Digital — Static Landing Page

A dependency-free demo landing page for testing a real MarketingSystemAI chatbot widget.

## Files
- `index.html` — page markup
- `styles.css` — responsive styles
- `script.js` — mobile navigation, animations and demo form
- `favicon.svg` — icon

## Run locally
Open `index.html` in your browser or serve this directory with any static file server.

## Deploy
Upload all four site files to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages or ordinary web hosting). No build step, Node server or database required.

## Connect your REAL chatbot
1. In MarketingSystemAI, open the widget installation/customization area and copy the actual embed snippet from your dashboard.
2. Paste the snippet into `index.html` just before the closing `</body>` tag.
3. Set up a public HTTPS API endpoint for your MarketingSystemAI backend and configure its allowed domains, widget settings and CORS as required by your implementation.
4. Redeploy and open the live page. Test customer questions and inspect the Inbox and RAG responses.

**No chat widget is mocked in this demo.** It only appears after you embed your actual MarketingSystemAI snippet.

## Contact form
The contact form is **intentionally demonstration-only** and does not send or store information. Do not claim it captures leads until you connect a real backend or form service.

## Customize
Edit site name, description, services and contacts directly in `index.html`. The brand is fictional and sample content should be reviewed before real commercial use.
