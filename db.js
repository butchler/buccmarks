persistence.store.websql.config(persistence, 'Buccmarks','A Screenshot Holder Database', 25 * 1024 * 1024);

var Bookmark = persistence.define('Bookmark', {
  chromeId: "INT",
  img: "TEXT"
});
Bookmark.index('id');

persistence.schemaSync();