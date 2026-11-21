# tayloredlin.com

Taylor Edlin's voice & piano lessons site. Hand-written static HTML: no build step, no dependencies.
Served by GitHub Pages from `main` (custom domain in `CNAME`, `.nojekyll` so files are served as-is).

| File | What it is |
| --- | --- |
| `index.html` | The whole site: hero, about + credits, lessons, who Taylor teaches, why Taylor, booking form. |
| `styles.css` | All styles. Linked as `styles.css?v=N`: bump N when you change it so browsers don't keep the old file. |
| `main.js` | Sends the booking form to Formspree without leaving the page, and shows a thank-you. |
| `favicon.svg` | TE monogram. |
| `images/` | Photos go here. |

## Run it locally

```sh
python3 -m http.server 4321   # then open http://localhost:4321
```

## Booking form

Posts to Formspree form **tayloredlin.com** (`https://formspree.io/f/xdegwnva`, in Derrick's Formspree account).
The form ID is public by design. Submissions are emailed to the form's linked address; to send them to Taylor,
add his email under Formspree → Account → Linked Emails, then pick it in the form's Settings.

## Still to come from Taylor

- [ ] Photo(s): put one at `images/taylor.jpg` and swap it into the arch in the hero (see the comment there).
- [ ] Short intro video (him talking, a few seconds of piano and singing, stage/studio footage, an invitation to book).
- [ ] TikTok and other social handles (for the footer).
- [ ] Testimonials: real quotes only.
- [ ] Where lessons happen (in home, studio, online) and rates, if he wants them listed.
