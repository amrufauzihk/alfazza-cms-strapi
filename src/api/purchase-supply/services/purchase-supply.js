'use strict';

/**
 * purchase-supply service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::purchase-supply.purchase-supply');
