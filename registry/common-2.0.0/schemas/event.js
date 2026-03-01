function validateEvent(event) {
  return typeof event.id === 'string' && typeof event.venueId === 'string';
}

module.exports = { validateEvent };
