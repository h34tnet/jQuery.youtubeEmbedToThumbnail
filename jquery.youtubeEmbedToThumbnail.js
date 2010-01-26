/*
 * youtubeEmbedToThumbnail
 * ----------
 *
 * Replaces embedded youtube videos with the appropriate thumbnails
 * 
 * Project home: http://github.com/schnalle/jQuery.youtubeEmbedToThumbnail
 *
 */

(function($) {
    function replaceYTEmbed($object, opts) {
        var $embed    = $object.children('EMBED');
        var src       = $embed.attr('src');
        var ytIdMatch = src.match(/^http:\/\/www.youtube.com\/v\/(.*?)&/);
        
        if (ytIdMatch !== null && ytIdMatch.length >= 2) {
            var ytId = ytIdMatch[1];

            $object.wrap('<div id="ytembed_' + ytId + '"/>');
            
            var $wrapper = $('#ytembed_' + ytId),
                html     = $wrapper.html();

            $wrapper.replaceWith('<img id="ytembedtn_' + ytId + '" class="' + opts.cssClass + '" src="http://img.youtube.com/vi/' + ytId + '/' + (opts.big ? '0' : 'default' ) + '.jpg"/>');
            $img = $('#ytembedtn_' + ytId);

            $img.click(function () { $img.replaceWith(html); });
        }
        
    }

    $.youtubeEmbedToThumbnail = function($object, opts) {
        replaceYTEmbed($object, opts);
    }

    // jQuery extension
    $.fn.youtubeEmbedToThumbnail = function (params) {
        // options: params overwrite defaults
        var opts = $.extend({}, $.fn.youtubeEmbedToThumbnail.defaultOpts, params);

        // set'em up
        this.each(function () {
            replaceYTEmbed($(this), opts);
        });

        return $;
    }

        // default options
    $.fn.youtubeEmbedToThumbnail.defaultOpts = {
        big: false,
        cssClass: 'ytThumb'

    }
})(jQuery);