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

    describe('makeGuess', () => {
        it('should add each new guess to guesses array & provide feedback', () => {
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 1
            };

            state = reducer(state, makeGuess(99));
            expect(state.guesses).toEqual([99]);
            expect(state.feedback).toEqual("You're Ice Cold...");

            state = reducer(state, makeGuess(12));
            expect(state.guesses).toEqual([99, 12]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(1));
            expect(state.guesses).toEqual([99, 12, 1]);
            expect(state.feedback).toEqual("You got it!");
        });
    });

    describe('generateAuralUpdate', () => {
        it('should add an aural status to the state', () => {
            let state = {
                guesses: [99, 12, 1],
                auralStatus: '',
                feedback: "You got it!",
                correctAnswer: 1
            };

            state = reducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual(`Here's the status of the game right now: You got it! You've made 3 guesses. In order of most- to least-recent, they are: 1, 12, 99`);
        });
    });
});