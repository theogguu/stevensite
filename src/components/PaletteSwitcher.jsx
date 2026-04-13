import { useState, useRef, useEffect } from 'react';
import { PALETTES } from '../palettes.js';

/**
 * PaletteSwitcher
 *
 * Props:
 *   active   (string)              — currently active palette key
 *   onSwitch (key: string) => void — called when user picks a palette
 *   variant  ('pills'|'dots'|'dropdown') — display style, default 'pills'
 */
export default function PaletteSwitcher({ active, onSwitch, variant = 'pills' }) {
  if (variant === 'dots')     return <DotsSwitcher     active={active} onSwitch={onSwitch} />;
  if (variant === 'dropdown') return <DropdownSwitcher active={active} onSwitch={onSwitch} />;
  return                              <PillsSwitcher   active={active} onSwitch={onSwitch} />;
}

/* ── Pills ───────────────────────────────────────────────── */
function PillsSwitcher({ active, onSwitch }) {
  return (
    <div style={styles.pillsRow}>
      {Object.entries(PALETTES).map(([key, p]) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            onClick={() => onSwitch(key)}
            style={{
              ...styles.pill,
              background:  isActive ? 'var(--card-highlighted)'           : 'var(--card-unhighlighted)',
              border:      `1.5px solid ${isActive ? 'var(--bg-dots)' : 'var(--card-outline-unhighlighted)'}`,
              color:       'var(--text-normal)',
              fontWeight:  isActive ? 600 : 400,
              opacity:     isActive ? 1 : 0.7,
            }}
          >
            <Swatch color={p.swatch} />
            {p.label}
          </button>
        );
      })}
    </div>
  );
}

/* ── Dots ────────────────────────────────────────────────── */
function DotsSwitcher({ active, onSwitch }) {
  return (
    <div style={styles.dotsRow}>
      {Object.entries(PALETTES).map(([key, p]) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            title={p.label}
            onClick={() => onSwitch(key)}
            style={{
              ...styles.dot,
              background:  p.swatch,
              transform:   isActive ? 'scale(1.25)' : 'scale(1)',
              boxShadow:   isActive
                ? `0 0 0 2.5px var(--bg-dark-1), 0 0 0 4px ${p.swatch}`
                : 'none',
            }}
          />
        );
      })}
    </div>
  );
}

/* ── Dropdown ────────────────────────────────────────────── */
function DropdownSwitcher({ active, onSwitch }) {
  const [open, setOpen] = useState(false);
  const ref     = useRef(null);
  const current = PALETTES[active];

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={ref} style={styles.dropdownWrap}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          ...styles.dropdownTrigger,
          background: 'var(--card-unhighlighted)',
          border:     '1.5px solid var(--card-outline-unhighlighted)',
          color:      'var(--text-normal)',
        }}
      >
        <Swatch color={current.swatch} size={11} />
        <span style={{ fontSize: 13, fontWeight: 500 }}>{current.label}</span>
        <Chevron open={open} />
      </button>

      {open && (
        <div
          style={{
            ...styles.dropdownMenu,
            background: 'var(--modal-bg)',
            border:     '1.5px solid var(--card-outline-highlighted)',
          }}
        >
          {Object.entries(PALETTES).map(([key, p]) => {
            const isActive = key === active;
            return (
              <button
                key={key}
                onClick={() => { onSwitch(key); setOpen(false); }}
                style={{
                  ...styles.dropdownItem,
                  background: isActive ? 'var(--card-highlighted)' : 'transparent',
                  color:      'var(--text-normal)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                <Swatch color={p.swatch} size={11} />
                {p.label}
                {isActive && <CheckIcon />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Helpers ─────────────────────────────────────────────── */
function Swatch({ color, size = 10 }) {
  return (
    <span style={{
      width:        size,
      height:       size,
      borderRadius: '50%',
      background:   color,
      display:      'inline-block',
      flexShrink:   0,
    }} />
  );
}

function Chevron({ open }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: 'auto' }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ marginLeft: 'auto' }}>
      <path d="M2.5 6.5l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Styles ──────────────────────────────────────────────── */
const styles = {
  pillsRow: {
    display:     'flex',
    gap:         8,
    flexWrap:    'wrap',
    alignItems:  'center',
  },
  pill: {
    display:        'flex',
    alignItems:     'center',
    gap:            7,
    padding:        '7px 14px',
    borderRadius:   99,
    fontSize:       13,
    cursor:         'pointer',
    transition:     'all 0.2s ease',
    letterSpacing:  '0.01em',
    fontFamily:     'inherit',
  },
  dotsRow: {
    display:    'flex',
    gap:        10,
    alignItems: 'center',
  },
  dot: {
    width:        20,
    height:       20,
    borderRadius: '50%',
    border:       'none',
    cursor:       'pointer',
    transition:   'transform 0.2s ease, box-shadow 0.2s ease',
    padding:      0,
  },
  dropdownWrap: {
    position: 'relative',
    display:  'inline-block',
  },
  dropdownTrigger: {
    display:     'flex',
    alignItems:  'center',
    gap:         8,
    padding:     '7px 12px',
    borderRadius: 10,
    fontSize:    13,
    cursor:      'pointer',
    fontFamily:  'inherit',
    minWidth:    130,
  },
  dropdownMenu: {
    position:      'absolute',
    top:           'calc(100% + 6px)',
    left:          0,
    minWidth:      '100%',
    borderRadius:  12,
    padding:       5,
    zIndex:        50,
    display:       'flex',
    flexDirection: 'column',
    gap:           2,
  },
  dropdownItem: {
    display:     'flex',
    alignItems:  'center',
    gap:         8,
    padding:     '8px 10px',
    borderRadius: 8,
    fontSize:    13,
    cursor:      'pointer',
    border:      'none',
    width:       '100%',
    textAlign:   'left',
    fontFamily:  'inherit',
    transition:  'background 0.15s ease',
  },
};