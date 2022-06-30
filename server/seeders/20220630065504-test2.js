"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let datas = [];
    for (let i = 6; i <= 17; i++) {
      let obj = {
        title: `dummy data title ${i}`,
        user_id: i,
        content: `dummy data post ${i}
        What Is a Blockchain?
A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.`,
      };
      datas.push(obj);
    }
    return queryInterface.bulkInsert("Boards", datas, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
