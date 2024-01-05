'use strict';

module.exports = {
  async templates(ctx, next) {
    // const api = strapi.api.email;
    // const controllers = api.controllers.email;

    const raw = ctx.query["raw"] === "true";

    let templates = await strapi.plugin("email-designer").service("template").findMany();

    if (raw)
      return templates;

    return templates.map(({id, templateReferenceId, name, subject, bodyHtml, bodyText, updatedAt}) => ({ id:id, ref:templateReferenceId, name:name, subject:subject, html:bodyHtml, text:bodyText, updated:updatedAt }));
  },
};
