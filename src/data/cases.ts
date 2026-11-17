// Real before/after cases, cropped from the clinic's own Facebook before/after posts. Each case is one patient. Titles and notes only restate what the posts say.
// `labelled: true` means the photos already carry their BEFORE / AFTER label from the original post.
import type { ImageMetadata } from 'astro';
import bvBefore from '../assets/images/cases/braces-veneers-before.png';
import bvDuring from '../assets/images/cases/braces-veneers-during.png';
import bvAfter from '../assets/images/cases/braces-veneers-after.png';
import rctBefore from '../assets/images/cases/rct-veneers-before.png';
import rctAfter from '../assets/images/cases/rct-veneers-after.png';
import pfzBefore from '../assets/images/cases/pfz-bridge-before.png';
import pfzAfter from '../assets/images/cases/pfz-bridge-after.png';
import dentureBefore from '../assets/images/cases/flexible-denture-before.png';
import dentureAfter from '../assets/images/cases/flexible-denture-after.png';
import btBefore1 from '../assets/images/cases/braces-transfer-before-1.png';
import btBefore2 from '../assets/images/cases/braces-transfer-before-2.png';
import btOngoing1 from '../assets/images/cases/braces-transfer-ongoing-1.png';
import btOngoing2 from '../assets/images/cases/braces-transfer-ongoing-2.png';

export interface CasePhoto {
  src: ImageMetadata;
  stage: string;
  alt: string;
}
export interface SmileCase {
  id: string;
  title: string;
  treatments: string[];
  note: string;
  labelled: boolean;
  photos: CasePhoto[];
}

export const cases: SmileCase[] = [
  {
    id: 'braces-veneers',
    title: 'Braces and direct veneers',
    treatments: ['Braces', 'Direct veneers'],
    note: 'Straightened with braces, then finished with direct veneers, from 2023 to 2025.',
    labelled: true,
    photos: [
      { src: bvBefore, stage: 'Before, 2023', alt: 'Uneven front teeth before treatment, 2023' },
      { src: bvDuring, stage: 'During, 2024', alt: 'The same teeth with braces fitted, 2024' },
      { src: bvAfter, stage: 'After, 2025', alt: 'Straight, even front teeth after braces and direct veneers, 2025' },
    ],
  },
  {
    id: 'rct-veneers',
    title: 'Root canal treatment with fiber post and direct veneers',
    treatments: ['Root canal therapy', 'Direct veneers'],
    note: 'Broken, discoloured front teeth rebuilt and restored.',
    labelled: true,
    photos: [
      { src: rctBefore, stage: 'Before', alt: 'Broken and discoloured upper front teeth before treatment' },
      { src: rctAfter, stage: 'After', alt: 'Restored, even upper front teeth after root canal treatment and direct veneers' },
    ],
  },
  {
    id: 'pfz-bridge',
    title: 'Old PFM bridge replaced with a PFZ bridge',
    treatments: ['Jacket crowns'],
    note: 'A porcelain-fused-to-zirconia bridge in place of the old porcelain-fused-to-metal one. More teeth show when smiling.',
    labelled: true,
    photos: [
      { src: pfzBefore, stage: 'Before', alt: 'Smile with an old porcelain-fused-to-metal bridge' },
      { src: pfzAfter, stage: 'After', alt: 'Smile with a new porcelain-fused-to-zirconia bridge, showing more teeth' },
    ],
  },
  {
    id: 'flexible-denture',
    title: 'Worn plastic denture replaced with a flexible denture',
    treatments: ['Dentures'],
    note: 'An old, worn-out plastic denture swapped for a flexible one.',
    labelled: true,
    photos: [
      { src: dentureBefore, stage: 'Before', alt: 'Smile with a worn plastic denture' },
      { src: dentureAfter, stage: 'After', alt: 'Smile with a new flexible denture' },
    ],
  },
  {
    id: 'braces-transfer',
    title: 'Braces treatment continued at Dental Heights',
    treatments: ['Braces'],
    note: 'The patient had worn braces from another dentist for six years before continuing treatment with us.',
    labelled: false,
    photos: [
      { src: btBefore1, stage: 'Before', alt: 'Front view of braces before treatment continued at Dental Heights' },
      { src: btBefore2, stage: 'Before', alt: 'Side view of braces with gaps between teeth, before' },
      { src: btOngoing1, stage: 'Ongoing', alt: 'Front view of braces during treatment at Dental Heights' },
      { src: btOngoing2, stage: 'Ongoing', alt: 'Side view of braces with elastic chain during treatment' },
    ],
  },
];
