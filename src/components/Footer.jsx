const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400">
              Address: 123 Main Street, City, State Zip
              <br />
              Email: gargabayuliberdimurat@gmail.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold mb-2">Links</h2>
            <ul className="text-gray-400">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold mb-2">Social Media</h2>
            <ul className="flex space-x-4">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 MIAIR3.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
