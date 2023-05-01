
const CalculateAge = (birthday) => {
    let today = new Date(),
    //birthay has 'Dec 25 1998'
    dob = new Date(birthday),
    //difference in milliseconds
    diff = today.getTime() - dob.getTime(),
    //convert milliseconds into years
    years = Math.floor(diff / 31556736000),
    //1 day has 86400000 milliseconds
    days_diff= Math.floor((diff % 31556736000) / 86400000),
    //1 month has 30.4167 days
    months = Math.floor(days_diff / 30.4167),
    days = Math.floor(days_diff % 30.4167);
   
   return (
     <>
     <h1>{years} <span>years</span></h1>
     <h1>{months} <span>months</span></h1>
     <h1>{days} <span>days</span></h1>
     </>
   );
}


export default CalculateAge
