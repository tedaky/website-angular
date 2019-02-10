import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
  AnimationTransitionMetadata
} from '@angular/animations';

/**
 * The Enter Transition
 */
const enter: AnimationTransitionMetadata =
  transition(':enter', [
    style({
      'opacity': 0,
      'transform': 'scale(0.8)'
    }),
    animate('100ms', style({
      'opacity': 1,
      'transform': 'scale(1)'
    }))
  ]);

/**
 * The Leave Transition
 */
const leave: AnimationTransitionMetadata =
  transition(':leave', [
    style({
      'opacity': 1,
      'transform': 'scale(1)'
    }),
    animate('100ms', style({
      'opacity': 0,
      'transform': 'scale(0.8)'
    }))
  ]);

/**
 * Animations for `prompt-update`
 */
export const promptUpdateAnimations: AnimationTriggerMetadata[] = [
  trigger('openClose', [
    enter,
    leave
  ])
];
