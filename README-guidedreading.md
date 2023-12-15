# Guided Reading Notes

This project contains a custom layout "guided_reading" to create an item page with audio player and a PDF view with page flip (using pdf.js). 
The collection metadata contains a custom field "audio_location" with link to the mp3 file for the item (in addition to the standard "object_location" which contains the pdf link).

**Important note:** due to CORS issues, the pdf.js reader requires the pdf files to be in the same server as the the html files. 
Thus the pdfs for this collection are in /digital/objects/guidedreading/ rather than on libobjects server.
This also means that the reader will not work on your local machine on the dev server.
