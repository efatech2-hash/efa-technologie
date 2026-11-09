import Image from 'next/image';
import placeholders from '../../data/imagePlaceholders.json';

interface PhareGardeProps {
  className?: string;
  alt?: string;
  fill?: boolean;
}

export default function PhareGarde({
  className = 'w-full h-full object-cover',
  alt = 'Application EFA GARDE : Pharmacies de garde à Lomé',
  fill = true,
}: PhareGardeProps) {
  return (
    <Image
      src="/images/phare-garde.webp"
      alt={alt}
      width={800}
      height={450}
      format="webp"
      quality={75}
      loading="lazy"
      placeholder="blur"
      blurDataURL={placeholders['phare-garde.webp']}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
      fill={fill}
    />
  );
}
