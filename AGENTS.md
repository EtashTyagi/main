# AGENTS.md — etashtyagi.in (Personal Website)

Read this file fully before making changes. It is the single source of truth for agents.

> **MAINTENANCE RULE (IMPORTANT):** If your change makes anything in this file wrong or
> incomplete (new route/project, new dependency, changed script, new directory, changed
> deployment, new convention), you MUST update the relevant section of this AGENTS.md in
> the same change. Keep edits minimal and factual. Do not rewrite unaffected sections.

---

## 1. What this repo is

Monorepo with two independent sub-projects:

| Path | What | Stack | Deployed at |
|---|---|---|---|
| `main_frontend/` | Portfolio SPA | React 17 + TypeScript + CRA + MUI v5 + Redux Toolkit | Cloudflare Pages → https://etashtyagi.in |
| `main_backend/` | Tiny REST API (like counter, message stub) | Spring Boot 2.7 + Java 11 + Maven + MongoDB | Self-hosted Docker/Portainer → https://api.etashtyagi.in (port 8000) |

Backend has scheduled downtime 12am–8am IST daily (frontend shows a snackbar about this).
There is no CI/CD, no test suite (beyond a backend context-load test), no Prettier/ESLint
config beyond CRA defaults. TypeScript `strict: true` is the main safety net.

---

## 2. Commands

Frontend (run inside `main_frontend/`, Node >= 16.17, npm):

```bash
npm install        # install deps
npm start          # dev server on localhost:3000
npm run build      # production build -> build/
```

Backend (run inside `main_backend/`, Java 11):

```bash
./mvnw spring-boot:run     # dev profile (Mongo on localhost:27017)
./mvnw test                # tests
./mvnw package -Pprod      # prod jar (what the Dockerfile runs)
```

There are NO lint/format scripts. Match existing code style by hand.

---

## 3. Frontend architecture (read this before editing UI)

### Tech facts (do not violate)

- **React 17**, legacy `ReactDOM.render` in `src/index.tsx`. Do NOT use React 18 APIs
  (`createRoot`, `useId`, automatic batching assumptions, etc.).
- **MUI v5 + Emotion** for ALL styling. No Tailwind, no CSS modules, no plain CSS files.
- **react-router-dom v6** — it sits in `devDependencies` (works with CRA; leave it there).
- Relative imports only (`../../constants/...`). No path aliases.
- Env: `REACT_APP_API_BASE_URL` set in `.env.development` / `.env.production`.

### Provider chain

`src/index.tsx`: Redux `Provider` → `BrowserRouter` → `ThemeProvider` → `CssBaseline` +
`GlobalStyles` (custom scrollbar, `scrollSnapType: "y mandatory"` on html) →
`SnackbarProvider` → `App.tsx` (Header + SideMenu + Main).

### Directory map (`main_frontend/src/`)

| Dir | Purpose |
|---|---|
| `api/` | axios instance (`withCredentials: true`, session cookies) + request fns. Request fns take `dispatch` as a parameter and dispatch results into Redux. |
| `components/` | One folder per component: `Name/index.tsx` + optional `style.tsx` (Emotion `styled()` wrappers) + optional co-located Redux slice. |
| `constants/` | **ALL site content lives here as TS data** (see §4). |
| `downloads/` | PDFs (resume, transcripts) imported as modules. |
| `resources/` | Custom SVG icon components (`*Icon.tsx`) + project screenshots. |
| `public/projects/` | Project detail markdown files (`{slug}.md`), fetched at runtime by `MarkdownRenderer`. |
| `store/` | Redux store. Slices: `theme`, `isSideMenuOpen`, `likeResponse`. Exports `RootState`, `AppDispatch`. |
| `themes/` | Theme factory + design tokens + `themeSlice` (persists LIGHT/DARK to localStorage key `THEME`). |
| `utils/` | debounce, snackbar helpers, `useAppBarHeight` hook. |

### Routing

- Route constants: `src/constants/routes.ts` (`/`, `/projects`, `/other_sites`, `/profiles`, `/downloads`).
- Route → component map: `src/components/Main/routeToComponent.tsx`. `Main/index.tsx`
  iterates it to render `<Route>`s; `isExpandable` appends `/*` for nested routes.
- `/` → `AboutMe` (Welcome hero + Skills carousels + LifeEvents timeline, scroll-snap one-pager).
- `/projects` → card grid; `/projects/:slug` pages are generated from `constants/Projects.tsx`.
- `/profiles` and `/downloads` are **fake routes**: sidebar tree items that `window.open(...)`
  external links/PDFs without router navigation (see `SideMenu/SideBarTreeView.tsx`).
- `/other_sites` component exists but is commented out in `routeToComponent.tsx`.
- `*` → `NotFound`.

### Key components

- `Header/` — AppBar: hamburger, brand, Message-Me (stub → "not implemented" snackbar),
  Like button (backend), theme toggle; collapses into overflow menu on small screens.
- `SideMenu/` — Drawer: permanent on large screens, temporary otherwise; open state in
  `sideMenuSlice.ts`. Navigation is an MUI Lab `TreeView` in `SideBarTreeView.tsx`.
- `MultipleItemCarousel/`, `CustomTooltip/`, `ScrollElevator/`, `SkillAndProjectTagChip/`
  — shared building blocks.
- `MarkdownRenderer/` — fetches `/projects/{slug}.md` at runtime and renders it as HTML
  using `react-markdown` + `remark-gfm`. Used by `GenericProjectPage` for project details.
- `CircuitBackground/`, `NetworkBackground/`, `CursorTrail/` — **untracked WIP dead code,
  imported nowhere**. Do not assume they work; do not import without being asked.

### Theming rules

- Design tokens in `src/themes/constants.ts`: `AppThemes` enum, palettes, `SIDEBAR_WIDTH = 300`,
  gold/silver/bronze gradients, translucent blurred AppBar/Drawer colors.
- ALWAYS use the breakpoint helper functions from `themes/constants.ts`
  (`smallScreen(theme)`, `largeScreen(theme)`, `longScreen()`) instead of raw
  `theme.breakpoints.*` — this is the established convention everywhere.
- Both LIGHT and DARK themes exist; verify visual changes against both.

---

## 4. Content is data — common tasks (recipes)

There is no CMS/markdown. Content = TypeScript files in `src/constants/`.

**Add/edit a project** (most common task):
1. Edit `src/constants/Projects.tsx` — add an `IProject` entry: `title`, `sidebarTitle`,
   `shortDesc`, `sideBarIcon`, `imageSrc[]` (import screenshots
   into `src/resources/`), `tags`, `slug`, `status`.
2. Create `public/projects/{slug}.md` with the project's detailed description in markdown.
   This is fetched and rendered by `MarkdownRenderer` on the project detail page.
3. That single entry auto-drives: the `/projects/:slug` route, sidebar tree item,
   project card, and project page. No other code changes needed.
4. **Manually** add `https://etashtyagi.in/projects/<slug>` to `public/sitemap.txt`.

**Add a skill**: add tag to enums in `src/constants/SkillAndProjectTags.tsx`, map it to an
icon component in `TagToIcon` (create `src/resources/XxxIcon.tsx` if needed), and add a
0–5 rating in `src/constants/MyRatings.ts` (tiers: gold/silver/bronze thresholds there).

**Add a profile link / download**: `src/constants/MyProfiles.ts` / `src/constants/MyDownloads.ts`
(PDFs go in `src/downloads/`, imported with `// @ts-ignore`).

**Add a top-level page**: add route constant in `constants/routes.ts`, component under
`components/Main/`, entry in `routeToComponent.tsx`, and a sidebar item in
`SideBarTreeView.tsx`. Update sitemap.txt.

---

## 5. Backend architecture

`main_backend/src/main/java/com/et/main/` — standard layering:
`controller/` → `service/` → `repository/` (Spring Data Mongo) with documents in
`models/documents/` and DTOs in `models/responses/`. Lombok is used.

Endpoints:
- `GET/POST/DELETE /like` — like counter, deduplicated by HTTP session ID (the Mongo
  document id). Count is computed via `findAll().size()` (O(n), known smell).
- `POST /message?sentBy=` — unfinished stub on both ends.

Config:
- `SecurityConfiguration.java`: CSRF disabled; CORS allows `https://etashtyagi.in` and
  `http://localhost:3000` with credentials. Session cookie `same-site=strict`.
- Profiles: `dev` (default, Mongo at localhost) / `prod` (`mongodb://db:27017/main`),
  selected via Maven profiles and `application-{dev,prod}.properties`.
- `docker-compose.yml` (repo root context): `mongo:4.4` + backend on port 8000.

---

## 6. Gotchas / traps (read before debugging)

1. React 17 — modern docs/examples often assume 18; check API availability first.
2. `react-router-dom` is in devDependencies. It works; don't "fix" it unasked.
3. `StyledFullScreenWrapper` in `Main/style.tsx` calls the `useAppBarHeight()` hook inside
   a styled-component style function. Fragile but working — preserve the pattern.
4. The About page relies on global `scrollSnapType: "y mandatory"` + `scrollSnapAlign` on
   sections, gated by `longScreen()` (min-height 850px). Touch with care.
5. `fontFamily: 'ariel'` (typo of "arial") in Brand/Welcome is intentional-ish; falls back
   to default font. Leave it unless asked.
6. API request fns return `{status: -1, data: message}` on error instead of throwing;
   errors surface via `utils/handleSnackbar.ts` (which mentions the 12–8am IST downtime).
7. `public/manifest.json` and logo192/512 are stock CRA leftovers.
8. Untracked files exist in git (WIP components, `main_frontend/package-lock.json`);
   `git status` noise is expected — don't delete them.
9. No tests exist for the frontend. Verify changes by running `npm start` and checking
   the affected pages in both themes and at small + large viewport widths.

---

## 7. Checklist before finishing any change

- [ ] `npm run build` (frontend) or `./mvnw package` (backend) succeeds.
- [ ] New/changed routes reflected in `public/sitemap.txt`.
- [ ] UI checked in both LIGHT and DARK themes, small and large screens (mentally at minimum).
- [ ] Conventions followed: component-per-folder, `style.tsx` for styled wrappers,
      breakpoint helpers, relative imports.
- [ ] **This AGENTS.md updated if any fact in it changed** (see maintenance rule at top).
