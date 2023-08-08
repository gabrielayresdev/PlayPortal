class Format {
  static getYear(fullDate) {
    const date = new Date(fullDate);
    return date.getFullYear();
  }
  static formatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toLocaleDateString("pt-BR");
  }

  static formatRuntime(minutes) {
    const hours = (minutes / 60).toFixed(0);
    const min = minutes % 60;

    return `${hours}h ${min}m`;
  }
}

export default Format;
