export type Boolean = 0 | 1;

/* export type And<B1 extends Boolean, B2 extends Boolean> = {
  0: {
    0: 0
    1: 0
  }
  1: {
    0: 0
    1: 1
  }
}[B1][B2]
 */

/* export type Or<B1 extends Boolean, B2 extends Boolean> = {
  0: {
    0: 0
    1: 1
  }
  1: {
    0: 1
    1: 1
  }
}[B1][B2] */

export type If<Condition extends boolean, TrueCase, FalseCase = never> = Condition extends true ? TrueCase : FalseCase;

type _IsNever<Type> = [Type] extends [never] ? true : false;

/** alias for And type */
export type AllAreTrue<T extends boolean[]> = And<T>;

export type And<T extends boolean[]> = If<_IsNever<Extract<T[number], false>>, true, false> ;
export type Or<T extends boolean[]> = If<_IsNever<Extract<T[number], true>>, false, true> ;
export type Not<T extends Boolean> = T extends true ? false : true;

type Result = And<[]>;
type Result2 = Or<[]>;

type isNumber<T> = T extends number ? true : false;
type _areNumbers<T extends unknown[]> = { [K in keyof T]: isNumber<T[K]> };
type areNumbers<T extends unknown[]> = And<_areNumbers<T>>;
type someIsNumber<T extends unknown[]> = Or<_areNumbers<T>>;


type test = areNumbers<[number, number, string]>

/** syntax for utility types: util<[...params]>, generic types now are only generic<Type, Type2, ...> */