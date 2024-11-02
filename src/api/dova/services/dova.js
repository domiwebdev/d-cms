'use strict';

/**
 * dova service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dova.dova');
