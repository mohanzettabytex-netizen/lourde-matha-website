import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* MAIN FOOTER */}
      <div className="footer-main container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Lourde Matha </h2>
          <p>
            A nurturing educational institution committed to academic excellence,
            moral values, and holistic student development.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-column">
          <h4>School</h4>
          <a href="/about">About Us</a>
          <a href="/academics">Academics</a>
          <a href="/admissions">Admissions</a>
          <a href="/rules">Rules & Policies</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Bodipatti (Post), Kuralkuttai Pirivu</p>
          <p>Office Hours: 9:00 AM – 4:00 PM</p>
          <p>Phone –  9486616232</p>
          <p>Email:  lmcm.school@gmail.com</p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Lourde Matha Convent Matric Hr. Sec. School.
        All rights reserved.
      </div>

    </footer>
  );
}
