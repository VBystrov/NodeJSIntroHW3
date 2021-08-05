class RandomUser {
  constructor(n) {
    this.n = n;
  }

  getUsers() {
    const url = `https://randomuser.me/api/?results=${this.n}`;
    fetch(url)
      .then((data) => data.json())
      .then(({ results: users }) => {
        users
          .map((user) => {
            const name = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;
            const gender = `Gender: ${user.gender}`;
            const birthDateAndAge = `Birth: ${new Date(
              user.dob.date
            ).toLocaleDateString([])}, ${user.dob.age} years old`;
            const location = `Location: ${user.location.country}, ${user.location.state}, ${user.location.city}, ${user.location.street.name}`;
            const phones = `Cell: ${user.cell}, phone: ${user.phone} `;
            const output = [
              name,
              gender,
              birthDateAndAge,
              location,
              phones,
            ].join("\n");
            return output;
          })
          .forEach((userInfo) => {
            console.log(userInfo);
          });
      });
  }
}

const n = 10;
const randomUsers = new RandomUser(n);
randomUsers.getUsers();
