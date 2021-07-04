exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Pav ',
          password: '123',
          email: 'pav@example.com',
          platforms: 'PS4, PC, Wii',
          bio: 'I like Web Development',
          in_game_usernames: 'mafia3',
          pronoun: 'He/Him',
          birthdate: '1996-02-21',
          timezone: 'UTC-0',
          discord_username: 'pav',
        },
        {
          username: 'Rinne',
          password: '67890',
          email: 'fakerinne@example.com',
          platforms: 'Switch, 3DS, Gameboy',
          bio: 'welcome to my cringe compilation',
          in_game_usernames: 'Rinrin',
          pronoun: 'she/her',
          birthdate: '2000-09-09',
          timezone: 'UTC-8',
          discord_username: 'RINNE#6330',
        },
        {
          username: 'Brandon',
          password: '12345',
          email: 'Brandon.Shemilt@example.com',
          platforms: 'PS4, PC',
          bio: 'Hi',
          in_game_usernames: "DJ Brandy'B",
          pronoun: 'he/him',
          birthdate: '1994-03-20',
          timezone: 'UTC-6',
          discord_username: 'Brandon Shemilt',
        },
      ]);
    });
};
