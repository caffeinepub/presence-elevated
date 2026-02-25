# Specification

## Summary
**Goal:** Add a "Timmy & Ricay" attribution to the Survival Guide section and implement a full-screen code entry gate (code: 2112) that blocks site access until the correct code is submitted.

**Planned changes:**
- Update the SurvivalGuideSection heading/byline to read "Timmy & Ricay's Survival Tips" while keeping the five existing tip texts and distressed typewriter styling unchanged
- Add a full-screen overlay gate that appears on first load, styled with the Backrooms/Dreamcore aesthetic (void black background, fluorescent yellow-green accents, monospace font, grain texture)
- The gate displays an "Enter Access Code" prompt with a text input and submit button
- Submitting the correct code "2112" dismisses the gate and reveals the site
- Submitting an incorrect code displays an "ACCESS DENIED" error with a flicker/glitch animation, keeping the gate open
- Store the unlocked state in sessionStorage so the gate does not reappear on page refresh within the same session
- Gate is fully responsive on mobile and desktop

**User-visible outcome:** Visitors must enter the code "2112" to access the site, and the Survival Guide section now credits both Timmy and Ricay as authors.
