# jQuery.faytFilter Plugin

Turns embedded Youtube videos into the appropriate thumbnails. 

Why should you do that? Because if you have a page with *a lot* of embedded videos, loading can slow to a crawl because the flash player needs time to initialize.

## Usage

    $('OBJECT').youtubeEmbedToThumbnail();

## Options

    {
      big:        false,
      cssClass:   'yttn'
    }


big shows bigger thumbnails. the css class will be attached to the thumbnail.

## Source, demo and licence

* The source can be [found here](http://github.com/schnalle/jQuery.fn.faytFilter)
* Licence: [Creative Commons 3.0](http://creativecommons.org/licenses/by/3.0/)