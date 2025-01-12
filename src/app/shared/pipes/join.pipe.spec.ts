import { JoinByPropertyPipe } from './join.pipe';

describe('joinByPropertyPipe', () => {
  let pipe: JoinByPropertyPipe;

  beforeEach(() => {
    pipe = new JoinByPropertyPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should join object properties based on provided property', () => {
    const result = pipe.transform(
      [{ id: 1, name: 'Angular', type: 'Framework' }, { id: 2, name: 'React', type: 'Library' }],
      'type',
      ' - '
    );
    expect(result).toBe('Framework - Library');
  });
});
