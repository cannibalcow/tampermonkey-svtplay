// ==UserScript==
// @name         fixe svtplay subtitle position
// @namespace    https://github.com/cannibalcow/tampermonkey-svtplay
// @version      0.1
// @description  Changes the position of svtplay subtitles
// @author       utbrand(twitter)
// @match        http://www.svtplay.se/*
// @grant        GM_addStyle
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function() {
        GM_addStyle(".svp_captions-container.svp_captions--elevated { bottom: 1%; top: auto}");
    });
})();
