
  
function Booking () 
{
  return(
  <><div className="container4" id="booking">
    <div className="anime">
      {/* <Image src="crane4.jpg" alt="image of crane" /> */}
    </div>
    <form action="#">

      <h2>Crane Booking</h2>
      <label htmlFor="Name">Name</label>
      <input type="text" required />
      <label htmlFor="mnum">Mobile</label>
      <input type="tel" required />
      <label htmlFor="from">Location</label>
      <input type="text" required placeholder=" Enter Work Location" />
      <label htmlFor="work">WorkType</label>
      <input type="text" placeholder="Enter type of work" />
      <center><button type="submit">Book Crane</button></center>
    </form>
  </div></>
  );
}

export default Booking;