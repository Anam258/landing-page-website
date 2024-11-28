import { companyLinks, supportLinks, socialIcons } from './FooterData';
import FooterLinkSection from './FooterLinkSection';
import NewsletterSection from './NewsLetterSection.jsx';

export default function Footer() {
  return (
    <div className="flex flex-wrap gap-10 px-10 py-8 bg-gray-800 text-slate-100 max-md:gap-5 max-md:px-5">
      {/* Company Logo and Info */}
      <div className="flex flex-col items-start min-w-[240px] w-full md:w-[350px]">
        {/* Logo Section */}
        <div className="flex gap-2.5 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/afe336cc16b84f5e88f05eaaebfef4fd/d55a773763833d64462c8a3dcdc6b7703a49c67b25d55c034282e91f9756eccf?apiKey=afe336cc16b84f5e88f05eaaebfef4fd&"
            alt="Company logo icon"
            className="object-contain w-10"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/afe336cc16b84f5e88f05eaaebfef4fd/72c42506fb918aeeea1ef906eee0d51fd32012956b9a18b75b8f535c82dd29de?apiKey=afe336cc16b84f5e88f05eaaebfef4fd&"
            alt="Company logo text"
            className="object-contain w-[120px] max-md:w-[90px]"
          />
        </div>

        {/* Copyright Info */}
        <div className="flex flex-col items-start mt-8 text-sm text-center md:text-left">
          <div>Copyright © 2020 Nexcent ltd.</div>
          <div className="mt-2">All rights reserved</div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6">
          {socialIcons.map((icon, index) => (
            <a href="#" key={index} tabIndex="0">
              <img
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className="object-contain w-6 hover:opacity-75"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Links and Newsletter */}
      <div className="flex flex-wrap gap-8 w-full md:gap-12 md:justify-between">
        {/* Company Links */}
        <FooterLinkSection title="Company" links={companyLinks} />
        {/* Support Links */}
        <FooterLinkSection title="Support" links={supportLinks} />
        {/* Newsletter Section */}
        <NewsletterSection />
      </div>
    </div>
  );
}
