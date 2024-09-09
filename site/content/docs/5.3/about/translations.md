---
layout: docs
title: Translations
description: Links to community-translated GoTrash Theme documentation sites.
group: about
---

Community members have translated GoTrash Theme's documentation into various languages. None are officially supported and they may not always be up-to-date.

{{< translations.inline >}}
<ul>
{{ range .Site.Data.translations -}}
  <li><a href="{{ .url }}" hreflang="{{ .code }}">{{ .description }} ({{ .name }})</a></li>
{{ end -}}
</ul>
{{< /translations.inline >}}

**We don't help organize or host translations, we just link to them.**

Finished a new or better translation? Open a pull request to add it to our list.
