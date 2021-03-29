export default {
  formatDateTime(value) {
    if (!Date.parse(value)) {
      return ""
    }
    const localeStringoptions = {
      month: "short",
    };
    const registeredDate = new Date(value);

    const month = registeredDate.toLocaleString("en-GB", localeStringoptions);
    const day = registeredDate.getDate();
    const year = registeredDate.getFullYear();
  
    return `${day} ${month} ${year}`;
  },
};
