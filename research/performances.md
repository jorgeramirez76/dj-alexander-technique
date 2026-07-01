# Performances — DJ Alexander Technique

## Approach (no fabrication)
Specific past dates are taken **verbatim** from Resident Advisor's event history (#5). Years were
not shown on the profile, so they are marked `Needs verification`. **Upcoming** shows are not
hardcoded — the Shows page renders a live **Bandsintown widget** (#10) so the tour list is always
accurate and owner-controlled, and a JSON fallback is provided for manual/CMS entry.

## Past performances (from RA event history, #5)
| Event | Venue | City | Date | Notes |
|-------|-------|------|------|-------|
| CODA: The Closing Party | Bookies | Detroit | May 26 `year: verify` | Movement-week (Detroit) run |
| Dude Where's My Drum Machine | Exodos Lounge | Detroit | May 25 `year: verify` | |
| The People Mover $10 Party | Corktown Tavern | Detroit | May 24 `year: verify` | |
| Underground Light presents "Aight Bet" | Church | Detroit | May 23 `year: verify` | |
| The Good Times, New York (w/ DJ Sneak) | Eden NYC | New York City | Feb 7 `year: verify` | |

**RA summary facts:** first RA event listing **2007**; most frequently performs in **New York
City, Miami, New Jersey, Detroit, and London** (#5).

## Also referenced by video (venues/festivals where his music was played, not necessarily his sets)
Razzmatazz (Barcelona) — his own set (#4); and his tracks played at Tomorrowland, Ultra Miami,
CRSSD, Time Warp, Movement, Space Miami, Tresor, The Haçienda stream (#4). These are documented on
the Videos page, **not** listed as his gigs.

## Upcoming shows
- **Source of truth:** Bandsintown — https://www.bandsintown.com/a/1208679-dj-alexander-technique
- Site implementation: official Bandsintown widget on the Shows page + `/data/performances.json`
  `upcoming: []` array for manual/CMS additions. **No upcoming dates are invented.**

> **For the site owner:** fill in correct years for the past dates above, and either connect the
> Bandsintown app id or add upcoming shows to `/data/performances.json`.
