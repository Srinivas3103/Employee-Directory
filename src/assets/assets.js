export const employees_list = [
  {
    "name": "Bethany Gilbert",
    "email": "Bethany@gmail.com",
    "role": "Intern Engineer",
    "department": "Engineering",
    "id": 100
  },
  {
    "name": "Velma Carlson",
    "email": "Velma@gmail.com",
    "role": "Software Engineer",
    "department": "Engineering",
    "id": 102
  },
  {
    "name": "Dylan Gray",
    "email": "Dylan@gmail.com",
    "role": "Lead Engineer",
    "department": "Engineering",
    "id": 104
  },
  {
    "name": "Scott Perry",
    "email": "Scott@gmail.com",
    "role": "Accountant",
    "department": "Finance",
    "id": 106
  },
  {
    "name": "Tana Talley",
    "email": "Tana@gmail.com",
    "role": "Finance Manager",
    "department": "Finance",
    "id": 108
  },
  {
    "name": "Margaret Stuart",
    "email": "Margaret@gmail.com",
    "role": "Intern Accountant",
    "department": "Finance",
    "id": 110
  },
  {
    "name": "William Cohen",
    "email": "William@gmail.com",
    "role": "Lawyer",
    "department": "Legal",
    "id": 112
  },
  {
    "name": "Carl Farmer",
    "email": "Carl@gmail.com",
    "role": "Legal Team Lead",
    "department": "Legal",
    "id": 114
  },
  {
    "name": "Renee Morrison",
    "email": "Renee@gmail.com",
    "role": "Lawyer",
    "department": "Legal",
    "id": 116
  },
  {
    "name": "Ronan Jackson",
    "email": "Ronan@gmail.com",
    "role": "Sales Lead",
    "department": "Sales",
    "id": 118
  },
  {
    "name": "Sonia Pearson",
    "email": "Sonia@gmail.com",
    "role": "Salesperson",
    "department": "Sales",
    "id": 120
  },
  {
    "name": "David Chen",
    "email": "David@gmail.com",
    "role": "Salesperson",
    "department": "Sales",
    "id": 122
  },
  {
    "name": "Ted Erickson",
    "email": "Ted@gmail.com",
    "role": "Salesperson",
    "department": "Sales",
    "id": 124
  },
  {
    "name": "Kevin Whitney",
    "email": "Kevin@gmail.com",
    "role": "Lead Engineer",
    "department": "Engineering",
    "id": 126
  },
  {
    "name": "George Martinez",
    "email": "George@gmail.com",
    "role": "Software Engineer",
    "department": "Engineering",
    "id": 128
  },
  {
    "name": "Tamara Wade",
    "email": "Tamara@gmail.com",
    "role": "Finance Manager",
    "department": "Finance",
    "id": 130
  },
  {
    "name": "Helen Wilkins",
    "email": "Helen@gmail.com",
    "role": "Accountant",
    "department": "Finance",
    "id": 132
  },
  {
    "name": "Travis Daugherty",
    "email": "Travis@gmail.com",
    "role": "Sales Lead",
    "department": "Sales",
    "id": 134
  },
  {
    "name": "Alexander Morrow",
    "email": "Alexander@gmail.com",
    "role": "Legal Team Lead",
    "department": "Legal",
    "id": 136
  },
  {
    "name": "Jeanette Porter",
    "email": "Jeanette@gmail.com",
    "role": "Lawyer",
    "department": "Legal",
    "id": 138
  },
  // 79 more dummy employees with realistic names
  ...[
    "Ava Smith", "Liam Johnson", "Olivia Williams", "Noah Brown", "Emma Jones", "Oliver Garcia", "Charlotte Miller", "Elijah Davis", "Amelia Rodriguez", "James Martinez",
    "Sophia Hernandez", "Benjamin Lopez", "Isabella Gonzalez", "Lucas Wilson", "Mia Anderson", "Mason Thomas", "Harper Taylor", "Ethan Moore", "Evelyn Jackson", "Logan Martin",
    "Abigail Lee", "Jacob Perez", "Ella Thompson", "Jackson White", "Scarlett Harris", "Aiden Sanchez", "Grace Clark", "Sebastian Ramirez", "Chloe Lewis", "Jack Robinson",
    "Lily Walker", "Henry Young", "Zoe Allen", "Owen King", "Penelope Wright", "Samuel Scott", "Layla Torres", "Matthew Nguyen", "Riley Hill", "Wyatt Flores",
    "Victoria Green", "Carter Adams", "Hannah Nelson", "Julian Baker", "Aria Hall", "Luke Rivera", "Ellie Campbell", "Grayson Mitchell", "Nora Carter", "Levi Roberts",
    "Hazel Gomez", "Isaac Phillips", "Aurora Evans", "Gabriel Turner", "Violet Diaz", "Julian Parker", "Savannah Cruz", "David Edwards", "Brooklyn Collins", "John Stewart",
    "Paisley Morris", "Anthony Rogers", "Skylar Reed", "Dylan Cook", "Claire Morgan", "Lincoln Bell", "Lucy Murphy", "Ezra Bailey", "Anna Cooper", "Thomas Richardson",
    "Stella Cox", "Charles Howard", "Natalie Ward", "Christopher Brooks", "Addison Watson", "Jaxon Peterson", "Leah Gray", "Maverick James", "Audrey Hughes", "Josiah Price",
  ].map((fullName, i) => {
    const id = 140 + i * 2;
    const departments = ["Engineering", "Finance", "Legal", "Sales"];
    const roles = [
      "Intern Engineer", "Software Engineer", "Lead Engineer",
      "Accountant", "Finance Manager", "Intern Accountant",
      "Lawyer", "Legal Team Lead", "Sales Lead", "Salesperson"
    ];
    const department = departments[i % departments.length];
    const role = roles[i % roles.length];
    const [firstName, lastName] = fullName.split(" ");
    return {
      name: fullName,
      email: `${firstName ? firstName.toLowerCase() : ''}${lastName ? lastName.toLowerCase() : ''}@gmail.com`,
      role,
      department,
      id
    };
  })
];
