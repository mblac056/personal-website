import { FC } from "react";

const LayoutFooter: FC = () => {
  return (
    <footer className="bg-gray-100 py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
          <div className="flex flex-col space-y-2">
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Branding</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Design</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Marketing</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Advertisement</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
          <div className="flex flex-col space-y-2">
            <a className="text-gray-600 hover:text-gray-900 hover:underline">About us</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Contact</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Jobs</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Press kit</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Social</h3>
          <div className="flex flex-col space-y-2">
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Twitter</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Instagram</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Facebook</a>
            <a className="text-gray-600 hover:text-gray-900 hover:underline">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
