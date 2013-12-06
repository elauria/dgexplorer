dgexplorer
==========

Discogs Explorer

This tool allows you to explore discogs in a faster way. As of now it will generate youtube playlist from seller and record label catalogs, per page.

Problems to solve:
* A release could be missed if its embedded video doesn't exist anymore. Such video will be added to the playlist and we won't be able to tell which release it is from.
* For a release with embedded videos, any track that has no video on that embedded playlist would be missed.
* Version mismatch as in discogs.
* Repetition of videos if releases in catalog are repeated but in different pages
