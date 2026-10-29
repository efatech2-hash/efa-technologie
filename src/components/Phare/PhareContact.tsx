import Image from 'next/image';
import placeholders from '../../data/imagePlaceholders.json';

interface PhareContactProps {
  className?: string;
  alt?: string;
  fill?: boolean;
}

export default function PhareContact({
  className = 'w-full h-full object-cover',
  alt = 'Support Client & Assistance EFA TECHNOLOGIE Lomé',
  fill = true,
}: PhareContactProps) {
  return (
    <Image
      src="/images/phare-contact.webp"
      alt={alt}
      width={800}
      height={450}
      format="webp"
      quality={75}
      loading="lazy"
      placeholder="blur"
      blurDataURL={placeholders['phare-contact.webp']}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
      fill={fill}
    />
  );
}
