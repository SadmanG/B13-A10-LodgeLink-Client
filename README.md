# 🌲 LodgeLink

An enterprise-grade, high-performance vacation and eco-lodge rental marketplace built with the Next.js App Router framework, styled with a premium forest emerald and tech-teal interface. 

---

## 🚀 Purpose
LodgeLink bridges the digital gap between premium eco-lodges, rustic cabins, and passionate travelers seeking seamless, secure nature escapes. The system features advanced multi-role access controls, real-time client-side listing analytics, an administrative moderation system, and an integrated end-to-end checkout processing gateway.

---

## 🌐 Live URL
*   **Production Deployment:** [https://vercel.app](https://vercel.app) *(Replace with your actual Vercel/Netlify host domain)*
*   **Backend Server Endpoint:** `https://onrender.com`

---

## ✨ Key Features

### 👤 1. Secure Multi-Role Portal Layouts
*   **Tenants Module:** Browse approved properties, maintain a dynamic personal favorites tray, track localized check-in histories, and initialize instant bookings.
*   **Hosts/Owners Portal:** Review total platform revenue analytics via animated charts, deploy multi-attribute property configurations, and manage incoming tenant stay requests.
*   **System Administrators View:** A global control table to audit system-wide listings with real-time dynamic Approve/Reject status triggers.
*   **Layout Protection Guard:** Folder-based asynchronous layout wrapper checks that intercept malicious role-spoofing attempts straight on the server before client rendering.

### 🔍 2. Advanced Search & Moderation Filters
*   **Instant Query Filters:** Search properties by real-time location keywords, clean category dropdown states (Cabins, Lodges, Villas), and sort values instantly from Low-to-High or High-to-Low based on nightly rates.
*   **Approval Gate:** Public facing paths automatically hide items matching a `pending` status condition to secure marketplace visibility integrity.

### 💳 3. End-to-End Checkout Pipeline
*   **Stripe Integration:** Form submissions map client records, date parameters, and notes into secure checkout tokens, redirecting tenants safely onto Stripe Hosted payment windows.
*   **Handshake Post-Verification:** Reads background payment metadata to securely commit transaction receipts linked with new live booking documents inside MongoDB.

---

## 🎨 Brand Identity Style Guide
The application strictly enforces cohesive visual contrast layers across all layouts using these custom Tailwind color assignments:
*   **Primary Wrapper Background:** `bg-emerald-950`
*   **Card & Toolbar Surface Containers:** `bg-emerald-900/40`
*   **Brand Highlight Accent:** `text-green-400`
*   **Primary Action Theme Token:** `bg-teal-500` / `text-stone-900`
*   **Muted Description Anchors:** `text-stone-300`

---

## 📦 Bundled npm Packages Integrated

### Frontend Client Environment
*   **`next` (v14+)** - Primary framework engine supporting Server Components, layout routing hierarchies, and localized asset optimizations.
*   **`react` & `react-dom`** - Core layout rendering library components.
*   **`@heroui/react`** - Form primitive block wrappers (`Modal`, `Surface`, `TextField`, `Select`, `TextArea`, `Table`).
*   **`tailwindcss` & `daisyui`** - CSS utility framework and theme interface plugins.
*   **`motion`** - Advanced fluid animation framework orchestration used to handle micro-interactions, spring configurations, and staggered scroll-reveal effects on the home view.
*   **`recharts`** - SVG rendering graphics component library used to draw the dynamic 12-month trailing revenue analytics charts inside the host view.
*   **`better-auth`** - Authentication adapter layer handling cookie validation hooks and secure client-side user sessions (`useSession()`).
*   **`react-hot-toast`** - Context pop-up indicator tags supplying instantaneous feedback messages during database mutations.
*   **`react-icons`** - Extensive semantic iconography sets mapping vector details cleanly over grids.
*   **`@gravity-ui/icons`** - High-contrast system action vectors providing clean iconography markers (such as the standard `TrashBin` asset).

### Backend Server Environment
*   **`express`** - The lightweight framework backbone processing network routing handshakes.
*   **`mongodb`** - Native driver library communicating directly with the cloud database layers via structured queries and explicit `ObjectId` type remappings.
*   **`cors`** - Cross-Origin Resource Sharing security configuration middleware enabling the Next.js local host client to communicate with your Express environment.
*   **`dotenv`** - Local environment variable configuration utility.
*   **`stripe`** - Official payment processing SDK utilized to initialize hosted Checkout Sessions and retrieve tokenized transaction ledger details.