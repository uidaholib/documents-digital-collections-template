---
title: About
layout: about
permalink: /about.html
# include CollectionBuilder info at bottom
credits: true
# featured-image value can be one objectid for a photo object in this collection, a relative path to an image in this project, or a full url to any image. If left blank, no featured image will appear at top of About page.
about-featured-image: https://objects.lib.uidaho.edu/engrir/fy22_879613372_jp04_0058.jpg
# set background-position for featured image, "center", "top", "bottom"
position: center
# major heading to display over featured image
heading: About the Collection
# paragraph text below heading in featured image
sub-heading: 
# additional padding added to the feature to increase size. Give value in em or px, e.g. "5em".
padding: 6em
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---

## College of Engineering Repository

The College of Engineering Repository preserves and offers access to materials related to the college's regular activities. The collection includes student posters from the annual Engineering Design EXPO, Idaho Asphalt Conference programs, and departmental newsletters.

{% for i in site.data.sub-collections %}
- [{{ i.title }}]({{ i.link | relative_url }})
{% endfor %}

-----

## Engineering Design EXPO

Each spring, the annual [Engineering Design EXPO](https://www.uidaho.edu/engineering/news-events/engineering-expo) welcomes hundreds of students, industry partners, and community members to explore industry-sponsored projects created by U of I College of Engineering students as part of the Interdisciplinary Capstone Design Program.

{% include feature/image.html objectid="https://objects.lib.uidaho.edu/engrir/fy15248_05_5113.jpg;https://objects.lib.uidaho.edu/engrir/fy22_879613372_jp04_0014.jpg" alt="overhead view of large crowd of people browsing through poster and table exhibits at an event;people viewing a poster at an exhibit table" %}

-----

## Idaho Asphalt Conference

The annual [Idaho Asphalt Conference](https://www.uidaho.edu/engineering/news-events/idaho-asphalt-conference) (IAC) brings together professionals, researchers, and students from across the region to discuss key issues related to asphalt. Collected here are programs for conferences since 2015.

{% include feature/image.html objectid="https://objects.lib.uidaho.edu/engrir/idaho-asphalt.png" alt="Idaho Asphalt Conference logo" %}

-----

## Departmental Newsletters

Each department of the College of Engineering regularly produces newsletters that keep alumni, faculty, students, and friends informed of its activities. Topics include student and faculty achievements and major projects involving the department.

{% include feature/image.html objectid="https://objects.lib.uidaho.edu/engrir/small/fy22_785124699_mh02_0028_sm.jpg" width="50" alt="Person viewing items on multiple computer monitors" %}