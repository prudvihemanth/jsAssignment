/**
 * @file pushNotification Routes
 * @description This file defines the routes for Js Assignment
 * @author Pruthvi Hemanth
 */

const Joi = require('joi');
const notes = require('../templates/swaggerNotes');
const customerController = require('../controllers/customerController');

const routes = [
  {
    method: 'POST',
    path: '/v1/Customer/login',
    config: {
      description: 'Api service for login into application.',
      notes: notes.usersRegister,
      tags: ['api'],
      validate: {
        payload: {
          email: Joi.string().email().lowercase().required()
            .label('Email'),
          password: Joi.string().required()
            .label('Password'),
        },
      },
    },
    handler: customerController.login,
  },

  {
    method: 'POST',
    path: '/v1/Customer/createCustomer',
    config: {
      description: 'Api service to create a customer.',
      notes: notes.usersRegister,
      tags: ['api'],
      validate: {
        payload: {
          firstName: Joi.string().required(),
          lastName: Joi.string().required(),
          dob: Joi.string().required(),
          gender: Joi.string().required(),
          lifetime: Joi.number().required(),
        },
      },
    },
    handler: customerController.createCustomer,
  },


  {
    method: 'GET',
    path: '/v1/Customer/deleteCustomer/{id}',
    config: {
      description: 'Api service to delete a customer.',
      notes: notes.usersRegister,
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required(),
        },
      },
    },
    handler: customerController.deleteCustomer,
  },

  {
    method: 'GET',
    path: '/v1/Customer/getAllCustomers',
    config: {
      description: 'Api service to get all customers.',
      notes: 'get user detailss',
      tags: ['api'],
      validate: {
        params: {},
      },
    },
    handler: customerController.getallCustomers,
  },

  {
    method: 'POST',
    path: '/v1/Customer/updateCustomer',
    config: {
      description: 'Api service to update customer details.',
      notes: 'Api service used to update user details.',
      tags: ['api'],
      validate: {
        payload: {
          id: Joi.string(),
          firstName: Joi.string(),
          lastName: Joi.string(),
          dob: Joi.string(),
          gender: Joi.string(),
          lifetime: Joi.number(),
        },
      },
    },
    handler: customerController.updateProfile,
  }];
module.exports = routes;
