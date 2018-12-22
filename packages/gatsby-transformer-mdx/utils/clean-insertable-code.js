module.exports = value => {
  if (value && typeof value === 'string') {
    const rows = value
      .split(/\n/)
      .map(
        item =>
          item
            .replace(/^\s+/, '') // remove whitespace from start of string
            .replace(/\s+$/, '') // remove whitespace from end of string
      )
      .filter(Boolean)
      .map(item => `${item}\n`);

    return rows.length ? rows.join('\n') : undefined;
  }
  return undefined;
};
