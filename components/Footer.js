import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <Image src="/logo.svg" alt="" />
      <div>Ⓒ2022 Stag Investments</div>
    </div>
  );
};

export default Footer;
