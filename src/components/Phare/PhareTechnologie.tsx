import Image from 'next/image';
import placeholders from '../../data/imagePlaceholders.json';

interface PhareTechnologieProps {
  className?: string;
  alt?: string;
  fill?: boolean;
}

export default function PhareTechnologie({
  className = 'w-full h-full object-cover',
  alt = 'Locaux EFA TECHNOLOGIE Lomé Togo',
  fill = true,
}: PhareTechnologieProps) {
  return (
    <Image
      src="/images/phare-technologie.webp"
      alt={alt}
      width={800}
      height={450}
      format="webp"
      quality={75}
      loading="lazy"
      placeholder="blur"
      blurDataURL={placeholders['phare-technologie.webp']}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
      fill={fill}
    />
  );
}
