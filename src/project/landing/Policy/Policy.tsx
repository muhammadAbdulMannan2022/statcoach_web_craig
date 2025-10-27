export default function PrivacyPolicy() {
  const privacyData = {
    title: "Privacy Policy",
    effectiveDate: "[insert Date]",
    intro: {
      greeting:
        'Thank you for visiting [Your Website Name] ("we", "our", "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or interact with our website [www.yourwebsite.com] (the "Site").',
    },
    sections: [
      {
        number: 1,
        title: "Information We Collect",
        intro: "We may collect the following types of information:",
        items: [
          {
            label: "Personal Information:",
            description:
              "such as your name, email address, phone number, etc. (only when you submit it voluntarily, e.g., through contact forms or account registration).",
          },
          {
            label: "Usage Data:",
            description:
              "including your IP address, browser type, device type, pages visited, time spent on the site, and other analytical data.",
          },
          {
            label: "Cookies and Tracking Technologies:",
            description:
              "we may use cookies to enhance your experience, analyze site traffic, and improve our services.",
          },
        ],
      },
      {
        number: 2,
        title: "How We Use Your Information",
        intro: "We may use your information for the following purposes:",
        items: [
          "To provide and maintain our website.",
          "To respond to your inquiries or provide customer support.",
          "To send you updates, newsletters, or marketing communications (you can opt out).",
          "To analyze and improve the performance and content of our site.",
          "To detect and prevent fraudulent or illegal activity.",
        ],
      },
      {
        number: 3,
        title: "Sharing Your Information",
        intro:
          "We do not sell your personal data. We may share your information with:",
        items: [
          "Service Providers: who assist in operating our site or servicing you.",
          "Legal Authorities: if required by law or to protect our legal rights.",
        ],
      },
      {
        number: 4,
        title: "Your Rights and Choices",
        intro: "You may have the right to:",
        items: [
          "Access the personal data we hold about you.",
          "Request correction or deletion of your data.",
          "Opt out of marketing communications.",
        ],
        footer:
          "To exercise any of these rights, contact us at: [your@email.com]",
      },
      {
        number: 5,
        title: "Security",
        content:
          "We take reasonable precautions to protect your personal information. However, no method of transmission over the Internet is 100% secure.",
      },
      {
        number: 6,
        title: "Third-Party Links",
        content:
          "Our website may contain links to other websites. We are not responsible for their privacy practices or content.",
      },
      {
        number: 7,
        title: "Children's Privacy",
        content:
          "Our services are not directed to children under 13. We do not knowingly collect personal information from children.",
      },
      {
        number: 8,
        title: "Changes to This Privacy Policy",
        content:
          'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date."',
      },
      {
        number: 9,
        title: "Contact Us",
        content:
          "If you have any questions or concerns about this Privacy Policy, please contact us at:",
        footer: "[your@email.com] [Your Address, City, Country]",
      },
    ],
  };

  return (
    <main className="bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#2D8609] text-center md:text-left">
          {privacyData.title}
        </h1>

        {/* Intro */}
        <div className="mb-8 text-sm sm:text-base">
          <p className="font-semibold mb-2">
            Effective Date: {privacyData.effectiveDate}
          </p>
          <p className="leading-relaxed">{privacyData.intro.greeting}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {privacyData.sections.map((section) => (
            <section
              key={section.number}
              className="border-b border-gray-200 pb-6 last:border-none"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                {section.number}. {section.title}
              </h2>

              {section.intro && (
                <p className="text-sm sm:text-base mb-3">{section.intro}</p>
              )}

              {section.items && (
                <ul className="list-disc ml-5 space-y-2 text-sm sm:text-base">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <div>
                          <span className="font-semibold">{item.label}</span>{" "}
                          <span>{item.description}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {section.content && (
                <p className="text-sm sm:text-base mt-2">{section.content}</p>
              )}

              {section.footer && (
                <p className="text-sm sm:text-base mt-3">{section.footer}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
