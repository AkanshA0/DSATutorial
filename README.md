# DSA Tutorial
This is a tiny tutorial site providing data structures and algorithms examples and explanations following accessibility guideline/standards (WCAG 2.1).

## Features and compliance
- Semantic landmarks and headings
- Skip link and visible focus styles
- Keyboard support for interactive pieces (details, copy buttons)
- Programmatic labels and status announcements
- Responsive reflow at small widths, usable at 200% zoom
- Minimal ARIA usage

## Accessibility Tests Conducted
- Keyboard only: Tab, Shift+Tab, Enter, Space, Escape; confirm focus styles and keyboard navigation
- Screen reader smoke test (NVDA or VoiceOver): page title, landmarks, headings, link text, labels
- Automated scans using Lighthouse and axe DevTools
- 200% Zoom

# Accessibility Conformance Summary

This site was evaluated against **WCAG 2.1 Level AA** criteria with keyboard-only testing, screen reader test (NVDA), and automated checks (Lighthouse, axe). Findings show conformance with the criteria listed below. The screenshots of tests can be found in [accessibility-tests](./accessibility-tests/).

## WCAG 2.1 AA Results

| Area                    | WCAG 2.1 AA           | Result |
|-------------------------|-----------------------|--------|
| Keyboard access         | 2.1.1, 2.1.2          | Pass   |
| Focus visible           | 2.4.7                 | Pass   |
| Structure and semantics | 1.3.1, 2.4.2, 2.4.6   | Pass   |
| Forms and labels        | 3.3.2, 3.3.1, 2.5.3   | Pass   |
| Status messages         | 4.1.3                 | Pass   |
| Link purpose            | 2.4.4                 | Pass   |
| Bypass blocks(skip link)| 2.4.1                 | Pass   |




