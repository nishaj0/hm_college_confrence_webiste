

export default function Background() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'var(--bg-dark)',
            backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(231, 111, 81, 0.05) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(42, 157, 143, 0.05) 0%, transparent 20%),
        radial-gradient(circle at 50% 50%, rgba(233, 196, 106, 0.03) 0%, transparent 50%)
      `,
            overflow: 'hidden'
        }}>
            {/* Organic Shapes */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(231, 111, 81, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                animation: 'float 20s infinite ease-in-out'
            }} />

            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(42, 157, 143, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                animation: 'float 25s infinite ease-in-out reverse'
            }} />

            {/* Grain Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.4,
                pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
            }} />
        </div>
    );
}
