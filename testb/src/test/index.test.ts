import { describe, test, expect } from 'vitest'
import TestApi from '../api';
import { basicValidator } from '../datatype';

describe('testing index', () => {
  test('test api', async () => {
    const testApi = TestApi();
    const result = await testApi.testApiService()
    const { success } = basicValidator.safeParse(result);
    expect(success).toBe(true);
  });
});
