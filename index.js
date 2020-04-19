
let isMobile = false;
if ("maxTouchPoints" in navigator) {
    isMobile = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
    isMobile = navigator.msMaxTouchPoints > 0;
} else {
    const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
        isMobile = !!mQ.matches;
    } else if ('orientation' in window) {
        isMobile = true; // deprecated, but good fallback
    } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = navigator.userAgent;
        isMobile = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
    }
}

export default isMobile;
