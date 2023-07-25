export const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "MockedKarl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "MockedCecilia",
      lastName: "Ratorez",
      age: 34,
    },
    todayScore: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
];

export const USER_ACTIVITY = {
  data: {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 60,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 70,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 72,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390,
      },
    ],
  }
}



export const USER_AVERAGE_SESSIONS = {
  data: {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 60,
      },
      {
        day: 2,
        sessionLength: 35,
      },
      {
        day: 3,
        sessionLength: 28,
      },
      {
        day: 4,
        sessionLength: 60,
      },
      {
        day: 5,
        sessionLength: 20,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  }
}

export const USER_PERFORMANCE = {
  data: {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 130,
        kind: 2,
      },
      {
        value: 200,
        kind: 3,
      },
      {
        value: 90,
        kind: 4,
      },
      {
        value: 150,
        kind: 5,
      },
      {
        value: 105,
        kind: 6,
      },
    ],
  },
}


export const USER = {
  data: {
    id: 12,
    userInfos: {
      firstName: "MockedKarl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.88,
    keyData: {
      calorieCount: 1500,
      proteinCount: 200,
      carbohydrateCount: 210,
      lipidCount: 80,
    },
  }
}