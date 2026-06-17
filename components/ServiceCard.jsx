'use client';

import { useRouter } from 'next/navigation';

export default function ServiceCard({ title, description, link, image }) {
  const router = useRouter();

  return (
    <div
      className="position-relative overflow-hidden rounded-3"
      onClick={() => router.push(link)}
      style={{
        height: '420px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.35)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* READ MORE badge */}
      <span
        className="position-absolute text-decoration-none"
        style={{
          top: '18px',
          left: '18px',
          backgroundColor: '#ff6b35',
          color: '#fff',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '0.8px',
          padding: '9px 22px',
          borderRadius: '50px',
          zIndex: 2
        }}
      >
        READ MORE
      </span>

      {/* Bottom gradient overlay with text */}
      <div
        className="position-absolute bottom-0 start-0 end-0 p-4"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)'
        }}
      >
        <h4 className="text-white fw-bold mb-2">
          {title}
        </h4>
        <p
          className="mb-0"
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: '0.92rem',
            lineHeight: '1.55'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
