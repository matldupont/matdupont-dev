# Audit improvements

## Accessibility

I only seem to have one glaring a11y issue, so I'll knock that one out right away.

```
<html> element does not have a [lang] attribute
```

The problem here is that I'm not telling the browser that my copy is in English. This leaves a screen reader to try going through my site in whatever language is set in a user's screen reader.

I'm not sure if or when I'll tackle an internationalization (i18n) for the site, but for now it's a matter of setting this in my _`/src/index.html`_

```html
<html lang="en" class="h-full bg-red-300 dark:bg-red-900"></html>
```

I can test this change by running another audit from my dev server. I'm not currently concerned with the Performance score, so I don't have to go through the trouble of redeploying with every change just yet.

Sweet.

![100% Accessibility Audit](a11y-100.png)

I'll reiterate that this doesn't necessarily mean my site is completely accessible to all users. I just don't have any super obvious issues.
