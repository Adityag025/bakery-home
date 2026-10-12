export const business = {
  name: "[BAKERY NAME]",
  city: "[CITY]",
  streetAddress: "[STREET ADDRESS]",
  postalCode: "[CITY, POSTCODE]",
  year: "[YEAR]",
  email: "[EMAIL ADDRESS]",
  openingHours: "[DAYS & HOURS]",
  orderUrl: null as string | null,
  menuUrl: null as string | null,
  customCakeUrl: null as string | null,
};

export const destinations = {
  order: business.orderUrl ?? "#visit",
  menu: business.menuUrl ?? "#visit",
  customCake: business.customCakeUrl ?? "#visit",
};

