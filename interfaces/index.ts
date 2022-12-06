
/** Get a Tuple with the same type of N length */
export type Tuple<Type, Length extends number, _Tuple extends unknown[] = []> = _Tuple['length'] extends Length ? _Tuple : Tuple<Type, Length, [Type, ..._Tuple]>;