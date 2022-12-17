export function formatForDatePicker(date) {
  // const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // console.log(date)
  return new Date(date).toLocaleDateString("en-CA");
}
