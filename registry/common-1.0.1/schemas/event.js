function validateEvent(event) {
  if (typeof event.id !== 'string') {
    return false;
  }

  return true;
}

module.exports = { validateEvent };
