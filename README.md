# Canara HSBC – Learning Portal

🚀 **Live Demo:** https://multi-tenant-platform-by-neha-soni.vercel.app/

A role-based learning portal built as a frontend assignment. The app lets an **Admin** manage users and control which learning products each user can access. Regular users can browse their assigned products, explore channels, view PDFs, watch videos, and interact with an AI-powered chatbot that answers questions from the content.

---

## Features

### 🔐 Role-Based Access Control (RBAC)
- Two roles: **Admin** and **User**
- Admin sees a management panel to create/delete users and toggle product access per user
- Regular users only see the products assigned to them
- User switching is available via the header dropdown (simulates multi-user testing without auth)

### 📦 Products & Channels
- Products are learning tracks (e.g. React Deep Dive, Vue Essentials, Angular Fundamentals)
- Each product contains one or more **Channels**
- Channels hold **PDFs** and **Videos** as learning content

### 🤖 AI Chatbot (Semantic Search)
- Each channel has a built-in chatbot powered by [`react-chatbotify`](https://react-chatbotify.com)
- Uses [`@huggingface/transformers`](https://huggingface.co/docs/transformers.js) running fully **in the browser** (no backend needed)
- Embeds PDF/video content using the [`mixedbread-ai/mxbai-embed-xsmall-v1`](https://huggingface.co/mixedbread-ai/mxbai-embed-xsmall-v1) model
- Answers user questions via **cosine similarity** semantic search over the embedded content chunks

### 👤 User Management (Admin only)
- Create new users with a name — they are instantly available in the user switcher
- Assign or revoke product access per user via toggle switches
- Delete users
- All changes persist to **localStorage** so state survives page refreshes

### 📱 Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Mobile: card-based user list with per-product toggles
- Desktop: compact table layout

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Routing | [React Router v7](https://reactrouter.com) |
| Build tool | [Vite](https://vitejs.dev) |
| AI / Embeddings | [@huggingface/transformers](https://huggingface.co/docs/transformers.js) |
| Chatbot UI | [react-chatbotify](https://react-chatbotify.com) |
| Persistence | Browser localStorage |

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Dashboard, LoginMenu
│   ├── product/         # ProductList, Product card
│   ├── channel/         # ChannelList, Channel tabs
│   ├── media/           # PDF viewer, Video player
│   └── rbac/
│       └── admin/       # Management panel (create/delete users, toggle products)
├── data/                # Static data: users, products, channels, PDFs, videos, chatbot config
├── hooks/               # useEmbedder, useVectorStore, useSemanticSearch
├── types/               # TypeScript interfaces
└── utils/               # localStorage helpers
```

---

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- [npm](https://www.npmjs.com) v9 or higher (comes with Node)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/canara-hsbc-assignment.git
cd canara-hsbc-assignment

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Other Scripts

```bash
npm run build      # Type-check and build for production
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## Usage

1. **Open the app** — you start as `Admin` by default (selectable from the header dropdown)
2. **As Admin** — go to the Management panel, create users, and toggle which products each user can access
3. **Switch to a User** — use the header dropdown to switch to any user
4. **Browse products** — only products assigned to that user are visible
5. **Explore a channel** — click a product → select a channel → view PDFs or videos
6. **Ask the chatbot** — type a question in the chat widget; it searches the channel content semantically and returns the most relevant excerpts

> **Note:** The first time you open a channel, the AI model downloads in the background (~20–40 MB). This is a one-time download cached by the browser.

---

## Key Design Decisions

- **No backend** — all state lives in localStorage; the AI model runs entirely client-side via WebAssembly through Transformers.js
- **Event-driven user sync** — custom `window` events (`userChanged`, `usersUpdated`) keep the header and management panel in sync without a global state library
- **RBAC via data** — roles and product access are enforced at the data-filtering level; the Admin panel is only rendered for users with `role === ROLES.ADMIN`

---

## Developed By

**Neha Soni** · May 2026  
Assignment for Canara HSBC Life Insurance
