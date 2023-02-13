// ==UserScript==
// @name         Unity Answers Anonymous Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces "$$anonymous$$" occurences with "hi"
// @author       You
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @match        https://answers.unity.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // All paragraphs
    var elements1 = document.getElementsByTagName('p');
    [].forEach.call(elements1, (item) => {
        let text = item.innerHTML;
        if (text.includes("$$anonymous$$")) {
            item.innerHTML = text.replaceAll("$$anonymous$$", "hi");
        }
    });

})();
