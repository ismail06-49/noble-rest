import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.jpeg";
import { CircleCheckBig } from 'lucide-react';


export default function Home() {
  return (
    <div className="bg-white">
      <nav className="flex flex-row items-center justify-between p-4 bg-gray-800">
        <h1 className="text-amber-300">Noble Rest</h1>
        <ul className="flex flex-row items-center gap-4">
          <li><Link className="text-amber-200" href="/">Home</Link></li>
          <li><Link className="text-amber-200" href="/about">About</Link></li>
          <li><Link className="text-amber-200" href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main className="">
        <div className="discription p-8 flex flex-row items-center justify-around mt-8">
          <div className="p-4 flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold text-green-800">Luxury comfort for every night</h2>
            <h2 className="text-green-600 mt-2">Premium sleep solutions designed for modern living.</h2>
            <p className="text-gray-700">
              Noble Rest combines thoughtful design with quality materials to deliver durable mattresses and bedding that support better rest. Enjoy reliable comfort, elegant style, and exceptional value with every purchase.
            </p>
            <ul className="list-inside text-gray-700 mt-4">
              <li><CircleCheckBig className="inline-block mr-2" /> Handcrafted with premium materials</li>
              <li><CircleCheckBig className="inline-block mr-2" /> Engineered for optimal comfort and support</li>
              <li><CircleCheckBig className="inline-block mr-2" /> Available in a variety of styles and sizes</li>
            </ul>
            <div className="flex flex-row gap-4 mt-6">
              <Link href="/contact" className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 font-semibold">+212 688101051</Link>
              <a href="mailto:info@noblerest.com" className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 font-semibold">zouhir.elkhssimi@icloud.com</a>
            </div>
          </div>
          <Image className="rounded-full border-amber-300" width={400} src={logo} alt="Noble Rest Logo" />
        </div>

        <div className="bg-gray-100 p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
              <a href="mailto:info@noblerest.com" className="text-green-600 hover:text-green-800">info@noblerest.com</a>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
              <a href="tel:+1234567890" className="text-green-600 hover:text-green-800">+1 (234) 567-890</a>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
              <p className="text-gray-700">123 Comfort Lane<br />Sleep City, SC 12345</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
