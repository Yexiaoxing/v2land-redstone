/**
 * Client.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {
      type: 'text',
      required: true,
      unique: true,
      username: true,
    },

    password: {
      type: 'text',
      required: true,
      password: true,
    },

    events: {
      collection: 'event',
      via: 'subscribers',
    },

    subscriptions: {
      collection: 'subscription',
      via: 'subscriber',
    },

    auths: {
      collection: 'auth',
      via: 'owner',
    },

  },

  types: {
    username: (value) => {
      return _.isString(value) && value.length >= 4;
    },
    password: (value) => {
      return _.isString(value) && value.length >= 6 && value.match(/[a-z]/i) && value.match(/[0-9]/);
    },
  },

};
