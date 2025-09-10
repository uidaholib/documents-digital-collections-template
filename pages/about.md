---
title: About
layout: about
permalink: /about.html
# include CollectionBuilder info at bottom
credits: true
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---

{% include feature/jumbotron.html objectid="https://objects.lib.uidaho.edu/iftnc/ifc-image.jpg" %} 

{% include feature/nav-menu.html sections="About the Collection" %} 

## About the Collection

This collection makes reports, studies, presentations, and other documents published by [Intermountain Forestry Cooperative](https://www.intermtnforestcoop.com/) openly available. 
Originally founded in 1980 as the Intermountain Forest Tree Nutrition Cooperative (IFTNC), the Intermountain Forestry Cooperative (IFC) is a research cooperative with members representing federal, state and private forestry organizations. The IFC administration is located in the College of Natural Resources at the University of Idaho, and is governed by a steering committee composed of one representative from each member organization.

{% capture text %}
IFC is committed to developing forest management practices that best meet members ecological, economic and regulatory objectives. The cooperative administers, develops and distributes forest management information derived from over 500 monitoring installations established between the east slope of the Cascades to the west slopes of the Rocky Mountains.

IFC research addresses applied forest management questions designed to maintain and improve future forest productivity. Development of best management practices across highly variable site conditions within the intermountain region requires characterization of physiographic features (climate, landform, soil parent material) that affect forest productivity. Across the range of intermountain site conditions, IFC investigates the effectiveness of regeneration and intermediate stand treatments on maintaining and enhancing forest productivity, and studies the impacts of various management practices on long-term forest stand development and growth.
{% endcapture %}
{% include feature/blockquote.html text=text link="https://web.archive.org/web/20250524060805/https://www.uidaho.edu/cnr/intermountain-forestry-cooperative" source="Intermountain Forestry Cooperative" %}{:.my-5}

{% include feature/image.html objectid="https://objects.lib.uidaho.edu/iftnc/ifc-research-locations.jpg" alt="north west US map with many dots marking research locations" caption="Intermountain Forestry Cooperative research locations across the Northwest" link="https://www.uidaho.edu/cnr/intermountain-forestry-cooperative" width="50" %}
