# CLAUDE.md

## Tech Stack
- Plain HTML, CSS, and JavaScript only.
- No frameworks, no build step. Files open directly in a browser.

## Project Structure
The repository is nearly empty for now. Planned layout as it grows:
- `index.html` — main page, at the top level
- `css/` — stylesheets
- `js/` — scripts
- `assets/` — images and other static files

Update this section when the real structure changes.

## Key Requirements
1. Every page must be responsive and work on desktop, tablet and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Feature Plan
A web portal where visitors try small aerospace engineering tools. Audience: students and curious beginners.

### Portal structure
- **Homepage** (`index.html`): short intro plus one card per tool.
- **Opening a tool**: the visitor clicks a tool's card and lands on that tool's own page (`tools/<tool-name>.html`).
- **Getting back**: every tool page has a "Back to all tools" link to the homepage.
- **Adding a tool later**: create `tools/<tool-name>.html` and `js/<tool-name>.js`, then add one card to `index.html`. Nothing else needs to change.

### Phases
1. **Phase 1: portal plus first tool.** The homepage, the light/dark toggle, and one tool: a standard atmosphere lookup (input: altitude; output: temperature, pressure, air density).
2. **Phase 2: more tools.** Add further tools one at a time. Which ones is decided with the user.
3. **Phase 3: polish.** Improvements to the portal as a whole, decided with the user after phase 2.

## Rules for Claude
- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess when something is unclear.
