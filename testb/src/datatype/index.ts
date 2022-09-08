import * as zod from 'zod';

export const basicValidator = zod.object({
  message: zod.string({
    required_error: 'is required',
    invalid_type_error: 'invalid type',
  }).min(1, 'message is necessary'),
});

export type BasicType = zod.infer<typeof basicValidator>;

