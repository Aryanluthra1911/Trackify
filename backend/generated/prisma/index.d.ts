
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>
/**
 * Model GstSales
 * 
 */
export type GstSales = $Result.DefaultSelection<Prisma.$GstSalesPayload>
/**
 * Model CustomBill
 * 
 */
export type CustomBill = $Result.DefaultSelection<Prisma.$CustomBillPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sales
 * const sales = await prisma.sales.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sales
   * const sales = await prisma.sales.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gstSales`: Exposes CRUD operations for the **GstSales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GstSales
    * const gstSales = await prisma.gstSales.findMany()
    * ```
    */
  get gstSales(): Prisma.GstSalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customBill`: Exposes CRUD operations for the **CustomBill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomBills
    * const customBills = await prisma.customBill.findMany()
    * ```
    */
  get customBill(): Prisma.CustomBillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Sales: 'Sales',
    GstSales: 'GstSales',
    CustomBill: 'CustomBill',
    Orders: 'Orders'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sales" | "gstSales" | "customBill" | "orders"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      GstSales: {
        payload: Prisma.$GstSalesPayload<ExtArgs>
        fields: Prisma.GstSalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GstSalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GstSalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>
          }
          findFirst: {
            args: Prisma.GstSalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GstSalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>
          }
          findMany: {
            args: Prisma.GstSalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>[]
          }
          create: {
            args: Prisma.GstSalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>
          }
          createMany: {
            args: Prisma.GstSalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GstSalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>[]
          }
          delete: {
            args: Prisma.GstSalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>
          }
          update: {
            args: Prisma.GstSalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>
          }
          deleteMany: {
            args: Prisma.GstSalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GstSalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GstSalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>[]
          }
          upsert: {
            args: Prisma.GstSalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GstSalesPayload>
          }
          aggregate: {
            args: Prisma.GstSalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGstSales>
          }
          groupBy: {
            args: Prisma.GstSalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GstSalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.GstSalesCountArgs<ExtArgs>
            result: $Utils.Optional<GstSalesCountAggregateOutputType> | number
          }
        }
      }
      CustomBill: {
        payload: Prisma.$CustomBillPayload<ExtArgs>
        fields: Prisma.CustomBillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomBillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomBillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>
          }
          findFirst: {
            args: Prisma.CustomBillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomBillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>
          }
          findMany: {
            args: Prisma.CustomBillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>[]
          }
          create: {
            args: Prisma.CustomBillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>
          }
          createMany: {
            args: Prisma.CustomBillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomBillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>[]
          }
          delete: {
            args: Prisma.CustomBillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>
          }
          update: {
            args: Prisma.CustomBillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>
          }
          deleteMany: {
            args: Prisma.CustomBillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomBillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomBillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>[]
          }
          upsert: {
            args: Prisma.CustomBillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomBillPayload>
          }
          aggregate: {
            args: Prisma.CustomBillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomBill>
          }
          groupBy: {
            args: Prisma.CustomBillGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomBillGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomBillCountArgs<ExtArgs>
            result: $Utils.Optional<CustomBillCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sales?: SalesOmit
    gstSales?: GstSalesOmit
    customBill?: CustomBillOmit
    orders?: OrdersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    rate: number | null
    labour_cost: number | null
    total: number | null
  }

  export type SalesSumAggregateOutputType = {
    id: number | null
    weight: number | null
    rate: number | null
    labour_cost: number | null
    total: number | null
  }

  export type SalesMinAggregateOutputType = {
    id: number | null
    email: string | null
    product: string | null
    weight: number | null
    rate: number | null
    labour_cost: number | null
    total: number | null
    date: Date | null
    time: Date | null
  }

  export type SalesMaxAggregateOutputType = {
    id: number | null
    email: string | null
    product: string | null
    weight: number | null
    rate: number | null
    labour_cost: number | null
    total: number | null
    date: Date | null
    time: Date | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    email: number
    product: number
    weight: number
    rate: number
    labour_cost: number
    total: number
    date: number
    time: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    id?: true
    weight?: true
    rate?: true
    labour_cost?: true
    total?: true
  }

  export type SalesSumAggregateInputType = {
    id?: true
    weight?: true
    rate?: true
    labour_cost?: true
    total?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    email?: true
    product?: true
    weight?: true
    rate?: true
    labour_cost?: true
    total?: true
    date?: true
    time?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    email?: true
    product?: true
    weight?: true
    rate?: true
    labour_cost?: true
    total?: true
    date?: true
    time?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    email?: true
    product?: true
    weight?: true
    rate?: true
    labour_cost?: true
    total?: true
    date?: true
    time?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: number
    email: string
    product: string
    weight: number
    rate: number
    labour_cost: number
    total: number
    date: Date
    time: Date
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    product?: boolean
    weight?: boolean
    rate?: boolean
    labour_cost?: boolean
    total?: boolean
    date?: boolean
    time?: boolean
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    product?: boolean
    weight?: boolean
    rate?: boolean
    labour_cost?: boolean
    total?: boolean
    date?: boolean
    time?: boolean
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    product?: boolean
    weight?: boolean
    rate?: boolean
    labour_cost?: boolean
    total?: boolean
    date?: boolean
    time?: boolean
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    id?: boolean
    email?: boolean
    product?: boolean
    weight?: boolean
    rate?: boolean
    labour_cost?: boolean
    total?: boolean
    date?: boolean
    time?: boolean
  }

  export type SalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "product" | "weight" | "rate" | "labour_cost" | "total" | "date" | "time", ExtArgs["result"]["sales"]>

  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      product: string
      weight: number
      rate: number
      labour_cost: number
      total: number
      date: Date
      time: Date
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SalesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sales model
   */
  interface SalesFieldRefs {
    readonly id: FieldRef<"Sales", 'Int'>
    readonly email: FieldRef<"Sales", 'String'>
    readonly product: FieldRef<"Sales", 'String'>
    readonly weight: FieldRef<"Sales", 'Float'>
    readonly rate: FieldRef<"Sales", 'Float'>
    readonly labour_cost: FieldRef<"Sales", 'Float'>
    readonly total: FieldRef<"Sales", 'Float'>
    readonly date: FieldRef<"Sales", 'DateTime'>
    readonly time: FieldRef<"Sales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales updateManyAndReturn
   */
  export type SalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
  }


  /**
   * Model GstSales
   */

  export type AggregateGstSales = {
    _count: GstSalesCountAggregateOutputType | null
    _avg: GstSalesAvgAggregateOutputType | null
    _sum: GstSalesSumAggregateOutputType | null
    _min: GstSalesMinAggregateOutputType | null
    _max: GstSalesMaxAggregateOutputType | null
  }

  export type GstSalesAvgAggregateOutputType = {
    weight: number | null
    rate: number | null
    cost_exc_gst: number | null
    cgst: number | null
    sgst: number | null
    total: number | null
  }

  export type GstSalesSumAggregateOutputType = {
    weight: number | null
    rate: number | null
    cost_exc_gst: number | null
    cgst: number | null
    sgst: number | null
    total: number | null
  }

  export type GstSalesMinAggregateOutputType = {
    email: string | null
    element: string | null
    bill_no: string | null
    purity: string | null
    mode_of_payment: string | null
    date: Date | null
    weight: number | null
    rate: number | null
    cost_exc_gst: number | null
    cgst: number | null
    sgst: number | null
    total: number | null
  }

  export type GstSalesMaxAggregateOutputType = {
    email: string | null
    element: string | null
    bill_no: string | null
    purity: string | null
    mode_of_payment: string | null
    date: Date | null
    weight: number | null
    rate: number | null
    cost_exc_gst: number | null
    cgst: number | null
    sgst: number | null
    total: number | null
  }

  export type GstSalesCountAggregateOutputType = {
    email: number
    element: number
    bill_no: number
    purity: number
    mode_of_payment: number
    date: number
    weight: number
    rate: number
    cost_exc_gst: number
    cgst: number
    sgst: number
    total: number
    _all: number
  }


  export type GstSalesAvgAggregateInputType = {
    weight?: true
    rate?: true
    cost_exc_gst?: true
    cgst?: true
    sgst?: true
    total?: true
  }

  export type GstSalesSumAggregateInputType = {
    weight?: true
    rate?: true
    cost_exc_gst?: true
    cgst?: true
    sgst?: true
    total?: true
  }

  export type GstSalesMinAggregateInputType = {
    email?: true
    element?: true
    bill_no?: true
    purity?: true
    mode_of_payment?: true
    date?: true
    weight?: true
    rate?: true
    cost_exc_gst?: true
    cgst?: true
    sgst?: true
    total?: true
  }

  export type GstSalesMaxAggregateInputType = {
    email?: true
    element?: true
    bill_no?: true
    purity?: true
    mode_of_payment?: true
    date?: true
    weight?: true
    rate?: true
    cost_exc_gst?: true
    cgst?: true
    sgst?: true
    total?: true
  }

  export type GstSalesCountAggregateInputType = {
    email?: true
    element?: true
    bill_no?: true
    purity?: true
    mode_of_payment?: true
    date?: true
    weight?: true
    rate?: true
    cost_exc_gst?: true
    cgst?: true
    sgst?: true
    total?: true
    _all?: true
  }

  export type GstSalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GstSales to aggregate.
     */
    where?: GstSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GstSales to fetch.
     */
    orderBy?: GstSalesOrderByWithRelationInput | GstSalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GstSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GstSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GstSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GstSales
    **/
    _count?: true | GstSalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GstSalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GstSalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GstSalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GstSalesMaxAggregateInputType
  }

  export type GetGstSalesAggregateType<T extends GstSalesAggregateArgs> = {
        [P in keyof T & keyof AggregateGstSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGstSales[P]>
      : GetScalarType<T[P], AggregateGstSales[P]>
  }




  export type GstSalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GstSalesWhereInput
    orderBy?: GstSalesOrderByWithAggregationInput | GstSalesOrderByWithAggregationInput[]
    by: GstSalesScalarFieldEnum[] | GstSalesScalarFieldEnum
    having?: GstSalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GstSalesCountAggregateInputType | true
    _avg?: GstSalesAvgAggregateInputType
    _sum?: GstSalesSumAggregateInputType
    _min?: GstSalesMinAggregateInputType
    _max?: GstSalesMaxAggregateInputType
  }

  export type GstSalesGroupByOutputType = {
    email: string
    element: string
    bill_no: string
    purity: string
    mode_of_payment: string
    date: Date
    weight: number
    rate: number
    cost_exc_gst: number
    cgst: number
    sgst: number
    total: number
    _count: GstSalesCountAggregateOutputType | null
    _avg: GstSalesAvgAggregateOutputType | null
    _sum: GstSalesSumAggregateOutputType | null
    _min: GstSalesMinAggregateOutputType | null
    _max: GstSalesMaxAggregateOutputType | null
  }

  type GetGstSalesGroupByPayload<T extends GstSalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GstSalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GstSalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GstSalesGroupByOutputType[P]>
            : GetScalarType<T[P], GstSalesGroupByOutputType[P]>
        }
      >
    >


  export type GstSalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    element?: boolean
    bill_no?: boolean
    purity?: boolean
    mode_of_payment?: boolean
    date?: boolean
    weight?: boolean
    rate?: boolean
    cost_exc_gst?: boolean
    cgst?: boolean
    sgst?: boolean
    total?: boolean
  }, ExtArgs["result"]["gstSales"]>

  export type GstSalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    element?: boolean
    bill_no?: boolean
    purity?: boolean
    mode_of_payment?: boolean
    date?: boolean
    weight?: boolean
    rate?: boolean
    cost_exc_gst?: boolean
    cgst?: boolean
    sgst?: boolean
    total?: boolean
  }, ExtArgs["result"]["gstSales"]>

  export type GstSalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    element?: boolean
    bill_no?: boolean
    purity?: boolean
    mode_of_payment?: boolean
    date?: boolean
    weight?: boolean
    rate?: boolean
    cost_exc_gst?: boolean
    cgst?: boolean
    sgst?: boolean
    total?: boolean
  }, ExtArgs["result"]["gstSales"]>

  export type GstSalesSelectScalar = {
    email?: boolean
    element?: boolean
    bill_no?: boolean
    purity?: boolean
    mode_of_payment?: boolean
    date?: boolean
    weight?: boolean
    rate?: boolean
    cost_exc_gst?: boolean
    cgst?: boolean
    sgst?: boolean
    total?: boolean
  }

  export type GstSalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "element" | "bill_no" | "purity" | "mode_of_payment" | "date" | "weight" | "rate" | "cost_exc_gst" | "cgst" | "sgst" | "total", ExtArgs["result"]["gstSales"]>

  export type $GstSalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GstSales"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      element: string
      bill_no: string
      purity: string
      mode_of_payment: string
      date: Date
      weight: number
      rate: number
      cost_exc_gst: number
      cgst: number
      sgst: number
      total: number
    }, ExtArgs["result"]["gstSales"]>
    composites: {}
  }

  type GstSalesGetPayload<S extends boolean | null | undefined | GstSalesDefaultArgs> = $Result.GetResult<Prisma.$GstSalesPayload, S>

  type GstSalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GstSalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GstSalesCountAggregateInputType | true
    }

  export interface GstSalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GstSales'], meta: { name: 'GstSales' } }
    /**
     * Find zero or one GstSales that matches the filter.
     * @param {GstSalesFindUniqueArgs} args - Arguments to find a GstSales
     * @example
     * // Get one GstSales
     * const gstSales = await prisma.gstSales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GstSalesFindUniqueArgs>(args: SelectSubset<T, GstSalesFindUniqueArgs<ExtArgs>>): Prisma__GstSalesClient<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GstSales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GstSalesFindUniqueOrThrowArgs} args - Arguments to find a GstSales
     * @example
     * // Get one GstSales
     * const gstSales = await prisma.gstSales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GstSalesFindUniqueOrThrowArgs>(args: SelectSubset<T, GstSalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GstSalesClient<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GstSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GstSalesFindFirstArgs} args - Arguments to find a GstSales
     * @example
     * // Get one GstSales
     * const gstSales = await prisma.gstSales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GstSalesFindFirstArgs>(args?: SelectSubset<T, GstSalesFindFirstArgs<ExtArgs>>): Prisma__GstSalesClient<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GstSales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GstSalesFindFirstOrThrowArgs} args - Arguments to find a GstSales
     * @example
     * // Get one GstSales
     * const gstSales = await prisma.gstSales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GstSalesFindFirstOrThrowArgs>(args?: SelectSubset<T, GstSalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__GstSalesClient<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GstSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GstSalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GstSales
     * const gstSales = await prisma.gstSales.findMany()
     * 
     * // Get first 10 GstSales
     * const gstSales = await prisma.gstSales.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const gstSalesWithEmailOnly = await prisma.gstSales.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends GstSalesFindManyArgs>(args?: SelectSubset<T, GstSalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GstSales.
     * @param {GstSalesCreateArgs} args - Arguments to create a GstSales.
     * @example
     * // Create one GstSales
     * const GstSales = await prisma.gstSales.create({
     *   data: {
     *     // ... data to create a GstSales
     *   }
     * })
     * 
     */
    create<T extends GstSalesCreateArgs>(args: SelectSubset<T, GstSalesCreateArgs<ExtArgs>>): Prisma__GstSalesClient<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GstSales.
     * @param {GstSalesCreateManyArgs} args - Arguments to create many GstSales.
     * @example
     * // Create many GstSales
     * const gstSales = await prisma.gstSales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GstSalesCreateManyArgs>(args?: SelectSubset<T, GstSalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GstSales and returns the data saved in the database.
     * @param {GstSalesCreateManyAndReturnArgs} args - Arguments to create many GstSales.
     * @example
     * // Create many GstSales
     * const gstSales = await prisma.gstSales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GstSales and only return the `email`
     * const gstSalesWithEmailOnly = await prisma.gstSales.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GstSalesCreateManyAndReturnArgs>(args?: SelectSubset<T, GstSalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GstSales.
     * @param {GstSalesDeleteArgs} args - Arguments to delete one GstSales.
     * @example
     * // Delete one GstSales
     * const GstSales = await prisma.gstSales.delete({
     *   where: {
     *     // ... filter to delete one GstSales
     *   }
     * })
     * 
     */
    delete<T extends GstSalesDeleteArgs>(args: SelectSubset<T, GstSalesDeleteArgs<ExtArgs>>): Prisma__GstSalesClient<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GstSales.
     * @param {GstSalesUpdateArgs} args - Arguments to update one GstSales.
     * @example
     * // Update one GstSales
     * const gstSales = await prisma.gstSales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GstSalesUpdateArgs>(args: SelectSubset<T, GstSalesUpdateArgs<ExtArgs>>): Prisma__GstSalesClient<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GstSales.
     * @param {GstSalesDeleteManyArgs} args - Arguments to filter GstSales to delete.
     * @example
     * // Delete a few GstSales
     * const { count } = await prisma.gstSales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GstSalesDeleteManyArgs>(args?: SelectSubset<T, GstSalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GstSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GstSalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GstSales
     * const gstSales = await prisma.gstSales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GstSalesUpdateManyArgs>(args: SelectSubset<T, GstSalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GstSales and returns the data updated in the database.
     * @param {GstSalesUpdateManyAndReturnArgs} args - Arguments to update many GstSales.
     * @example
     * // Update many GstSales
     * const gstSales = await prisma.gstSales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GstSales and only return the `email`
     * const gstSalesWithEmailOnly = await prisma.gstSales.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GstSalesUpdateManyAndReturnArgs>(args: SelectSubset<T, GstSalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GstSales.
     * @param {GstSalesUpsertArgs} args - Arguments to update or create a GstSales.
     * @example
     * // Update or create a GstSales
     * const gstSales = await prisma.gstSales.upsert({
     *   create: {
     *     // ... data to create a GstSales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GstSales we want to update
     *   }
     * })
     */
    upsert<T extends GstSalesUpsertArgs>(args: SelectSubset<T, GstSalesUpsertArgs<ExtArgs>>): Prisma__GstSalesClient<$Result.GetResult<Prisma.$GstSalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GstSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GstSalesCountArgs} args - Arguments to filter GstSales to count.
     * @example
     * // Count the number of GstSales
     * const count = await prisma.gstSales.count({
     *   where: {
     *     // ... the filter for the GstSales we want to count
     *   }
     * })
    **/
    count<T extends GstSalesCountArgs>(
      args?: Subset<T, GstSalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GstSalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GstSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GstSalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GstSalesAggregateArgs>(args: Subset<T, GstSalesAggregateArgs>): Prisma.PrismaPromise<GetGstSalesAggregateType<T>>

    /**
     * Group by GstSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GstSalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GstSalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GstSalesGroupByArgs['orderBy'] }
        : { orderBy?: GstSalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GstSalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGstSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GstSales model
   */
  readonly fields: GstSalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GstSales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GstSalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GstSales model
   */
  interface GstSalesFieldRefs {
    readonly email: FieldRef<"GstSales", 'String'>
    readonly element: FieldRef<"GstSales", 'String'>
    readonly bill_no: FieldRef<"GstSales", 'String'>
    readonly purity: FieldRef<"GstSales", 'String'>
    readonly mode_of_payment: FieldRef<"GstSales", 'String'>
    readonly date: FieldRef<"GstSales", 'DateTime'>
    readonly weight: FieldRef<"GstSales", 'Float'>
    readonly rate: FieldRef<"GstSales", 'Float'>
    readonly cost_exc_gst: FieldRef<"GstSales", 'Float'>
    readonly cgst: FieldRef<"GstSales", 'Float'>
    readonly sgst: FieldRef<"GstSales", 'Float'>
    readonly total: FieldRef<"GstSales", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * GstSales findUnique
   */
  export type GstSalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * Filter, which GstSales to fetch.
     */
    where: GstSalesWhereUniqueInput
  }

  /**
   * GstSales findUniqueOrThrow
   */
  export type GstSalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * Filter, which GstSales to fetch.
     */
    where: GstSalesWhereUniqueInput
  }

  /**
   * GstSales findFirst
   */
  export type GstSalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * Filter, which GstSales to fetch.
     */
    where?: GstSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GstSales to fetch.
     */
    orderBy?: GstSalesOrderByWithRelationInput | GstSalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GstSales.
     */
    cursor?: GstSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GstSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GstSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GstSales.
     */
    distinct?: GstSalesScalarFieldEnum | GstSalesScalarFieldEnum[]
  }

  /**
   * GstSales findFirstOrThrow
   */
  export type GstSalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * Filter, which GstSales to fetch.
     */
    where?: GstSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GstSales to fetch.
     */
    orderBy?: GstSalesOrderByWithRelationInput | GstSalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GstSales.
     */
    cursor?: GstSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GstSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GstSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GstSales.
     */
    distinct?: GstSalesScalarFieldEnum | GstSalesScalarFieldEnum[]
  }

  /**
   * GstSales findMany
   */
  export type GstSalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * Filter, which GstSales to fetch.
     */
    where?: GstSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GstSales to fetch.
     */
    orderBy?: GstSalesOrderByWithRelationInput | GstSalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GstSales.
     */
    cursor?: GstSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GstSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GstSales.
     */
    skip?: number
    distinct?: GstSalesScalarFieldEnum | GstSalesScalarFieldEnum[]
  }

  /**
   * GstSales create
   */
  export type GstSalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * The data needed to create a GstSales.
     */
    data: XOR<GstSalesCreateInput, GstSalesUncheckedCreateInput>
  }

  /**
   * GstSales createMany
   */
  export type GstSalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GstSales.
     */
    data: GstSalesCreateManyInput | GstSalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GstSales createManyAndReturn
   */
  export type GstSalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * The data used to create many GstSales.
     */
    data: GstSalesCreateManyInput | GstSalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GstSales update
   */
  export type GstSalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * The data needed to update a GstSales.
     */
    data: XOR<GstSalesUpdateInput, GstSalesUncheckedUpdateInput>
    /**
     * Choose, which GstSales to update.
     */
    where: GstSalesWhereUniqueInput
  }

  /**
   * GstSales updateMany
   */
  export type GstSalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GstSales.
     */
    data: XOR<GstSalesUpdateManyMutationInput, GstSalesUncheckedUpdateManyInput>
    /**
     * Filter which GstSales to update
     */
    where?: GstSalesWhereInput
    /**
     * Limit how many GstSales to update.
     */
    limit?: number
  }

  /**
   * GstSales updateManyAndReturn
   */
  export type GstSalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * The data used to update GstSales.
     */
    data: XOR<GstSalesUpdateManyMutationInput, GstSalesUncheckedUpdateManyInput>
    /**
     * Filter which GstSales to update
     */
    where?: GstSalesWhereInput
    /**
     * Limit how many GstSales to update.
     */
    limit?: number
  }

  /**
   * GstSales upsert
   */
  export type GstSalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * The filter to search for the GstSales to update in case it exists.
     */
    where: GstSalesWhereUniqueInput
    /**
     * In case the GstSales found by the `where` argument doesn't exist, create a new GstSales with this data.
     */
    create: XOR<GstSalesCreateInput, GstSalesUncheckedCreateInput>
    /**
     * In case the GstSales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GstSalesUpdateInput, GstSalesUncheckedUpdateInput>
  }

  /**
   * GstSales delete
   */
  export type GstSalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
    /**
     * Filter which GstSales to delete.
     */
    where: GstSalesWhereUniqueInput
  }

  /**
   * GstSales deleteMany
   */
  export type GstSalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GstSales to delete
     */
    where?: GstSalesWhereInput
    /**
     * Limit how many GstSales to delete.
     */
    limit?: number
  }

  /**
   * GstSales without action
   */
  export type GstSalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GstSales
     */
    select?: GstSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GstSales
     */
    omit?: GstSalesOmit<ExtArgs> | null
  }


  /**
   * Model CustomBill
   */

  export type AggregateCustomBill = {
    _count: CustomBillCountAggregateOutputType | null
    _avg: CustomBillAvgAggregateOutputType | null
    _sum: CustomBillSumAggregateOutputType | null
    _min: CustomBillMinAggregateOutputType | null
    _max: CustomBillMaxAggregateOutputType | null
  }

  export type CustomBillAvgAggregateOutputType = {
    id: number | null
    cost: number | null
    quantity: number | null
    total: number | null
  }

  export type CustomBillSumAggregateOutputType = {
    id: number | null
    cost: number | null
    quantity: number | null
    total: number | null
  }

  export type CustomBillMinAggregateOutputType = {
    id: number | null
    email: string | null
    cost: number | null
    quantity: number | null
    total: number | null
  }

  export type CustomBillMaxAggregateOutputType = {
    id: number | null
    email: string | null
    cost: number | null
    quantity: number | null
    total: number | null
  }

  export type CustomBillCountAggregateOutputType = {
    id: number
    email: number
    cost: number
    quantity: number
    total: number
    _all: number
  }


  export type CustomBillAvgAggregateInputType = {
    id?: true
    cost?: true
    quantity?: true
    total?: true
  }

  export type CustomBillSumAggregateInputType = {
    id?: true
    cost?: true
    quantity?: true
    total?: true
  }

  export type CustomBillMinAggregateInputType = {
    id?: true
    email?: true
    cost?: true
    quantity?: true
    total?: true
  }

  export type CustomBillMaxAggregateInputType = {
    id?: true
    email?: true
    cost?: true
    quantity?: true
    total?: true
  }

  export type CustomBillCountAggregateInputType = {
    id?: true
    email?: true
    cost?: true
    quantity?: true
    total?: true
    _all?: true
  }

  export type CustomBillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomBill to aggregate.
     */
    where?: CustomBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomBills to fetch.
     */
    orderBy?: CustomBillOrderByWithRelationInput | CustomBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomBills
    **/
    _count?: true | CustomBillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomBillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomBillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomBillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomBillMaxAggregateInputType
  }

  export type GetCustomBillAggregateType<T extends CustomBillAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomBill[P]>
      : GetScalarType<T[P], AggregateCustomBill[P]>
  }




  export type CustomBillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomBillWhereInput
    orderBy?: CustomBillOrderByWithAggregationInput | CustomBillOrderByWithAggregationInput[]
    by: CustomBillScalarFieldEnum[] | CustomBillScalarFieldEnum
    having?: CustomBillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomBillCountAggregateInputType | true
    _avg?: CustomBillAvgAggregateInputType
    _sum?: CustomBillSumAggregateInputType
    _min?: CustomBillMinAggregateInputType
    _max?: CustomBillMaxAggregateInputType
  }

  export type CustomBillGroupByOutputType = {
    id: number
    email: string
    cost: number
    quantity: number
    total: number
    _count: CustomBillCountAggregateOutputType | null
    _avg: CustomBillAvgAggregateOutputType | null
    _sum: CustomBillSumAggregateOutputType | null
    _min: CustomBillMinAggregateOutputType | null
    _max: CustomBillMaxAggregateOutputType | null
  }

  type GetCustomBillGroupByPayload<T extends CustomBillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomBillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomBillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomBillGroupByOutputType[P]>
            : GetScalarType<T[P], CustomBillGroupByOutputType[P]>
        }
      >
    >


  export type CustomBillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    cost?: boolean
    quantity?: boolean
    total?: boolean
  }, ExtArgs["result"]["customBill"]>

  export type CustomBillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    cost?: boolean
    quantity?: boolean
    total?: boolean
  }, ExtArgs["result"]["customBill"]>

  export type CustomBillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    cost?: boolean
    quantity?: boolean
    total?: boolean
  }, ExtArgs["result"]["customBill"]>

  export type CustomBillSelectScalar = {
    id?: boolean
    email?: boolean
    cost?: boolean
    quantity?: boolean
    total?: boolean
  }

  export type CustomBillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "cost" | "quantity" | "total", ExtArgs["result"]["customBill"]>

  export type $CustomBillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomBill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      cost: number
      quantity: number
      total: number
    }, ExtArgs["result"]["customBill"]>
    composites: {}
  }

  type CustomBillGetPayload<S extends boolean | null | undefined | CustomBillDefaultArgs> = $Result.GetResult<Prisma.$CustomBillPayload, S>

  type CustomBillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomBillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomBillCountAggregateInputType | true
    }

  export interface CustomBillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomBill'], meta: { name: 'CustomBill' } }
    /**
     * Find zero or one CustomBill that matches the filter.
     * @param {CustomBillFindUniqueArgs} args - Arguments to find a CustomBill
     * @example
     * // Get one CustomBill
     * const customBill = await prisma.customBill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomBillFindUniqueArgs>(args: SelectSubset<T, CustomBillFindUniqueArgs<ExtArgs>>): Prisma__CustomBillClient<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomBill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomBillFindUniqueOrThrowArgs} args - Arguments to find a CustomBill
     * @example
     * // Get one CustomBill
     * const customBill = await prisma.customBill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomBillFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomBillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomBillClient<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomBill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomBillFindFirstArgs} args - Arguments to find a CustomBill
     * @example
     * // Get one CustomBill
     * const customBill = await prisma.customBill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomBillFindFirstArgs>(args?: SelectSubset<T, CustomBillFindFirstArgs<ExtArgs>>): Prisma__CustomBillClient<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomBill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomBillFindFirstOrThrowArgs} args - Arguments to find a CustomBill
     * @example
     * // Get one CustomBill
     * const customBill = await prisma.customBill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomBillFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomBillFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomBillClient<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomBillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomBills
     * const customBills = await prisma.customBill.findMany()
     * 
     * // Get first 10 CustomBills
     * const customBills = await prisma.customBill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customBillWithIdOnly = await prisma.customBill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomBillFindManyArgs>(args?: SelectSubset<T, CustomBillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomBill.
     * @param {CustomBillCreateArgs} args - Arguments to create a CustomBill.
     * @example
     * // Create one CustomBill
     * const CustomBill = await prisma.customBill.create({
     *   data: {
     *     // ... data to create a CustomBill
     *   }
     * })
     * 
     */
    create<T extends CustomBillCreateArgs>(args: SelectSubset<T, CustomBillCreateArgs<ExtArgs>>): Prisma__CustomBillClient<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomBills.
     * @param {CustomBillCreateManyArgs} args - Arguments to create many CustomBills.
     * @example
     * // Create many CustomBills
     * const customBill = await prisma.customBill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomBillCreateManyArgs>(args?: SelectSubset<T, CustomBillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomBills and returns the data saved in the database.
     * @param {CustomBillCreateManyAndReturnArgs} args - Arguments to create many CustomBills.
     * @example
     * // Create many CustomBills
     * const customBill = await prisma.customBill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomBills and only return the `id`
     * const customBillWithIdOnly = await prisma.customBill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomBillCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomBillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomBill.
     * @param {CustomBillDeleteArgs} args - Arguments to delete one CustomBill.
     * @example
     * // Delete one CustomBill
     * const CustomBill = await prisma.customBill.delete({
     *   where: {
     *     // ... filter to delete one CustomBill
     *   }
     * })
     * 
     */
    delete<T extends CustomBillDeleteArgs>(args: SelectSubset<T, CustomBillDeleteArgs<ExtArgs>>): Prisma__CustomBillClient<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomBill.
     * @param {CustomBillUpdateArgs} args - Arguments to update one CustomBill.
     * @example
     * // Update one CustomBill
     * const customBill = await prisma.customBill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomBillUpdateArgs>(args: SelectSubset<T, CustomBillUpdateArgs<ExtArgs>>): Prisma__CustomBillClient<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomBills.
     * @param {CustomBillDeleteManyArgs} args - Arguments to filter CustomBills to delete.
     * @example
     * // Delete a few CustomBills
     * const { count } = await prisma.customBill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomBillDeleteManyArgs>(args?: SelectSubset<T, CustomBillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomBillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomBills
     * const customBill = await prisma.customBill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomBillUpdateManyArgs>(args: SelectSubset<T, CustomBillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomBills and returns the data updated in the database.
     * @param {CustomBillUpdateManyAndReturnArgs} args - Arguments to update many CustomBills.
     * @example
     * // Update many CustomBills
     * const customBill = await prisma.customBill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomBills and only return the `id`
     * const customBillWithIdOnly = await prisma.customBill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomBillUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomBillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomBill.
     * @param {CustomBillUpsertArgs} args - Arguments to update or create a CustomBill.
     * @example
     * // Update or create a CustomBill
     * const customBill = await prisma.customBill.upsert({
     *   create: {
     *     // ... data to create a CustomBill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomBill we want to update
     *   }
     * })
     */
    upsert<T extends CustomBillUpsertArgs>(args: SelectSubset<T, CustomBillUpsertArgs<ExtArgs>>): Prisma__CustomBillClient<$Result.GetResult<Prisma.$CustomBillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomBillCountArgs} args - Arguments to filter CustomBills to count.
     * @example
     * // Count the number of CustomBills
     * const count = await prisma.customBill.count({
     *   where: {
     *     // ... the filter for the CustomBills we want to count
     *   }
     * })
    **/
    count<T extends CustomBillCountArgs>(
      args?: Subset<T, CustomBillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomBillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomBillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomBillAggregateArgs>(args: Subset<T, CustomBillAggregateArgs>): Prisma.PrismaPromise<GetCustomBillAggregateType<T>>

    /**
     * Group by CustomBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomBillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomBillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomBillGroupByArgs['orderBy'] }
        : { orderBy?: CustomBillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomBillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomBill model
   */
  readonly fields: CustomBillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomBill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomBillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomBill model
   */
  interface CustomBillFieldRefs {
    readonly id: FieldRef<"CustomBill", 'Int'>
    readonly email: FieldRef<"CustomBill", 'String'>
    readonly cost: FieldRef<"CustomBill", 'Float'>
    readonly quantity: FieldRef<"CustomBill", 'Int'>
    readonly total: FieldRef<"CustomBill", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CustomBill findUnique
   */
  export type CustomBillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * Filter, which CustomBill to fetch.
     */
    where: CustomBillWhereUniqueInput
  }

  /**
   * CustomBill findUniqueOrThrow
   */
  export type CustomBillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * Filter, which CustomBill to fetch.
     */
    where: CustomBillWhereUniqueInput
  }

  /**
   * CustomBill findFirst
   */
  export type CustomBillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * Filter, which CustomBill to fetch.
     */
    where?: CustomBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomBills to fetch.
     */
    orderBy?: CustomBillOrderByWithRelationInput | CustomBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomBills.
     */
    cursor?: CustomBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomBills.
     */
    distinct?: CustomBillScalarFieldEnum | CustomBillScalarFieldEnum[]
  }

  /**
   * CustomBill findFirstOrThrow
   */
  export type CustomBillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * Filter, which CustomBill to fetch.
     */
    where?: CustomBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomBills to fetch.
     */
    orderBy?: CustomBillOrderByWithRelationInput | CustomBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomBills.
     */
    cursor?: CustomBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomBills.
     */
    distinct?: CustomBillScalarFieldEnum | CustomBillScalarFieldEnum[]
  }

  /**
   * CustomBill findMany
   */
  export type CustomBillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * Filter, which CustomBills to fetch.
     */
    where?: CustomBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomBills to fetch.
     */
    orderBy?: CustomBillOrderByWithRelationInput | CustomBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomBills.
     */
    cursor?: CustomBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomBills.
     */
    skip?: number
    distinct?: CustomBillScalarFieldEnum | CustomBillScalarFieldEnum[]
  }

  /**
   * CustomBill create
   */
  export type CustomBillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomBill.
     */
    data: XOR<CustomBillCreateInput, CustomBillUncheckedCreateInput>
  }

  /**
   * CustomBill createMany
   */
  export type CustomBillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomBills.
     */
    data: CustomBillCreateManyInput | CustomBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomBill createManyAndReturn
   */
  export type CustomBillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * The data used to create many CustomBills.
     */
    data: CustomBillCreateManyInput | CustomBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomBill update
   */
  export type CustomBillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomBill.
     */
    data: XOR<CustomBillUpdateInput, CustomBillUncheckedUpdateInput>
    /**
     * Choose, which CustomBill to update.
     */
    where: CustomBillWhereUniqueInput
  }

  /**
   * CustomBill updateMany
   */
  export type CustomBillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomBills.
     */
    data: XOR<CustomBillUpdateManyMutationInput, CustomBillUncheckedUpdateManyInput>
    /**
     * Filter which CustomBills to update
     */
    where?: CustomBillWhereInput
    /**
     * Limit how many CustomBills to update.
     */
    limit?: number
  }

  /**
   * CustomBill updateManyAndReturn
   */
  export type CustomBillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * The data used to update CustomBills.
     */
    data: XOR<CustomBillUpdateManyMutationInput, CustomBillUncheckedUpdateManyInput>
    /**
     * Filter which CustomBills to update
     */
    where?: CustomBillWhereInput
    /**
     * Limit how many CustomBills to update.
     */
    limit?: number
  }

  /**
   * CustomBill upsert
   */
  export type CustomBillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomBill to update in case it exists.
     */
    where: CustomBillWhereUniqueInput
    /**
     * In case the CustomBill found by the `where` argument doesn't exist, create a new CustomBill with this data.
     */
    create: XOR<CustomBillCreateInput, CustomBillUncheckedCreateInput>
    /**
     * In case the CustomBill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomBillUpdateInput, CustomBillUncheckedUpdateInput>
  }

  /**
   * CustomBill delete
   */
  export type CustomBillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
    /**
     * Filter which CustomBill to delete.
     */
    where: CustomBillWhereUniqueInput
  }

  /**
   * CustomBill deleteMany
   */
  export type CustomBillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomBills to delete
     */
    where?: CustomBillWhereInput
    /**
     * Limit how many CustomBills to delete.
     */
    limit?: number
  }

  /**
   * CustomBill without action
   */
  export type CustomBillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomBill
     */
    select?: CustomBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomBill
     */
    omit?: CustomBillOmit<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    rate: number | null
    deposit: number | null
    total: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    weight: number | null
    rate: number | null
    deposit: number | null
    total: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    date: Date | null
    ph_no: string | null
    address: string | null
    product: string | null
    purity: string | null
    weight: number | null
    rate: number | null
    deposit: number | null
    total: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    ph_no: string | null
    address: string | null
    product: string | null
    purity: string | null
    weight: number | null
    rate: number | null
    deposit: number | null
    total: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    date: number
    ph_no: number
    address: number
    product: number
    purity: number
    weight: number
    rate: number
    deposit: number
    total: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    weight?: true
    rate?: true
    deposit?: true
    total?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    weight?: true
    rate?: true
    deposit?: true
    total?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    date?: true
    ph_no?: true
    address?: true
    product?: true
    purity?: true
    weight?: true
    rate?: true
    deposit?: true
    total?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    date?: true
    ph_no?: true
    address?: true
    product?: true
    purity?: true
    weight?: true
    rate?: true
    deposit?: true
    total?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    date?: true
    ph_no?: true
    address?: true
    product?: true
    purity?: true
    weight?: true
    rate?: true
    deposit?: true
    total?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    date: Date
    ph_no: string
    address: string
    product: string
    purity: string
    weight: number
    rate: number
    deposit: number
    total: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    ph_no?: boolean
    address?: boolean
    product?: boolean
    purity?: boolean
    weight?: boolean
    rate?: boolean
    deposit?: boolean
    total?: boolean
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    ph_no?: boolean
    address?: boolean
    product?: boolean
    purity?: boolean
    weight?: boolean
    rate?: boolean
    deposit?: boolean
    total?: boolean
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    ph_no?: boolean
    address?: boolean
    product?: boolean
    purity?: boolean
    weight?: boolean
    rate?: boolean
    deposit?: boolean
    total?: boolean
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    date?: boolean
    ph_no?: boolean
    address?: boolean
    product?: boolean
    purity?: boolean
    weight?: boolean
    rate?: boolean
    deposit?: boolean
    total?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "ph_no" | "address" | "product" | "purity" | "weight" | "rate" | "deposit" | "total", ExtArgs["result"]["orders"]>

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      ph_no: string
      address: string
      product: string
      purity: string
      weight: number
      rate: number
      deposit: number
      total: number
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly date: FieldRef<"Orders", 'DateTime'>
    readonly ph_no: FieldRef<"Orders", 'String'>
    readonly address: FieldRef<"Orders", 'String'>
    readonly product: FieldRef<"Orders", 'String'>
    readonly purity: FieldRef<"Orders", 'String'>
    readonly weight: FieldRef<"Orders", 'Float'>
    readonly rate: FieldRef<"Orders", 'Float'>
    readonly deposit: FieldRef<"Orders", 'Float'>
    readonly total: FieldRef<"Orders", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SalesScalarFieldEnum: {
    id: 'id',
    email: 'email',
    product: 'product',
    weight: 'weight',
    rate: 'rate',
    labour_cost: 'labour_cost',
    total: 'total',
    date: 'date',
    time: 'time'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const GstSalesScalarFieldEnum: {
    email: 'email',
    element: 'element',
    bill_no: 'bill_no',
    purity: 'purity',
    mode_of_payment: 'mode_of_payment',
    date: 'date',
    weight: 'weight',
    rate: 'rate',
    cost_exc_gst: 'cost_exc_gst',
    cgst: 'cgst',
    sgst: 'sgst',
    total: 'total'
  };

  export type GstSalesScalarFieldEnum = (typeof GstSalesScalarFieldEnum)[keyof typeof GstSalesScalarFieldEnum]


  export const CustomBillScalarFieldEnum: {
    id: 'id',
    email: 'email',
    cost: 'cost',
    quantity: 'quantity',
    total: 'total'
  };

  export type CustomBillScalarFieldEnum = (typeof CustomBillScalarFieldEnum)[keyof typeof CustomBillScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    date: 'date',
    ph_no: 'ph_no',
    address: 'address',
    product: 'product',
    purity: 'purity',
    weight: 'weight',
    rate: 'rate',
    deposit: 'deposit',
    total: 'total'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    id?: IntFilter<"Sales"> | number
    email?: StringFilter<"Sales"> | string
    product?: StringFilter<"Sales"> | string
    weight?: FloatFilter<"Sales"> | number
    rate?: FloatFilter<"Sales"> | number
    labour_cost?: FloatFilter<"Sales"> | number
    total?: FloatFilter<"Sales"> | number
    date?: DateTimeFilter<"Sales"> | Date | string
    time?: DateTimeFilter<"Sales"> | Date | string
  }

  export type SalesOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    product?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    labour_cost?: SortOrder
    total?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    email?: StringFilter<"Sales"> | string
    product?: StringFilter<"Sales"> | string
    weight?: FloatFilter<"Sales"> | number
    rate?: FloatFilter<"Sales"> | number
    labour_cost?: FloatFilter<"Sales"> | number
    total?: FloatFilter<"Sales"> | number
    date?: DateTimeFilter<"Sales"> | Date | string
    time?: DateTimeFilter<"Sales"> | Date | string
  }, "id">

  export type SalesOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    product?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    labour_cost?: SortOrder
    total?: SortOrder
    date?: SortOrder
    time?: SortOrder
    _count?: SalesCountOrderByAggregateInput
    _avg?: SalesAvgOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
    _sum?: SalesSumOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sales"> | number
    email?: StringWithAggregatesFilter<"Sales"> | string
    product?: StringWithAggregatesFilter<"Sales"> | string
    weight?: FloatWithAggregatesFilter<"Sales"> | number
    rate?: FloatWithAggregatesFilter<"Sales"> | number
    labour_cost?: FloatWithAggregatesFilter<"Sales"> | number
    total?: FloatWithAggregatesFilter<"Sales"> | number
    date?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    time?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
  }

  export type GstSalesWhereInput = {
    AND?: GstSalesWhereInput | GstSalesWhereInput[]
    OR?: GstSalesWhereInput[]
    NOT?: GstSalesWhereInput | GstSalesWhereInput[]
    email?: StringFilter<"GstSales"> | string
    element?: StringFilter<"GstSales"> | string
    bill_no?: StringFilter<"GstSales"> | string
    purity?: StringFilter<"GstSales"> | string
    mode_of_payment?: StringFilter<"GstSales"> | string
    date?: DateTimeFilter<"GstSales"> | Date | string
    weight?: FloatFilter<"GstSales"> | number
    rate?: FloatFilter<"GstSales"> | number
    cost_exc_gst?: FloatFilter<"GstSales"> | number
    cgst?: FloatFilter<"GstSales"> | number
    sgst?: FloatFilter<"GstSales"> | number
    total?: FloatFilter<"GstSales"> | number
  }

  export type GstSalesOrderByWithRelationInput = {
    email?: SortOrder
    element?: SortOrder
    bill_no?: SortOrder
    purity?: SortOrder
    mode_of_payment?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    cost_exc_gst?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    total?: SortOrder
  }

  export type GstSalesWhereUniqueInput = Prisma.AtLeast<{
    bill_no?: string
    AND?: GstSalesWhereInput | GstSalesWhereInput[]
    OR?: GstSalesWhereInput[]
    NOT?: GstSalesWhereInput | GstSalesWhereInput[]
    email?: StringFilter<"GstSales"> | string
    element?: StringFilter<"GstSales"> | string
    purity?: StringFilter<"GstSales"> | string
    mode_of_payment?: StringFilter<"GstSales"> | string
    date?: DateTimeFilter<"GstSales"> | Date | string
    weight?: FloatFilter<"GstSales"> | number
    rate?: FloatFilter<"GstSales"> | number
    cost_exc_gst?: FloatFilter<"GstSales"> | number
    cgst?: FloatFilter<"GstSales"> | number
    sgst?: FloatFilter<"GstSales"> | number
    total?: FloatFilter<"GstSales"> | number
  }, "bill_no">

  export type GstSalesOrderByWithAggregationInput = {
    email?: SortOrder
    element?: SortOrder
    bill_no?: SortOrder
    purity?: SortOrder
    mode_of_payment?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    cost_exc_gst?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    total?: SortOrder
    _count?: GstSalesCountOrderByAggregateInput
    _avg?: GstSalesAvgOrderByAggregateInput
    _max?: GstSalesMaxOrderByAggregateInput
    _min?: GstSalesMinOrderByAggregateInput
    _sum?: GstSalesSumOrderByAggregateInput
  }

  export type GstSalesScalarWhereWithAggregatesInput = {
    AND?: GstSalesScalarWhereWithAggregatesInput | GstSalesScalarWhereWithAggregatesInput[]
    OR?: GstSalesScalarWhereWithAggregatesInput[]
    NOT?: GstSalesScalarWhereWithAggregatesInput | GstSalesScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"GstSales"> | string
    element?: StringWithAggregatesFilter<"GstSales"> | string
    bill_no?: StringWithAggregatesFilter<"GstSales"> | string
    purity?: StringWithAggregatesFilter<"GstSales"> | string
    mode_of_payment?: StringWithAggregatesFilter<"GstSales"> | string
    date?: DateTimeWithAggregatesFilter<"GstSales"> | Date | string
    weight?: FloatWithAggregatesFilter<"GstSales"> | number
    rate?: FloatWithAggregatesFilter<"GstSales"> | number
    cost_exc_gst?: FloatWithAggregatesFilter<"GstSales"> | number
    cgst?: FloatWithAggregatesFilter<"GstSales"> | number
    sgst?: FloatWithAggregatesFilter<"GstSales"> | number
    total?: FloatWithAggregatesFilter<"GstSales"> | number
  }

  export type CustomBillWhereInput = {
    AND?: CustomBillWhereInput | CustomBillWhereInput[]
    OR?: CustomBillWhereInput[]
    NOT?: CustomBillWhereInput | CustomBillWhereInput[]
    id?: IntFilter<"CustomBill"> | number
    email?: StringFilter<"CustomBill"> | string
    cost?: FloatFilter<"CustomBill"> | number
    quantity?: IntFilter<"CustomBill"> | number
    total?: FloatFilter<"CustomBill"> | number
  }

  export type CustomBillOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    cost?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type CustomBillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomBillWhereInput | CustomBillWhereInput[]
    OR?: CustomBillWhereInput[]
    NOT?: CustomBillWhereInput | CustomBillWhereInput[]
    email?: StringFilter<"CustomBill"> | string
    cost?: FloatFilter<"CustomBill"> | number
    quantity?: IntFilter<"CustomBill"> | number
    total?: FloatFilter<"CustomBill"> | number
  }, "id">

  export type CustomBillOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    cost?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    _count?: CustomBillCountOrderByAggregateInput
    _avg?: CustomBillAvgOrderByAggregateInput
    _max?: CustomBillMaxOrderByAggregateInput
    _min?: CustomBillMinOrderByAggregateInput
    _sum?: CustomBillSumOrderByAggregateInput
  }

  export type CustomBillScalarWhereWithAggregatesInput = {
    AND?: CustomBillScalarWhereWithAggregatesInput | CustomBillScalarWhereWithAggregatesInput[]
    OR?: CustomBillScalarWhereWithAggregatesInput[]
    NOT?: CustomBillScalarWhereWithAggregatesInput | CustomBillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomBill"> | number
    email?: StringWithAggregatesFilter<"CustomBill"> | string
    cost?: FloatWithAggregatesFilter<"CustomBill"> | number
    quantity?: IntWithAggregatesFilter<"CustomBill"> | number
    total?: FloatWithAggregatesFilter<"CustomBill"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    date?: DateTimeFilter<"Orders"> | Date | string
    ph_no?: StringFilter<"Orders"> | string
    address?: StringFilter<"Orders"> | string
    product?: StringFilter<"Orders"> | string
    purity?: StringFilter<"Orders"> | string
    weight?: FloatFilter<"Orders"> | number
    rate?: FloatFilter<"Orders"> | number
    deposit?: FloatFilter<"Orders"> | number
    total?: FloatFilter<"Orders"> | number
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    ph_no?: SortOrder
    address?: SortOrder
    product?: SortOrder
    purity?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    deposit?: SortOrder
    total?: SortOrder
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    date?: DateTimeFilter<"Orders"> | Date | string
    ph_no?: StringFilter<"Orders"> | string
    address?: StringFilter<"Orders"> | string
    product?: StringFilter<"Orders"> | string
    purity?: StringFilter<"Orders"> | string
    weight?: FloatFilter<"Orders"> | number
    rate?: FloatFilter<"Orders"> | number
    deposit?: FloatFilter<"Orders"> | number
    total?: FloatFilter<"Orders"> | number
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    ph_no?: SortOrder
    address?: SortOrder
    product?: SortOrder
    purity?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    deposit?: SortOrder
    total?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    ph_no?: StringWithAggregatesFilter<"Orders"> | string
    address?: StringWithAggregatesFilter<"Orders"> | string
    product?: StringWithAggregatesFilter<"Orders"> | string
    purity?: StringWithAggregatesFilter<"Orders"> | string
    weight?: FloatWithAggregatesFilter<"Orders"> | number
    rate?: FloatWithAggregatesFilter<"Orders"> | number
    deposit?: FloatWithAggregatesFilter<"Orders"> | number
    total?: FloatWithAggregatesFilter<"Orders"> | number
  }

  export type SalesCreateInput = {
    email: string
    product: string
    weight: number
    rate: number
    labour_cost: number
    total: number
    date: Date | string
    time: Date | string
  }

  export type SalesUncheckedCreateInput = {
    id?: number
    email: string
    product: string
    weight: number
    rate: number
    labour_cost: number
    total: number
    date: Date | string
    time: Date | string
  }

  export type SalesUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    labour_cost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    labour_cost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCreateManyInput = {
    id?: number
    email: string
    product: string
    weight: number
    rate: number
    labour_cost: number
    total: number
    date: Date | string
    time: Date | string
  }

  export type SalesUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    labour_cost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    labour_cost?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GstSalesCreateInput = {
    email: string
    element: string
    bill_no: string
    purity: string
    mode_of_payment: string
    date: Date | string
    weight: number
    rate: number
    cost_exc_gst: number
    cgst: number
    sgst: number
    total: number
  }

  export type GstSalesUncheckedCreateInput = {
    email: string
    element: string
    bill_no: string
    purity: string
    mode_of_payment: string
    date: Date | string
    weight: number
    rate: number
    cost_exc_gst: number
    cgst: number
    sgst: number
    total: number
  }

  export type GstSalesUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    bill_no?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    mode_of_payment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    cost_exc_gst?: FloatFieldUpdateOperationsInput | number
    cgst?: FloatFieldUpdateOperationsInput | number
    sgst?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type GstSalesUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    bill_no?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    mode_of_payment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    cost_exc_gst?: FloatFieldUpdateOperationsInput | number
    cgst?: FloatFieldUpdateOperationsInput | number
    sgst?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type GstSalesCreateManyInput = {
    email: string
    element: string
    bill_no: string
    purity: string
    mode_of_payment: string
    date: Date | string
    weight: number
    rate: number
    cost_exc_gst: number
    cgst: number
    sgst: number
    total: number
  }

  export type GstSalesUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    bill_no?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    mode_of_payment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    cost_exc_gst?: FloatFieldUpdateOperationsInput | number
    cgst?: FloatFieldUpdateOperationsInput | number
    sgst?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type GstSalesUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    element?: StringFieldUpdateOperationsInput | string
    bill_no?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    mode_of_payment?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    cost_exc_gst?: FloatFieldUpdateOperationsInput | number
    cgst?: FloatFieldUpdateOperationsInput | number
    sgst?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomBillCreateInput = {
    email: string
    cost: number
    quantity: number
    total: number
  }

  export type CustomBillUncheckedCreateInput = {
    id?: number
    email: string
    cost: number
    quantity: number
    total: number
  }

  export type CustomBillUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomBillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomBillCreateManyInput = {
    id?: number
    email: string
    cost: number
    quantity: number
    total: number
  }

  export type CustomBillUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomBillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    date: Date | string
    ph_no: string
    address: string
    product: string
    purity: string
    weight: number
    rate: number
    deposit: number
    total: number
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    date: Date | string
    ph_no: string
    address: string
    product: string
    purity: string
    weight: number
    rate: number
    deposit: number
    total: number
  }

  export type OrdersUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ph_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ph_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type OrdersCreateManyInput = {
    id?: number
    date: Date | string
    ph_no: string
    address: string
    product: string
    purity: string
    weight: number
    rate: number
    deposit: number
    total: number
  }

  export type OrdersUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ph_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ph_no?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    purity?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    deposit?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SalesCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    product?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    labour_cost?: SortOrder
    total?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type SalesAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    labour_cost?: SortOrder
    total?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    product?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    labour_cost?: SortOrder
    total?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    product?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    labour_cost?: SortOrder
    total?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type SalesSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    labour_cost?: SortOrder
    total?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GstSalesCountOrderByAggregateInput = {
    email?: SortOrder
    element?: SortOrder
    bill_no?: SortOrder
    purity?: SortOrder
    mode_of_payment?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    cost_exc_gst?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    total?: SortOrder
  }

  export type GstSalesAvgOrderByAggregateInput = {
    weight?: SortOrder
    rate?: SortOrder
    cost_exc_gst?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    total?: SortOrder
  }

  export type GstSalesMaxOrderByAggregateInput = {
    email?: SortOrder
    element?: SortOrder
    bill_no?: SortOrder
    purity?: SortOrder
    mode_of_payment?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    cost_exc_gst?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    total?: SortOrder
  }

  export type GstSalesMinOrderByAggregateInput = {
    email?: SortOrder
    element?: SortOrder
    bill_no?: SortOrder
    purity?: SortOrder
    mode_of_payment?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    cost_exc_gst?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    total?: SortOrder
  }

  export type GstSalesSumOrderByAggregateInput = {
    weight?: SortOrder
    rate?: SortOrder
    cost_exc_gst?: SortOrder
    cgst?: SortOrder
    sgst?: SortOrder
    total?: SortOrder
  }

  export type CustomBillCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    cost?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type CustomBillAvgOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type CustomBillMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    cost?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type CustomBillMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    cost?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type CustomBillSumOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ph_no?: SortOrder
    address?: SortOrder
    product?: SortOrder
    purity?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    deposit?: SortOrder
    total?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    deposit?: SortOrder
    total?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ph_no?: SortOrder
    address?: SortOrder
    product?: SortOrder
    purity?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    deposit?: SortOrder
    total?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ph_no?: SortOrder
    address?: SortOrder
    product?: SortOrder
    purity?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    deposit?: SortOrder
    total?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    rate?: SortOrder
    deposit?: SortOrder
    total?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}