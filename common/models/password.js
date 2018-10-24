'use strict';

module.exports = (Password) => {
  /**
 *
 * @param {string} s
 * @param {Function(Error, array)} callback
 */

  Password.search = (s, callback) => {
    const filter = {
      where: {
        or: [
          {
            url: {
              like: s,
            }
          },
          {
            userName: {
              like: s,
            }
          }
        ]
      }
    };

    Password.find(filter, (err, passwords) => {
      callback(null, passwords);
    });
  };
};
