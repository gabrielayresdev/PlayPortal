class Format {
  static getYear(fullDate) {
    const date = new Date(fullDate);
    return date.getFullYear();
  }
}

export default Format;
