---
title: Subjects
layout: page
permalink: /subjects.html
# Default subject page is configured in "_data/theme.yml"
# leave cloud-fields as "site.data.theme.subjects-fields"
---

## Browse Subjects

Use these word cloud visualizations to browse the featured [Guests](#guests) and [Artists](#artists).
Word size is determined by frequency and all words link to a corresponding collection search.

## Guests

{% include feature/cloud.html fields="guest_author;guest_artist;guest_scientist;guest_fan" %}

## Artists

{% include feature/cloud.html fields="cover_artist;inside_cover_artist;back_artist;badge_artist;button_artist" button="outline-payette-blue" %}
