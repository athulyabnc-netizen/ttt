import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'Contact TT Global | Truck Rental & Logistics Saudi Arabia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function getLogoBase64(): Promise<string> {
  // Try filesystem first (local dev)
  try {
    const buf = await readFile(join(process.cwd(), 'public/images/ttg-logo-white.png'));
    return `data:image/png;base64,${buf.toString('base64')}`;
  } catch {}

  // Fall back to HTTP fetch (Vercel production)
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/images/ttg-logo-white.png`);
  const arrayBuf = await res.arrayBuffer();
  return `data:image/png;base64,${Buffer.from(arrayBuf).toString('base64')}`;
}

export default async function Image() {
  const logoSrc = await getLogoBase64();

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #15306a 0%, #1e3a8a 60%, #0f2050 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 107, 53, 0.12)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 107, 53, 0.08)',
            display: 'flex',
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="TT Global"
          width={320}
          height={120}
          style={{ objectFit: 'contain', marginBottom: '32px' }}
        />

        <div
          style={{
            width: '80px',
            height: '4px',
            background: '#ff6b35',
            borderRadius: '2px',
            marginBottom: '32px',
          }}
        />

        <div
          style={{
            color: 'rgba(255,255,255,0.80)',
            fontSize: '28px',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          Truck Rental &amp; Logistics Services across Saudi Arabia
        </div>
      </div>
    ),
    { ...size }
  );
}
