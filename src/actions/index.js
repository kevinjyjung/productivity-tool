export const DUMMY_ACTION = 'DUMMY_ACTION';

export function doDummyAction({ dummy }) {
    return {
        type: DUMMY_ACTION,
        dummy,
    };
}

