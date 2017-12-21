import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from "./actions";

describe('reducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
    });
})