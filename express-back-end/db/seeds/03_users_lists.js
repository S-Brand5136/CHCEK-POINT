exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_lists')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users_lists').insert([
        { user_id: 1, list_title: 'Current', category: 'Stats' },
        { user_id: 1, list_title: 'Backlog', category: 'Stats' },
        { user_id: 1, list_title: 'Completed', category: 'Stats' },
        { user_id: 1, list_title: 'Dropped', category: 'Stats' },

        { user_id: 2, list_title: 'Current', category: 'Stats' },
        { user_id: 2, list_title: 'Backlog', category: 'Stats' },
        { user_id: 2, list_title: 'Completed', category: 'Stats' },
        { user_id: 2, list_title: 'Dropped', category: 'Stats' },

        { user_id: 3, list_title: 'Current', category: 'Stats' },
        { user_id: 3, list_title: 'Backlog', category: 'Stats' },
        { user_id: 3, list_title: 'Completed', category: 'Stats' },
        { user_id: 3, list_title: 'Dropped', category: 'Stats' },
      ]);
    });
};
