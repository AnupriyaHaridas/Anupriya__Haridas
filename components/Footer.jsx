import "@/app/globals.css";

const Footer = () => {
  return (
    <div className="footer bg-footer grid content-center">
        {/* <div className="horizontal-line"></div> */}
        <div className="container my-5 sm:my-8 mx-auto p-8">
            <ul className="footer-ul">
                <li className="">
                    <label>Contact</label>
                    <p>4168373920</p>
                </li>
                <li className="">
                    <label>Email</label>
                    <p>anupriyah9@gmail.com</p>
                </li>
                <li className="">
                    <label>Follow me</label>
                    <p>https://www.linkedin.com/in/anupriya-haridas/</p>
                </li>
                <li className="">
                    <label>Developed by </label>
                    <p>Anupriya Haridas</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer