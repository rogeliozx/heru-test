import gifReducer from './gifs';

describe('reducer gif', () => {
  it('GET_TRENDING_SUCCESS', () => {
    const res = gifReducer([], {
      type: 'GET_TRENDING_SUCCESS',
      data: [2, 1],
    });
    expect(res).toEqual({ gifs: [2, 1] });
  });
  it('GET_TRENDING_FAILED', () => {
    const res = gifReducer(
      {},
      {
        type: 'GET_TRENDING_FAILED',
      }
    );
    expect(res).toEqual({});
  });
  it('SEARCH_GIF_SUCCESS', () => {
    const res = gifReducer([], {
      type: 'SEARCH_GIF_SUCCESS',
      data: [2, 1],
    });
    expect(res).toEqual({ gifs: [2, 1] });
  });
  it('SEARCH_GIF_FAILED', () => {
    const res = gifReducer(
      {},
      {
        type: 'SEARCH_GIF_FAILED',
      }
    );
    expect(res).toEqual({});
  });
  it('Default case', () => {
    const res = gifReducer(
      {},
      {
        type: 'test',
      }
    );
    expect(res).toEqual({});
  });
});
