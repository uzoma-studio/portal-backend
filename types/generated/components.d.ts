import type { Schema, Attribute } from '@strapi/strapi';

export interface ArchiveArchive extends Schema.Component {
  collectionName: 'components_archive_archives';
  info: {
    displayName: 'Archive';
  };
  attributes: {
    archive: Attribute.Relation<
      'archive.archive',
      'oneToOne',
      'api::archive.archive'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'archive.archive': ArchiveArchive;
    }
  }
}
