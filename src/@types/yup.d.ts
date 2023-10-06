import * as Yup from 'yup';

declare module 'yup' {
  interface StringSchema<TType extends Maybe<string> = string | undefined, TContext = AnyObject, TOut extends TType = TType>
    extends Yup.StringSchema<TType, TContext, TOut> {
    telefoneValido(message?: string): this;
  }
}
