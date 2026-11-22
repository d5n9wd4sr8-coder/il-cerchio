document.querySelectorAll('[data-back]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    try {
      const previous = new URL(document.referrer);
      if (previous.origin === window.location.origin && window.history.length > 1) {
        event.preventDefault();
        window.history.back();
      }
    } catch (_) {
      // The regular link provides a home fallback without a usable referrer.
    }
  });
});
