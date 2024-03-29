const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "John",
          email: "john@example.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John2",
          email: "john2@example.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John3",
          email: "john3@example.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async () => {},
};
