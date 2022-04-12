
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.12.0
 * Query Engine version: 22b822189f46ef0dc5c5b503368d1bee01213980
 */
Prisma.prismaVersion = {
  client: "3.12.0",
  engine: "22b822189f46ef0dc5c5b503368d1bee01213980"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  register: 'register',
  status: 'status',
  role: 'role',
  machineId: 'machineId'
});

exports.Prisma.FactoryScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.MachineScalarFieldEnum = makeEnum({
  id: 'id',
  insertBy: 'insertBy',
  factoryId: 'factoryId',
  datalogger: 'datalogger',
  status: 'status'
});

exports.Prisma.GearScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId'
});

exports.Prisma.GearTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  gearId: 'gearId'
});

exports.Prisma.SamplesScalarFieldEnum = makeEnum({
  id: 'id',
  timestamp: 'timestamp',
  gearId: 'gearId'
});

exports.Prisma.SingleSampleScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  singleSampleTypeId: 'singleSampleTypeId',
  samplesId: 'samplesId'
});

exports.Prisma.SingleSampleTypeScalarFieldEnum = makeEnum({
  id: 'id',
  sample_name: 'sample_name',
  unity: 'unity',
  createBy: 'createBy'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Status = makeEnum({
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO'
});

exports.Role = makeEnum({
  PRODUCAO: 'PRODUCAO',
  ADMIN: 'ADMIN'
});

exports.StatusMaquina = makeEnum({
  FUNCIONANDO: 'FUNCIONANDO',
  MANUTENCAO: 'MANUTENCAO',
  DESATIVADA: 'DESATIVADA'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Factory: 'Factory',
  Machine: 'Machine',
  Gear: 'Gear',
  GearType: 'GearType',
  Samples: 'Samples',
  SingleSample: 'SingleSample',
  SingleSampleType: 'SingleSampleType'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
