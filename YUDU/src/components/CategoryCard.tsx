import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  title,
  subtitle,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="img-zoom relative aspect-[3/4] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-8">
          <h3 className="font-[family-name:var(--font-playfair)] text-lg uppercase tracking-[0.15em] text-white">
            {title}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-widest text-white/70">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
