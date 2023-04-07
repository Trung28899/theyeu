// Format: DD/MM/YYYY
export const getDaysSinceDate = (dateString: string) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const [day, month, year] = dateString.split("/");
  const date = new Date(`${year}-${month}-${day}`);
  const currentDate = new Date(); // Get the current date
  const diffDays = Math.round(
    Math.abs((currentDate.valueOf() - date.valueOf()) / oneDay)
  );
  return diffDays;
};

// Format: MM/DD/YYYY
export const getDaysSinceDate2 = (dateString: string) => {
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const date = new Date(dateString); // Parse the input string as a Date object
  const currentDate = new Date(); // Get the current date
  const diffDays = Math.round(
    Math.abs((currentDate.valueOf() - date.valueOf()) / oneDay)
  ); // Calculate the difference in days
  return diffDays;
};
