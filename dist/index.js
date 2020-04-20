"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isdeviceTouchFriendly() {
    var isMobile = false;
    if (navigator !== null || navigator !== undefined) { }
    if ("maxTouchPoints" in navigator) {
        isMobile = navigator.maxTouchPoints > 0;
    }
    else if ("msMaxTouchPoints" in navigator) {
        if (navigator !== null) {
            isMobile = navigator.msMaxTouchPoints > 0;
        }
    }
    else {
        var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
        if (mQ && mQ.media === "(pointer:coarse)") {
            isMobile = !!mQ.matches;
        }
        else if ('orientation' in window) {
            isMobile = true; // deprecated, but good fallback
        }
        else {
            // Only as a last resort, fall back to user agent sniffing
            var UA = navigator.userAgent;
            isMobile = (/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA));
        }
    }
    return isMobile;
}
exports.isMobile = isdeviceTouchFriendly();
