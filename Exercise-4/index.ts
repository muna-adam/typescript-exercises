

interface User {
  username: string;
  password: string;
  email?: string;
  readonly id: number;
}

function login(user: User): void {
  console.log(`Welcome ${user.username}`);
}


const user1: User = {
  username: "ahmad",
  password: "123",
  id: 123
};

const user2: User = {
  username: "ali",
  password: "456",
  email: "ali@gmail.com",
  id: 456
};


login(user1);
login(user2);


user1.id = 100; 