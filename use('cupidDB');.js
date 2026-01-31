use('cupidDB');

// create users collection & insert a test user
db.users.insertOne({
  name: "Samiya",
  email: "sam.12.2004.11@gmail.com",
  password: "test123",
  createdAt: new Date()
});

// create feedback collection
db.feedback.insertOne({
  name: "Test User",
  email: "test@mail.com",
  message: "Love Cupid's Cafe 💖",
  createdAt: new Date()
});

