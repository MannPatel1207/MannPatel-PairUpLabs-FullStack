const createUsers = async () => {
  const users = [];

  for (let i = 1; i <= 10; i++) {
    users.push(
      new User({
        name: `User ${i}`,
        email: `user${i}@example.com`,
        password: "password123",
      })
    );
  }

  try {
    await User.deleteMany(); // clear existing
    await User.insertMany(users);
    console.log("10 users created successfully.");
  } catch (err) {
    console.error("Error creating users:", err);
  } finally {
    mongoose.connection.close();
  }
};