module.exports = {
  readFileSync: function() {
    return Buffer.from([]);
  },
  statSync: function() {
    return {
      size: 0,
      isFile: () => true
    };
  },
  existsSync: function() {
    return false;
  },
  readdirSync: function() {
    return [];
  },
  writeFileSync: function() {
    return undefined;
  }
};
