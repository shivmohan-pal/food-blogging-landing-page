import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] p-20">
      <div className="flex flex-wrap gap-4 justify-between max-w-[1440px] m-auto">
        <Image src={"/images/truck.png"} width={161} height={125} alt="logo" />
        <div className="">
          <h2 className="font-bold text-2xl text-[#0E2368] mb-3">Contact Us</h2>
          <address className="flex flex-col gap-3 text-sm text-[#646874] not-italic">
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton
              <br /> Road, Phartosh Gate near YTM
              <br />
              Market, XYZ-343434
            </p>
            <a href="mailto:example2020@gmail.com">example2020@gmail.com</a>
            <a href="tel:+919044430343">(904) 443-0343 </a>
          </address>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl text-[#0E2368] mb-3">More</h2>
          <div className="flex flex-col gap-3 text-sm text-[#646874]">
            <a href="#">About us</a>
            <a href="#">Products</a>
            <a href="#">Career</a>
            <a href="#">Contact us</a>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl text-[#0E2368] mb-3">
            Social Links
          </h2>
          <div className="flex flex-col justify-between gap-5">
            <div className="flex gap-4 justify-center">
              <a href="#instagram"><Image 
                src={"/instagram-icon.svg"}
                width={21}
                height={21}
                alt="insta logo"
              /></a>
              <a href="#twitter"><Image 
                src={"/twitter-icon.svg"}
                width={21}
                height={21}
                alt="twitter logo"
              /></a>
              <a href="#facebook"><Image 
                src={"/facebook-icon.svg"}
                width={21}
                height={21}
                alt="facebook logo"
              /></a>
            </div>
            <p className="text-sm text-[#646874]">
              &copy;{`${new Date().getFullYear()} Food Truck Example`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
