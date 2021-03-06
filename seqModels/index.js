const Auth = require('./Auth');
const Client = require('./Client');
const Critique = require('./Critique');
const Event = require('./Event');
const HeaderImage = require('./HeaderImage');
const News = require('./News');
const Notification = require('./Notification');
const Record = require('./Record');
const Stack = require('./Stack');
const Subscription = require('./Subscription');
const Report = require('./Report');
const ReportNotification = require('./ReportNotification');
const Contact = require('./Contact');
const Tag = require('./Tag');
const EventTag = require('./EventTag');

Event.hasOne(HeaderImage, {
  as: 'headerImage',
  foreignKey: 'eventId',
});

Event.hasMany(Stack, {
  as: 'stacks',
  foreignKey: 'eventId',
  sourceKey: 'id',
});

Event.hasMany(News, {
  foreignKey: 'eventId',
});

Event.belongsToMany(Tag, {
  foreignKey: 'eventId',
  through: EventTag,
});

Event.hasMany(Critique, {
  foreignKey: 'eventId',
});

Event.hasMany(Notification, {
  foreignKey: 'eventId',
});

Event.hasMany(Subscription, {
  foreignKey: 'eventId',
});

Stack.hasMany(News, {
  as: 'news',
  foreignKey: 'stackId',
  sourceKey: 'id',
});

News.belongsTo(Stack, {
  foreignKey: 'stackId',
});

Event.belongsTo(News, {
  as: 'latestAdmittedNews',
  foreignKey: 'latestAdmittedNewsId',
});

Client.hasMany(Record, {
  as: 'records',
  foreignKey: 'owner',
  targetKey: 'id',
});

Client.hasMany(Auth, {
  as: 'auths',
  foreignKey: 'owner',
  targetKey: 'id',
});

Client.hasMany(Subscription, {
  as: 'subscriptions',
  foreignKey: 'subscriber',
  targetKey: 'id',
});

Client.hasMany(Contact, {
  as: 'contacts',
  foreignKey: 'owner',
});

Client.hasMany(Report, {
  as: 'reports',
  foreignKey: 'owner',
});

Record.belongsTo(Client, {
  foreignKey: 'owner',
});

Auth.belongsTo(Client, {
  foreignKey: 'owner',
});

Subscription.belongsTo(Client, {
  foreignKey: 'subscriber',
});

Subscription.hasMany(Contact, {
  foreignKey: 'subscriptionId',
});

Notification.belongsToMany(Report, {
  through: ReportNotification,
  foreignKey: 'notificationId',
});

Notification.belongsTo(Event, {
  foreignKey: 'eventId',
});

Report.belongsToMany(Notification, {
  through: ReportNotification,
  foreignKey: 'reportId',
});

Contact.belongsTo(Auth);

Tag.belongsToMany(Event, {
  foreignKey: 'tagId',
  through: EventTag,
});

module.exports = {
  Auth,
  Client,
  Critique,
  Event,
  HeaderImage,
  News,
  Notification,
  Record,
  Stack,
  Subscription,
  Report,
  ReportNotification,
  Contact,
  Tag,
  EventTag,
};
