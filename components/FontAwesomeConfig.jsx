"use client";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS automatically
// so Next can manage global CSS correctly and avoid FOUC.
config.autoAddCss = false;

export default function FontAwesomeConfig() {
  return null;
}
