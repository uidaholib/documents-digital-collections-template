---
title: Media Files
layout: page
permalink: /files.html
---

## Media Files

Use the table below to quickly download files from the collection. Or use a [mass downloader extension](https://alternativeto.net/software/simple-mass-downloader/), [wget](https://www.gnu.org/software/wget/), or another scraping method to scrape files from this collection via this page. 

<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">PDF</th>
        <th scope="col">MP3</th>
      </tr>
    </thead>
    <tbody>
    {% for item in site.data[site.metadata] %}<tr>
        <td><a href="{{ '/items/' | append: item.objectid | append: '.html' | relative_url }}">{{ item.title }}</a></td>
        <td><a href="{{ item.object_location | relative_url }}">PDF</a></td>
        <td>{% if item.audio_location %}<a href="{{ item.audio_location | relative_url }}">MP3</a>{% endif %}</td>
      </tr>{% endfor %}
    </tbody>
</table>