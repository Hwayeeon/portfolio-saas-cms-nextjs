import { baseURL, home, person, social } from "@/app/resources";
import Link from "next/link";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const navigationMenu = [
  {
    label: "Davidson Rafael",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Work",
    href: "/work",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      <nav className="border rounded-lg p-3 top-3 fixed">
        <ul className="">
          <li className="space-x-4">
            {navigationMenu.map((item) => (
              <Link href={item.href} key={item.href} className="space-x-4">
                {item.label}
              </Link>
            ))}
            {social.map((item) => (
              <Link href={item.link} key={item.name} className="space-x-4">
                {item.name}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}