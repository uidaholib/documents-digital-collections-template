---
# create lunr store for search page
---
{%- assign items = site.data.cdm_reference_urls -%}
{%- assign fields = site.data.config-search -%}
var store = [ 
{%- for item in items -%} 
{  
{% for f in fields %}{% if item[f.field] %}{{ f.field | jsonify }}: {{ item[f.field] | normalize_whitespace | replace: '""','"' | remove: 'https://digital.lib.uidaho.edu/cdm/ref/' | jsonify }},{% endif %}{% endfor %} 
"id": {{ item.item_page_url | jsonify }}

}{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
