import { footerLinks } from "../variables";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop:{" "}
            <span className="text-blue underline">Find an Apple Store </span>
            or <span className="text-blue underline">other retailer</span> near
            you.
          </p>
          <p className="text-xs font-semibold text-gray">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="my-5 h-[1px] w-full bg-neutral-700" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>

          <div className="flex max-md:mt-3">
            {footerLinks.map((link, i) => (
              <div key={link} className="flex items-center">
                <p className="text-xs font-semibold text-gray hover:cursor-pointer hover:text-blue">
                  {link}{" "}
                </p>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-3"> | </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
