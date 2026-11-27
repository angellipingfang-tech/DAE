# DAE

A web portal where visitors try small aerospace engineering tools. Built for students and curious beginners.

## Tech Stack
- Language: plain HTML, CSS, and JavaScript only
- Framework: None (no frameworks)
- Build step: None
- Database: None
- Testing: None yet

## Commands
- Install: None yet (nothing to install)
- Dev server: None yet (open `index.html` directly in a browser)
- Build: None yet
- Test (all): None yet
- Test (single file): None yet
- Lint: None yet
- Type check: None yet

## Project Structure
- `index.html` - homepage with one card per tool
- `tools/` - one page per tool (`tool-1.html` is the placeholder)
- `css/style.css` - shared styles; theme colors are CSS variables
- `js/theme.js` - light/dark toggle; remembers the choice in the browser
- `assets/` - images and other static files (not created yet)

Update this section when the real structure changes.

## Key Requirements
1. Every page must be responsive and work on desktop, tablet and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Feature Plan
### Portal structure
- **Homepage** (`index.html`): short intro plus one card per tool.
- **Opening a tool**: the visitor clicks a tool's card and lands on that tool's own page (`tools/<tool-name>.html`).
- **Getting back**: every tool page has a "Back to all tools" link to the homepage.
- **Adding a tool later**: create `tools/<tool-name>.html` and `js/<tool-name>.js`, then add one card to `index.html`. Nothing else needs to change.

### Phases
1. **Phase 1: portal plus first tool.**
   - [x] Portal: homepage, light/dark toggle, and a placeholder "Tool 1 — coming soon" card that opens `tools/tool-1.html` and returns with "Back to all tools". Simple neutral styling; the visual design is chosen later.
   - [ ] First tool: a standard atmosphere lookup (input: altitude; output: temperature, pressure, air density). It replaces the placeholder.
2. **Phase 2: more tools.** Add further tools one at a time. Which ones is decided with the user.
3. **Phase 3: polish.** Improvements to the portal as a whole, decided with the user after phase 2.

## Code Style
- Follow existing patterns in the surrounding code
- Prefer small, focused functions
- Use descriptive names; avoid abbreviations
- No commented-out code; delete it instead

## Workflow
- Make small, focused commits with clear messages
- Don't add new dependencies (libraries, CDN scripts, fonts) without asking
- No tests, lint or build to run yet; check changes by opening the page in a browser

## Testing
None yet. Check manually: desktop, tablet and phone widths, and both themes.

## Gotchas
None yet.

## Notes for Claude
- Explain technical terms in plain language
- Ask before making large refactors or architectural changes
- If requirements are unclear, ask rather than guess
- Keep explanations brief; show the diff or result
