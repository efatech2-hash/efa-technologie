import Image from 'next/image';
import placeholders from '../../data/imagePlaceholders.json';

interface PhareSuiteProps {
  className?: string;
  alt?: string;
  fill?: boolean;
}

export default function PhareSuite({
  className = 'w-full h-full object-cover',
  alt = 'Application EFA SUITE : Facture certifiée OTR et EFA Mon prix',
  fill = true,
}: PhareSuiteProps) {
  return (
    <Image
      src="/images/phare-suite.webp"
      alt={alt}
      width={800}
      height={450}
      format="webp"
      quality={75}
      loading="lazy"
      placeholder="blur"
      blurDataURL={placeholders['phare-suite.webp']}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
      fill={fill}
    />
  );
}
