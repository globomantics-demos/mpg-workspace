function validateEvent(event) {
  return typeof event.id === 'string';
}

module.exports = { validateEvent };
