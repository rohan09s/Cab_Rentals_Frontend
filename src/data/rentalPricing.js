export const rentalPricing = {
  Hatchback: {
    name: "Hatchback",
    packages: [
      { duration: "2", hours: 2, kms: 20, price: 900 },
      { duration: "3", hours: 3, kms: 30, price: 1200 },
      { duration: "4", hours: 4, kms: 40, price: 1500 },
      { duration: "8", hours: 8, kms: 80, price: 2600 }
    ],
    extras: {
      perKm: 13,
      perHour: 180
    }
  },
  Sedan: {
    name: "Sedan",
    packages: [
      { duration: "2", hours: 2, kms: 20, price: 1000 },
      { duration: "3", hours: 3, kms: 30, price: 1400 },
      { duration: "4", hours: 4, kms: 40, price: 1700 },
      { duration: "8", hours: 8, kms: 80, price: 3000 }
    ],
    extras: {
      perKm: 14,
      perHour: 200
    }
  },
  "Economy 6-Seater": {
    name: "Economy 6-Seater",
    packages: [
      { duration: "2", hours: 2, kms: 20, price: 1300 },
      { duration: "3", hours: 3, kms: 30, price: 1700 },
      { duration: "4", hours: 4, kms: 40, price: 2100 },
      { duration: "8", hours: 8, kms: 80, price: 3600 }
    ],
    extras: {
      perKm: 17,
      perHour: 250
    }
  },
  "Premium 6-Seater": {
    name: "Premium 6-Seater",
    packages: [
      { duration: "2", hours: 2, kms: 20, price: 1600 },
      { duration: "3", hours: 3, kms: 30, price: 2100 },
      { duration: "4", hours: 4, kms: 40, price: 2600 },
      { duration: "8", hours: 8, kms: 80, price: 4500 }
    ],
    extras: {
      perKm: 20,
      perHour: 300
    }
  }
};
