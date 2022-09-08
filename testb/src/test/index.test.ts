import { describe, test, expect } from 'vitest'
import { ZodError } from 'zod';
import TestApi from '../api';
import { basicValidator } from '../datatype';

describe('testing index', () => {
  test('test api', async () => {
    const testApi = TestApi();
    try {
      const result = await testApi.testApiService()
      const { success } = basicValidator.safeParse(result);
      expect(success).toBe(true);
    } catch(error) {
      if (error instanceof ZodError) {
        console.log(error);
        console.log('hello');
      }
    }
  });
});
