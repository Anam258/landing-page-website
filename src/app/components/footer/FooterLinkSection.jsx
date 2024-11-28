export default function FooterLinkSection({ title, links }) {
  return (
    <div className="flex overflow-hidden flex-col w-40">
      <div className="text-xl font-semibold leading-snug text-white">
        {title}
      </div>
      <div className="flex overflow-hidden flex-col mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
        {links.map((link, index) => (
          <a 
            href={link.href}
            key={index}
            className={`${index > 0 ? "mt-3" : ""}`}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}