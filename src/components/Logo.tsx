import './BrandIdentity.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const widths = { sm: 190, md: 290, lg: 420 };

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const useTagline = size !== 'sm';
  return (
    <span className={'logo-lockup brand-current ' + className}>
      <img
        className='brand-current-img'
        src={useTagline
          ? 'https://www.theartificialbridge.com/brandAssets/svg/lockup-horizontal-tagline-white.svg'
          : 'https://www.theartificialbridge.com/brandAssets/svg/lockup-horizontal-white.svg'}
        alt='artificialBRIDGE'
        width={widths[size]}
      />
    </span>
  );
}