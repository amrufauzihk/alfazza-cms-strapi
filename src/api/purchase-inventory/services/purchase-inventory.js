'use strict';

/**
 * purchase-inventory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::purchase-inventory.purchase-inventory');
