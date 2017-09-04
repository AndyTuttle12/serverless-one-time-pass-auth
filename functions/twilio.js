const twilio = require('twilio');
const twilio_auth = require('./twilio_auth');
const accountSid = twilio_auth.accountSid;
const authToken = twilio_auth.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);
