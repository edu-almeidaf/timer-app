import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

interface NewCycleActionProps {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: { newCycle: Cycle }
}

interface MarkCurrentCycleAsFinishedActionProps {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

interface InterruptCurrentCycleActionProps {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

export type ActionProps =
  | NewCycleActionProps
  | MarkCurrentCycleAsFinishedActionProps
  | InterruptCurrentCycleActionProps

export function addNewCycleAction(newCycle: Cycle): NewCycleActionProps {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedActionProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction(): InterruptCurrentCycleActionProps {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
