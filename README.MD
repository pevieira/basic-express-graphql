

Sample Queries for this project

```gql
query getUsers {
  user(id: "26") {
    id,
    firstName,
    age,
    company {
      id
      name
      description
    }

  }
}

query getCompanies {
  company(id: "1") {
		...companyDetails,
    users {
      id
      age
      firstName
      company {
        name
      }
    }
  }
}

fragment companyDetails on Company {
    id,
		name,
    description
}

mutation addUser {
  addUser(firstName: "Lucas", age: 5) {
    id
    firstName
    age
  }
}

mutation deleteUser {
  deleteUser(id: "2dbSQnM") {
    id
  }
}

mutation editUser {
  editUser(id: "wDwxY71", firstName: "Lucas2") {
    id
    firstName
  }
}
```