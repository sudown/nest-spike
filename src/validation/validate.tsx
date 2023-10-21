import { ValidationOptions } from 'class-validator';
import { ValidationError } from 'class-validator';

export interface MyValidationPipeOptions extends ValidationOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}
