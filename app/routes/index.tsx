import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>🎄 Advent of Code 2022</h1>
      <ul>
        <li>
          <Link to="day/one">Day 1</Link>
        </li>
      </ul>
    </div>
  );
}
