import { SuccessPipe } from './success.pipe';

describe('SuccessPipe', () => {
  it('create an instance', () => {
    const pipe = new SuccessPipe();
    expect(pipe).toBeTruthy();
  });
});
