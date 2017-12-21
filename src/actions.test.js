import * as actions from './actions';

describe('generateAuralUpdate', () => {
    it('should return the action', () => {
        const action = actions.generateAuralUpdate();
        expect(action.type).toEqual(actions.GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('should return the action with correctAnswer', () => {
        const correctAnswer = 16;
        const action = actions.restartGame(correctAnswer);
        expect(action.type).toEqual(actions.RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('makeGuess', () => {
    it('should return the action with guess', () => {
        const guess = 80;
        const action = actions.makeGuess(guess);
        expect(action.type).toEqual(actions.MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    })
})