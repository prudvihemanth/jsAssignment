/**
 * @file customerController.js
 * @description This is a class controller
 * @author Pruthvi Hemanth
 */

const Promise = require('bluebird');
Promise.promisifyAll(require('mongoose'));
const CustomerModel = require('../models/customerModel');
const logger = require('../utils/loggerConfig');


/** Class representing a point. */
const customerController = class {
  constructor() {
    this.name = 'prudhvi hemanth';
  }
  /**
       * @static
       * @param {any} req
       * @param {any} reply
       * @returns {string} returns hello world
       */
  static login(req, reply) {
    const email = 'admin@webtrekk.com';
    const password = 'jstest';
    if (req.payload.email === email && req.payload.password === password) {
      reply(true);
    } else {
      reply(false);
    }
  }

  /**
       * @static
       * @param {any} req
       * @param {any} reply
       * @returns {string} returns hello world
       */
  static createCustomer(req, reply) {
    const customerObject = new CustomerModel({
      name: { firstName: req.payload.firstName, lastName: req.payload.lastName }, isdeleted: false, dob: req.payload.dob, gender: req.payload.gender, lifetime: req.payload.lifetime,
    });

    customerObject.save()
      .then(() => {
        reply(true);
      })
      .catch(() => {
        reply(false);
      });
  }


  /**
       * @static
       * @param {any} req
       * @param {any} reply
       * @returns {string} returns hello world
       */

  static getallCustomers(req, reply) {
    CustomerModel.find({ isdeleted: false })
      .then((data) => {
        logger.info('getallCustomers db call is successful');
        reply(data);
      })
      .catch((err) => {
        logger.warn(err);
        reply('hello world');
      });
  }


  /**
       * @static
       * @param {any} req
       * @param {any} reply
       * @returns {string} returns hello world
       */
  static deleteCustomer(req, reply) {
    CustomerModel.findOneAndUpdate({ id: req.params.id }, { $set: { isdeleted: true } }, { new: true })
      .then((data) => {
        logger.info('deletecustomer db call is successful');
        reply(data);
      })
      .catch((err) => {
        logger.warn(err);
        reply('hello world');
      });
  }


  /**
       * @static
       * @param {any} req
       * @param {any} reply
       * @returns {string} returns hello world
       */


  static updateProfile(req, reply) {
    CustomerModel.findOneAndUpdate({ id: req.payload.id }, {
      $set: {
        lastcontact: new Date(), gender: req.payload.gender, dob: req.payload.dob, lifetime: req.payload.lifetime, name: { firstName: req.payload.firstName, lastName: req.payload.lastName },
      },
    }, { new: true })
      .then((data) => {
        logger.info('updateprofile db call is successful');
        reply(data);
      })
      .catch((err) => {
        logger.warn(err);
        reply(err);
      });
  }
};

/**
 * Module representing the plugins.
 * @module plugins
 * @type {Class}
 */
module.exports = customerController;

