const SeqModels = require('../../seqModels');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const TagService = {
  async findTag(tagName, { transaction } = {}) {
    const tag = await SeqModels.Tag.findOne({
      attributes: { exclude: ['pinyin'] },
      where: {
        [Op.or]: [
          { id: parseInt(tagName) > -1 ? parseInt(tagName) : -1 },
          { title: tagName },
        ],
      },
      include: [
        {
          model: SeqModels.Event,
          as: 'events',
          required: false,
          include: [{
            as: 'headerImage',
            model: SeqModels.HeaderImage,
            required: false,
          }, {
            as: 'latestAdmittedNews',
            model: SeqModels.News,
            required: false,
          }],
          order: [['updatedAt', 'DESC']],
        },
      ],
      transaction,
    });

    return tag;
  },

  async getTagList({ transaction } = {}) {
    const records = await SeqModels.Tag.findAll({
      include: [
        {
          model: SeqModels.Event,
          as: 'events',
          required: false,
          include: [{
            as: 'headerImage',
            model: SeqModels.HeaderImage,
            required: false,
          }, {
            as: 'latestAdmittedNews',
            model: SeqModels.News,
            required: false,
          }],
          order: [['updatedAt', 'DESC']],
        },
      ],
      transaction,
    });

    return records;
  },
};

module.exports = TagService;
