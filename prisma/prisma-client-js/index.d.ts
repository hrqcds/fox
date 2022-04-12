
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string
  register: string
  status: Status
  role: Role
  machineId: string | null
}

/**
 * Model Factory
 * 
 */
export type Factory = {
  id: string
  description: string
}

/**
 * Model Machine
 * 
 */
export type Machine = {
  id: string
  insertBy: string
  factoryId: string | null
  datalogger: boolean
  status: StatusMaquina
}

/**
 * Model Gear
 * 
 */
export type Gear = {
  id: string
  machineId: string | null
}

/**
 * Model GearType
 * 
 */
export type GearType = {
  id: string
  name: string
  description: string
  gearId: string | null
}

/**
 * Model Samples
 * 
 */
export type Samples = {
  id: string
  timestamp: Date
  gearId: string | null
}

/**
 * Model SingleSample
 * 
 */
export type SingleSample = {
  id: string
  value: string
  singleSampleTypeId: string
  samplesId: string | null
}

/**
 * Model SingleSampleType
 * 
 */
export type SingleSampleType = {
  id: string
  sample_name: string
  unity: string
  createBy: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Status: {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  PRODUCAO: 'PRODUCAO',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusMaquina: {
  FUNCIONANDO: 'FUNCIONANDO',
  MANUTENCAO: 'MANUTENCAO',
  DESATIVADA: 'DESATIVADA'
};

export type StatusMaquina = (typeof StatusMaquina)[keyof typeof StatusMaquina]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.factory`: Exposes CRUD operations for the **Factory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factories
    * const factories = await prisma.factory.findMany()
    * ```
    */
  get factory(): Prisma.FactoryDelegate<GlobalReject>;

  /**
   * `prisma.machine`: Exposes CRUD operations for the **Machine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Machines
    * const machines = await prisma.machine.findMany()
    * ```
    */
  get machine(): Prisma.MachineDelegate<GlobalReject>;

  /**
   * `prisma.gear`: Exposes CRUD operations for the **Gear** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gears
    * const gears = await prisma.gear.findMany()
    * ```
    */
  get gear(): Prisma.GearDelegate<GlobalReject>;

  /**
   * `prisma.gearType`: Exposes CRUD operations for the **GearType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GearTypes
    * const gearTypes = await prisma.gearType.findMany()
    * ```
    */
  get gearType(): Prisma.GearTypeDelegate<GlobalReject>;

  /**
   * `prisma.samples`: Exposes CRUD operations for the **Samples** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Samples
    * const samples = await prisma.samples.findMany()
    * ```
    */
  get samples(): Prisma.SamplesDelegate<GlobalReject>;

  /**
   * `prisma.singleSample`: Exposes CRUD operations for the **SingleSample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SingleSamples
    * const singleSamples = await prisma.singleSample.findMany()
    * ```
    */
  get singleSample(): Prisma.SingleSampleDelegate<GlobalReject>;

  /**
   * `prisma.singleSampleType`: Exposes CRUD operations for the **SingleSampleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SingleSampleTypes
    * const singleSampleTypes = await prisma.singleSampleType.findMany()
    * ```
    */
  get singleSampleType(): Prisma.SingleSampleTypeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 3.12.0
   * Query Engine version: 22b822189f46ef0dc5c5b503368d1bee01213980
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Factory: 'Factory',
    Machine: 'Machine',
    Gear: 'Gear',
    GearType: 'GearType',
    Samples: 'Samples',
    SingleSample: 'SingleSample',
    SingleSampleType: 'SingleSampleType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FactoryCountOutputType
   */


  export type FactoryCountOutputType = {
    machine: number
  }

  export type FactoryCountOutputTypeSelect = {
    machine?: boolean
  }

  export type FactoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FactoryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FactoryCountOutputType
    : S extends undefined
    ? never
    : S extends FactoryCountOutputTypeArgs
    ?'include' extends U
    ? FactoryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof FactoryCountOutputType ? FactoryCountOutputType[P] : never
  } 
    : FactoryCountOutputType
  : FactoryCountOutputType




  // Custom InputTypes

  /**
   * FactoryCountOutputType without action
   */
  export type FactoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FactoryCountOutputType
     * 
    **/
    select?: FactoryCountOutputTypeSelect | null
  }



  /**
   * Count Type MachineCountOutputType
   */


  export type MachineCountOutputType = {
    CanBeOperateBy: number
    gears: number
  }

  export type MachineCountOutputTypeSelect = {
    CanBeOperateBy?: boolean
    gears?: boolean
  }

  export type MachineCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MachineCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MachineCountOutputType
    : S extends undefined
    ? never
    : S extends MachineCountOutputTypeArgs
    ?'include' extends U
    ? MachineCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MachineCountOutputType ? MachineCountOutputType[P] : never
  } 
    : MachineCountOutputType
  : MachineCountOutputType




  // Custom InputTypes

  /**
   * MachineCountOutputType without action
   */
  export type MachineCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MachineCountOutputType
     * 
    **/
    select?: MachineCountOutputTypeSelect | null
  }



  /**
   * Count Type GearCountOutputType
   */


  export type GearCountOutputType = {
    samples: number
    gear_type: number
  }

  export type GearCountOutputTypeSelect = {
    samples?: boolean
    gear_type?: boolean
  }

  export type GearCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GearCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GearCountOutputType
    : S extends undefined
    ? never
    : S extends GearCountOutputTypeArgs
    ?'include' extends U
    ? GearCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GearCountOutputType ? GearCountOutputType[P] : never
  } 
    : GearCountOutputType
  : GearCountOutputType




  // Custom InputTypes

  /**
   * GearCountOutputType without action
   */
  export type GearCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GearCountOutputType
     * 
    **/
    select?: GearCountOutputTypeSelect | null
  }



  /**
   * Count Type SamplesCountOutputType
   */


  export type SamplesCountOutputType = {
    single_sample: number
  }

  export type SamplesCountOutputTypeSelect = {
    single_sample?: boolean
  }

  export type SamplesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SamplesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SamplesCountOutputType
    : S extends undefined
    ? never
    : S extends SamplesCountOutputTypeArgs
    ?'include' extends U
    ? SamplesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SamplesCountOutputType ? SamplesCountOutputType[P] : never
  } 
    : SamplesCountOutputType
  : SamplesCountOutputType




  // Custom InputTypes

  /**
   * SamplesCountOutputType without action
   */
  export type SamplesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SamplesCountOutputType
     * 
    **/
    select?: SamplesCountOutputTypeSelect | null
  }



  /**
   * Count Type SingleSampleTypeCountOutputType
   */


  export type SingleSampleTypeCountOutputType = {
    SingleSample: number
  }

  export type SingleSampleTypeCountOutputTypeSelect = {
    SingleSample?: boolean
  }

  export type SingleSampleTypeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SingleSampleTypeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SingleSampleTypeCountOutputType
    : S extends undefined
    ? never
    : S extends SingleSampleTypeCountOutputTypeArgs
    ?'include' extends U
    ? SingleSampleTypeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SingleSampleTypeCountOutputType ? SingleSampleTypeCountOutputType[P] : never
  } 
    : SingleSampleTypeCountOutputType
  : SingleSampleTypeCountOutputType




  // Custom InputTypes

  /**
   * SingleSampleTypeCountOutputType without action
   */
  export type SingleSampleTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleTypeCountOutputType
     * 
    **/
    select?: SingleSampleTypeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    register: string | null
    status: Status | null
    role: Role | null
    machineId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    register: string | null
    status: Status | null
    role: Role | null
    machineId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    register: number
    status: number
    role: number
    machineId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    register?: true
    status?: true
    role?: true
    machineId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    register?: true
    status?: true
    role?: true
    machineId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    register?: true
    status?: true
    role?: true
    machineId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    register: string
    status: Status
    role: Role
    machineId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    register?: boolean
    status?: boolean
    role?: boolean
    machineId?: boolean
    Machine?: boolean | MachineArgs
  }

  export type UserInclude = {
    Machine?: boolean | MachineArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Machine' ? MachineGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Machine' ? MachineGetPayload<S['select'][P]> | null :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Machine<T extends MachineArgs = {}>(args?: Subset<T, MachineArgs>): CheckSelect<T, Prisma__MachineClient<Machine | null >, Prisma__MachineClient<MachineGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Factory
   */


  export type AggregateFactory = {
    _count: FactoryCountAggregateOutputType | null
    _min: FactoryMinAggregateOutputType | null
    _max: FactoryMaxAggregateOutputType | null
  }

  export type FactoryMinAggregateOutputType = {
    id: string | null
    description: string | null
  }

  export type FactoryMaxAggregateOutputType = {
    id: string | null
    description: string | null
  }

  export type FactoryCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type FactoryMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type FactoryMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type FactoryCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type FactoryAggregateArgs = {
    /**
     * Filter which Factory to aggregate.
     * 
    **/
    where?: FactoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factories to fetch.
     * 
    **/
    orderBy?: Enumerable<FactoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FactoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Factories
    **/
    _count?: true | FactoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactoryMaxAggregateInputType
  }

  export type GetFactoryAggregateType<T extends FactoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFactory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactory[P]>
      : GetScalarType<T[P], AggregateFactory[P]>
  }




  export type FactoryGroupByArgs = {
    where?: FactoryWhereInput
    orderBy?: Enumerable<FactoryOrderByWithAggregationInput>
    by: Array<FactoryScalarFieldEnum>
    having?: FactoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactoryCountAggregateInputType | true
    _min?: FactoryMinAggregateInputType
    _max?: FactoryMaxAggregateInputType
  }


  export type FactoryGroupByOutputType = {
    id: string
    description: string
    _count: FactoryCountAggregateOutputType | null
    _min: FactoryMinAggregateOutputType | null
    _max: FactoryMaxAggregateOutputType | null
  }

  type GetFactoryGroupByPayload<T extends FactoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FactoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactoryGroupByOutputType[P]>
            : GetScalarType<T[P], FactoryGroupByOutputType[P]>
        }
      >
    >


  export type FactorySelect = {
    id?: boolean
    description?: boolean
    machine?: boolean | MachineFindManyArgs
    _count?: boolean | FactoryCountOutputTypeArgs
  }

  export type FactoryInclude = {
    machine?: boolean | MachineFindManyArgs
    _count?: boolean | FactoryCountOutputTypeArgs
  }

  export type FactoryGetPayload<
    S extends boolean | null | undefined | FactoryArgs,
    U = keyof S
      > = S extends true
        ? Factory
    : S extends undefined
    ? never
    : S extends FactoryArgs | FactoryFindManyArgs
    ?'include' extends U
    ? Factory  & {
    [P in TrueKeys<S['include']>]:
        P extends 'machine' ? Array < MachineGetPayload<S['include'][P]>>  :
        P extends '_count' ? FactoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'machine' ? Array < MachineGetPayload<S['select'][P]>>  :
        P extends '_count' ? FactoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Factory ? Factory[P] : never
  } 
    : Factory
  : Factory


  type FactoryCountArgs = Merge<
    Omit<FactoryFindManyArgs, 'select' | 'include'> & {
      select?: FactoryCountAggregateInputType | true
    }
  >

  export interface FactoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Factory that matches the filter.
     * @param {FactoryFindUniqueArgs} args - Arguments to find a Factory
     * @example
     * // Get one Factory
     * const factory = await prisma.factory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FactoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FactoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Factory'> extends True ? CheckSelect<T, Prisma__FactoryClient<Factory>, Prisma__FactoryClient<FactoryGetPayload<T>>> : CheckSelect<T, Prisma__FactoryClient<Factory | null >, Prisma__FactoryClient<FactoryGetPayload<T> | null >>

    /**
     * Find the first Factory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryFindFirstArgs} args - Arguments to find a Factory
     * @example
     * // Get one Factory
     * const factory = await prisma.factory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FactoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FactoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Factory'> extends True ? CheckSelect<T, Prisma__FactoryClient<Factory>, Prisma__FactoryClient<FactoryGetPayload<T>>> : CheckSelect<T, Prisma__FactoryClient<Factory | null >, Prisma__FactoryClient<FactoryGetPayload<T> | null >>

    /**
     * Find zero or more Factories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factories
     * const factories = await prisma.factory.findMany()
     * 
     * // Get first 10 Factories
     * const factories = await prisma.factory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factoryWithIdOnly = await prisma.factory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FactoryFindManyArgs>(
      args?: SelectSubset<T, FactoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Factory>>, PrismaPromise<Array<FactoryGetPayload<T>>>>

    /**
     * Create a Factory.
     * @param {FactoryCreateArgs} args - Arguments to create a Factory.
     * @example
     * // Create one Factory
     * const Factory = await prisma.factory.create({
     *   data: {
     *     // ... data to create a Factory
     *   }
     * })
     * 
    **/
    create<T extends FactoryCreateArgs>(
      args: SelectSubset<T, FactoryCreateArgs>
    ): CheckSelect<T, Prisma__FactoryClient<Factory>, Prisma__FactoryClient<FactoryGetPayload<T>>>

    /**
     * Create many Factories.
     *     @param {FactoryCreateManyArgs} args - Arguments to create many Factories.
     *     @example
     *     // Create many Factories
     *     const factory = await prisma.factory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FactoryCreateManyArgs>(
      args?: SelectSubset<T, FactoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Factory.
     * @param {FactoryDeleteArgs} args - Arguments to delete one Factory.
     * @example
     * // Delete one Factory
     * const Factory = await prisma.factory.delete({
     *   where: {
     *     // ... filter to delete one Factory
     *   }
     * })
     * 
    **/
    delete<T extends FactoryDeleteArgs>(
      args: SelectSubset<T, FactoryDeleteArgs>
    ): CheckSelect<T, Prisma__FactoryClient<Factory>, Prisma__FactoryClient<FactoryGetPayload<T>>>

    /**
     * Update one Factory.
     * @param {FactoryUpdateArgs} args - Arguments to update one Factory.
     * @example
     * // Update one Factory
     * const factory = await prisma.factory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FactoryUpdateArgs>(
      args: SelectSubset<T, FactoryUpdateArgs>
    ): CheckSelect<T, Prisma__FactoryClient<Factory>, Prisma__FactoryClient<FactoryGetPayload<T>>>

    /**
     * Delete zero or more Factories.
     * @param {FactoryDeleteManyArgs} args - Arguments to filter Factories to delete.
     * @example
     * // Delete a few Factories
     * const { count } = await prisma.factory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FactoryDeleteManyArgs>(
      args?: SelectSubset<T, FactoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factories
     * const factory = await prisma.factory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FactoryUpdateManyArgs>(
      args: SelectSubset<T, FactoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Factory.
     * @param {FactoryUpsertArgs} args - Arguments to update or create a Factory.
     * @example
     * // Update or create a Factory
     * const factory = await prisma.factory.upsert({
     *   create: {
     *     // ... data to create a Factory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factory we want to update
     *   }
     * })
    **/
    upsert<T extends FactoryUpsertArgs>(
      args: SelectSubset<T, FactoryUpsertArgs>
    ): CheckSelect<T, Prisma__FactoryClient<Factory>, Prisma__FactoryClient<FactoryGetPayload<T>>>

    /**
     * Find zero or more Factories that matches the filter.
     * @param {FactoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const factory = await prisma.factory.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FactoryFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Factory.
     * @param {FactoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const factory = await prisma.factory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FactoryAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Factories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryCountArgs} args - Arguments to filter Factories to count.
     * @example
     * // Count the number of Factories
     * const count = await prisma.factory.count({
     *   where: {
     *     // ... the filter for the Factories we want to count
     *   }
     * })
    **/
    count<T extends FactoryCountArgs>(
      args?: Subset<T, FactoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FactoryAggregateArgs>(args: Subset<T, FactoryAggregateArgs>): PrismaPromise<GetFactoryAggregateType<T>>

    /**
     * Group by Factory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryGroupByArgs} args - Group by arguments.
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
      T extends FactoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactoryGroupByArgs['orderBy'] }
        : { orderBy?: FactoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FactoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FactoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    machine<T extends MachineFindManyArgs = {}>(args?: Subset<T, MachineFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Machine>>, PrismaPromise<Array<MachineGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Factory findUnique
   */
  export type FactoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Factory
     * 
    **/
    select?: FactorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FactoryInclude | null
    /**
     * Throw an Error if a Factory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Factory to fetch.
     * 
    **/
    where: FactoryWhereUniqueInput
  }


  /**
   * Factory findFirst
   */
  export type FactoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Factory
     * 
    **/
    select?: FactorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FactoryInclude | null
    /**
     * Throw an Error if a Factory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Factory to fetch.
     * 
    **/
    where?: FactoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factories to fetch.
     * 
    **/
    orderBy?: Enumerable<FactoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factories.
     * 
    **/
    cursor?: FactoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factories.
     * 
    **/
    distinct?: Enumerable<FactoryScalarFieldEnum>
  }


  /**
   * Factory findMany
   */
  export type FactoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Factory
     * 
    **/
    select?: FactorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FactoryInclude | null
    /**
     * Filter, which Factories to fetch.
     * 
    **/
    where?: FactoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factories to fetch.
     * 
    **/
    orderBy?: Enumerable<FactoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Factories.
     * 
    **/
    cursor?: FactoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FactoryScalarFieldEnum>
  }


  /**
   * Factory create
   */
  export type FactoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Factory
     * 
    **/
    select?: FactorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FactoryInclude | null
    /**
     * The data needed to create a Factory.
     * 
    **/
    data: XOR<FactoryCreateInput, FactoryUncheckedCreateInput>
  }


  /**
   * Factory createMany
   */
  export type FactoryCreateManyArgs = {
    /**
     * The data used to create many Factories.
     * 
    **/
    data: Enumerable<FactoryCreateManyInput>
  }


  /**
   * Factory update
   */
  export type FactoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Factory
     * 
    **/
    select?: FactorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FactoryInclude | null
    /**
     * The data needed to update a Factory.
     * 
    **/
    data: XOR<FactoryUpdateInput, FactoryUncheckedUpdateInput>
    /**
     * Choose, which Factory to update.
     * 
    **/
    where: FactoryWhereUniqueInput
  }


  /**
   * Factory updateMany
   */
  export type FactoryUpdateManyArgs = {
    /**
     * The data used to update Factories.
     * 
    **/
    data: XOR<FactoryUpdateManyMutationInput, FactoryUncheckedUpdateManyInput>
    /**
     * Filter which Factories to update
     * 
    **/
    where?: FactoryWhereInput
  }


  /**
   * Factory upsert
   */
  export type FactoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Factory
     * 
    **/
    select?: FactorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FactoryInclude | null
    /**
     * The filter to search for the Factory to update in case it exists.
     * 
    **/
    where: FactoryWhereUniqueInput
    /**
     * In case the Factory found by the `where` argument doesn't exist, create a new Factory with this data.
     * 
    **/
    create: XOR<FactoryCreateInput, FactoryUncheckedCreateInput>
    /**
     * In case the Factory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FactoryUpdateInput, FactoryUncheckedUpdateInput>
  }


  /**
   * Factory delete
   */
  export type FactoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Factory
     * 
    **/
    select?: FactorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FactoryInclude | null
    /**
     * Filter which Factory to delete.
     * 
    **/
    where: FactoryWhereUniqueInput
  }


  /**
   * Factory deleteMany
   */
  export type FactoryDeleteManyArgs = {
    /**
     * Filter which Factories to delete
     * 
    **/
    where?: FactoryWhereInput
  }


  /**
   * Factory findRaw
   */
  export type FactoryFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Factory aggregateRaw
   */
  export type FactoryAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Factory without action
   */
  export type FactoryArgs = {
    /**
     * Select specific fields to fetch from the Factory
     * 
    **/
    select?: FactorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FactoryInclude | null
  }



  /**
   * Model Machine
   */


  export type AggregateMachine = {
    _count: MachineCountAggregateOutputType | null
    _min: MachineMinAggregateOutputType | null
    _max: MachineMaxAggregateOutputType | null
  }

  export type MachineMinAggregateOutputType = {
    id: string | null
    insertBy: string | null
    factoryId: string | null
    datalogger: boolean | null
    status: StatusMaquina | null
  }

  export type MachineMaxAggregateOutputType = {
    id: string | null
    insertBy: string | null
    factoryId: string | null
    datalogger: boolean | null
    status: StatusMaquina | null
  }

  export type MachineCountAggregateOutputType = {
    id: number
    insertBy: number
    factoryId: number
    datalogger: number
    status: number
    _all: number
  }


  export type MachineMinAggregateInputType = {
    id?: true
    insertBy?: true
    factoryId?: true
    datalogger?: true
    status?: true
  }

  export type MachineMaxAggregateInputType = {
    id?: true
    insertBy?: true
    factoryId?: true
    datalogger?: true
    status?: true
  }

  export type MachineCountAggregateInputType = {
    id?: true
    insertBy?: true
    factoryId?: true
    datalogger?: true
    status?: true
    _all?: true
  }

  export type MachineAggregateArgs = {
    /**
     * Filter which Machine to aggregate.
     * 
    **/
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     * 
    **/
    orderBy?: Enumerable<MachineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Machines
    **/
    _count?: true | MachineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineMaxAggregateInputType
  }

  export type GetMachineAggregateType<T extends MachineAggregateArgs> = {
        [P in keyof T & keyof AggregateMachine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachine[P]>
      : GetScalarType<T[P], AggregateMachine[P]>
  }




  export type MachineGroupByArgs = {
    where?: MachineWhereInput
    orderBy?: Enumerable<MachineOrderByWithAggregationInput>
    by: Array<MachineScalarFieldEnum>
    having?: MachineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineCountAggregateInputType | true
    _min?: MachineMinAggregateInputType
    _max?: MachineMaxAggregateInputType
  }


  export type MachineGroupByOutputType = {
    id: string
    insertBy: string
    factoryId: string | null
    datalogger: boolean
    status: StatusMaquina
    _count: MachineCountAggregateOutputType | null
    _min: MachineMinAggregateOutputType | null
    _max: MachineMaxAggregateOutputType | null
  }

  type GetMachineGroupByPayload<T extends MachineGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MachineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineGroupByOutputType[P]>
            : GetScalarType<T[P], MachineGroupByOutputType[P]>
        }
      >
    >


  export type MachineSelect = {
    id?: boolean
    insertBy?: boolean
    CanBeOperateBy?: boolean | UserFindManyArgs
    gears?: boolean | GearFindManyArgs
    factoryId?: boolean
    Factory?: boolean | FactoryArgs
    datalogger?: boolean
    status?: boolean
    _count?: boolean | MachineCountOutputTypeArgs
  }

  export type MachineInclude = {
    CanBeOperateBy?: boolean | UserFindManyArgs
    gears?: boolean | GearFindManyArgs
    Factory?: boolean | FactoryArgs
    _count?: boolean | MachineCountOutputTypeArgs
  }

  export type MachineGetPayload<
    S extends boolean | null | undefined | MachineArgs,
    U = keyof S
      > = S extends true
        ? Machine
    : S extends undefined
    ? never
    : S extends MachineArgs | MachineFindManyArgs
    ?'include' extends U
    ? Machine  & {
    [P in TrueKeys<S['include']>]:
        P extends 'CanBeOperateBy' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'gears' ? Array < GearGetPayload<S['include'][P]>>  :
        P extends 'Factory' ? FactoryGetPayload<S['include'][P]> | null :
        P extends '_count' ? MachineCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'CanBeOperateBy' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'gears' ? Array < GearGetPayload<S['select'][P]>>  :
        P extends 'Factory' ? FactoryGetPayload<S['select'][P]> | null :
        P extends '_count' ? MachineCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Machine ? Machine[P] : never
  } 
    : Machine
  : Machine


  type MachineCountArgs = Merge<
    Omit<MachineFindManyArgs, 'select' | 'include'> & {
      select?: MachineCountAggregateInputType | true
    }
  >

  export interface MachineDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Machine that matches the filter.
     * @param {MachineFindUniqueArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MachineFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MachineFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Machine'> extends True ? CheckSelect<T, Prisma__MachineClient<Machine>, Prisma__MachineClient<MachineGetPayload<T>>> : CheckSelect<T, Prisma__MachineClient<Machine | null >, Prisma__MachineClient<MachineGetPayload<T> | null >>

    /**
     * Find the first Machine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindFirstArgs} args - Arguments to find a Machine
     * @example
     * // Get one Machine
     * const machine = await prisma.machine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MachineFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MachineFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Machine'> extends True ? CheckSelect<T, Prisma__MachineClient<Machine>, Prisma__MachineClient<MachineGetPayload<T>>> : CheckSelect<T, Prisma__MachineClient<Machine | null >, Prisma__MachineClient<MachineGetPayload<T> | null >>

    /**
     * Find zero or more Machines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Machines
     * const machines = await prisma.machine.findMany()
     * 
     * // Get first 10 Machines
     * const machines = await prisma.machine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machineWithIdOnly = await prisma.machine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MachineFindManyArgs>(
      args?: SelectSubset<T, MachineFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Machine>>, PrismaPromise<Array<MachineGetPayload<T>>>>

    /**
     * Create a Machine.
     * @param {MachineCreateArgs} args - Arguments to create a Machine.
     * @example
     * // Create one Machine
     * const Machine = await prisma.machine.create({
     *   data: {
     *     // ... data to create a Machine
     *   }
     * })
     * 
    **/
    create<T extends MachineCreateArgs>(
      args: SelectSubset<T, MachineCreateArgs>
    ): CheckSelect<T, Prisma__MachineClient<Machine>, Prisma__MachineClient<MachineGetPayload<T>>>

    /**
     * Create many Machines.
     *     @param {MachineCreateManyArgs} args - Arguments to create many Machines.
     *     @example
     *     // Create many Machines
     *     const machine = await prisma.machine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MachineCreateManyArgs>(
      args?: SelectSubset<T, MachineCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Machine.
     * @param {MachineDeleteArgs} args - Arguments to delete one Machine.
     * @example
     * // Delete one Machine
     * const Machine = await prisma.machine.delete({
     *   where: {
     *     // ... filter to delete one Machine
     *   }
     * })
     * 
    **/
    delete<T extends MachineDeleteArgs>(
      args: SelectSubset<T, MachineDeleteArgs>
    ): CheckSelect<T, Prisma__MachineClient<Machine>, Prisma__MachineClient<MachineGetPayload<T>>>

    /**
     * Update one Machine.
     * @param {MachineUpdateArgs} args - Arguments to update one Machine.
     * @example
     * // Update one Machine
     * const machine = await prisma.machine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MachineUpdateArgs>(
      args: SelectSubset<T, MachineUpdateArgs>
    ): CheckSelect<T, Prisma__MachineClient<Machine>, Prisma__MachineClient<MachineGetPayload<T>>>

    /**
     * Delete zero or more Machines.
     * @param {MachineDeleteManyArgs} args - Arguments to filter Machines to delete.
     * @example
     * // Delete a few Machines
     * const { count } = await prisma.machine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MachineDeleteManyArgs>(
      args?: SelectSubset<T, MachineDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Machines
     * const machine = await prisma.machine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MachineUpdateManyArgs>(
      args: SelectSubset<T, MachineUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Machine.
     * @param {MachineUpsertArgs} args - Arguments to update or create a Machine.
     * @example
     * // Update or create a Machine
     * const machine = await prisma.machine.upsert({
     *   create: {
     *     // ... data to create a Machine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Machine we want to update
     *   }
     * })
    **/
    upsert<T extends MachineUpsertArgs>(
      args: SelectSubset<T, MachineUpsertArgs>
    ): CheckSelect<T, Prisma__MachineClient<Machine>, Prisma__MachineClient<MachineGetPayload<T>>>

    /**
     * Find zero or more Machines that matches the filter.
     * @param {MachineFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const machine = await prisma.machine.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MachineFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Machine.
     * @param {MachineAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const machine = await prisma.machine.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MachineAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Machines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineCountArgs} args - Arguments to filter Machines to count.
     * @example
     * // Count the number of Machines
     * const count = await prisma.machine.count({
     *   where: {
     *     // ... the filter for the Machines we want to count
     *   }
     * })
    **/
    count<T extends MachineCountArgs>(
      args?: Subset<T, MachineCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Machine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MachineAggregateArgs>(args: Subset<T, MachineAggregateArgs>): PrismaPromise<GetMachineAggregateType<T>>

    /**
     * Group by Machine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineGroupByArgs} args - Group by arguments.
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
      T extends MachineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineGroupByArgs['orderBy'] }
        : { orderBy?: MachineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MachineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Machine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MachineClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CanBeOperateBy<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    gears<T extends GearFindManyArgs = {}>(args?: Subset<T, GearFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Gear>>, PrismaPromise<Array<GearGetPayload<T>>>>;

    Factory<T extends FactoryArgs = {}>(args?: Subset<T, FactoryArgs>): CheckSelect<T, Prisma__FactoryClient<Factory | null >, Prisma__FactoryClient<FactoryGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Machine findUnique
   */
  export type MachineFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Machine
     * 
    **/
    select?: MachineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MachineInclude | null
    /**
     * Throw an Error if a Machine can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Machine to fetch.
     * 
    **/
    where: MachineWhereUniqueInput
  }


  /**
   * Machine findFirst
   */
  export type MachineFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Machine
     * 
    **/
    select?: MachineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MachineInclude | null
    /**
     * Throw an Error if a Machine can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Machine to fetch.
     * 
    **/
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     * 
    **/
    orderBy?: Enumerable<MachineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Machines.
     * 
    **/
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Machines.
     * 
    **/
    distinct?: Enumerable<MachineScalarFieldEnum>
  }


  /**
   * Machine findMany
   */
  export type MachineFindManyArgs = {
    /**
     * Select specific fields to fetch from the Machine
     * 
    **/
    select?: MachineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MachineInclude | null
    /**
     * Filter, which Machines to fetch.
     * 
    **/
    where?: MachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Machines to fetch.
     * 
    **/
    orderBy?: Enumerable<MachineOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Machines.
     * 
    **/
    cursor?: MachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Machines from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Machines.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MachineScalarFieldEnum>
  }


  /**
   * Machine create
   */
  export type MachineCreateArgs = {
    /**
     * Select specific fields to fetch from the Machine
     * 
    **/
    select?: MachineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MachineInclude | null
    /**
     * The data needed to create a Machine.
     * 
    **/
    data: XOR<MachineCreateInput, MachineUncheckedCreateInput>
  }


  /**
   * Machine createMany
   */
  export type MachineCreateManyArgs = {
    /**
     * The data used to create many Machines.
     * 
    **/
    data: Enumerable<MachineCreateManyInput>
  }


  /**
   * Machine update
   */
  export type MachineUpdateArgs = {
    /**
     * Select specific fields to fetch from the Machine
     * 
    **/
    select?: MachineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MachineInclude | null
    /**
     * The data needed to update a Machine.
     * 
    **/
    data: XOR<MachineUpdateInput, MachineUncheckedUpdateInput>
    /**
     * Choose, which Machine to update.
     * 
    **/
    where: MachineWhereUniqueInput
  }


  /**
   * Machine updateMany
   */
  export type MachineUpdateManyArgs = {
    /**
     * The data used to update Machines.
     * 
    **/
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyInput>
    /**
     * Filter which Machines to update
     * 
    **/
    where?: MachineWhereInput
  }


  /**
   * Machine upsert
   */
  export type MachineUpsertArgs = {
    /**
     * Select specific fields to fetch from the Machine
     * 
    **/
    select?: MachineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MachineInclude | null
    /**
     * The filter to search for the Machine to update in case it exists.
     * 
    **/
    where: MachineWhereUniqueInput
    /**
     * In case the Machine found by the `where` argument doesn't exist, create a new Machine with this data.
     * 
    **/
    create: XOR<MachineCreateInput, MachineUncheckedCreateInput>
    /**
     * In case the Machine was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MachineUpdateInput, MachineUncheckedUpdateInput>
  }


  /**
   * Machine delete
   */
  export type MachineDeleteArgs = {
    /**
     * Select specific fields to fetch from the Machine
     * 
    **/
    select?: MachineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MachineInclude | null
    /**
     * Filter which Machine to delete.
     * 
    **/
    where: MachineWhereUniqueInput
  }


  /**
   * Machine deleteMany
   */
  export type MachineDeleteManyArgs = {
    /**
     * Filter which Machines to delete
     * 
    **/
    where?: MachineWhereInput
  }


  /**
   * Machine findRaw
   */
  export type MachineFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Machine aggregateRaw
   */
  export type MachineAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Machine without action
   */
  export type MachineArgs = {
    /**
     * Select specific fields to fetch from the Machine
     * 
    **/
    select?: MachineSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MachineInclude | null
  }



  /**
   * Model Gear
   */


  export type AggregateGear = {
    _count: GearCountAggregateOutputType | null
    _min: GearMinAggregateOutputType | null
    _max: GearMaxAggregateOutputType | null
  }

  export type GearMinAggregateOutputType = {
    id: string | null
    machineId: string | null
  }

  export type GearMaxAggregateOutputType = {
    id: string | null
    machineId: string | null
  }

  export type GearCountAggregateOutputType = {
    id: number
    machineId: number
    _all: number
  }


  export type GearMinAggregateInputType = {
    id?: true
    machineId?: true
  }

  export type GearMaxAggregateInputType = {
    id?: true
    machineId?: true
  }

  export type GearCountAggregateInputType = {
    id?: true
    machineId?: true
    _all?: true
  }

  export type GearAggregateArgs = {
    /**
     * Filter which Gear to aggregate.
     * 
    **/
    where?: GearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gears to fetch.
     * 
    **/
    orderBy?: Enumerable<GearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gears from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gears.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gears
    **/
    _count?: true | GearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GearMaxAggregateInputType
  }

  export type GetGearAggregateType<T extends GearAggregateArgs> = {
        [P in keyof T & keyof AggregateGear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGear[P]>
      : GetScalarType<T[P], AggregateGear[P]>
  }




  export type GearGroupByArgs = {
    where?: GearWhereInput
    orderBy?: Enumerable<GearOrderByWithAggregationInput>
    by: Array<GearScalarFieldEnum>
    having?: GearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GearCountAggregateInputType | true
    _min?: GearMinAggregateInputType
    _max?: GearMaxAggregateInputType
  }


  export type GearGroupByOutputType = {
    id: string
    machineId: string | null
    _count: GearCountAggregateOutputType | null
    _min: GearMinAggregateOutputType | null
    _max: GearMaxAggregateOutputType | null
  }

  type GetGearGroupByPayload<T extends GearGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GearGroupByOutputType[P]>
            : GetScalarType<T[P], GearGroupByOutputType[P]>
        }
      >
    >


  export type GearSelect = {
    id?: boolean
    machine?: boolean | MachineArgs
    machineId?: boolean
    samples?: boolean | SamplesFindManyArgs
    gear_type?: boolean | GearTypeFindManyArgs
    _count?: boolean | GearCountOutputTypeArgs
  }

  export type GearInclude = {
    machine?: boolean | MachineArgs
    samples?: boolean | SamplesFindManyArgs
    gear_type?: boolean | GearTypeFindManyArgs
    _count?: boolean | GearCountOutputTypeArgs
  }

  export type GearGetPayload<
    S extends boolean | null | undefined | GearArgs,
    U = keyof S
      > = S extends true
        ? Gear
    : S extends undefined
    ? never
    : S extends GearArgs | GearFindManyArgs
    ?'include' extends U
    ? Gear  & {
    [P in TrueKeys<S['include']>]:
        P extends 'machine' ? MachineGetPayload<S['include'][P]> | null :
        P extends 'samples' ? Array < SamplesGetPayload<S['include'][P]>>  :
        P extends 'gear_type' ? Array < GearTypeGetPayload<S['include'][P]>>  :
        P extends '_count' ? GearCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'machine' ? MachineGetPayload<S['select'][P]> | null :
        P extends 'samples' ? Array < SamplesGetPayload<S['select'][P]>>  :
        P extends 'gear_type' ? Array < GearTypeGetPayload<S['select'][P]>>  :
        P extends '_count' ? GearCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Gear ? Gear[P] : never
  } 
    : Gear
  : Gear


  type GearCountArgs = Merge<
    Omit<GearFindManyArgs, 'select' | 'include'> & {
      select?: GearCountAggregateInputType | true
    }
  >

  export interface GearDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Gear that matches the filter.
     * @param {GearFindUniqueArgs} args - Arguments to find a Gear
     * @example
     * // Get one Gear
     * const gear = await prisma.gear.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GearFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GearFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Gear'> extends True ? CheckSelect<T, Prisma__GearClient<Gear>, Prisma__GearClient<GearGetPayload<T>>> : CheckSelect<T, Prisma__GearClient<Gear | null >, Prisma__GearClient<GearGetPayload<T> | null >>

    /**
     * Find the first Gear that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearFindFirstArgs} args - Arguments to find a Gear
     * @example
     * // Get one Gear
     * const gear = await prisma.gear.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GearFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GearFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Gear'> extends True ? CheckSelect<T, Prisma__GearClient<Gear>, Prisma__GearClient<GearGetPayload<T>>> : CheckSelect<T, Prisma__GearClient<Gear | null >, Prisma__GearClient<GearGetPayload<T> | null >>

    /**
     * Find zero or more Gears that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gears
     * const gears = await prisma.gear.findMany()
     * 
     * // Get first 10 Gears
     * const gears = await prisma.gear.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gearWithIdOnly = await prisma.gear.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GearFindManyArgs>(
      args?: SelectSubset<T, GearFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Gear>>, PrismaPromise<Array<GearGetPayload<T>>>>

    /**
     * Create a Gear.
     * @param {GearCreateArgs} args - Arguments to create a Gear.
     * @example
     * // Create one Gear
     * const Gear = await prisma.gear.create({
     *   data: {
     *     // ... data to create a Gear
     *   }
     * })
     * 
    **/
    create<T extends GearCreateArgs>(
      args: SelectSubset<T, GearCreateArgs>
    ): CheckSelect<T, Prisma__GearClient<Gear>, Prisma__GearClient<GearGetPayload<T>>>

    /**
     * Create many Gears.
     *     @param {GearCreateManyArgs} args - Arguments to create many Gears.
     *     @example
     *     // Create many Gears
     *     const gear = await prisma.gear.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GearCreateManyArgs>(
      args?: SelectSubset<T, GearCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Gear.
     * @param {GearDeleteArgs} args - Arguments to delete one Gear.
     * @example
     * // Delete one Gear
     * const Gear = await prisma.gear.delete({
     *   where: {
     *     // ... filter to delete one Gear
     *   }
     * })
     * 
    **/
    delete<T extends GearDeleteArgs>(
      args: SelectSubset<T, GearDeleteArgs>
    ): CheckSelect<T, Prisma__GearClient<Gear>, Prisma__GearClient<GearGetPayload<T>>>

    /**
     * Update one Gear.
     * @param {GearUpdateArgs} args - Arguments to update one Gear.
     * @example
     * // Update one Gear
     * const gear = await prisma.gear.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GearUpdateArgs>(
      args: SelectSubset<T, GearUpdateArgs>
    ): CheckSelect<T, Prisma__GearClient<Gear>, Prisma__GearClient<GearGetPayload<T>>>

    /**
     * Delete zero or more Gears.
     * @param {GearDeleteManyArgs} args - Arguments to filter Gears to delete.
     * @example
     * // Delete a few Gears
     * const { count } = await prisma.gear.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GearDeleteManyArgs>(
      args?: SelectSubset<T, GearDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gears
     * const gear = await prisma.gear.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GearUpdateManyArgs>(
      args: SelectSubset<T, GearUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Gear.
     * @param {GearUpsertArgs} args - Arguments to update or create a Gear.
     * @example
     * // Update or create a Gear
     * const gear = await prisma.gear.upsert({
     *   create: {
     *     // ... data to create a Gear
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gear we want to update
     *   }
     * })
    **/
    upsert<T extends GearUpsertArgs>(
      args: SelectSubset<T, GearUpsertArgs>
    ): CheckSelect<T, Prisma__GearClient<Gear>, Prisma__GearClient<GearGetPayload<T>>>

    /**
     * Find zero or more Gears that matches the filter.
     * @param {GearFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const gear = await prisma.gear.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GearFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Gear.
     * @param {GearAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const gear = await prisma.gear.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GearAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Gears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearCountArgs} args - Arguments to filter Gears to count.
     * @example
     * // Count the number of Gears
     * const count = await prisma.gear.count({
     *   where: {
     *     // ... the filter for the Gears we want to count
     *   }
     * })
    **/
    count<T extends GearCountArgs>(
      args?: Subset<T, GearCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GearAggregateArgs>(args: Subset<T, GearAggregateArgs>): PrismaPromise<GetGearAggregateType<T>>

    /**
     * Group by Gear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearGroupByArgs} args - Group by arguments.
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
      T extends GearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GearGroupByArgs['orderBy'] }
        : { orderBy?: GearGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGearGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gear.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GearClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    machine<T extends MachineArgs = {}>(args?: Subset<T, MachineArgs>): CheckSelect<T, Prisma__MachineClient<Machine | null >, Prisma__MachineClient<MachineGetPayload<T> | null >>;

    samples<T extends SamplesFindManyArgs = {}>(args?: Subset<T, SamplesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Samples>>, PrismaPromise<Array<SamplesGetPayload<T>>>>;

    gear_type<T extends GearTypeFindManyArgs = {}>(args?: Subset<T, GearTypeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GearType>>, PrismaPromise<Array<GearTypeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Gear findUnique
   */
  export type GearFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Gear
     * 
    **/
    select?: GearSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearInclude | null
    /**
     * Throw an Error if a Gear can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Gear to fetch.
     * 
    **/
    where: GearWhereUniqueInput
  }


  /**
   * Gear findFirst
   */
  export type GearFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Gear
     * 
    **/
    select?: GearSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearInclude | null
    /**
     * Throw an Error if a Gear can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Gear to fetch.
     * 
    **/
    where?: GearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gears to fetch.
     * 
    **/
    orderBy?: Enumerable<GearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gears.
     * 
    **/
    cursor?: GearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gears from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gears.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gears.
     * 
    **/
    distinct?: Enumerable<GearScalarFieldEnum>
  }


  /**
   * Gear findMany
   */
  export type GearFindManyArgs = {
    /**
     * Select specific fields to fetch from the Gear
     * 
    **/
    select?: GearSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearInclude | null
    /**
     * Filter, which Gears to fetch.
     * 
    **/
    where?: GearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gears to fetch.
     * 
    **/
    orderBy?: Enumerable<GearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gears.
     * 
    **/
    cursor?: GearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gears from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gears.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GearScalarFieldEnum>
  }


  /**
   * Gear create
   */
  export type GearCreateArgs = {
    /**
     * Select specific fields to fetch from the Gear
     * 
    **/
    select?: GearSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearInclude | null
    /**
     * The data needed to create a Gear.
     * 
    **/
    data: XOR<GearCreateInput, GearUncheckedCreateInput>
  }


  /**
   * Gear createMany
   */
  export type GearCreateManyArgs = {
    /**
     * The data used to create many Gears.
     * 
    **/
    data: Enumerable<GearCreateManyInput>
  }


  /**
   * Gear update
   */
  export type GearUpdateArgs = {
    /**
     * Select specific fields to fetch from the Gear
     * 
    **/
    select?: GearSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearInclude | null
    /**
     * The data needed to update a Gear.
     * 
    **/
    data: XOR<GearUpdateInput, GearUncheckedUpdateInput>
    /**
     * Choose, which Gear to update.
     * 
    **/
    where: GearWhereUniqueInput
  }


  /**
   * Gear updateMany
   */
  export type GearUpdateManyArgs = {
    /**
     * The data used to update Gears.
     * 
    **/
    data: XOR<GearUpdateManyMutationInput, GearUncheckedUpdateManyInput>
    /**
     * Filter which Gears to update
     * 
    **/
    where?: GearWhereInput
  }


  /**
   * Gear upsert
   */
  export type GearUpsertArgs = {
    /**
     * Select specific fields to fetch from the Gear
     * 
    **/
    select?: GearSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearInclude | null
    /**
     * The filter to search for the Gear to update in case it exists.
     * 
    **/
    where: GearWhereUniqueInput
    /**
     * In case the Gear found by the `where` argument doesn't exist, create a new Gear with this data.
     * 
    **/
    create: XOR<GearCreateInput, GearUncheckedCreateInput>
    /**
     * In case the Gear was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GearUpdateInput, GearUncheckedUpdateInput>
  }


  /**
   * Gear delete
   */
  export type GearDeleteArgs = {
    /**
     * Select specific fields to fetch from the Gear
     * 
    **/
    select?: GearSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearInclude | null
    /**
     * Filter which Gear to delete.
     * 
    **/
    where: GearWhereUniqueInput
  }


  /**
   * Gear deleteMany
   */
  export type GearDeleteManyArgs = {
    /**
     * Filter which Gears to delete
     * 
    **/
    where?: GearWhereInput
  }


  /**
   * Gear findRaw
   */
  export type GearFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Gear aggregateRaw
   */
  export type GearAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Gear without action
   */
  export type GearArgs = {
    /**
     * Select specific fields to fetch from the Gear
     * 
    **/
    select?: GearSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearInclude | null
  }



  /**
   * Model GearType
   */


  export type AggregateGearType = {
    _count: GearTypeCountAggregateOutputType | null
    _min: GearTypeMinAggregateOutputType | null
    _max: GearTypeMaxAggregateOutputType | null
  }

  export type GearTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    gearId: string | null
  }

  export type GearTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    gearId: string | null
  }

  export type GearTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    gearId: number
    _all: number
  }


  export type GearTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    gearId?: true
  }

  export type GearTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    gearId?: true
  }

  export type GearTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    gearId?: true
    _all?: true
  }

  export type GearTypeAggregateArgs = {
    /**
     * Filter which GearType to aggregate.
     * 
    **/
    where?: GearTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<GearTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GearTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GearTypes
    **/
    _count?: true | GearTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GearTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GearTypeMaxAggregateInputType
  }

  export type GetGearTypeAggregateType<T extends GearTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateGearType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGearType[P]>
      : GetScalarType<T[P], AggregateGearType[P]>
  }




  export type GearTypeGroupByArgs = {
    where?: GearTypeWhereInput
    orderBy?: Enumerable<GearTypeOrderByWithAggregationInput>
    by: Array<GearTypeScalarFieldEnum>
    having?: GearTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GearTypeCountAggregateInputType | true
    _min?: GearTypeMinAggregateInputType
    _max?: GearTypeMaxAggregateInputType
  }


  export type GearTypeGroupByOutputType = {
    id: string
    name: string
    description: string
    gearId: string | null
    _count: GearTypeCountAggregateOutputType | null
    _min: GearTypeMinAggregateOutputType | null
    _max: GearTypeMaxAggregateOutputType | null
  }

  type GetGearTypeGroupByPayload<T extends GearTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GearTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GearTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GearTypeGroupByOutputType[P]>
            : GetScalarType<T[P], GearTypeGroupByOutputType[P]>
        }
      >
    >


  export type GearTypeSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    gearId?: boolean
    Gear?: boolean | GearArgs
  }

  export type GearTypeInclude = {
    Gear?: boolean | GearArgs
  }

  export type GearTypeGetPayload<
    S extends boolean | null | undefined | GearTypeArgs,
    U = keyof S
      > = S extends true
        ? GearType
    : S extends undefined
    ? never
    : S extends GearTypeArgs | GearTypeFindManyArgs
    ?'include' extends U
    ? GearType  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Gear' ? GearGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Gear' ? GearGetPayload<S['select'][P]> | null :  P extends keyof GearType ? GearType[P] : never
  } 
    : GearType
  : GearType


  type GearTypeCountArgs = Merge<
    Omit<GearTypeFindManyArgs, 'select' | 'include'> & {
      select?: GearTypeCountAggregateInputType | true
    }
  >

  export interface GearTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GearType that matches the filter.
     * @param {GearTypeFindUniqueArgs} args - Arguments to find a GearType
     * @example
     * // Get one GearType
     * const gearType = await prisma.gearType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GearTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GearTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GearType'> extends True ? CheckSelect<T, Prisma__GearTypeClient<GearType>, Prisma__GearTypeClient<GearTypeGetPayload<T>>> : CheckSelect<T, Prisma__GearTypeClient<GearType | null >, Prisma__GearTypeClient<GearTypeGetPayload<T> | null >>

    /**
     * Find the first GearType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearTypeFindFirstArgs} args - Arguments to find a GearType
     * @example
     * // Get one GearType
     * const gearType = await prisma.gearType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GearTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GearTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GearType'> extends True ? CheckSelect<T, Prisma__GearTypeClient<GearType>, Prisma__GearTypeClient<GearTypeGetPayload<T>>> : CheckSelect<T, Prisma__GearTypeClient<GearType | null >, Prisma__GearTypeClient<GearTypeGetPayload<T> | null >>

    /**
     * Find zero or more GearTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GearTypes
     * const gearTypes = await prisma.gearType.findMany()
     * 
     * // Get first 10 GearTypes
     * const gearTypes = await prisma.gearType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gearTypeWithIdOnly = await prisma.gearType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GearTypeFindManyArgs>(
      args?: SelectSubset<T, GearTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GearType>>, PrismaPromise<Array<GearTypeGetPayload<T>>>>

    /**
     * Create a GearType.
     * @param {GearTypeCreateArgs} args - Arguments to create a GearType.
     * @example
     * // Create one GearType
     * const GearType = await prisma.gearType.create({
     *   data: {
     *     // ... data to create a GearType
     *   }
     * })
     * 
    **/
    create<T extends GearTypeCreateArgs>(
      args: SelectSubset<T, GearTypeCreateArgs>
    ): CheckSelect<T, Prisma__GearTypeClient<GearType>, Prisma__GearTypeClient<GearTypeGetPayload<T>>>

    /**
     * Create many GearTypes.
     *     @param {GearTypeCreateManyArgs} args - Arguments to create many GearTypes.
     *     @example
     *     // Create many GearTypes
     *     const gearType = await prisma.gearType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GearTypeCreateManyArgs>(
      args?: SelectSubset<T, GearTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GearType.
     * @param {GearTypeDeleteArgs} args - Arguments to delete one GearType.
     * @example
     * // Delete one GearType
     * const GearType = await prisma.gearType.delete({
     *   where: {
     *     // ... filter to delete one GearType
     *   }
     * })
     * 
    **/
    delete<T extends GearTypeDeleteArgs>(
      args: SelectSubset<T, GearTypeDeleteArgs>
    ): CheckSelect<T, Prisma__GearTypeClient<GearType>, Prisma__GearTypeClient<GearTypeGetPayload<T>>>

    /**
     * Update one GearType.
     * @param {GearTypeUpdateArgs} args - Arguments to update one GearType.
     * @example
     * // Update one GearType
     * const gearType = await prisma.gearType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GearTypeUpdateArgs>(
      args: SelectSubset<T, GearTypeUpdateArgs>
    ): CheckSelect<T, Prisma__GearTypeClient<GearType>, Prisma__GearTypeClient<GearTypeGetPayload<T>>>

    /**
     * Delete zero or more GearTypes.
     * @param {GearTypeDeleteManyArgs} args - Arguments to filter GearTypes to delete.
     * @example
     * // Delete a few GearTypes
     * const { count } = await prisma.gearType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GearTypeDeleteManyArgs>(
      args?: SelectSubset<T, GearTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GearTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GearTypes
     * const gearType = await prisma.gearType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GearTypeUpdateManyArgs>(
      args: SelectSubset<T, GearTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GearType.
     * @param {GearTypeUpsertArgs} args - Arguments to update or create a GearType.
     * @example
     * // Update or create a GearType
     * const gearType = await prisma.gearType.upsert({
     *   create: {
     *     // ... data to create a GearType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GearType we want to update
     *   }
     * })
    **/
    upsert<T extends GearTypeUpsertArgs>(
      args: SelectSubset<T, GearTypeUpsertArgs>
    ): CheckSelect<T, Prisma__GearTypeClient<GearType>, Prisma__GearTypeClient<GearTypeGetPayload<T>>>

    /**
     * Find zero or more GearTypes that matches the filter.
     * @param {GearTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const gearType = await prisma.gearType.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GearTypeFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GearType.
     * @param {GearTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const gearType = await prisma.gearType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GearTypeAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of GearTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearTypeCountArgs} args - Arguments to filter GearTypes to count.
     * @example
     * // Count the number of GearTypes
     * const count = await prisma.gearType.count({
     *   where: {
     *     // ... the filter for the GearTypes we want to count
     *   }
     * })
    **/
    count<T extends GearTypeCountArgs>(
      args?: Subset<T, GearTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GearTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GearType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GearTypeAggregateArgs>(args: Subset<T, GearTypeAggregateArgs>): PrismaPromise<GetGearTypeAggregateType<T>>

    /**
     * Group by GearType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearTypeGroupByArgs} args - Group by arguments.
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
      T extends GearTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GearTypeGroupByArgs['orderBy'] }
        : { orderBy?: GearTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GearTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGearTypeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GearType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GearTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Gear<T extends GearArgs = {}>(args?: Subset<T, GearArgs>): CheckSelect<T, Prisma__GearClient<Gear | null >, Prisma__GearClient<GearGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GearType findUnique
   */
  export type GearTypeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GearType
     * 
    **/
    select?: GearTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearTypeInclude | null
    /**
     * Throw an Error if a GearType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GearType to fetch.
     * 
    **/
    where: GearTypeWhereUniqueInput
  }


  /**
   * GearType findFirst
   */
  export type GearTypeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GearType
     * 
    **/
    select?: GearTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearTypeInclude | null
    /**
     * Throw an Error if a GearType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GearType to fetch.
     * 
    **/
    where?: GearTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<GearTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GearTypes.
     * 
    **/
    cursor?: GearTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GearTypes.
     * 
    **/
    distinct?: Enumerable<GearTypeScalarFieldEnum>
  }


  /**
   * GearType findMany
   */
  export type GearTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the GearType
     * 
    **/
    select?: GearTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearTypeInclude | null
    /**
     * Filter, which GearTypes to fetch.
     * 
    **/
    where?: GearTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<GearTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GearTypes.
     * 
    **/
    cursor?: GearTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GearTypeScalarFieldEnum>
  }


  /**
   * GearType create
   */
  export type GearTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the GearType
     * 
    **/
    select?: GearTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearTypeInclude | null
    /**
     * The data needed to create a GearType.
     * 
    **/
    data: XOR<GearTypeCreateInput, GearTypeUncheckedCreateInput>
  }


  /**
   * GearType createMany
   */
  export type GearTypeCreateManyArgs = {
    /**
     * The data used to create many GearTypes.
     * 
    **/
    data: Enumerable<GearTypeCreateManyInput>
  }


  /**
   * GearType update
   */
  export type GearTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the GearType
     * 
    **/
    select?: GearTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearTypeInclude | null
    /**
     * The data needed to update a GearType.
     * 
    **/
    data: XOR<GearTypeUpdateInput, GearTypeUncheckedUpdateInput>
    /**
     * Choose, which GearType to update.
     * 
    **/
    where: GearTypeWhereUniqueInput
  }


  /**
   * GearType updateMany
   */
  export type GearTypeUpdateManyArgs = {
    /**
     * The data used to update GearTypes.
     * 
    **/
    data: XOR<GearTypeUpdateManyMutationInput, GearTypeUncheckedUpdateManyInput>
    /**
     * Filter which GearTypes to update
     * 
    **/
    where?: GearTypeWhereInput
  }


  /**
   * GearType upsert
   */
  export type GearTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the GearType
     * 
    **/
    select?: GearTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearTypeInclude | null
    /**
     * The filter to search for the GearType to update in case it exists.
     * 
    **/
    where: GearTypeWhereUniqueInput
    /**
     * In case the GearType found by the `where` argument doesn't exist, create a new GearType with this data.
     * 
    **/
    create: XOR<GearTypeCreateInput, GearTypeUncheckedCreateInput>
    /**
     * In case the GearType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GearTypeUpdateInput, GearTypeUncheckedUpdateInput>
  }


  /**
   * GearType delete
   */
  export type GearTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the GearType
     * 
    **/
    select?: GearTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearTypeInclude | null
    /**
     * Filter which GearType to delete.
     * 
    **/
    where: GearTypeWhereUniqueInput
  }


  /**
   * GearType deleteMany
   */
  export type GearTypeDeleteManyArgs = {
    /**
     * Filter which GearTypes to delete
     * 
    **/
    where?: GearTypeWhereInput
  }


  /**
   * GearType findRaw
   */
  export type GearTypeFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * GearType aggregateRaw
   */
  export type GearTypeAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * GearType without action
   */
  export type GearTypeArgs = {
    /**
     * Select specific fields to fetch from the GearType
     * 
    **/
    select?: GearTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GearTypeInclude | null
  }



  /**
   * Model Samples
   */


  export type AggregateSamples = {
    _count: SamplesCountAggregateOutputType | null
    _min: SamplesMinAggregateOutputType | null
    _max: SamplesMaxAggregateOutputType | null
  }

  export type SamplesMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    gearId: string | null
  }

  export type SamplesMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    gearId: string | null
  }

  export type SamplesCountAggregateOutputType = {
    id: number
    timestamp: number
    gearId: number
    _all: number
  }


  export type SamplesMinAggregateInputType = {
    id?: true
    timestamp?: true
    gearId?: true
  }

  export type SamplesMaxAggregateInputType = {
    id?: true
    timestamp?: true
    gearId?: true
  }

  export type SamplesCountAggregateInputType = {
    id?: true
    timestamp?: true
    gearId?: true
    _all?: true
  }

  export type SamplesAggregateArgs = {
    /**
     * Filter which Samples to aggregate.
     * 
    **/
    where?: SamplesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     * 
    **/
    orderBy?: Enumerable<SamplesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SamplesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Samples
    **/
    _count?: true | SamplesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SamplesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SamplesMaxAggregateInputType
  }

  export type GetSamplesAggregateType<T extends SamplesAggregateArgs> = {
        [P in keyof T & keyof AggregateSamples]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSamples[P]>
      : GetScalarType<T[P], AggregateSamples[P]>
  }




  export type SamplesGroupByArgs = {
    where?: SamplesWhereInput
    orderBy?: Enumerable<SamplesOrderByWithAggregationInput>
    by: Array<SamplesScalarFieldEnum>
    having?: SamplesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SamplesCountAggregateInputType | true
    _min?: SamplesMinAggregateInputType
    _max?: SamplesMaxAggregateInputType
  }


  export type SamplesGroupByOutputType = {
    id: string
    timestamp: Date
    gearId: string | null
    _count: SamplesCountAggregateOutputType | null
    _min: SamplesMinAggregateOutputType | null
    _max: SamplesMaxAggregateOutputType | null
  }

  type GetSamplesGroupByPayload<T extends SamplesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SamplesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SamplesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SamplesGroupByOutputType[P]>
            : GetScalarType<T[P], SamplesGroupByOutputType[P]>
        }
      >
    >


  export type SamplesSelect = {
    id?: boolean
    timestamp?: boolean
    Gear?: boolean | GearArgs
    single_sample?: boolean | SingleSampleFindManyArgs
    gearId?: boolean
    _count?: boolean | SamplesCountOutputTypeArgs
  }

  export type SamplesInclude = {
    Gear?: boolean | GearArgs
    single_sample?: boolean | SingleSampleFindManyArgs
    _count?: boolean | SamplesCountOutputTypeArgs
  }

  export type SamplesGetPayload<
    S extends boolean | null | undefined | SamplesArgs,
    U = keyof S
      > = S extends true
        ? Samples
    : S extends undefined
    ? never
    : S extends SamplesArgs | SamplesFindManyArgs
    ?'include' extends U
    ? Samples  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Gear' ? GearGetPayload<S['include'][P]> | null :
        P extends 'single_sample' ? Array < SingleSampleGetPayload<S['include'][P]>>  :
        P extends '_count' ? SamplesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Gear' ? GearGetPayload<S['select'][P]> | null :
        P extends 'single_sample' ? Array < SingleSampleGetPayload<S['select'][P]>>  :
        P extends '_count' ? SamplesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Samples ? Samples[P] : never
  } 
    : Samples
  : Samples


  type SamplesCountArgs = Merge<
    Omit<SamplesFindManyArgs, 'select' | 'include'> & {
      select?: SamplesCountAggregateInputType | true
    }
  >

  export interface SamplesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Samples that matches the filter.
     * @param {SamplesFindUniqueArgs} args - Arguments to find a Samples
     * @example
     * // Get one Samples
     * const samples = await prisma.samples.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SamplesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SamplesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Samples'> extends True ? CheckSelect<T, Prisma__SamplesClient<Samples>, Prisma__SamplesClient<SamplesGetPayload<T>>> : CheckSelect<T, Prisma__SamplesClient<Samples | null >, Prisma__SamplesClient<SamplesGetPayload<T> | null >>

    /**
     * Find the first Samples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplesFindFirstArgs} args - Arguments to find a Samples
     * @example
     * // Get one Samples
     * const samples = await prisma.samples.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SamplesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SamplesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Samples'> extends True ? CheckSelect<T, Prisma__SamplesClient<Samples>, Prisma__SamplesClient<SamplesGetPayload<T>>> : CheckSelect<T, Prisma__SamplesClient<Samples | null >, Prisma__SamplesClient<SamplesGetPayload<T> | null >>

    /**
     * Find zero or more Samples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Samples
     * const samples = await prisma.samples.findMany()
     * 
     * // Get first 10 Samples
     * const samples = await prisma.samples.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const samplesWithIdOnly = await prisma.samples.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SamplesFindManyArgs>(
      args?: SelectSubset<T, SamplesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Samples>>, PrismaPromise<Array<SamplesGetPayload<T>>>>

    /**
     * Create a Samples.
     * @param {SamplesCreateArgs} args - Arguments to create a Samples.
     * @example
     * // Create one Samples
     * const Samples = await prisma.samples.create({
     *   data: {
     *     // ... data to create a Samples
     *   }
     * })
     * 
    **/
    create<T extends SamplesCreateArgs>(
      args: SelectSubset<T, SamplesCreateArgs>
    ): CheckSelect<T, Prisma__SamplesClient<Samples>, Prisma__SamplesClient<SamplesGetPayload<T>>>

    /**
     * Create many Samples.
     *     @param {SamplesCreateManyArgs} args - Arguments to create many Samples.
     *     @example
     *     // Create many Samples
     *     const samples = await prisma.samples.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SamplesCreateManyArgs>(
      args?: SelectSubset<T, SamplesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Samples.
     * @param {SamplesDeleteArgs} args - Arguments to delete one Samples.
     * @example
     * // Delete one Samples
     * const Samples = await prisma.samples.delete({
     *   where: {
     *     // ... filter to delete one Samples
     *   }
     * })
     * 
    **/
    delete<T extends SamplesDeleteArgs>(
      args: SelectSubset<T, SamplesDeleteArgs>
    ): CheckSelect<T, Prisma__SamplesClient<Samples>, Prisma__SamplesClient<SamplesGetPayload<T>>>

    /**
     * Update one Samples.
     * @param {SamplesUpdateArgs} args - Arguments to update one Samples.
     * @example
     * // Update one Samples
     * const samples = await prisma.samples.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SamplesUpdateArgs>(
      args: SelectSubset<T, SamplesUpdateArgs>
    ): CheckSelect<T, Prisma__SamplesClient<Samples>, Prisma__SamplesClient<SamplesGetPayload<T>>>

    /**
     * Delete zero or more Samples.
     * @param {SamplesDeleteManyArgs} args - Arguments to filter Samples to delete.
     * @example
     * // Delete a few Samples
     * const { count } = await prisma.samples.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SamplesDeleteManyArgs>(
      args?: SelectSubset<T, SamplesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Samples
     * const samples = await prisma.samples.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SamplesUpdateManyArgs>(
      args: SelectSubset<T, SamplesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Samples.
     * @param {SamplesUpsertArgs} args - Arguments to update or create a Samples.
     * @example
     * // Update or create a Samples
     * const samples = await prisma.samples.upsert({
     *   create: {
     *     // ... data to create a Samples
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Samples we want to update
     *   }
     * })
    **/
    upsert<T extends SamplesUpsertArgs>(
      args: SelectSubset<T, SamplesUpsertArgs>
    ): CheckSelect<T, Prisma__SamplesClient<Samples>, Prisma__SamplesClient<SamplesGetPayload<T>>>

    /**
     * Find zero or more Samples that matches the filter.
     * @param {SamplesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const samples = await prisma.samples.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SamplesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Samples.
     * @param {SamplesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const samples = await prisma.samples.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SamplesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplesCountArgs} args - Arguments to filter Samples to count.
     * @example
     * // Count the number of Samples
     * const count = await prisma.samples.count({
     *   where: {
     *     // ... the filter for the Samples we want to count
     *   }
     * })
    **/
    count<T extends SamplesCountArgs>(
      args?: Subset<T, SamplesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SamplesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SamplesAggregateArgs>(args: Subset<T, SamplesAggregateArgs>): PrismaPromise<GetSamplesAggregateType<T>>

    /**
     * Group by Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SamplesGroupByArgs} args - Group by arguments.
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
      T extends SamplesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SamplesGroupByArgs['orderBy'] }
        : { orderBy?: SamplesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SamplesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSamplesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Samples.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SamplesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Gear<T extends GearArgs = {}>(args?: Subset<T, GearArgs>): CheckSelect<T, Prisma__GearClient<Gear | null >, Prisma__GearClient<GearGetPayload<T> | null >>;

    single_sample<T extends SingleSampleFindManyArgs = {}>(args?: Subset<T, SingleSampleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SingleSample>>, PrismaPromise<Array<SingleSampleGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Samples findUnique
   */
  export type SamplesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Samples
     * 
    **/
    select?: SamplesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SamplesInclude | null
    /**
     * Throw an Error if a Samples can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Samples to fetch.
     * 
    **/
    where: SamplesWhereUniqueInput
  }


  /**
   * Samples findFirst
   */
  export type SamplesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Samples
     * 
    **/
    select?: SamplesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SamplesInclude | null
    /**
     * Throw an Error if a Samples can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Samples to fetch.
     * 
    **/
    where?: SamplesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     * 
    **/
    orderBy?: Enumerable<SamplesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Samples.
     * 
    **/
    cursor?: SamplesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Samples.
     * 
    **/
    distinct?: Enumerable<SamplesScalarFieldEnum>
  }


  /**
   * Samples findMany
   */
  export type SamplesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Samples
     * 
    **/
    select?: SamplesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SamplesInclude | null
    /**
     * Filter, which Samples to fetch.
     * 
    **/
    where?: SamplesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     * 
    **/
    orderBy?: Enumerable<SamplesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Samples.
     * 
    **/
    cursor?: SamplesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SamplesScalarFieldEnum>
  }


  /**
   * Samples create
   */
  export type SamplesCreateArgs = {
    /**
     * Select specific fields to fetch from the Samples
     * 
    **/
    select?: SamplesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SamplesInclude | null
    /**
     * The data needed to create a Samples.
     * 
    **/
    data: XOR<SamplesCreateInput, SamplesUncheckedCreateInput>
  }


  /**
   * Samples createMany
   */
  export type SamplesCreateManyArgs = {
    /**
     * The data used to create many Samples.
     * 
    **/
    data: Enumerable<SamplesCreateManyInput>
  }


  /**
   * Samples update
   */
  export type SamplesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Samples
     * 
    **/
    select?: SamplesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SamplesInclude | null
    /**
     * The data needed to update a Samples.
     * 
    **/
    data: XOR<SamplesUpdateInput, SamplesUncheckedUpdateInput>
    /**
     * Choose, which Samples to update.
     * 
    **/
    where: SamplesWhereUniqueInput
  }


  /**
   * Samples updateMany
   */
  export type SamplesUpdateManyArgs = {
    /**
     * The data used to update Samples.
     * 
    **/
    data: XOR<SamplesUpdateManyMutationInput, SamplesUncheckedUpdateManyInput>
    /**
     * Filter which Samples to update
     * 
    **/
    where?: SamplesWhereInput
  }


  /**
   * Samples upsert
   */
  export type SamplesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Samples
     * 
    **/
    select?: SamplesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SamplesInclude | null
    /**
     * The filter to search for the Samples to update in case it exists.
     * 
    **/
    where: SamplesWhereUniqueInput
    /**
     * In case the Samples found by the `where` argument doesn't exist, create a new Samples with this data.
     * 
    **/
    create: XOR<SamplesCreateInput, SamplesUncheckedCreateInput>
    /**
     * In case the Samples was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SamplesUpdateInput, SamplesUncheckedUpdateInput>
  }


  /**
   * Samples delete
   */
  export type SamplesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Samples
     * 
    **/
    select?: SamplesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SamplesInclude | null
    /**
     * Filter which Samples to delete.
     * 
    **/
    where: SamplesWhereUniqueInput
  }


  /**
   * Samples deleteMany
   */
  export type SamplesDeleteManyArgs = {
    /**
     * Filter which Samples to delete
     * 
    **/
    where?: SamplesWhereInput
  }


  /**
   * Samples findRaw
   */
  export type SamplesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Samples aggregateRaw
   */
  export type SamplesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Samples without action
   */
  export type SamplesArgs = {
    /**
     * Select specific fields to fetch from the Samples
     * 
    **/
    select?: SamplesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SamplesInclude | null
  }



  /**
   * Model SingleSample
   */


  export type AggregateSingleSample = {
    _count: SingleSampleCountAggregateOutputType | null
    _min: SingleSampleMinAggregateOutputType | null
    _max: SingleSampleMaxAggregateOutputType | null
  }

  export type SingleSampleMinAggregateOutputType = {
    id: string | null
    value: string | null
    singleSampleTypeId: string | null
    samplesId: string | null
  }

  export type SingleSampleMaxAggregateOutputType = {
    id: string | null
    value: string | null
    singleSampleTypeId: string | null
    samplesId: string | null
  }

  export type SingleSampleCountAggregateOutputType = {
    id: number
    value: number
    singleSampleTypeId: number
    samplesId: number
    _all: number
  }


  export type SingleSampleMinAggregateInputType = {
    id?: true
    value?: true
    singleSampleTypeId?: true
    samplesId?: true
  }

  export type SingleSampleMaxAggregateInputType = {
    id?: true
    value?: true
    singleSampleTypeId?: true
    samplesId?: true
  }

  export type SingleSampleCountAggregateInputType = {
    id?: true
    value?: true
    singleSampleTypeId?: true
    samplesId?: true
    _all?: true
  }

  export type SingleSampleAggregateArgs = {
    /**
     * Filter which SingleSample to aggregate.
     * 
    **/
    where?: SingleSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SingleSamples to fetch.
     * 
    **/
    orderBy?: Enumerable<SingleSampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SingleSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SingleSamples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SingleSamples.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SingleSamples
    **/
    _count?: true | SingleSampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SingleSampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SingleSampleMaxAggregateInputType
  }

  export type GetSingleSampleAggregateType<T extends SingleSampleAggregateArgs> = {
        [P in keyof T & keyof AggregateSingleSample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSingleSample[P]>
      : GetScalarType<T[P], AggregateSingleSample[P]>
  }




  export type SingleSampleGroupByArgs = {
    where?: SingleSampleWhereInput
    orderBy?: Enumerable<SingleSampleOrderByWithAggregationInput>
    by: Array<SingleSampleScalarFieldEnum>
    having?: SingleSampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SingleSampleCountAggregateInputType | true
    _min?: SingleSampleMinAggregateInputType
    _max?: SingleSampleMaxAggregateInputType
  }


  export type SingleSampleGroupByOutputType = {
    id: string
    value: string
    singleSampleTypeId: string
    samplesId: string | null
    _count: SingleSampleCountAggregateOutputType | null
    _min: SingleSampleMinAggregateOutputType | null
    _max: SingleSampleMaxAggregateOutputType | null
  }

  type GetSingleSampleGroupByPayload<T extends SingleSampleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SingleSampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SingleSampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SingleSampleGroupByOutputType[P]>
            : GetScalarType<T[P], SingleSampleGroupByOutputType[P]>
        }
      >
    >


  export type SingleSampleSelect = {
    id?: boolean
    value?: boolean
    singleSampleTypeId?: boolean
    single_sample_type?: boolean | SingleSampleTypeArgs
    Samples?: boolean | SamplesArgs
    samplesId?: boolean
  }

  export type SingleSampleInclude = {
    single_sample_type?: boolean | SingleSampleTypeArgs
    Samples?: boolean | SamplesArgs
  }

  export type SingleSampleGetPayload<
    S extends boolean | null | undefined | SingleSampleArgs,
    U = keyof S
      > = S extends true
        ? SingleSample
    : S extends undefined
    ? never
    : S extends SingleSampleArgs | SingleSampleFindManyArgs
    ?'include' extends U
    ? SingleSample  & {
    [P in TrueKeys<S['include']>]:
        P extends 'single_sample_type' ? SingleSampleTypeGetPayload<S['include'][P]> :
        P extends 'Samples' ? SamplesGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'single_sample_type' ? SingleSampleTypeGetPayload<S['select'][P]> :
        P extends 'Samples' ? SamplesGetPayload<S['select'][P]> | null :  P extends keyof SingleSample ? SingleSample[P] : never
  } 
    : SingleSample
  : SingleSample


  type SingleSampleCountArgs = Merge<
    Omit<SingleSampleFindManyArgs, 'select' | 'include'> & {
      select?: SingleSampleCountAggregateInputType | true
    }
  >

  export interface SingleSampleDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SingleSample that matches the filter.
     * @param {SingleSampleFindUniqueArgs} args - Arguments to find a SingleSample
     * @example
     * // Get one SingleSample
     * const singleSample = await prisma.singleSample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SingleSampleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SingleSampleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SingleSample'> extends True ? CheckSelect<T, Prisma__SingleSampleClient<SingleSample>, Prisma__SingleSampleClient<SingleSampleGetPayload<T>>> : CheckSelect<T, Prisma__SingleSampleClient<SingleSample | null >, Prisma__SingleSampleClient<SingleSampleGetPayload<T> | null >>

    /**
     * Find the first SingleSample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleFindFirstArgs} args - Arguments to find a SingleSample
     * @example
     * // Get one SingleSample
     * const singleSample = await prisma.singleSample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SingleSampleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SingleSampleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SingleSample'> extends True ? CheckSelect<T, Prisma__SingleSampleClient<SingleSample>, Prisma__SingleSampleClient<SingleSampleGetPayload<T>>> : CheckSelect<T, Prisma__SingleSampleClient<SingleSample | null >, Prisma__SingleSampleClient<SingleSampleGetPayload<T> | null >>

    /**
     * Find zero or more SingleSamples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SingleSamples
     * const singleSamples = await prisma.singleSample.findMany()
     * 
     * // Get first 10 SingleSamples
     * const singleSamples = await prisma.singleSample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const singleSampleWithIdOnly = await prisma.singleSample.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SingleSampleFindManyArgs>(
      args?: SelectSubset<T, SingleSampleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SingleSample>>, PrismaPromise<Array<SingleSampleGetPayload<T>>>>

    /**
     * Create a SingleSample.
     * @param {SingleSampleCreateArgs} args - Arguments to create a SingleSample.
     * @example
     * // Create one SingleSample
     * const SingleSample = await prisma.singleSample.create({
     *   data: {
     *     // ... data to create a SingleSample
     *   }
     * })
     * 
    **/
    create<T extends SingleSampleCreateArgs>(
      args: SelectSubset<T, SingleSampleCreateArgs>
    ): CheckSelect<T, Prisma__SingleSampleClient<SingleSample>, Prisma__SingleSampleClient<SingleSampleGetPayload<T>>>

    /**
     * Create many SingleSamples.
     *     @param {SingleSampleCreateManyArgs} args - Arguments to create many SingleSamples.
     *     @example
     *     // Create many SingleSamples
     *     const singleSample = await prisma.singleSample.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SingleSampleCreateManyArgs>(
      args?: SelectSubset<T, SingleSampleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SingleSample.
     * @param {SingleSampleDeleteArgs} args - Arguments to delete one SingleSample.
     * @example
     * // Delete one SingleSample
     * const SingleSample = await prisma.singleSample.delete({
     *   where: {
     *     // ... filter to delete one SingleSample
     *   }
     * })
     * 
    **/
    delete<T extends SingleSampleDeleteArgs>(
      args: SelectSubset<T, SingleSampleDeleteArgs>
    ): CheckSelect<T, Prisma__SingleSampleClient<SingleSample>, Prisma__SingleSampleClient<SingleSampleGetPayload<T>>>

    /**
     * Update one SingleSample.
     * @param {SingleSampleUpdateArgs} args - Arguments to update one SingleSample.
     * @example
     * // Update one SingleSample
     * const singleSample = await prisma.singleSample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SingleSampleUpdateArgs>(
      args: SelectSubset<T, SingleSampleUpdateArgs>
    ): CheckSelect<T, Prisma__SingleSampleClient<SingleSample>, Prisma__SingleSampleClient<SingleSampleGetPayload<T>>>

    /**
     * Delete zero or more SingleSamples.
     * @param {SingleSampleDeleteManyArgs} args - Arguments to filter SingleSamples to delete.
     * @example
     * // Delete a few SingleSamples
     * const { count } = await prisma.singleSample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SingleSampleDeleteManyArgs>(
      args?: SelectSubset<T, SingleSampleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SingleSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SingleSamples
     * const singleSample = await prisma.singleSample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SingleSampleUpdateManyArgs>(
      args: SelectSubset<T, SingleSampleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SingleSample.
     * @param {SingleSampleUpsertArgs} args - Arguments to update or create a SingleSample.
     * @example
     * // Update or create a SingleSample
     * const singleSample = await prisma.singleSample.upsert({
     *   create: {
     *     // ... data to create a SingleSample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SingleSample we want to update
     *   }
     * })
    **/
    upsert<T extends SingleSampleUpsertArgs>(
      args: SelectSubset<T, SingleSampleUpsertArgs>
    ): CheckSelect<T, Prisma__SingleSampleClient<SingleSample>, Prisma__SingleSampleClient<SingleSampleGetPayload<T>>>

    /**
     * Find zero or more SingleSamples that matches the filter.
     * @param {SingleSampleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const singleSample = await prisma.singleSample.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SingleSampleFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SingleSample.
     * @param {SingleSampleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const singleSample = await prisma.singleSample.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SingleSampleAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of SingleSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleCountArgs} args - Arguments to filter SingleSamples to count.
     * @example
     * // Count the number of SingleSamples
     * const count = await prisma.singleSample.count({
     *   where: {
     *     // ... the filter for the SingleSamples we want to count
     *   }
     * })
    **/
    count<T extends SingleSampleCountArgs>(
      args?: Subset<T, SingleSampleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SingleSampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SingleSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SingleSampleAggregateArgs>(args: Subset<T, SingleSampleAggregateArgs>): PrismaPromise<GetSingleSampleAggregateType<T>>

    /**
     * Group by SingleSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleGroupByArgs} args - Group by arguments.
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
      T extends SingleSampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SingleSampleGroupByArgs['orderBy'] }
        : { orderBy?: SingleSampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SingleSampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSingleSampleGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SingleSample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SingleSampleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    single_sample_type<T extends SingleSampleTypeArgs = {}>(args?: Subset<T, SingleSampleTypeArgs>): CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType | null >, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T> | null >>;

    Samples<T extends SamplesArgs = {}>(args?: Subset<T, SamplesArgs>): CheckSelect<T, Prisma__SamplesClient<Samples | null >, Prisma__SamplesClient<SamplesGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SingleSample findUnique
   */
  export type SingleSampleFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SingleSample
     * 
    **/
    select?: SingleSampleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleInclude | null
    /**
     * Throw an Error if a SingleSample can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SingleSample to fetch.
     * 
    **/
    where: SingleSampleWhereUniqueInput
  }


  /**
   * SingleSample findFirst
   */
  export type SingleSampleFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SingleSample
     * 
    **/
    select?: SingleSampleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleInclude | null
    /**
     * Throw an Error if a SingleSample can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SingleSample to fetch.
     * 
    **/
    where?: SingleSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SingleSamples to fetch.
     * 
    **/
    orderBy?: Enumerable<SingleSampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SingleSamples.
     * 
    **/
    cursor?: SingleSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SingleSamples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SingleSamples.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SingleSamples.
     * 
    **/
    distinct?: Enumerable<SingleSampleScalarFieldEnum>
  }


  /**
   * SingleSample findMany
   */
  export type SingleSampleFindManyArgs = {
    /**
     * Select specific fields to fetch from the SingleSample
     * 
    **/
    select?: SingleSampleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleInclude | null
    /**
     * Filter, which SingleSamples to fetch.
     * 
    **/
    where?: SingleSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SingleSamples to fetch.
     * 
    **/
    orderBy?: Enumerable<SingleSampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SingleSamples.
     * 
    **/
    cursor?: SingleSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SingleSamples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SingleSamples.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SingleSampleScalarFieldEnum>
  }


  /**
   * SingleSample create
   */
  export type SingleSampleCreateArgs = {
    /**
     * Select specific fields to fetch from the SingleSample
     * 
    **/
    select?: SingleSampleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleInclude | null
    /**
     * The data needed to create a SingleSample.
     * 
    **/
    data: XOR<SingleSampleCreateInput, SingleSampleUncheckedCreateInput>
  }


  /**
   * SingleSample createMany
   */
  export type SingleSampleCreateManyArgs = {
    /**
     * The data used to create many SingleSamples.
     * 
    **/
    data: Enumerable<SingleSampleCreateManyInput>
  }


  /**
   * SingleSample update
   */
  export type SingleSampleUpdateArgs = {
    /**
     * Select specific fields to fetch from the SingleSample
     * 
    **/
    select?: SingleSampleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleInclude | null
    /**
     * The data needed to update a SingleSample.
     * 
    **/
    data: XOR<SingleSampleUpdateInput, SingleSampleUncheckedUpdateInput>
    /**
     * Choose, which SingleSample to update.
     * 
    **/
    where: SingleSampleWhereUniqueInput
  }


  /**
   * SingleSample updateMany
   */
  export type SingleSampleUpdateManyArgs = {
    /**
     * The data used to update SingleSamples.
     * 
    **/
    data: XOR<SingleSampleUpdateManyMutationInput, SingleSampleUncheckedUpdateManyInput>
    /**
     * Filter which SingleSamples to update
     * 
    **/
    where?: SingleSampleWhereInput
  }


  /**
   * SingleSample upsert
   */
  export type SingleSampleUpsertArgs = {
    /**
     * Select specific fields to fetch from the SingleSample
     * 
    **/
    select?: SingleSampleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleInclude | null
    /**
     * The filter to search for the SingleSample to update in case it exists.
     * 
    **/
    where: SingleSampleWhereUniqueInput
    /**
     * In case the SingleSample found by the `where` argument doesn't exist, create a new SingleSample with this data.
     * 
    **/
    create: XOR<SingleSampleCreateInput, SingleSampleUncheckedCreateInput>
    /**
     * In case the SingleSample was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SingleSampleUpdateInput, SingleSampleUncheckedUpdateInput>
  }


  /**
   * SingleSample delete
   */
  export type SingleSampleDeleteArgs = {
    /**
     * Select specific fields to fetch from the SingleSample
     * 
    **/
    select?: SingleSampleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleInclude | null
    /**
     * Filter which SingleSample to delete.
     * 
    **/
    where: SingleSampleWhereUniqueInput
  }


  /**
   * SingleSample deleteMany
   */
  export type SingleSampleDeleteManyArgs = {
    /**
     * Filter which SingleSamples to delete
     * 
    **/
    where?: SingleSampleWhereInput
  }


  /**
   * SingleSample findRaw
   */
  export type SingleSampleFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * SingleSample aggregateRaw
   */
  export type SingleSampleAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * SingleSample without action
   */
  export type SingleSampleArgs = {
    /**
     * Select specific fields to fetch from the SingleSample
     * 
    **/
    select?: SingleSampleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleInclude | null
  }



  /**
   * Model SingleSampleType
   */


  export type AggregateSingleSampleType = {
    _count: SingleSampleTypeCountAggregateOutputType | null
    _min: SingleSampleTypeMinAggregateOutputType | null
    _max: SingleSampleTypeMaxAggregateOutputType | null
  }

  export type SingleSampleTypeMinAggregateOutputType = {
    id: string | null
    sample_name: string | null
    unity: string | null
    createBy: string | null
  }

  export type SingleSampleTypeMaxAggregateOutputType = {
    id: string | null
    sample_name: string | null
    unity: string | null
    createBy: string | null
  }

  export type SingleSampleTypeCountAggregateOutputType = {
    id: number
    sample_name: number
    unity: number
    createBy: number
    _all: number
  }


  export type SingleSampleTypeMinAggregateInputType = {
    id?: true
    sample_name?: true
    unity?: true
    createBy?: true
  }

  export type SingleSampleTypeMaxAggregateInputType = {
    id?: true
    sample_name?: true
    unity?: true
    createBy?: true
  }

  export type SingleSampleTypeCountAggregateInputType = {
    id?: true
    sample_name?: true
    unity?: true
    createBy?: true
    _all?: true
  }

  export type SingleSampleTypeAggregateArgs = {
    /**
     * Filter which SingleSampleType to aggregate.
     * 
    **/
    where?: SingleSampleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SingleSampleTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<SingleSampleTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SingleSampleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SingleSampleTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SingleSampleTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SingleSampleTypes
    **/
    _count?: true | SingleSampleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SingleSampleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SingleSampleTypeMaxAggregateInputType
  }

  export type GetSingleSampleTypeAggregateType<T extends SingleSampleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSingleSampleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSingleSampleType[P]>
      : GetScalarType<T[P], AggregateSingleSampleType[P]>
  }




  export type SingleSampleTypeGroupByArgs = {
    where?: SingleSampleTypeWhereInput
    orderBy?: Enumerable<SingleSampleTypeOrderByWithAggregationInput>
    by: Array<SingleSampleTypeScalarFieldEnum>
    having?: SingleSampleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SingleSampleTypeCountAggregateInputType | true
    _min?: SingleSampleTypeMinAggregateInputType
    _max?: SingleSampleTypeMaxAggregateInputType
  }


  export type SingleSampleTypeGroupByOutputType = {
    id: string
    sample_name: string
    unity: string
    createBy: string
    _count: SingleSampleTypeCountAggregateOutputType | null
    _min: SingleSampleTypeMinAggregateOutputType | null
    _max: SingleSampleTypeMaxAggregateOutputType | null
  }

  type GetSingleSampleTypeGroupByPayload<T extends SingleSampleTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SingleSampleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SingleSampleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SingleSampleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SingleSampleTypeGroupByOutputType[P]>
        }
      >
    >


  export type SingleSampleTypeSelect = {
    id?: boolean
    sample_name?: boolean
    unity?: boolean
    createBy?: boolean
    SingleSample?: boolean | SingleSampleFindManyArgs
    _count?: boolean | SingleSampleTypeCountOutputTypeArgs
  }

  export type SingleSampleTypeInclude = {
    SingleSample?: boolean | SingleSampleFindManyArgs
    _count?: boolean | SingleSampleTypeCountOutputTypeArgs
  }

  export type SingleSampleTypeGetPayload<
    S extends boolean | null | undefined | SingleSampleTypeArgs,
    U = keyof S
      > = S extends true
        ? SingleSampleType
    : S extends undefined
    ? never
    : S extends SingleSampleTypeArgs | SingleSampleTypeFindManyArgs
    ?'include' extends U
    ? SingleSampleType  & {
    [P in TrueKeys<S['include']>]:
        P extends 'SingleSample' ? Array < SingleSampleGetPayload<S['include'][P]>>  :
        P extends '_count' ? SingleSampleTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'SingleSample' ? Array < SingleSampleGetPayload<S['select'][P]>>  :
        P extends '_count' ? SingleSampleTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof SingleSampleType ? SingleSampleType[P] : never
  } 
    : SingleSampleType
  : SingleSampleType


  type SingleSampleTypeCountArgs = Merge<
    Omit<SingleSampleTypeFindManyArgs, 'select' | 'include'> & {
      select?: SingleSampleTypeCountAggregateInputType | true
    }
  >

  export interface SingleSampleTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SingleSampleType that matches the filter.
     * @param {SingleSampleTypeFindUniqueArgs} args - Arguments to find a SingleSampleType
     * @example
     * // Get one SingleSampleType
     * const singleSampleType = await prisma.singleSampleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SingleSampleTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SingleSampleTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SingleSampleType'> extends True ? CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType>, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T>>> : CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType | null >, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T> | null >>

    /**
     * Find the first SingleSampleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleTypeFindFirstArgs} args - Arguments to find a SingleSampleType
     * @example
     * // Get one SingleSampleType
     * const singleSampleType = await prisma.singleSampleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SingleSampleTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SingleSampleTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SingleSampleType'> extends True ? CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType>, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T>>> : CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType | null >, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T> | null >>

    /**
     * Find zero or more SingleSampleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SingleSampleTypes
     * const singleSampleTypes = await prisma.singleSampleType.findMany()
     * 
     * // Get first 10 SingleSampleTypes
     * const singleSampleTypes = await prisma.singleSampleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const singleSampleTypeWithIdOnly = await prisma.singleSampleType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SingleSampleTypeFindManyArgs>(
      args?: SelectSubset<T, SingleSampleTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SingleSampleType>>, PrismaPromise<Array<SingleSampleTypeGetPayload<T>>>>

    /**
     * Create a SingleSampleType.
     * @param {SingleSampleTypeCreateArgs} args - Arguments to create a SingleSampleType.
     * @example
     * // Create one SingleSampleType
     * const SingleSampleType = await prisma.singleSampleType.create({
     *   data: {
     *     // ... data to create a SingleSampleType
     *   }
     * })
     * 
    **/
    create<T extends SingleSampleTypeCreateArgs>(
      args: SelectSubset<T, SingleSampleTypeCreateArgs>
    ): CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType>, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T>>>

    /**
     * Create many SingleSampleTypes.
     *     @param {SingleSampleTypeCreateManyArgs} args - Arguments to create many SingleSampleTypes.
     *     @example
     *     // Create many SingleSampleTypes
     *     const singleSampleType = await prisma.singleSampleType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SingleSampleTypeCreateManyArgs>(
      args?: SelectSubset<T, SingleSampleTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SingleSampleType.
     * @param {SingleSampleTypeDeleteArgs} args - Arguments to delete one SingleSampleType.
     * @example
     * // Delete one SingleSampleType
     * const SingleSampleType = await prisma.singleSampleType.delete({
     *   where: {
     *     // ... filter to delete one SingleSampleType
     *   }
     * })
     * 
    **/
    delete<T extends SingleSampleTypeDeleteArgs>(
      args: SelectSubset<T, SingleSampleTypeDeleteArgs>
    ): CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType>, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T>>>

    /**
     * Update one SingleSampleType.
     * @param {SingleSampleTypeUpdateArgs} args - Arguments to update one SingleSampleType.
     * @example
     * // Update one SingleSampleType
     * const singleSampleType = await prisma.singleSampleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SingleSampleTypeUpdateArgs>(
      args: SelectSubset<T, SingleSampleTypeUpdateArgs>
    ): CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType>, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T>>>

    /**
     * Delete zero or more SingleSampleTypes.
     * @param {SingleSampleTypeDeleteManyArgs} args - Arguments to filter SingleSampleTypes to delete.
     * @example
     * // Delete a few SingleSampleTypes
     * const { count } = await prisma.singleSampleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SingleSampleTypeDeleteManyArgs>(
      args?: SelectSubset<T, SingleSampleTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SingleSampleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SingleSampleTypes
     * const singleSampleType = await prisma.singleSampleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SingleSampleTypeUpdateManyArgs>(
      args: SelectSubset<T, SingleSampleTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SingleSampleType.
     * @param {SingleSampleTypeUpsertArgs} args - Arguments to update or create a SingleSampleType.
     * @example
     * // Update or create a SingleSampleType
     * const singleSampleType = await prisma.singleSampleType.upsert({
     *   create: {
     *     // ... data to create a SingleSampleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SingleSampleType we want to update
     *   }
     * })
    **/
    upsert<T extends SingleSampleTypeUpsertArgs>(
      args: SelectSubset<T, SingleSampleTypeUpsertArgs>
    ): CheckSelect<T, Prisma__SingleSampleTypeClient<SingleSampleType>, Prisma__SingleSampleTypeClient<SingleSampleTypeGetPayload<T>>>

    /**
     * Find zero or more SingleSampleTypes that matches the filter.
     * @param {SingleSampleTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const singleSampleType = await prisma.singleSampleType.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SingleSampleTypeFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SingleSampleType.
     * @param {SingleSampleTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const singleSampleType = await prisma.singleSampleType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SingleSampleTypeAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of SingleSampleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleTypeCountArgs} args - Arguments to filter SingleSampleTypes to count.
     * @example
     * // Count the number of SingleSampleTypes
     * const count = await prisma.singleSampleType.count({
     *   where: {
     *     // ... the filter for the SingleSampleTypes we want to count
     *   }
     * })
    **/
    count<T extends SingleSampleTypeCountArgs>(
      args?: Subset<T, SingleSampleTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SingleSampleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SingleSampleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SingleSampleTypeAggregateArgs>(args: Subset<T, SingleSampleTypeAggregateArgs>): PrismaPromise<GetSingleSampleTypeAggregateType<T>>

    /**
     * Group by SingleSampleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SingleSampleTypeGroupByArgs} args - Group by arguments.
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
      T extends SingleSampleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SingleSampleTypeGroupByArgs['orderBy'] }
        : { orderBy?: SingleSampleTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SingleSampleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSingleSampleTypeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SingleSampleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SingleSampleTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    SingleSample<T extends SingleSampleFindManyArgs = {}>(args?: Subset<T, SingleSampleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SingleSample>>, PrismaPromise<Array<SingleSampleGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SingleSampleType findUnique
   */
  export type SingleSampleTypeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleType
     * 
    **/
    select?: SingleSampleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleTypeInclude | null
    /**
     * Throw an Error if a SingleSampleType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SingleSampleType to fetch.
     * 
    **/
    where: SingleSampleTypeWhereUniqueInput
  }


  /**
   * SingleSampleType findFirst
   */
  export type SingleSampleTypeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleType
     * 
    **/
    select?: SingleSampleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleTypeInclude | null
    /**
     * Throw an Error if a SingleSampleType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SingleSampleType to fetch.
     * 
    **/
    where?: SingleSampleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SingleSampleTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<SingleSampleTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SingleSampleTypes.
     * 
    **/
    cursor?: SingleSampleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SingleSampleTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SingleSampleTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SingleSampleTypes.
     * 
    **/
    distinct?: Enumerable<SingleSampleTypeScalarFieldEnum>
  }


  /**
   * SingleSampleType findMany
   */
  export type SingleSampleTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleType
     * 
    **/
    select?: SingleSampleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleTypeInclude | null
    /**
     * Filter, which SingleSampleTypes to fetch.
     * 
    **/
    where?: SingleSampleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SingleSampleTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<SingleSampleTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SingleSampleTypes.
     * 
    **/
    cursor?: SingleSampleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SingleSampleTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SingleSampleTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SingleSampleTypeScalarFieldEnum>
  }


  /**
   * SingleSampleType create
   */
  export type SingleSampleTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleType
     * 
    **/
    select?: SingleSampleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleTypeInclude | null
    /**
     * The data needed to create a SingleSampleType.
     * 
    **/
    data: XOR<SingleSampleTypeCreateInput, SingleSampleTypeUncheckedCreateInput>
  }


  /**
   * SingleSampleType createMany
   */
  export type SingleSampleTypeCreateManyArgs = {
    /**
     * The data used to create many SingleSampleTypes.
     * 
    **/
    data: Enumerable<SingleSampleTypeCreateManyInput>
  }


  /**
   * SingleSampleType update
   */
  export type SingleSampleTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleType
     * 
    **/
    select?: SingleSampleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleTypeInclude | null
    /**
     * The data needed to update a SingleSampleType.
     * 
    **/
    data: XOR<SingleSampleTypeUpdateInput, SingleSampleTypeUncheckedUpdateInput>
    /**
     * Choose, which SingleSampleType to update.
     * 
    **/
    where: SingleSampleTypeWhereUniqueInput
  }


  /**
   * SingleSampleType updateMany
   */
  export type SingleSampleTypeUpdateManyArgs = {
    /**
     * The data used to update SingleSampleTypes.
     * 
    **/
    data: XOR<SingleSampleTypeUpdateManyMutationInput, SingleSampleTypeUncheckedUpdateManyInput>
    /**
     * Filter which SingleSampleTypes to update
     * 
    **/
    where?: SingleSampleTypeWhereInput
  }


  /**
   * SingleSampleType upsert
   */
  export type SingleSampleTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleType
     * 
    **/
    select?: SingleSampleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleTypeInclude | null
    /**
     * The filter to search for the SingleSampleType to update in case it exists.
     * 
    **/
    where: SingleSampleTypeWhereUniqueInput
    /**
     * In case the SingleSampleType found by the `where` argument doesn't exist, create a new SingleSampleType with this data.
     * 
    **/
    create: XOR<SingleSampleTypeCreateInput, SingleSampleTypeUncheckedCreateInput>
    /**
     * In case the SingleSampleType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SingleSampleTypeUpdateInput, SingleSampleTypeUncheckedUpdateInput>
  }


  /**
   * SingleSampleType delete
   */
  export type SingleSampleTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleType
     * 
    **/
    select?: SingleSampleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleTypeInclude | null
    /**
     * Filter which SingleSampleType to delete.
     * 
    **/
    where: SingleSampleTypeWhereUniqueInput
  }


  /**
   * SingleSampleType deleteMany
   */
  export type SingleSampleTypeDeleteManyArgs = {
    /**
     * Filter which SingleSampleTypes to delete
     * 
    **/
    where?: SingleSampleTypeWhereInput
  }


  /**
   * SingleSampleType findRaw
   */
  export type SingleSampleTypeFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * SingleSampleType aggregateRaw
   */
  export type SingleSampleTypeAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * SingleSampleType without action
   */
  export type SingleSampleTypeArgs = {
    /**
     * Select specific fields to fetch from the SingleSampleType
     * 
    **/
    select?: SingleSampleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SingleSampleTypeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    register: 'register',
    status: 'status',
    role: 'role',
    machineId: 'machineId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FactoryScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type FactoryScalarFieldEnum = (typeof FactoryScalarFieldEnum)[keyof typeof FactoryScalarFieldEnum]


  export const MachineScalarFieldEnum: {
    id: 'id',
    insertBy: 'insertBy',
    factoryId: 'factoryId',
    datalogger: 'datalogger',
    status: 'status'
  };

  export type MachineScalarFieldEnum = (typeof MachineScalarFieldEnum)[keyof typeof MachineScalarFieldEnum]


  export const GearScalarFieldEnum: {
    id: 'id',
    machineId: 'machineId'
  };

  export type GearScalarFieldEnum = (typeof GearScalarFieldEnum)[keyof typeof GearScalarFieldEnum]


  export const GearTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    gearId: 'gearId'
  };

  export type GearTypeScalarFieldEnum = (typeof GearTypeScalarFieldEnum)[keyof typeof GearTypeScalarFieldEnum]


  export const SamplesScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    gearId: 'gearId'
  };

  export type SamplesScalarFieldEnum = (typeof SamplesScalarFieldEnum)[keyof typeof SamplesScalarFieldEnum]


  export const SingleSampleScalarFieldEnum: {
    id: 'id',
    value: 'value',
    singleSampleTypeId: 'singleSampleTypeId',
    samplesId: 'samplesId'
  };

  export type SingleSampleScalarFieldEnum = (typeof SingleSampleScalarFieldEnum)[keyof typeof SingleSampleScalarFieldEnum]


  export const SingleSampleTypeScalarFieldEnum: {
    id: 'id',
    sample_name: 'sample_name',
    unity: 'unity',
    createBy: 'createBy'
  };

  export type SingleSampleTypeScalarFieldEnum = (typeof SingleSampleTypeScalarFieldEnum)[keyof typeof SingleSampleTypeScalarFieldEnum]


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    register?: StringFilter | string
    status?: EnumStatusFilter | Status
    role?: EnumRoleFilter | Role
    machineId?: StringNullableFilter | string | null
    Machine?: XOR<MachineRelationFilter, MachineWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
    status?: SortOrder
    role?: SortOrder
    machineId?: SortOrder
    Machine?: MachineOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    register?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
    status?: SortOrder
    role?: SortOrder
    machineId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    register?: StringWithAggregatesFilter | string
    status?: EnumStatusWithAggregatesFilter | Status
    role?: EnumRoleWithAggregatesFilter | Role
    machineId?: StringNullableWithAggregatesFilter | string | null
  }

  export type FactoryWhereInput = {
    AND?: Enumerable<FactoryWhereInput>
    OR?: Enumerable<FactoryWhereInput>
    NOT?: Enumerable<FactoryWhereInput>
    id?: StringFilter | string
    description?: StringFilter | string
    machine?: MachineListRelationFilter
  }

  export type FactoryOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    machine?: MachineOrderByRelationAggregateInput
  }

  export type FactoryWhereUniqueInput = {
    id?: string
  }

  export type FactoryOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    _count?: FactoryCountOrderByAggregateInput
    _max?: FactoryMaxOrderByAggregateInput
    _min?: FactoryMinOrderByAggregateInput
  }

  export type FactoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FactoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<FactoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FactoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
  }

  export type MachineWhereInput = {
    AND?: Enumerable<MachineWhereInput>
    OR?: Enumerable<MachineWhereInput>
    NOT?: Enumerable<MachineWhereInput>
    id?: StringFilter | string
    insertBy?: StringFilter | string
    CanBeOperateBy?: UserListRelationFilter
    gears?: GearListRelationFilter
    factoryId?: StringNullableFilter | string | null
    Factory?: XOR<FactoryRelationFilter, FactoryWhereInput> | null
    datalogger?: BoolFilter | boolean
    status?: EnumStatusMaquinaFilter | StatusMaquina
  }

  export type MachineOrderByWithRelationInput = {
    id?: SortOrder
    insertBy?: SortOrder
    CanBeOperateBy?: UserOrderByRelationAggregateInput
    gears?: GearOrderByRelationAggregateInput
    factoryId?: SortOrder
    Factory?: FactoryOrderByWithRelationInput
    datalogger?: SortOrder
    status?: SortOrder
  }

  export type MachineWhereUniqueInput = {
    id?: string
  }

  export type MachineOrderByWithAggregationInput = {
    id?: SortOrder
    insertBy?: SortOrder
    factoryId?: SortOrder
    datalogger?: SortOrder
    status?: SortOrder
    _count?: MachineCountOrderByAggregateInput
    _max?: MachineMaxOrderByAggregateInput
    _min?: MachineMinOrderByAggregateInput
  }

  export type MachineScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MachineScalarWhereWithAggregatesInput>
    OR?: Enumerable<MachineScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MachineScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    insertBy?: StringWithAggregatesFilter | string
    factoryId?: StringNullableWithAggregatesFilter | string | null
    datalogger?: BoolWithAggregatesFilter | boolean
    status?: EnumStatusMaquinaWithAggregatesFilter | StatusMaquina
  }

  export type GearWhereInput = {
    AND?: Enumerable<GearWhereInput>
    OR?: Enumerable<GearWhereInput>
    NOT?: Enumerable<GearWhereInput>
    id?: StringFilter | string
    machine?: XOR<MachineRelationFilter, MachineWhereInput> | null
    machineId?: StringNullableFilter | string | null
    samples?: SamplesListRelationFilter
    gear_type?: GearTypeListRelationFilter
  }

  export type GearOrderByWithRelationInput = {
    id?: SortOrder
    machine?: MachineOrderByWithRelationInput
    machineId?: SortOrder
    samples?: SamplesOrderByRelationAggregateInput
    gear_type?: GearTypeOrderByRelationAggregateInput
  }

  export type GearWhereUniqueInput = {
    id?: string
  }

  export type GearOrderByWithAggregationInput = {
    id?: SortOrder
    machineId?: SortOrder
    _count?: GearCountOrderByAggregateInput
    _max?: GearMaxOrderByAggregateInput
    _min?: GearMinOrderByAggregateInput
  }

  export type GearScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GearScalarWhereWithAggregatesInput>
    OR?: Enumerable<GearScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GearScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    machineId?: StringNullableWithAggregatesFilter | string | null
  }

  export type GearTypeWhereInput = {
    AND?: Enumerable<GearTypeWhereInput>
    OR?: Enumerable<GearTypeWhereInput>
    NOT?: Enumerable<GearTypeWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    gearId?: StringNullableFilter | string | null
    Gear?: XOR<GearRelationFilter, GearWhereInput> | null
  }

  export type GearTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gearId?: SortOrder
    Gear?: GearOrderByWithRelationInput
  }

  export type GearTypeWhereUniqueInput = {
    id?: string
  }

  export type GearTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gearId?: SortOrder
    _count?: GearTypeCountOrderByAggregateInput
    _max?: GearTypeMaxOrderByAggregateInput
    _min?: GearTypeMinOrderByAggregateInput
  }

  export type GearTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GearTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<GearTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GearTypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    gearId?: StringNullableWithAggregatesFilter | string | null
  }

  export type SamplesWhereInput = {
    AND?: Enumerable<SamplesWhereInput>
    OR?: Enumerable<SamplesWhereInput>
    NOT?: Enumerable<SamplesWhereInput>
    id?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    Gear?: XOR<GearRelationFilter, GearWhereInput> | null
    single_sample?: SingleSampleListRelationFilter
    gearId?: StringNullableFilter | string | null
  }

  export type SamplesOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    Gear?: GearOrderByWithRelationInput
    single_sample?: SingleSampleOrderByRelationAggregateInput
    gearId?: SortOrder
  }

  export type SamplesWhereUniqueInput = {
    id?: string
  }

  export type SamplesOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    gearId?: SortOrder
    _count?: SamplesCountOrderByAggregateInput
    _max?: SamplesMaxOrderByAggregateInput
    _min?: SamplesMinOrderByAggregateInput
  }

  export type SamplesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SamplesScalarWhereWithAggregatesInput>
    OR?: Enumerable<SamplesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SamplesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    gearId?: StringNullableWithAggregatesFilter | string | null
  }

  export type SingleSampleWhereInput = {
    AND?: Enumerable<SingleSampleWhereInput>
    OR?: Enumerable<SingleSampleWhereInput>
    NOT?: Enumerable<SingleSampleWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
    singleSampleTypeId?: StringFilter | string
    single_sample_type?: XOR<SingleSampleTypeRelationFilter, SingleSampleTypeWhereInput>
    Samples?: XOR<SamplesRelationFilter, SamplesWhereInput> | null
    samplesId?: StringNullableFilter | string | null
  }

  export type SingleSampleOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    singleSampleTypeId?: SortOrder
    single_sample_type?: SingleSampleTypeOrderByWithRelationInput
    Samples?: SamplesOrderByWithRelationInput
    samplesId?: SortOrder
  }

  export type SingleSampleWhereUniqueInput = {
    id?: string
  }

  export type SingleSampleOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    singleSampleTypeId?: SortOrder
    samplesId?: SortOrder
    _count?: SingleSampleCountOrderByAggregateInput
    _max?: SingleSampleMaxOrderByAggregateInput
    _min?: SingleSampleMinOrderByAggregateInput
  }

  export type SingleSampleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SingleSampleScalarWhereWithAggregatesInput>
    OR?: Enumerable<SingleSampleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SingleSampleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
    singleSampleTypeId?: StringWithAggregatesFilter | string
    samplesId?: StringNullableWithAggregatesFilter | string | null
  }

  export type SingleSampleTypeWhereInput = {
    AND?: Enumerable<SingleSampleTypeWhereInput>
    OR?: Enumerable<SingleSampleTypeWhereInput>
    NOT?: Enumerable<SingleSampleTypeWhereInput>
    id?: StringFilter | string
    sample_name?: StringFilter | string
    unity?: StringFilter | string
    createBy?: StringFilter | string
    SingleSample?: SingleSampleListRelationFilter
  }

  export type SingleSampleTypeOrderByWithRelationInput = {
    id?: SortOrder
    sample_name?: SortOrder
    unity?: SortOrder
    createBy?: SortOrder
    SingleSample?: SingleSampleOrderByRelationAggregateInput
  }

  export type SingleSampleTypeWhereUniqueInput = {
    id?: string
  }

  export type SingleSampleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    sample_name?: SortOrder
    unity?: SortOrder
    createBy?: SortOrder
    _count?: SingleSampleTypeCountOrderByAggregateInput
    _max?: SingleSampleTypeMaxOrderByAggregateInput
    _min?: SingleSampleTypeMinOrderByAggregateInput
  }

  export type SingleSampleTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SingleSampleTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<SingleSampleTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SingleSampleTypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sample_name?: StringWithAggregatesFilter | string
    unity?: StringWithAggregatesFilter | string
    createBy?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    register: string
    status?: Status
    role: Role
    Machine?: MachineCreateNestedOneWithoutCanBeOperateByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    register: string
    status?: Status
    role: Role
    machineId?: string | null
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    role?: EnumRoleFieldUpdateOperationsInput | Role
    Machine?: MachineUpdateOneWithoutCanBeOperateByInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    role?: EnumRoleFieldUpdateOperationsInput | Role
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    register: string
    status?: Status
    role: Role
    machineId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    role?: EnumRoleFieldUpdateOperationsInput | Role
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FactoryCreateInput = {
    id?: string
    description: string
    machine?: MachineCreateNestedManyWithoutFactoryInput
  }

  export type FactoryUncheckedCreateInput = {
    id?: string
    description: string
    machine?: MachineUncheckedCreateNestedManyWithoutFactoryInput
  }

  export type FactoryUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    machine?: MachineUpdateManyWithoutFactoryInput
  }

  export type FactoryUncheckedUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    machine?: MachineUncheckedUpdateManyWithoutFactoryInput
  }

  export type FactoryCreateManyInput = {
    id?: string
    description: string
  }

  export type FactoryUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FactoryUncheckedUpdateManyInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MachineCreateInput = {
    id?: string
    insertBy: string
    CanBeOperateBy?: UserCreateNestedManyWithoutMachineInput
    gears?: GearCreateNestedManyWithoutMachineInput
    Factory?: FactoryCreateNestedOneWithoutMachineInput
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineUncheckedCreateInput = {
    id?: string
    insertBy: string
    CanBeOperateBy?: UserUncheckedCreateNestedManyWithoutMachineInput
    gears?: GearUncheckedCreateNestedManyWithoutMachineInput
    factoryId?: string | null
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineUpdateInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    CanBeOperateBy?: UserUpdateManyWithoutMachineInput
    gears?: GearUpdateManyWithoutMachineInput
    Factory?: FactoryUpdateOneWithoutMachineInput
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type MachineUncheckedUpdateInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    CanBeOperateBy?: UserUncheckedUpdateManyWithoutMachineInput
    gears?: GearUncheckedUpdateManyWithoutMachineInput
    factoryId?: NullableStringFieldUpdateOperationsInput | string | null
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type MachineCreateManyInput = {
    id?: string
    insertBy: string
    factoryId?: string | null
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineUpdateManyMutationInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type MachineUncheckedUpdateManyInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    factoryId?: NullableStringFieldUpdateOperationsInput | string | null
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type GearCreateInput = {
    id?: string
    machine?: MachineCreateNestedOneWithoutGearsInput
    samples?: SamplesCreateNestedManyWithoutGearInput
    gear_type?: GearTypeCreateNestedManyWithoutGearInput
  }

  export type GearUncheckedCreateInput = {
    id?: string
    machineId?: string | null
    samples?: SamplesUncheckedCreateNestedManyWithoutGearInput
    gear_type?: GearTypeUncheckedCreateNestedManyWithoutGearInput
  }

  export type GearUpdateInput = {
    machine?: MachineUpdateOneWithoutGearsInput
    samples?: SamplesUpdateManyWithoutGearInput
    gear_type?: GearTypeUpdateManyWithoutGearInput
  }

  export type GearUncheckedUpdateInput = {
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    samples?: SamplesUncheckedUpdateManyWithoutGearInput
    gear_type?: GearTypeUncheckedUpdateManyWithoutGearInput
  }

  export type GearCreateManyInput = {
    id?: string
    machineId?: string | null
  }

  export type GearUpdateManyMutationInput = {

  }

  export type GearUncheckedUpdateManyInput = {
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GearTypeCreateInput = {
    id?: string
    name: string
    description: string
    Gear?: GearCreateNestedOneWithoutGear_typeInput
  }

  export type GearTypeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    gearId?: string | null
  }

  export type GearTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Gear?: GearUpdateOneWithoutGear_typeInput
  }

  export type GearTypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gearId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GearTypeCreateManyInput = {
    id?: string
    name: string
    description: string
    gearId?: string | null
  }

  export type GearTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GearTypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    gearId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SamplesCreateInput = {
    id?: string
    timestamp?: Date | string
    Gear?: GearCreateNestedOneWithoutSamplesInput
    single_sample?: SingleSampleCreateNestedManyWithoutSamplesInput
  }

  export type SamplesUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    single_sample?: SingleSampleUncheckedCreateNestedManyWithoutSamplesInput
    gearId?: string | null
  }

  export type SamplesUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Gear?: GearUpdateOneWithoutSamplesInput
    single_sample?: SingleSampleUpdateManyWithoutSamplesInput
  }

  export type SamplesUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    single_sample?: SingleSampleUncheckedUpdateManyWithoutSamplesInput
    gearId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SamplesCreateManyInput = {
    id?: string
    timestamp?: Date | string
    gearId?: string | null
  }

  export type SamplesUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SamplesUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    gearId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SingleSampleCreateInput = {
    id?: string
    value: string
    single_sample_type: SingleSampleTypeCreateNestedOneWithoutSingleSampleInput
    Samples?: SamplesCreateNestedOneWithoutSingle_sampleInput
  }

  export type SingleSampleUncheckedCreateInput = {
    id?: string
    value: string
    singleSampleTypeId: string
    samplesId?: string | null
  }

  export type SingleSampleUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    single_sample_type?: SingleSampleTypeUpdateOneRequiredWithoutSingleSampleInput
    Samples?: SamplesUpdateOneWithoutSingle_sampleInput
  }

  export type SingleSampleUncheckedUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    singleSampleTypeId?: StringFieldUpdateOperationsInput | string
    samplesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SingleSampleCreateManyInput = {
    id?: string
    value: string
    singleSampleTypeId: string
    samplesId?: string | null
  }

  export type SingleSampleUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SingleSampleUncheckedUpdateManyInput = {
    value?: StringFieldUpdateOperationsInput | string
    singleSampleTypeId?: StringFieldUpdateOperationsInput | string
    samplesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SingleSampleTypeCreateInput = {
    id?: string
    sample_name: string
    unity: string
    createBy: string
    SingleSample?: SingleSampleCreateNestedManyWithoutSingle_sample_typeInput
  }

  export type SingleSampleTypeUncheckedCreateInput = {
    id?: string
    sample_name: string
    unity: string
    createBy: string
    SingleSample?: SingleSampleUncheckedCreateNestedManyWithoutSingle_sample_typeInput
  }

  export type SingleSampleTypeUpdateInput = {
    sample_name?: StringFieldUpdateOperationsInput | string
    unity?: StringFieldUpdateOperationsInput | string
    createBy?: StringFieldUpdateOperationsInput | string
    SingleSample?: SingleSampleUpdateManyWithoutSingle_sample_typeInput
  }

  export type SingleSampleTypeUncheckedUpdateInput = {
    sample_name?: StringFieldUpdateOperationsInput | string
    unity?: StringFieldUpdateOperationsInput | string
    createBy?: StringFieldUpdateOperationsInput | string
    SingleSample?: SingleSampleUncheckedUpdateManyWithoutSingle_sample_typeInput
  }

  export type SingleSampleTypeCreateManyInput = {
    id?: string
    sample_name: string
    unity: string
    createBy: string
  }

  export type SingleSampleTypeUpdateManyMutationInput = {
    sample_name?: StringFieldUpdateOperationsInput | string
    unity?: StringFieldUpdateOperationsInput | string
    createBy?: StringFieldUpdateOperationsInput | string
  }

  export type SingleSampleTypeUncheckedUpdateManyInput = {
    sample_name?: StringFieldUpdateOperationsInput | string
    unity?: StringFieldUpdateOperationsInput | string
    createBy?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type MachineRelationFilter = {
    is?: MachineWhereInput | null
    isNot?: MachineWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
    status?: SortOrder
    role?: SortOrder
    machineId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
    status?: SortOrder
    role?: SortOrder
    machineId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    register?: SortOrder
    status?: SortOrder
    role?: SortOrder
    machineId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type MachineListRelationFilter = {
    every?: MachineWhereInput
    some?: MachineWhereInput
    none?: MachineWhereInput
  }

  export type MachineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactoryCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type FactoryMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type FactoryMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type GearListRelationFilter = {
    every?: GearWhereInput
    some?: GearWhereInput
    none?: GearWhereInput
  }

  export type FactoryRelationFilter = {
    is?: FactoryWhereInput | null
    isNot?: FactoryWhereInput | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumStatusMaquinaFilter = {
    equals?: StatusMaquina
    in?: Enumerable<StatusMaquina>
    notIn?: Enumerable<StatusMaquina>
    not?: NestedEnumStatusMaquinaFilter | StatusMaquina
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GearOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MachineCountOrderByAggregateInput = {
    id?: SortOrder
    insertBy?: SortOrder
    factoryId?: SortOrder
    datalogger?: SortOrder
    status?: SortOrder
  }

  export type MachineMaxOrderByAggregateInput = {
    id?: SortOrder
    insertBy?: SortOrder
    factoryId?: SortOrder
    datalogger?: SortOrder
    status?: SortOrder
  }

  export type MachineMinOrderByAggregateInput = {
    id?: SortOrder
    insertBy?: SortOrder
    factoryId?: SortOrder
    datalogger?: SortOrder
    status?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumStatusMaquinaWithAggregatesFilter = {
    equals?: StatusMaquina
    in?: Enumerable<StatusMaquina>
    notIn?: Enumerable<StatusMaquina>
    not?: NestedEnumStatusMaquinaWithAggregatesFilter | StatusMaquina
    _count?: NestedIntFilter
    _min?: NestedEnumStatusMaquinaFilter
    _max?: NestedEnumStatusMaquinaFilter
  }

  export type SamplesListRelationFilter = {
    every?: SamplesWhereInput
    some?: SamplesWhereInput
    none?: SamplesWhereInput
  }

  export type GearTypeListRelationFilter = {
    every?: GearTypeWhereInput
    some?: GearTypeWhereInput
    none?: GearTypeWhereInput
  }

  export type SamplesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GearTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GearCountOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
  }

  export type GearMaxOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
  }

  export type GearMinOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
  }

  export type GearRelationFilter = {
    is?: GearWhereInput | null
    isNot?: GearWhereInput | null
  }

  export type GearTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gearId?: SortOrder
  }

  export type GearTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gearId?: SortOrder
  }

  export type GearTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gearId?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SingleSampleListRelationFilter = {
    every?: SingleSampleWhereInput
    some?: SingleSampleWhereInput
    none?: SingleSampleWhereInput
  }

  export type SingleSampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SamplesCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    gearId?: SortOrder
  }

  export type SamplesMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    gearId?: SortOrder
  }

  export type SamplesMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    gearId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SingleSampleTypeRelationFilter = {
    is?: SingleSampleTypeWhereInput
    isNot?: SingleSampleTypeWhereInput
  }

  export type SamplesRelationFilter = {
    is?: SamplesWhereInput | null
    isNot?: SamplesWhereInput | null
  }

  export type SingleSampleCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    singleSampleTypeId?: SortOrder
    samplesId?: SortOrder
  }

  export type SingleSampleMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    singleSampleTypeId?: SortOrder
    samplesId?: SortOrder
  }

  export type SingleSampleMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    singleSampleTypeId?: SortOrder
    samplesId?: SortOrder
  }

  export type SingleSampleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    sample_name?: SortOrder
    unity?: SortOrder
    createBy?: SortOrder
  }

  export type SingleSampleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    sample_name?: SortOrder
    unity?: SortOrder
    createBy?: SortOrder
  }

  export type SingleSampleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    sample_name?: SortOrder
    unity?: SortOrder
    createBy?: SortOrder
  }

  export type MachineCreateNestedOneWithoutCanBeOperateByInput = {
    create?: XOR<MachineCreateWithoutCanBeOperateByInput, MachineUncheckedCreateWithoutCanBeOperateByInput>
    connectOrCreate?: MachineCreateOrConnectWithoutCanBeOperateByInput
    connect?: MachineWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type MachineUpdateOneWithoutCanBeOperateByInput = {
    create?: XOR<MachineCreateWithoutCanBeOperateByInput, MachineUncheckedCreateWithoutCanBeOperateByInput>
    connectOrCreate?: MachineCreateOrConnectWithoutCanBeOperateByInput
    upsert?: MachineUpsertWithoutCanBeOperateByInput
    disconnect?: boolean
    delete?: boolean
    connect?: MachineWhereUniqueInput
    update?: XOR<MachineUpdateWithoutCanBeOperateByInput, MachineUncheckedUpdateWithoutCanBeOperateByInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type MachineCreateNestedManyWithoutFactoryInput = {
    create?: XOR<Enumerable<MachineCreateWithoutFactoryInput>, Enumerable<MachineUncheckedCreateWithoutFactoryInput>>
    connectOrCreate?: Enumerable<MachineCreateOrConnectWithoutFactoryInput>
    createMany?: MachineCreateManyFactoryInputEnvelope
    connect?: Enumerable<MachineWhereUniqueInput>
  }

  export type MachineUncheckedCreateNestedManyWithoutFactoryInput = {
    create?: XOR<Enumerable<MachineCreateWithoutFactoryInput>, Enumerable<MachineUncheckedCreateWithoutFactoryInput>>
    connectOrCreate?: Enumerable<MachineCreateOrConnectWithoutFactoryInput>
    createMany?: MachineCreateManyFactoryInputEnvelope
    connect?: Enumerable<MachineWhereUniqueInput>
  }

  export type MachineUpdateManyWithoutFactoryInput = {
    create?: XOR<Enumerable<MachineCreateWithoutFactoryInput>, Enumerable<MachineUncheckedCreateWithoutFactoryInput>>
    connectOrCreate?: Enumerable<MachineCreateOrConnectWithoutFactoryInput>
    upsert?: Enumerable<MachineUpsertWithWhereUniqueWithoutFactoryInput>
    createMany?: MachineCreateManyFactoryInputEnvelope
    set?: Enumerable<MachineWhereUniqueInput>
    disconnect?: Enumerable<MachineWhereUniqueInput>
    delete?: Enumerable<MachineWhereUniqueInput>
    connect?: Enumerable<MachineWhereUniqueInput>
    update?: Enumerable<MachineUpdateWithWhereUniqueWithoutFactoryInput>
    updateMany?: Enumerable<MachineUpdateManyWithWhereWithoutFactoryInput>
    deleteMany?: Enumerable<MachineScalarWhereInput>
  }

  export type MachineUncheckedUpdateManyWithoutFactoryInput = {
    create?: XOR<Enumerable<MachineCreateWithoutFactoryInput>, Enumerable<MachineUncheckedCreateWithoutFactoryInput>>
    connectOrCreate?: Enumerable<MachineCreateOrConnectWithoutFactoryInput>
    upsert?: Enumerable<MachineUpsertWithWhereUniqueWithoutFactoryInput>
    createMany?: MachineCreateManyFactoryInputEnvelope
    set?: Enumerable<MachineWhereUniqueInput>
    disconnect?: Enumerable<MachineWhereUniqueInput>
    delete?: Enumerable<MachineWhereUniqueInput>
    connect?: Enumerable<MachineWhereUniqueInput>
    update?: Enumerable<MachineUpdateWithWhereUniqueWithoutFactoryInput>
    updateMany?: Enumerable<MachineUpdateManyWithWhereWithoutFactoryInput>
    deleteMany?: Enumerable<MachineScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutMachineInput = {
    create?: XOR<Enumerable<UserCreateWithoutMachineInput>, Enumerable<UserUncheckedCreateWithoutMachineInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutMachineInput>
    createMany?: UserCreateManyMachineInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type GearCreateNestedManyWithoutMachineInput = {
    create?: XOR<Enumerable<GearCreateWithoutMachineInput>, Enumerable<GearUncheckedCreateWithoutMachineInput>>
    connectOrCreate?: Enumerable<GearCreateOrConnectWithoutMachineInput>
    createMany?: GearCreateManyMachineInputEnvelope
    connect?: Enumerable<GearWhereUniqueInput>
  }

  export type FactoryCreateNestedOneWithoutMachineInput = {
    create?: XOR<FactoryCreateWithoutMachineInput, FactoryUncheckedCreateWithoutMachineInput>
    connectOrCreate?: FactoryCreateOrConnectWithoutMachineInput
    connect?: FactoryWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutMachineInput = {
    create?: XOR<Enumerable<UserCreateWithoutMachineInput>, Enumerable<UserUncheckedCreateWithoutMachineInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutMachineInput>
    createMany?: UserCreateManyMachineInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type GearUncheckedCreateNestedManyWithoutMachineInput = {
    create?: XOR<Enumerable<GearCreateWithoutMachineInput>, Enumerable<GearUncheckedCreateWithoutMachineInput>>
    connectOrCreate?: Enumerable<GearCreateOrConnectWithoutMachineInput>
    createMany?: GearCreateManyMachineInputEnvelope
    connect?: Enumerable<GearWhereUniqueInput>
  }

  export type UserUpdateManyWithoutMachineInput = {
    create?: XOR<Enumerable<UserCreateWithoutMachineInput>, Enumerable<UserUncheckedCreateWithoutMachineInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutMachineInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutMachineInput>
    createMany?: UserCreateManyMachineInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutMachineInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutMachineInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type GearUpdateManyWithoutMachineInput = {
    create?: XOR<Enumerable<GearCreateWithoutMachineInput>, Enumerable<GearUncheckedCreateWithoutMachineInput>>
    connectOrCreate?: Enumerable<GearCreateOrConnectWithoutMachineInput>
    upsert?: Enumerable<GearUpsertWithWhereUniqueWithoutMachineInput>
    createMany?: GearCreateManyMachineInputEnvelope
    set?: Enumerable<GearWhereUniqueInput>
    disconnect?: Enumerable<GearWhereUniqueInput>
    delete?: Enumerable<GearWhereUniqueInput>
    connect?: Enumerable<GearWhereUniqueInput>
    update?: Enumerable<GearUpdateWithWhereUniqueWithoutMachineInput>
    updateMany?: Enumerable<GearUpdateManyWithWhereWithoutMachineInput>
    deleteMany?: Enumerable<GearScalarWhereInput>
  }

  export type FactoryUpdateOneWithoutMachineInput = {
    create?: XOR<FactoryCreateWithoutMachineInput, FactoryUncheckedCreateWithoutMachineInput>
    connectOrCreate?: FactoryCreateOrConnectWithoutMachineInput
    upsert?: FactoryUpsertWithoutMachineInput
    disconnect?: boolean
    delete?: boolean
    connect?: FactoryWhereUniqueInput
    update?: XOR<FactoryUpdateWithoutMachineInput, FactoryUncheckedUpdateWithoutMachineInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumStatusMaquinaFieldUpdateOperationsInput = {
    set?: StatusMaquina
  }

  export type UserUncheckedUpdateManyWithoutMachineInput = {
    create?: XOR<Enumerable<UserCreateWithoutMachineInput>, Enumerable<UserUncheckedCreateWithoutMachineInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutMachineInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutMachineInput>
    createMany?: UserCreateManyMachineInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutMachineInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutMachineInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type GearUncheckedUpdateManyWithoutMachineInput = {
    create?: XOR<Enumerable<GearCreateWithoutMachineInput>, Enumerable<GearUncheckedCreateWithoutMachineInput>>
    connectOrCreate?: Enumerable<GearCreateOrConnectWithoutMachineInput>
    upsert?: Enumerable<GearUpsertWithWhereUniqueWithoutMachineInput>
    createMany?: GearCreateManyMachineInputEnvelope
    set?: Enumerable<GearWhereUniqueInput>
    disconnect?: Enumerable<GearWhereUniqueInput>
    delete?: Enumerable<GearWhereUniqueInput>
    connect?: Enumerable<GearWhereUniqueInput>
    update?: Enumerable<GearUpdateWithWhereUniqueWithoutMachineInput>
    updateMany?: Enumerable<GearUpdateManyWithWhereWithoutMachineInput>
    deleteMany?: Enumerable<GearScalarWhereInput>
  }

  export type MachineCreateNestedOneWithoutGearsInput = {
    create?: XOR<MachineCreateWithoutGearsInput, MachineUncheckedCreateWithoutGearsInput>
    connectOrCreate?: MachineCreateOrConnectWithoutGearsInput
    connect?: MachineWhereUniqueInput
  }

  export type SamplesCreateNestedManyWithoutGearInput = {
    create?: XOR<Enumerable<SamplesCreateWithoutGearInput>, Enumerable<SamplesUncheckedCreateWithoutGearInput>>
    connectOrCreate?: Enumerable<SamplesCreateOrConnectWithoutGearInput>
    createMany?: SamplesCreateManyGearInputEnvelope
    connect?: Enumerable<SamplesWhereUniqueInput>
  }

  export type GearTypeCreateNestedManyWithoutGearInput = {
    create?: XOR<Enumerable<GearTypeCreateWithoutGearInput>, Enumerable<GearTypeUncheckedCreateWithoutGearInput>>
    connectOrCreate?: Enumerable<GearTypeCreateOrConnectWithoutGearInput>
    createMany?: GearTypeCreateManyGearInputEnvelope
    connect?: Enumerable<GearTypeWhereUniqueInput>
  }

  export type SamplesUncheckedCreateNestedManyWithoutGearInput = {
    create?: XOR<Enumerable<SamplesCreateWithoutGearInput>, Enumerable<SamplesUncheckedCreateWithoutGearInput>>
    connectOrCreate?: Enumerable<SamplesCreateOrConnectWithoutGearInput>
    createMany?: SamplesCreateManyGearInputEnvelope
    connect?: Enumerable<SamplesWhereUniqueInput>
  }

  export type GearTypeUncheckedCreateNestedManyWithoutGearInput = {
    create?: XOR<Enumerable<GearTypeCreateWithoutGearInput>, Enumerable<GearTypeUncheckedCreateWithoutGearInput>>
    connectOrCreate?: Enumerable<GearTypeCreateOrConnectWithoutGearInput>
    createMany?: GearTypeCreateManyGearInputEnvelope
    connect?: Enumerable<GearTypeWhereUniqueInput>
  }

  export type MachineUpdateOneWithoutGearsInput = {
    create?: XOR<MachineCreateWithoutGearsInput, MachineUncheckedCreateWithoutGearsInput>
    connectOrCreate?: MachineCreateOrConnectWithoutGearsInput
    upsert?: MachineUpsertWithoutGearsInput
    disconnect?: boolean
    delete?: boolean
    connect?: MachineWhereUniqueInput
    update?: XOR<MachineUpdateWithoutGearsInput, MachineUncheckedUpdateWithoutGearsInput>
  }

  export type SamplesUpdateManyWithoutGearInput = {
    create?: XOR<Enumerable<SamplesCreateWithoutGearInput>, Enumerable<SamplesUncheckedCreateWithoutGearInput>>
    connectOrCreate?: Enumerable<SamplesCreateOrConnectWithoutGearInput>
    upsert?: Enumerable<SamplesUpsertWithWhereUniqueWithoutGearInput>
    createMany?: SamplesCreateManyGearInputEnvelope
    set?: Enumerable<SamplesWhereUniqueInput>
    disconnect?: Enumerable<SamplesWhereUniqueInput>
    delete?: Enumerable<SamplesWhereUniqueInput>
    connect?: Enumerable<SamplesWhereUniqueInput>
    update?: Enumerable<SamplesUpdateWithWhereUniqueWithoutGearInput>
    updateMany?: Enumerable<SamplesUpdateManyWithWhereWithoutGearInput>
    deleteMany?: Enumerable<SamplesScalarWhereInput>
  }

  export type GearTypeUpdateManyWithoutGearInput = {
    create?: XOR<Enumerable<GearTypeCreateWithoutGearInput>, Enumerable<GearTypeUncheckedCreateWithoutGearInput>>
    connectOrCreate?: Enumerable<GearTypeCreateOrConnectWithoutGearInput>
    upsert?: Enumerable<GearTypeUpsertWithWhereUniqueWithoutGearInput>
    createMany?: GearTypeCreateManyGearInputEnvelope
    set?: Enumerable<GearTypeWhereUniqueInput>
    disconnect?: Enumerable<GearTypeWhereUniqueInput>
    delete?: Enumerable<GearTypeWhereUniqueInput>
    connect?: Enumerable<GearTypeWhereUniqueInput>
    update?: Enumerable<GearTypeUpdateWithWhereUniqueWithoutGearInput>
    updateMany?: Enumerable<GearTypeUpdateManyWithWhereWithoutGearInput>
    deleteMany?: Enumerable<GearTypeScalarWhereInput>
  }

  export type SamplesUncheckedUpdateManyWithoutGearInput = {
    create?: XOR<Enumerable<SamplesCreateWithoutGearInput>, Enumerable<SamplesUncheckedCreateWithoutGearInput>>
    connectOrCreate?: Enumerable<SamplesCreateOrConnectWithoutGearInput>
    upsert?: Enumerable<SamplesUpsertWithWhereUniqueWithoutGearInput>
    createMany?: SamplesCreateManyGearInputEnvelope
    set?: Enumerable<SamplesWhereUniqueInput>
    disconnect?: Enumerable<SamplesWhereUniqueInput>
    delete?: Enumerable<SamplesWhereUniqueInput>
    connect?: Enumerable<SamplesWhereUniqueInput>
    update?: Enumerable<SamplesUpdateWithWhereUniqueWithoutGearInput>
    updateMany?: Enumerable<SamplesUpdateManyWithWhereWithoutGearInput>
    deleteMany?: Enumerable<SamplesScalarWhereInput>
  }

  export type GearTypeUncheckedUpdateManyWithoutGearInput = {
    create?: XOR<Enumerable<GearTypeCreateWithoutGearInput>, Enumerable<GearTypeUncheckedCreateWithoutGearInput>>
    connectOrCreate?: Enumerable<GearTypeCreateOrConnectWithoutGearInput>
    upsert?: Enumerable<GearTypeUpsertWithWhereUniqueWithoutGearInput>
    createMany?: GearTypeCreateManyGearInputEnvelope
    set?: Enumerable<GearTypeWhereUniqueInput>
    disconnect?: Enumerable<GearTypeWhereUniqueInput>
    delete?: Enumerable<GearTypeWhereUniqueInput>
    connect?: Enumerable<GearTypeWhereUniqueInput>
    update?: Enumerable<GearTypeUpdateWithWhereUniqueWithoutGearInput>
    updateMany?: Enumerable<GearTypeUpdateManyWithWhereWithoutGearInput>
    deleteMany?: Enumerable<GearTypeScalarWhereInput>
  }

  export type GearCreateNestedOneWithoutGear_typeInput = {
    create?: XOR<GearCreateWithoutGear_typeInput, GearUncheckedCreateWithoutGear_typeInput>
    connectOrCreate?: GearCreateOrConnectWithoutGear_typeInput
    connect?: GearWhereUniqueInput
  }

  export type GearUpdateOneWithoutGear_typeInput = {
    create?: XOR<GearCreateWithoutGear_typeInput, GearUncheckedCreateWithoutGear_typeInput>
    connectOrCreate?: GearCreateOrConnectWithoutGear_typeInput
    upsert?: GearUpsertWithoutGear_typeInput
    disconnect?: boolean
    delete?: boolean
    connect?: GearWhereUniqueInput
    update?: XOR<GearUpdateWithoutGear_typeInput, GearUncheckedUpdateWithoutGear_typeInput>
  }

  export type GearCreateNestedOneWithoutSamplesInput = {
    create?: XOR<GearCreateWithoutSamplesInput, GearUncheckedCreateWithoutSamplesInput>
    connectOrCreate?: GearCreateOrConnectWithoutSamplesInput
    connect?: GearWhereUniqueInput
  }

  export type SingleSampleCreateNestedManyWithoutSamplesInput = {
    create?: XOR<Enumerable<SingleSampleCreateWithoutSamplesInput>, Enumerable<SingleSampleUncheckedCreateWithoutSamplesInput>>
    connectOrCreate?: Enumerable<SingleSampleCreateOrConnectWithoutSamplesInput>
    createMany?: SingleSampleCreateManySamplesInputEnvelope
    connect?: Enumerable<SingleSampleWhereUniqueInput>
  }

  export type SingleSampleUncheckedCreateNestedManyWithoutSamplesInput = {
    create?: XOR<Enumerable<SingleSampleCreateWithoutSamplesInput>, Enumerable<SingleSampleUncheckedCreateWithoutSamplesInput>>
    connectOrCreate?: Enumerable<SingleSampleCreateOrConnectWithoutSamplesInput>
    createMany?: SingleSampleCreateManySamplesInputEnvelope
    connect?: Enumerable<SingleSampleWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GearUpdateOneWithoutSamplesInput = {
    create?: XOR<GearCreateWithoutSamplesInput, GearUncheckedCreateWithoutSamplesInput>
    connectOrCreate?: GearCreateOrConnectWithoutSamplesInput
    upsert?: GearUpsertWithoutSamplesInput
    disconnect?: boolean
    delete?: boolean
    connect?: GearWhereUniqueInput
    update?: XOR<GearUpdateWithoutSamplesInput, GearUncheckedUpdateWithoutSamplesInput>
  }

  export type SingleSampleUpdateManyWithoutSamplesInput = {
    create?: XOR<Enumerable<SingleSampleCreateWithoutSamplesInput>, Enumerable<SingleSampleUncheckedCreateWithoutSamplesInput>>
    connectOrCreate?: Enumerable<SingleSampleCreateOrConnectWithoutSamplesInput>
    upsert?: Enumerable<SingleSampleUpsertWithWhereUniqueWithoutSamplesInput>
    createMany?: SingleSampleCreateManySamplesInputEnvelope
    set?: Enumerable<SingleSampleWhereUniqueInput>
    disconnect?: Enumerable<SingleSampleWhereUniqueInput>
    delete?: Enumerable<SingleSampleWhereUniqueInput>
    connect?: Enumerable<SingleSampleWhereUniqueInput>
    update?: Enumerable<SingleSampleUpdateWithWhereUniqueWithoutSamplesInput>
    updateMany?: Enumerable<SingleSampleUpdateManyWithWhereWithoutSamplesInput>
    deleteMany?: Enumerable<SingleSampleScalarWhereInput>
  }

  export type SingleSampleUncheckedUpdateManyWithoutSamplesInput = {
    create?: XOR<Enumerable<SingleSampleCreateWithoutSamplesInput>, Enumerable<SingleSampleUncheckedCreateWithoutSamplesInput>>
    connectOrCreate?: Enumerable<SingleSampleCreateOrConnectWithoutSamplesInput>
    upsert?: Enumerable<SingleSampleUpsertWithWhereUniqueWithoutSamplesInput>
    createMany?: SingleSampleCreateManySamplesInputEnvelope
    set?: Enumerable<SingleSampleWhereUniqueInput>
    disconnect?: Enumerable<SingleSampleWhereUniqueInput>
    delete?: Enumerable<SingleSampleWhereUniqueInput>
    connect?: Enumerable<SingleSampleWhereUniqueInput>
    update?: Enumerable<SingleSampleUpdateWithWhereUniqueWithoutSamplesInput>
    updateMany?: Enumerable<SingleSampleUpdateManyWithWhereWithoutSamplesInput>
    deleteMany?: Enumerable<SingleSampleScalarWhereInput>
  }

  export type SingleSampleTypeCreateNestedOneWithoutSingleSampleInput = {
    create?: XOR<SingleSampleTypeCreateWithoutSingleSampleInput, SingleSampleTypeUncheckedCreateWithoutSingleSampleInput>
    connectOrCreate?: SingleSampleTypeCreateOrConnectWithoutSingleSampleInput
    connect?: SingleSampleTypeWhereUniqueInput
  }

  export type SamplesCreateNestedOneWithoutSingle_sampleInput = {
    create?: XOR<SamplesCreateWithoutSingle_sampleInput, SamplesUncheckedCreateWithoutSingle_sampleInput>
    connectOrCreate?: SamplesCreateOrConnectWithoutSingle_sampleInput
    connect?: SamplesWhereUniqueInput
  }

  export type SingleSampleTypeUpdateOneRequiredWithoutSingleSampleInput = {
    create?: XOR<SingleSampleTypeCreateWithoutSingleSampleInput, SingleSampleTypeUncheckedCreateWithoutSingleSampleInput>
    connectOrCreate?: SingleSampleTypeCreateOrConnectWithoutSingleSampleInput
    upsert?: SingleSampleTypeUpsertWithoutSingleSampleInput
    connect?: SingleSampleTypeWhereUniqueInput
    update?: XOR<SingleSampleTypeUpdateWithoutSingleSampleInput, SingleSampleTypeUncheckedUpdateWithoutSingleSampleInput>
  }

  export type SamplesUpdateOneWithoutSingle_sampleInput = {
    create?: XOR<SamplesCreateWithoutSingle_sampleInput, SamplesUncheckedCreateWithoutSingle_sampleInput>
    connectOrCreate?: SamplesCreateOrConnectWithoutSingle_sampleInput
    upsert?: SamplesUpsertWithoutSingle_sampleInput
    disconnect?: boolean
    delete?: boolean
    connect?: SamplesWhereUniqueInput
    update?: XOR<SamplesUpdateWithoutSingle_sampleInput, SamplesUncheckedUpdateWithoutSingle_sampleInput>
  }

  export type SingleSampleCreateNestedManyWithoutSingle_sample_typeInput = {
    create?: XOR<Enumerable<SingleSampleCreateWithoutSingle_sample_typeInput>, Enumerable<SingleSampleUncheckedCreateWithoutSingle_sample_typeInput>>
    connectOrCreate?: Enumerable<SingleSampleCreateOrConnectWithoutSingle_sample_typeInput>
    createMany?: SingleSampleCreateManySingle_sample_typeInputEnvelope
    connect?: Enumerable<SingleSampleWhereUniqueInput>
  }

  export type SingleSampleUncheckedCreateNestedManyWithoutSingle_sample_typeInput = {
    create?: XOR<Enumerable<SingleSampleCreateWithoutSingle_sample_typeInput>, Enumerable<SingleSampleUncheckedCreateWithoutSingle_sample_typeInput>>
    connectOrCreate?: Enumerable<SingleSampleCreateOrConnectWithoutSingle_sample_typeInput>
    createMany?: SingleSampleCreateManySingle_sample_typeInputEnvelope
    connect?: Enumerable<SingleSampleWhereUniqueInput>
  }

  export type SingleSampleUpdateManyWithoutSingle_sample_typeInput = {
    create?: XOR<Enumerable<SingleSampleCreateWithoutSingle_sample_typeInput>, Enumerable<SingleSampleUncheckedCreateWithoutSingle_sample_typeInput>>
    connectOrCreate?: Enumerable<SingleSampleCreateOrConnectWithoutSingle_sample_typeInput>
    upsert?: Enumerable<SingleSampleUpsertWithWhereUniqueWithoutSingle_sample_typeInput>
    createMany?: SingleSampleCreateManySingle_sample_typeInputEnvelope
    set?: Enumerable<SingleSampleWhereUniqueInput>
    disconnect?: Enumerable<SingleSampleWhereUniqueInput>
    delete?: Enumerable<SingleSampleWhereUniqueInput>
    connect?: Enumerable<SingleSampleWhereUniqueInput>
    update?: Enumerable<SingleSampleUpdateWithWhereUniqueWithoutSingle_sample_typeInput>
    updateMany?: Enumerable<SingleSampleUpdateManyWithWhereWithoutSingle_sample_typeInput>
    deleteMany?: Enumerable<SingleSampleScalarWhereInput>
  }

  export type SingleSampleUncheckedUpdateManyWithoutSingle_sample_typeInput = {
    create?: XOR<Enumerable<SingleSampleCreateWithoutSingle_sample_typeInput>, Enumerable<SingleSampleUncheckedCreateWithoutSingle_sample_typeInput>>
    connectOrCreate?: Enumerable<SingleSampleCreateOrConnectWithoutSingle_sample_typeInput>
    upsert?: Enumerable<SingleSampleUpsertWithWhereUniqueWithoutSingle_sample_typeInput>
    createMany?: SingleSampleCreateManySingle_sample_typeInputEnvelope
    set?: Enumerable<SingleSampleWhereUniqueInput>
    disconnect?: Enumerable<SingleSampleWhereUniqueInput>
    delete?: Enumerable<SingleSampleWhereUniqueInput>
    connect?: Enumerable<SingleSampleWhereUniqueInput>
    update?: Enumerable<SingleSampleUpdateWithWhereUniqueWithoutSingle_sample_typeInput>
    updateMany?: Enumerable<SingleSampleUpdateManyWithWhereWithoutSingle_sample_typeInput>
    deleteMany?: Enumerable<SingleSampleScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumStatusMaquinaFilter = {
    equals?: StatusMaquina
    in?: Enumerable<StatusMaquina>
    notIn?: Enumerable<StatusMaquina>
    not?: NestedEnumStatusMaquinaFilter | StatusMaquina
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumStatusMaquinaWithAggregatesFilter = {
    equals?: StatusMaquina
    in?: Enumerable<StatusMaquina>
    notIn?: Enumerable<StatusMaquina>
    not?: NestedEnumStatusMaquinaWithAggregatesFilter | StatusMaquina
    _count?: NestedIntFilter
    _min?: NestedEnumStatusMaquinaFilter
    _max?: NestedEnumStatusMaquinaFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type MachineCreateWithoutCanBeOperateByInput = {
    id?: string
    insertBy: string
    gears?: GearCreateNestedManyWithoutMachineInput
    Factory?: FactoryCreateNestedOneWithoutMachineInput
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineUncheckedCreateWithoutCanBeOperateByInput = {
    id?: string
    insertBy: string
    gears?: GearUncheckedCreateNestedManyWithoutMachineInput
    factoryId?: string | null
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineCreateOrConnectWithoutCanBeOperateByInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutCanBeOperateByInput, MachineUncheckedCreateWithoutCanBeOperateByInput>
  }

  export type MachineUpsertWithoutCanBeOperateByInput = {
    update: XOR<MachineUpdateWithoutCanBeOperateByInput, MachineUncheckedUpdateWithoutCanBeOperateByInput>
    create: XOR<MachineCreateWithoutCanBeOperateByInput, MachineUncheckedCreateWithoutCanBeOperateByInput>
  }

  export type MachineUpdateWithoutCanBeOperateByInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    gears?: GearUpdateManyWithoutMachineInput
    Factory?: FactoryUpdateOneWithoutMachineInput
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type MachineUncheckedUpdateWithoutCanBeOperateByInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    gears?: GearUncheckedUpdateManyWithoutMachineInput
    factoryId?: NullableStringFieldUpdateOperationsInput | string | null
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type MachineCreateWithoutFactoryInput = {
    id?: string
    insertBy: string
    CanBeOperateBy?: UserCreateNestedManyWithoutMachineInput
    gears?: GearCreateNestedManyWithoutMachineInput
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineUncheckedCreateWithoutFactoryInput = {
    id?: string
    insertBy: string
    CanBeOperateBy?: UserUncheckedCreateNestedManyWithoutMachineInput
    gears?: GearUncheckedCreateNestedManyWithoutMachineInput
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineCreateOrConnectWithoutFactoryInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutFactoryInput, MachineUncheckedCreateWithoutFactoryInput>
  }

  export type MachineCreateManyFactoryInputEnvelope = {
    data: Enumerable<MachineCreateManyFactoryInput>
  }

  export type MachineUpsertWithWhereUniqueWithoutFactoryInput = {
    where: MachineWhereUniqueInput
    update: XOR<MachineUpdateWithoutFactoryInput, MachineUncheckedUpdateWithoutFactoryInput>
    create: XOR<MachineCreateWithoutFactoryInput, MachineUncheckedCreateWithoutFactoryInput>
  }

  export type MachineUpdateWithWhereUniqueWithoutFactoryInput = {
    where: MachineWhereUniqueInput
    data: XOR<MachineUpdateWithoutFactoryInput, MachineUncheckedUpdateWithoutFactoryInput>
  }

  export type MachineUpdateManyWithWhereWithoutFactoryInput = {
    where: MachineScalarWhereInput
    data: XOR<MachineUpdateManyMutationInput, MachineUncheckedUpdateManyWithoutMachineInput>
  }

  export type MachineScalarWhereInput = {
    AND?: Enumerable<MachineScalarWhereInput>
    OR?: Enumerable<MachineScalarWhereInput>
    NOT?: Enumerable<MachineScalarWhereInput>
    id?: StringFilter | string
    insertBy?: StringFilter | string
    factoryId?: StringNullableFilter | string | null
    datalogger?: BoolFilter | boolean
    status?: EnumStatusMaquinaFilter | StatusMaquina
  }

  export type UserCreateWithoutMachineInput = {
    id?: string
    name: string
    register: string
    status?: Status
    role: Role
  }

  export type UserUncheckedCreateWithoutMachineInput = {
    id?: string
    name: string
    register: string
    status?: Status
    role: Role
  }

  export type UserCreateOrConnectWithoutMachineInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMachineInput, UserUncheckedCreateWithoutMachineInput>
  }

  export type UserCreateManyMachineInputEnvelope = {
    data: Enumerable<UserCreateManyMachineInput>
  }

  export type GearCreateWithoutMachineInput = {
    id?: string
    samples?: SamplesCreateNestedManyWithoutGearInput
    gear_type?: GearTypeCreateNestedManyWithoutGearInput
  }

  export type GearUncheckedCreateWithoutMachineInput = {
    id?: string
    samples?: SamplesUncheckedCreateNestedManyWithoutGearInput
    gear_type?: GearTypeUncheckedCreateNestedManyWithoutGearInput
  }

  export type GearCreateOrConnectWithoutMachineInput = {
    where: GearWhereUniqueInput
    create: XOR<GearCreateWithoutMachineInput, GearUncheckedCreateWithoutMachineInput>
  }

  export type GearCreateManyMachineInputEnvelope = {
    data: Enumerable<GearCreateManyMachineInput>
  }

  export type FactoryCreateWithoutMachineInput = {
    id?: string
    description: string
  }

  export type FactoryUncheckedCreateWithoutMachineInput = {
    id?: string
    description: string
  }

  export type FactoryCreateOrConnectWithoutMachineInput = {
    where: FactoryWhereUniqueInput
    create: XOR<FactoryCreateWithoutMachineInput, FactoryUncheckedCreateWithoutMachineInput>
  }

  export type UserUpsertWithWhereUniqueWithoutMachineInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMachineInput, UserUncheckedUpdateWithoutMachineInput>
    create: XOR<UserCreateWithoutMachineInput, UserUncheckedCreateWithoutMachineInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMachineInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMachineInput, UserUncheckedUpdateWithoutMachineInput>
  }

  export type UserUpdateManyWithWhereWithoutMachineInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCanBeOperateByInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    register?: StringFilter | string
    status?: EnumStatusFilter | Status
    role?: EnumRoleFilter | Role
    machineId?: StringNullableFilter | string | null
  }

  export type GearUpsertWithWhereUniqueWithoutMachineInput = {
    where: GearWhereUniqueInput
    update: XOR<GearUpdateWithoutMachineInput, GearUncheckedUpdateWithoutMachineInput>
    create: XOR<GearCreateWithoutMachineInput, GearUncheckedCreateWithoutMachineInput>
  }

  export type GearUpdateWithWhereUniqueWithoutMachineInput = {
    where: GearWhereUniqueInput
    data: XOR<GearUpdateWithoutMachineInput, GearUncheckedUpdateWithoutMachineInput>
  }

  export type GearUpdateManyWithWhereWithoutMachineInput = {
    where: GearScalarWhereInput
    data: XOR<GearUpdateManyMutationInput, GearUncheckedUpdateManyWithoutGearsInput>
  }

  export type GearScalarWhereInput = {
    AND?: Enumerable<GearScalarWhereInput>
    OR?: Enumerable<GearScalarWhereInput>
    NOT?: Enumerable<GearScalarWhereInput>
    id?: StringFilter | string
    machineId?: StringNullableFilter | string | null
  }

  export type FactoryUpsertWithoutMachineInput = {
    update: XOR<FactoryUpdateWithoutMachineInput, FactoryUncheckedUpdateWithoutMachineInput>
    create: XOR<FactoryCreateWithoutMachineInput, FactoryUncheckedCreateWithoutMachineInput>
  }

  export type FactoryUpdateWithoutMachineInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FactoryUncheckedUpdateWithoutMachineInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MachineCreateWithoutGearsInput = {
    id?: string
    insertBy: string
    CanBeOperateBy?: UserCreateNestedManyWithoutMachineInput
    Factory?: FactoryCreateNestedOneWithoutMachineInput
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineUncheckedCreateWithoutGearsInput = {
    id?: string
    insertBy: string
    CanBeOperateBy?: UserUncheckedCreateNestedManyWithoutMachineInput
    factoryId?: string | null
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineCreateOrConnectWithoutGearsInput = {
    where: MachineWhereUniqueInput
    create: XOR<MachineCreateWithoutGearsInput, MachineUncheckedCreateWithoutGearsInput>
  }

  export type SamplesCreateWithoutGearInput = {
    id?: string
    timestamp?: Date | string
    single_sample?: SingleSampleCreateNestedManyWithoutSamplesInput
  }

  export type SamplesUncheckedCreateWithoutGearInput = {
    id?: string
    timestamp?: Date | string
    single_sample?: SingleSampleUncheckedCreateNestedManyWithoutSamplesInput
  }

  export type SamplesCreateOrConnectWithoutGearInput = {
    where: SamplesWhereUniqueInput
    create: XOR<SamplesCreateWithoutGearInput, SamplesUncheckedCreateWithoutGearInput>
  }

  export type SamplesCreateManyGearInputEnvelope = {
    data: Enumerable<SamplesCreateManyGearInput>
  }

  export type GearTypeCreateWithoutGearInput = {
    id?: string
    name: string
    description: string
  }

  export type GearTypeUncheckedCreateWithoutGearInput = {
    id?: string
    name: string
    description: string
  }

  export type GearTypeCreateOrConnectWithoutGearInput = {
    where: GearTypeWhereUniqueInput
    create: XOR<GearTypeCreateWithoutGearInput, GearTypeUncheckedCreateWithoutGearInput>
  }

  export type GearTypeCreateManyGearInputEnvelope = {
    data: Enumerable<GearTypeCreateManyGearInput>
  }

  export type MachineUpsertWithoutGearsInput = {
    update: XOR<MachineUpdateWithoutGearsInput, MachineUncheckedUpdateWithoutGearsInput>
    create: XOR<MachineCreateWithoutGearsInput, MachineUncheckedCreateWithoutGearsInput>
  }

  export type MachineUpdateWithoutGearsInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    CanBeOperateBy?: UserUpdateManyWithoutMachineInput
    Factory?: FactoryUpdateOneWithoutMachineInput
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type MachineUncheckedUpdateWithoutGearsInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    CanBeOperateBy?: UserUncheckedUpdateManyWithoutMachineInput
    factoryId?: NullableStringFieldUpdateOperationsInput | string | null
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type SamplesUpsertWithWhereUniqueWithoutGearInput = {
    where: SamplesWhereUniqueInput
    update: XOR<SamplesUpdateWithoutGearInput, SamplesUncheckedUpdateWithoutGearInput>
    create: XOR<SamplesCreateWithoutGearInput, SamplesUncheckedCreateWithoutGearInput>
  }

  export type SamplesUpdateWithWhereUniqueWithoutGearInput = {
    where: SamplesWhereUniqueInput
    data: XOR<SamplesUpdateWithoutGearInput, SamplesUncheckedUpdateWithoutGearInput>
  }

  export type SamplesUpdateManyWithWhereWithoutGearInput = {
    where: SamplesScalarWhereInput
    data: XOR<SamplesUpdateManyMutationInput, SamplesUncheckedUpdateManyWithoutSamplesInput>
  }

  export type SamplesScalarWhereInput = {
    AND?: Enumerable<SamplesScalarWhereInput>
    OR?: Enumerable<SamplesScalarWhereInput>
    NOT?: Enumerable<SamplesScalarWhereInput>
    id?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    gearId?: StringNullableFilter | string | null
  }

  export type GearTypeUpsertWithWhereUniqueWithoutGearInput = {
    where: GearTypeWhereUniqueInput
    update: XOR<GearTypeUpdateWithoutGearInput, GearTypeUncheckedUpdateWithoutGearInput>
    create: XOR<GearTypeCreateWithoutGearInput, GearTypeUncheckedCreateWithoutGearInput>
  }

  export type GearTypeUpdateWithWhereUniqueWithoutGearInput = {
    where: GearTypeWhereUniqueInput
    data: XOR<GearTypeUpdateWithoutGearInput, GearTypeUncheckedUpdateWithoutGearInput>
  }

  export type GearTypeUpdateManyWithWhereWithoutGearInput = {
    where: GearTypeScalarWhereInput
    data: XOR<GearTypeUpdateManyMutationInput, GearTypeUncheckedUpdateManyWithoutGear_typeInput>
  }

  export type GearTypeScalarWhereInput = {
    AND?: Enumerable<GearTypeScalarWhereInput>
    OR?: Enumerable<GearTypeScalarWhereInput>
    NOT?: Enumerable<GearTypeScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    gearId?: StringNullableFilter | string | null
  }

  export type GearCreateWithoutGear_typeInput = {
    id?: string
    machine?: MachineCreateNestedOneWithoutGearsInput
    samples?: SamplesCreateNestedManyWithoutGearInput
  }

  export type GearUncheckedCreateWithoutGear_typeInput = {
    id?: string
    machineId?: string | null
    samples?: SamplesUncheckedCreateNestedManyWithoutGearInput
  }

  export type GearCreateOrConnectWithoutGear_typeInput = {
    where: GearWhereUniqueInput
    create: XOR<GearCreateWithoutGear_typeInput, GearUncheckedCreateWithoutGear_typeInput>
  }

  export type GearUpsertWithoutGear_typeInput = {
    update: XOR<GearUpdateWithoutGear_typeInput, GearUncheckedUpdateWithoutGear_typeInput>
    create: XOR<GearCreateWithoutGear_typeInput, GearUncheckedCreateWithoutGear_typeInput>
  }

  export type GearUpdateWithoutGear_typeInput = {
    machine?: MachineUpdateOneWithoutGearsInput
    samples?: SamplesUpdateManyWithoutGearInput
  }

  export type GearUncheckedUpdateWithoutGear_typeInput = {
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    samples?: SamplesUncheckedUpdateManyWithoutGearInput
  }

  export type GearCreateWithoutSamplesInput = {
    id?: string
    machine?: MachineCreateNestedOneWithoutGearsInput
    gear_type?: GearTypeCreateNestedManyWithoutGearInput
  }

  export type GearUncheckedCreateWithoutSamplesInput = {
    id?: string
    machineId?: string | null
    gear_type?: GearTypeUncheckedCreateNestedManyWithoutGearInput
  }

  export type GearCreateOrConnectWithoutSamplesInput = {
    where: GearWhereUniqueInput
    create: XOR<GearCreateWithoutSamplesInput, GearUncheckedCreateWithoutSamplesInput>
  }

  export type SingleSampleCreateWithoutSamplesInput = {
    id?: string
    value: string
    single_sample_type: SingleSampleTypeCreateNestedOneWithoutSingleSampleInput
  }

  export type SingleSampleUncheckedCreateWithoutSamplesInput = {
    id?: string
    value: string
    singleSampleTypeId: string
  }

  export type SingleSampleCreateOrConnectWithoutSamplesInput = {
    where: SingleSampleWhereUniqueInput
    create: XOR<SingleSampleCreateWithoutSamplesInput, SingleSampleUncheckedCreateWithoutSamplesInput>
  }

  export type SingleSampleCreateManySamplesInputEnvelope = {
    data: Enumerable<SingleSampleCreateManySamplesInput>
  }

  export type GearUpsertWithoutSamplesInput = {
    update: XOR<GearUpdateWithoutSamplesInput, GearUncheckedUpdateWithoutSamplesInput>
    create: XOR<GearCreateWithoutSamplesInput, GearUncheckedCreateWithoutSamplesInput>
  }

  export type GearUpdateWithoutSamplesInput = {
    machine?: MachineUpdateOneWithoutGearsInput
    gear_type?: GearTypeUpdateManyWithoutGearInput
  }

  export type GearUncheckedUpdateWithoutSamplesInput = {
    machineId?: NullableStringFieldUpdateOperationsInput | string | null
    gear_type?: GearTypeUncheckedUpdateManyWithoutGearInput
  }

  export type SingleSampleUpsertWithWhereUniqueWithoutSamplesInput = {
    where: SingleSampleWhereUniqueInput
    update: XOR<SingleSampleUpdateWithoutSamplesInput, SingleSampleUncheckedUpdateWithoutSamplesInput>
    create: XOR<SingleSampleCreateWithoutSamplesInput, SingleSampleUncheckedCreateWithoutSamplesInput>
  }

  export type SingleSampleUpdateWithWhereUniqueWithoutSamplesInput = {
    where: SingleSampleWhereUniqueInput
    data: XOR<SingleSampleUpdateWithoutSamplesInput, SingleSampleUncheckedUpdateWithoutSamplesInput>
  }

  export type SingleSampleUpdateManyWithWhereWithoutSamplesInput = {
    where: SingleSampleScalarWhereInput
    data: XOR<SingleSampleUpdateManyMutationInput, SingleSampleUncheckedUpdateManyWithoutSingle_sampleInput>
  }

  export type SingleSampleScalarWhereInput = {
    AND?: Enumerable<SingleSampleScalarWhereInput>
    OR?: Enumerable<SingleSampleScalarWhereInput>
    NOT?: Enumerable<SingleSampleScalarWhereInput>
    id?: StringFilter | string
    value?: StringFilter | string
    singleSampleTypeId?: StringFilter | string
    samplesId?: StringNullableFilter | string | null
  }

  export type SingleSampleTypeCreateWithoutSingleSampleInput = {
    id?: string
    sample_name: string
    unity: string
    createBy: string
  }

  export type SingleSampleTypeUncheckedCreateWithoutSingleSampleInput = {
    id?: string
    sample_name: string
    unity: string
    createBy: string
  }

  export type SingleSampleTypeCreateOrConnectWithoutSingleSampleInput = {
    where: SingleSampleTypeWhereUniqueInput
    create: XOR<SingleSampleTypeCreateWithoutSingleSampleInput, SingleSampleTypeUncheckedCreateWithoutSingleSampleInput>
  }

  export type SamplesCreateWithoutSingle_sampleInput = {
    id?: string
    timestamp?: Date | string
    Gear?: GearCreateNestedOneWithoutSamplesInput
  }

  export type SamplesUncheckedCreateWithoutSingle_sampleInput = {
    id?: string
    timestamp?: Date | string
    gearId?: string | null
  }

  export type SamplesCreateOrConnectWithoutSingle_sampleInput = {
    where: SamplesWhereUniqueInput
    create: XOR<SamplesCreateWithoutSingle_sampleInput, SamplesUncheckedCreateWithoutSingle_sampleInput>
  }

  export type SingleSampleTypeUpsertWithoutSingleSampleInput = {
    update: XOR<SingleSampleTypeUpdateWithoutSingleSampleInput, SingleSampleTypeUncheckedUpdateWithoutSingleSampleInput>
    create: XOR<SingleSampleTypeCreateWithoutSingleSampleInput, SingleSampleTypeUncheckedCreateWithoutSingleSampleInput>
  }

  export type SingleSampleTypeUpdateWithoutSingleSampleInput = {
    sample_name?: StringFieldUpdateOperationsInput | string
    unity?: StringFieldUpdateOperationsInput | string
    createBy?: StringFieldUpdateOperationsInput | string
  }

  export type SingleSampleTypeUncheckedUpdateWithoutSingleSampleInput = {
    sample_name?: StringFieldUpdateOperationsInput | string
    unity?: StringFieldUpdateOperationsInput | string
    createBy?: StringFieldUpdateOperationsInput | string
  }

  export type SamplesUpsertWithoutSingle_sampleInput = {
    update: XOR<SamplesUpdateWithoutSingle_sampleInput, SamplesUncheckedUpdateWithoutSingle_sampleInput>
    create: XOR<SamplesCreateWithoutSingle_sampleInput, SamplesUncheckedCreateWithoutSingle_sampleInput>
  }

  export type SamplesUpdateWithoutSingle_sampleInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Gear?: GearUpdateOneWithoutSamplesInput
  }

  export type SamplesUncheckedUpdateWithoutSingle_sampleInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    gearId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SingleSampleCreateWithoutSingle_sample_typeInput = {
    id?: string
    value: string
    Samples?: SamplesCreateNestedOneWithoutSingle_sampleInput
  }

  export type SingleSampleUncheckedCreateWithoutSingle_sample_typeInput = {
    id?: string
    value: string
    samplesId?: string | null
  }

  export type SingleSampleCreateOrConnectWithoutSingle_sample_typeInput = {
    where: SingleSampleWhereUniqueInput
    create: XOR<SingleSampleCreateWithoutSingle_sample_typeInput, SingleSampleUncheckedCreateWithoutSingle_sample_typeInput>
  }

  export type SingleSampleCreateManySingle_sample_typeInputEnvelope = {
    data: Enumerable<SingleSampleCreateManySingle_sample_typeInput>
  }

  export type SingleSampleUpsertWithWhereUniqueWithoutSingle_sample_typeInput = {
    where: SingleSampleWhereUniqueInput
    update: XOR<SingleSampleUpdateWithoutSingle_sample_typeInput, SingleSampleUncheckedUpdateWithoutSingle_sample_typeInput>
    create: XOR<SingleSampleCreateWithoutSingle_sample_typeInput, SingleSampleUncheckedCreateWithoutSingle_sample_typeInput>
  }

  export type SingleSampleUpdateWithWhereUniqueWithoutSingle_sample_typeInput = {
    where: SingleSampleWhereUniqueInput
    data: XOR<SingleSampleUpdateWithoutSingle_sample_typeInput, SingleSampleUncheckedUpdateWithoutSingle_sample_typeInput>
  }

  export type SingleSampleUpdateManyWithWhereWithoutSingle_sample_typeInput = {
    where: SingleSampleScalarWhereInput
    data: XOR<SingleSampleUpdateManyMutationInput, SingleSampleUncheckedUpdateManyWithoutSingleSampleInput>
  }

  export type MachineCreateManyFactoryInput = {
    id?: string
    insertBy: string
    datalogger?: boolean
    status?: StatusMaquina
  }

  export type MachineUpdateWithoutFactoryInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    CanBeOperateBy?: UserUpdateManyWithoutMachineInput
    gears?: GearUpdateManyWithoutMachineInput
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type MachineUncheckedUpdateWithoutFactoryInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    CanBeOperateBy?: UserUncheckedUpdateManyWithoutMachineInput
    gears?: GearUncheckedUpdateManyWithoutMachineInput
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type MachineUncheckedUpdateManyWithoutMachineInput = {
    insertBy?: StringFieldUpdateOperationsInput | string
    datalogger?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusMaquinaFieldUpdateOperationsInput | StatusMaquina
  }

  export type UserCreateManyMachineInput = {
    id?: string
    name: string
    register: string
    status?: Status
    role: Role
  }

  export type GearCreateManyMachineInput = {
    id?: string
  }

  export type UserUpdateWithoutMachineInput = {
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateWithoutMachineInput = {
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateManyWithoutCanBeOperateByInput = {
    name?: StringFieldUpdateOperationsInput | string
    register?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type GearUpdateWithoutMachineInput = {
    samples?: SamplesUpdateManyWithoutGearInput
    gear_type?: GearTypeUpdateManyWithoutGearInput
  }

  export type GearUncheckedUpdateWithoutMachineInput = {
    samples?: SamplesUncheckedUpdateManyWithoutGearInput
    gear_type?: GearTypeUncheckedUpdateManyWithoutGearInput
  }

  export type GearUncheckedUpdateManyWithoutGearsInput = {

  }

  export type SamplesCreateManyGearInput = {
    id?: string
    timestamp?: Date | string
  }

  export type GearTypeCreateManyGearInput = {
    id?: string
    name: string
    description: string
  }

  export type SamplesUpdateWithoutGearInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    single_sample?: SingleSampleUpdateManyWithoutSamplesInput
  }

  export type SamplesUncheckedUpdateWithoutGearInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    single_sample?: SingleSampleUncheckedUpdateManyWithoutSamplesInput
  }

  export type SamplesUncheckedUpdateManyWithoutSamplesInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GearTypeUpdateWithoutGearInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GearTypeUncheckedUpdateWithoutGearInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type GearTypeUncheckedUpdateManyWithoutGear_typeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SingleSampleCreateManySamplesInput = {
    id?: string
    value: string
    singleSampleTypeId: string
  }

  export type SingleSampleUpdateWithoutSamplesInput = {
    value?: StringFieldUpdateOperationsInput | string
    single_sample_type?: SingleSampleTypeUpdateOneRequiredWithoutSingleSampleInput
  }

  export type SingleSampleUncheckedUpdateWithoutSamplesInput = {
    value?: StringFieldUpdateOperationsInput | string
    singleSampleTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type SingleSampleUncheckedUpdateManyWithoutSingle_sampleInput = {
    value?: StringFieldUpdateOperationsInput | string
    singleSampleTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type SingleSampleCreateManySingle_sample_typeInput = {
    id?: string
    value: string
    samplesId?: string | null
  }

  export type SingleSampleUpdateWithoutSingle_sample_typeInput = {
    value?: StringFieldUpdateOperationsInput | string
    Samples?: SamplesUpdateOneWithoutSingle_sampleInput
  }

  export type SingleSampleUncheckedUpdateWithoutSingle_sample_typeInput = {
    value?: StringFieldUpdateOperationsInput | string
    samplesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SingleSampleUncheckedUpdateManyWithoutSingleSampleInput = {
    value?: StringFieldUpdateOperationsInput | string
    samplesId?: NullableStringFieldUpdateOperationsInput | string | null
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
  export const dmmf: runtime.DMMF.Document;
}