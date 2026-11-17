// Every clinic detail the site prints lives here. Components read from this file only.
//
// TO FILL IN before launch (search for "REPLACE"):
//   1. url              the production domain (used for the canonical URL and share tags)
//   2. facebookUrl      the clinic's Facebook page address
//   3. messengerUrl     https://m.me/<the same page username>

const address = {
  unit: 'Unit 203, 2nd floor',
  building: 'Iconique Center',
  street: 'Colon St.',
  city: 'Cebu City',
  postalCode: '6000',
  region: 'Cebu',
  country: 'PH',
};

const mapsQuery = `${address.building}, ${address.street}, ${address.city} ${address.postalCode}, Philippines`;

export const site = {
  name: 'Dental Heights',
  tagline: 'Reaching the peak of your confidence, one smile at a time.',
  description:
    'Dental Heights is a dental clinic at Iconique Center, Colon St., Cebu City: check-ups, cleaning, fillings (pasta), braces, implants, veneers, whitening and more. Book Now or call 0927 034 8411.',

  url: 'https://REPLACE-WITH-YOUR-DOMAIN.com',

  address,
  phone: {
    display: '0927 034 8411',
    tel: '+639270348411',
  },
  email: 'dentalheightscompany@gmail.com',

  facebookUrl: 'https://www.facebook.com/REPLACE-WITH-PAGE-USERNAME',
  messengerUrl: 'https://m.me/REPLACE-WITH-PAGE-USERNAME',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,

  // Where every Book Now button goes. "#book" scrolls to the booking options in the Visit section
  // (Messenger, call, email). Point it at a booking form or messengerUrl later if you prefer.
  bookingUrl: '#book',

  hoursNote: 'Message us for clinic hours',
} as const;
