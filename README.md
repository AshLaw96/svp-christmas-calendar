# SVP Advent Calendar 2026

An online advent calendar for the St Vincent de Paul Society (England and Wales) Christmas appeal, **Bring Light to Life's Darker Moments**. Visitors open one window a day from 1 to 25 December to see stories, statistics and ways to donate.

**Live site:** https://ashlaw96.github.io/svp-christmas-calendar/

![Screenshot of the advent calendar](docs/screenshot.png)

## Features

- **Date-based doors.** Windows unlock on their date. Locked doors show "Dark", doors ready to open show "Light" and opened doors show their image.
- **Content windows.** Each day opens a modal with an image, text and an optional link or donate button.
- **Remembers progress.** Opened doors are saved in the visitor's browser.
- **Responsive layout.** The doors form a 2, 4 or 6 column grid depending on screen width, with Day 25 spanning the full width underneath.
- **Accessible by design.** Doors are real buttons, so they work with keyboard and screen readers, with visible focus rings, descriptive labels, alt text on every image and a labelled dialog. Animations stop for visitors who prefer reduced motion.
- **Social sharing.** Open Graph tags and a share image give the link a proper preview on Facebook, WhatsApp and LinkedIn.

## Built with

- [React 19](https://react.dev/) and [Create React App](https://create-react-app.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/) and Bootstrap 5
- Plain CSS with custom properties
- React Testing Library
- GitHub Pages, deployed with `gh-pages`

## Getting started

You need [Node.js](https://nodejs.org/) (LTS version).

```bash
git clone https://github.com/AshLaw96/svp-christmas-calendar.git
cd svp-christmas-calendar
npm install
npm start
```

The app opens at http://localhost:3000.

### Previewing other dates

Before December every door is locked. Add `?previewDay=` to the address to test any date:

```
http://localhost:3000/?previewDay=12
```

Use `0` to lock everything and `25` to unlock all doors. If you've been testing, clear the saved doors by running `localStorage.removeItem("advent-opened-2026")` in the browser console.

### Scripts

| Command          | What it does                                |
| ---------------- | ------------------------------------------- |
| `npm start`      | Runs the app in development                 |
| `npm test`       | Runs the tests                              |
| `npm run build`  | Creates an optimised production build       |
| `npm run deploy` | Builds and publishes to GitHub Pages        |

## Updating the content

1. **Daily content:** edit `src/data/adventContent.js`. Each day has a `title`, `content`, and optionally `mediaUrl`, `imageAlt`, `linkUrl` and `linkText`.
2. **Images:** add them to `src/assets/images` (compressed WebP works best), import them at the top of the content file, and write alt text for each in `imageAlt`.
3. **Campaign year:** change `CAMPAIGN_YEAR` in `src/config.js`, and update the title, description and share tags in `public/index.html`.

## Deployment

The site is hosted on GitHub Pages. The `homepage` field in `package.json` sets the base address.

```bash
npm run deploy
```

This builds the app and publishes it to the `gh-pages` branch. In the repository settings, **Pages** should be set to deploy from that branch.

## Project structure

```
src/
├── assets/images/        Day images, logos and decorations
├── components/
│   ├── AdventCalendar.js   Door grid, modal and date logic
│   ├── Day.js              A single door
│   ├── Logos.js            Header logos
│   └── NightSky.js         Twinkling star background
├── data/adventContent.js   Content for each day
├── styles/                 Component stylesheets
├── App.js, App.css         Page layout
├── config.js               Campaign year
└── index.js                Entry point
```

## 2026 updates

- Moved the day content out of the component into its own data file
- Made the doors keyboard accessible with clear focus states and screen reader labels
- Added a labelled, scrollable modal, with fairy lights in the header
- Respects the reduced-motion setting
- Added Open Graph share tags and a corrected web app manifest
- Removed unused dependencies and boilerplate

## Credits

Built by [AshleyL](https://github.com/AshLaw96). Campaign content, logos and images belong to the St Vincent de Paul Society (England and Wales).
Many thanks to [Megan](https://www.linkedin.com/in/megan-lawrence-27431119b/) Communications & Digital Content Manager for the SVP for sending all the content through helping me make this.