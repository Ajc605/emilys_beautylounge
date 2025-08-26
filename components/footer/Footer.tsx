const Footer = () => {
  return (
    <footer>
      <div className="bg-custom-pink p-4 shadow-md flex items-center justify-center space-x-10 w-full text-slate-600">
        <div>
          <p className="font-bold">Address</p>
          <p>5 address line, city, county, postcode</p>
        </div>
        <div>
          <p className="font-bold">Contact Us</p>
          <p>Mobilr Number: 01234567890</p>
        </div>
        <div>
          <p className="font-bold">Opening Hours</p>
          <p>Monday: 09:00 - 17:00</p>
          <p>Tuesday: 09:00 - 17:00</p>
          <p>Wednesday: 09:00 - 17:00</p>
          <p>Thurday: 09:00 - 17:00</p>
          <p>Firday: 09:00 - 17:00</p>
          <p>Saturday: 10:00 - 17:00</p>
          <p>Sunday: closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
