/**
 * TagController
 *
 * @description :: Server-side logic for managing tags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const TagController = {

  findTag: require('./TagController/findTag'),
  getTagList: require('./TagController/getTagList'),
};

module.exports = TagController;
