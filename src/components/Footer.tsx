import Logo from "../../public/images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex-col items-center justify-center py-10 gap-4 border-gray-200 bg-white border flex">
      <Image src={Logo} alt="Logo" width={120} />

      <p className="text-slate-500 w-2/3 text-center text-sm font-light">
        © Bahld Epoxy 2024 - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
