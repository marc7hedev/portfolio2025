export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marco Rangel",
    jobTitle: "Web Developer & Power Platform Specialist",
    url: "https://marco-rangel.com",
    sameAs: [
      "https://github.com/marc7hedev",
      "https://linkedin.com/in/marco-rangel-it"
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Microsoft Power Platform",
      "Power Automate",
      "Power Apps",
      "Power BI",
      "SharePoint",
      "PowerShell"
    ],
    description: "Ingeniero en Sistemas Computacionales especializado en el ecosistema Microsoft Power Platform y Desarrollo Web Full Stack."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
