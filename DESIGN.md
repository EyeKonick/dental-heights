---
name: Dental Heights
description: Warm Cebu Care. A neighbourhood dental clinic shown through its real team, on a sand ground with scrub-tan stacks and a yellow Book Now.
colors:
  sun: "#f5d65a"
  sun-deep: "#e9c53a"
  sky: "#1671b0"
  sky-deep: "#105a8e"
  sky-tint: "#d8ecf8"
  scrub: "#c9a47f"
  scrub-deep: "#86603f"
  sand: "#efe3d3"
  sand-deep: "#e6d5c0"
  sand-line: "#dcc8ae"
  cocoa: "#3a281b"
  cocoa-soft: "#6b5443"
  white: "#fffdfa"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Gabarito Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.1rem + 3.6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Gabarito Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.35rem + 1.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Gabarito Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Gabarito Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.3vw, 1.1875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Rethink Sans Variable, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Rethink Sans Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Gabarito Variable, Avenir Next, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.005em"
  caption:
    fontFamily: "Rethink Sans Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  sm: "12px"
  md: "18px"
  lg: "26px"
  xl: "40px"
  pill: "999px"
spacing:
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "64px"
  section-y: "clamp(72px, 9vw, 128px)"
  gutter: "clamp(18px, 4.4vw, 64px)"
  content: "1312px"
components:
  button-book:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.cocoa}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-book-hover:
    backgroundColor: "{colors.sun-deep}"
    textColor: "{colors.cocoa}"
  button-book-sm:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.cocoa}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-call:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cocoa}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  nav-bar:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cocoa-soft}"
    rounded: "{rounded.pill}"
    height: "72px"
  panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cocoa}"
    rounded: "{rounded.lg}"
    padding: "32px"
  panel-feature:
    backgroundColor: "{colors.white}"
    textColor: "{colors.cocoa}"
    rounded: "{rounded.xl}"
    padding: "clamp(24px, 4vw, 48px)"
  count-chip:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.cocoa-soft}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
---

# Design System: Dental Heights

## Overview

**Creative North Star: "The Clinic You Know by Face"**

Dental Heights is a neighbourhood clinic on the 2nd floor of a building on Colon St., and the system dresses it in the clinic's own materials: the warm sand and tan of the team's scrubs, the cocoa of a well-lit room, and the sky blue and sunny yellow of the logo. Every section is carried by real photographs of the real team, real rooms and real patients' teeth, set on white rounded panels that sit over a slightly tilted scrub-tan card, like a photo propped on a stack of folders at reception.

The page is calm and generous: one idea per section, big rounded white panels on a sand ground, short plain sentences in cocoa. The one loud colour is the yellow Book Now pill, repeated wherever a decision can be made. Sky blue is the voice for links, focus, icons and the single emphasised word; it never fills a button. The peak identity (the name, the tagline, the murals) is carried by photographs and words. Drawn, it appears exactly once, as a thin hand-authored ridge line.

It refuses the clinical white-and-blue dental template: no cold white ground, no stock smiling models, no blue primary buttons.

**Key Characteristics:**
- Sand ground (never white) with white rounded panels on top.
- A tilted scrub-tan stack behind the feature panels as the signature depth device.
- Yellow pill for Book Now, white pill with a tan ring for Call and every other secondary action.
- Gabarito for every heading and button label, Rethink Sans for reading.
- Real photographs only, with honest, case-by-case captions.
- Spring motion used sparingly: buttons lift, smile tiles swing.

## Colors

A warm, low-contrast earth palette taken from scrubs and murals, with the logo's yellow and sky blue as the only two saturated voices.

### Primary
- **Logo Sunshine** (sun): the Book Now pill and nothing else of weight; also the text-selection highlight. Hover deepens to **Sunflower** (sun-deep). Cocoa text sits on it, never white.

### Secondary
- **Logo Sky** (sky): text-link icons, the focus ring, and the text-link underline on hover. Never a button fill.
- **Deep Sky** (sky-deep): emphasised words in display type (the word "peak" in the hero, the tagline quote, the clinic unit number) and link hover colour on cocoa text.
- **Morning Haze** (sky-tint): the soft circular glow inside the hero photo panel, behind the team. Used only as a quiet backdrop.

### Tertiary
- **Scrub Tan** (scrub): the tilted stack cards behind feature panels, the ring around Call pills, the underline on text links, the scrollbar thumb.
- **Mural Brown** (scrub-deep): small accent icons (pin, clock), service-group titles, and the ridge line stroke.

### Neutral
- **Sand** (sand): the page ground everywhere; also chip fills and nav-link hover fill.
- **Deep Sand** (sand-deep): the alternate band behind the About section; the hairline on the phone call bar and footer legal rule.
- **Sand Line** (sand-line): 1px dividers between service rows, under the hero address and above link lists.
- **Cocoa** (cocoa): all headings and primary text, and the text on both pills. Also the base of every shadow.
- **Soft Cocoa** (cocoa-soft): body paragraphs, captions, intros and nav links.
- **Warm White** (white): panels, pills, nav bar, smile insets.
- **Paper** (paper): pure white reserved for surfaces that hold white-background imagery (the hero team photo panel, the footer card carrying the logo) so the image's white melts into the panel.

### Named Rules
**The One Yellow Rule.** Yellow means Book Now. No other element, badge or highlight is filled with sun.

**The Sky Is Not a Button Rule.** Sky blue speaks through links, icons, focus and single emphasised words. It never fills a pill or a panel.

**The Sand Ground Rule.** The page ground is sand. White exists only as a panel sitting on it.

## Typography

**Display Font:** Gabarito Variable (with Avenir Next, system-ui)
**Body Font:** Rethink Sans Variable (with system-ui)

**Character:** Gabarito is round, friendly and slightly chunky at bold, which suits a family clinic; Rethink Sans is a clear, open reader for short plain sentences on a phone. Headings use balanced wrapping; paragraphs use pretty wrapping.

### Hierarchy
- **Display** (700, 32 to 64px fluid, 1.02): the hero headline only, with a single word set in Deep Sky.
- **Headline** (700, 28 to 44px fluid, 1.05): every section h2.
- **Title** (700, 20 to 24px fluid): service-group names (in Mural Brown) and panel headings; the same size at 600 weight carries the tagline quote and the address block.
- **Title Small** (700, 17 to 19px fluid, 1.2): individual service names.
- **Lead** (400, 17 to 19px fluid, 1.55): hero lead and section intros, Soft Cocoa, kept to roughly 38 to 40ch.
- **Body** (400, 16px, 1.55): paragraphs, Soft Cocoa, 38 to 52ch measures.
- **Label** (Gabarito 700, 17px, line-height 1): button labels; 16px on small pills.
- **Caption** (400, 13 to 14px): photo captions and smile notes; in smile tiles the stage word (Before / During / After) sits above in Cocoa 600.

### Named Rules
**The Display Face Labels the Action Rule.** Button labels are set in Gabarito, not the body face, so Book Now reads as part of the brand voice.

**The Sentence Case Rule.** No uppercase tracking, no small eyebrow labels above headings. A section opens with its h2.

## Layout

A 12-column grid inside a container of min(100% - 2 x gutter, 1312px), gutter 18 to 64px fluid, column gap 24px. Sections breathe with 72 to 128px of vertical padding. Desktop compositions split the 12 columns asymmetrically: 5 + 7 for the hero (copy left, photo stage right), 5 + 6 with a sticky intro for services, 6 + 5 for About, 6 + 6 for Visit, and an 8 + 4 photo mosaic for the gallery.

Spacing follows an 8px-based scale (8, 12, 16, 24, 32, 48, 64). Breakpoints: at 1080px every grid collapses to one column and nav links hide behind the Book Now pill; at 640px buttons go full width, large radii step down from 40px to 26px, and a fixed two-button call bar (Tap to call + Book Now, 76px reserved at the page foot) appears.

### Named Rules
**The One Tap Rule.** On phones, Tap to call and Book Now are always on screen, in the fixed bottom bar.

## Elevation & Depth

A layered, physical system: white panels float on sand with long, soft, downward cocoa-tinted shadows, and feature panels gain a second plane, a scrub-tan card behind them rotated by 1.4 to 1.6 degrees. Smaller panels (service groups, gallery smile panel) are nearly flat, carrying at most a 1px hairline shadow. Depth comes from the stack and from tone, not from heavy blur.

### Shadow Vocabulary
- **Soft lift** (`0 1px 0 rgba(58,40,27,0.05), 0 24px 40px -24px rgba(58,40,27,0.55)`): small floating insets such as the smile card and skip link.
- **Panel drop** (`0 30px 60px -40px rgba(58,40,27,0.55)`): large feature panels and photos (hero team panel, About photo, Book your visit card).
- **Book glow** (`0 10px 22px -12px rgba(168,128,91,0.9)`): the warm tan glow under every Book Now pill.

### Named Rules
**The Tilted Stack Rule.** A feature panel or feature photo may sit on one scrub-tan card of the same radius, offset 10 to 14px and rotated 1.4 to 1.6 degrees, alternating direction between sections. One stack per section, never on small cards or buttons.

## Shapes

Everything is generously rounded. Pills (999px) for every button, the nav bar and chips; 40px for feature panels, the hero stage, the About photo and the footer card; 26px for content panels and gallery photos (and for feature panels at phone width); 18px for service groups on phones; 12px for small smile thumbnails and the focus ring. Dividers are 1px Sand Line rules. The only non-rounded drawn form is the ridge line: a 2.5px Mural Brown polyline with round joins, used once, under the tagline.

### Named Rules
**The Single Ridge Rule.** The peak is drawn once per page, as one thin authored ridge line. No mountain icons, triangles, or peak-shaped dividers elsewhere.

## Components

### Buttons
Friendly, tactile pills that spring slightly when touched.
- **Shape:** full pill (999px), 56px tall with 28px side padding; small size 48px tall, 22px padding.
- **Book Now (primary):** Logo Sunshine fill, Cocoa label, calendar icon after the label (Messenger icon when it books via Messenger), Book glow shadow.
- **Call (secondary):** Warm White fill, Cocoa label, 2px inset Scrub Tan ring, icon before the label. Also used for Get Directions.
- **Hover / Focus:** lift 2px on a spring curve (Book also scales to 1.02 and deepens to Sunflower; Call's ring turns Cocoa); press scales to 0.98. Focus is a 3px Sky outline, offset 3px, Cocoa on the yellow pill.

### Text Links
Cocoa 600 text with a 2px Scrub Tan underline that turns Sky on hover, preceded by a 20px Sky stroke icon; minimum 44px tall.

### Chips
- **Count chip:** Sand fill, Soft Cocoa 13px text, pill, 4px by 10px. Used only to state a factual count (for example "2 services") beside a group title.

### Cards / Containers
- **Corner Style:** 26px for content panels, 40px for feature panels.
- **Background:** Warm White; Paper where the panel carries white-background imagery.
- **Shadow Strategy:** hairline for content panels, Panel drop plus a Tilted Stack for feature panels.
- **Border:** none; internal rows are divided by 1px Sand Line.
- **Internal Padding:** 32px (24px on phones); feature panels 24 to 48px fluid.

### Navigation
A floating Warm White pill bar, 72px tall (60px on phones), carrying the unaltered clinic logo at left and Soft Cocoa 15px links that fill with Sand on hover, ending in a small Book Now pill. Below 1080px only the logo and Book Now remain. On phones a fixed bottom bar (Warm White at 97%, Deep Sand top hairline) holds Tap to call and Book Now side by side.

### Service Row
A service name (Title Small), one plain sentence in Soft Cocoa, and its own small Book Now pill at the right, separated by Sand Line rules inside a group panel. On narrow phones the pill drops below the text.

### Smile Tiles (signature)
Small real close-ups (3:2, 12px radius, never shown above their native size, max 200px) inside a white panel, each captioned with its stage word over its case name. On load the hero pair fans in from a stacked position; on hover tiles swing apart by 2 to 3 degrees on the spring curve; on touch screens they swing once when the panel enters view.

### Named Rules
**The Honest Caption Rule.** Every smile photo is captioned by its case (stage over treatment), and wherever photos of different patients sit together a plain note says so. Never imply one patient's before-and-after.

**The Book Now Everywhere Rule.** Every section, and every service row, offers its own Book Now pill.

### Motion
Two curves: a soft ease-out (`cubic-bezier(0.22, 1, 0.36, 1)`) for reveals and shadows, and a gentle spring (`cubic-bezier(0.34, 1.45, 0.64, 1)`) for buttons and smile tiles. Blocks rise 18px and fade in once on first view (0.8s); content is visible without script. Reduced-motion disables all animation and transitions.

## Do's and Don'ts

### Do:
- **Do** set every page on Sand and lift content onto Warm White rounded panels.
- **Do** use the yellow pill for Book Now and the white tan-ringed pill for Call, Directions and other secondary actions.
- **Do** put one tilted Scrub Tan stack behind a section's feature panel or photo, alternating its tilt direction.
- **Do** use real photographs of the clinic's team, rooms and patients, captioned honestly by case.
- **Do** keep the clinic logo unaltered and place it only on Warm White or Paper.
- **Do** use the one 2px-stroke, 24px-grid line icon set, coloured Sky or Mural Brown.

### Don't:
- **Don't** fill any button or panel with sky blue, and don't use yellow for anything but Book Now.
- **Don't** use a white page ground or the clinical white-and-blue dental look.
- **Don't** use stock photography, illustrations of teeth, or drawn mountains beyond the single ridge line.
- **Don't** caption two different patients' photos as one transformation.
- **Don't** add uppercase eyebrow labels above headings.
- **Don't** enlarge the low-resolution smile close-ups past 200px wide.
