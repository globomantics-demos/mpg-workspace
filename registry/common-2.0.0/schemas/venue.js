function validateVenue(venue) {
  return typeof venue.venueId === 'string' && typeof venue.name === 'string';
}

module.exports = { validateVenue };
