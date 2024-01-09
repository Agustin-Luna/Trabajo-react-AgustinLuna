section 
const Footer = () => {
    return (
        <footer className="flex justify-between p-4 mt-7 bg-HEX">
        <div className=" text-xl mx-4 text-white font-semibold">
            <span>&copy; 2023 Company, Inc</span>
        </div>
        <div>
            <ul className="flex gap-10 text-2xl mx-4">
                <li><a href="#"><i className="bi bi-twitter text-white hover:text-skyblue-tw transition duration-100"></i></a></li>
                <li><a href="#"><i className="bi bi-instagram text-white hover:text-purple-violet transition duration-300"></i></a></li>
                <li><a href="#"><i className="bi bi-facebook text-white hover:text-blue-face transition duration-300"></i></a></li>
            </ul>
        </div>
        </footer>
    );
    };
export default Footer
