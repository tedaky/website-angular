import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata
} from '@angular/animations';

/**
 * Animations for `prompt-update`
 */
export const promptUpdateAnimations: AnimationTriggerMetadata[] = [
  trigger('openClose', [
    transition(':enter', [
      style({
        'opacity': 0,
        'transform': 'scale(0.8)'
      }),
      animate('100ms', style({
        'opacity': 1,
        'transform': 'scale(1)'
      }))
    ]),
    transition(':leave', [
      style({
        'opacity': 1,
        'transform': 'scale(1)'
      }),
      animate('100ms', style({
        'opacity': 0,
        'transform': 'scale(0.8)'
      }))
    ])
  ])
];
