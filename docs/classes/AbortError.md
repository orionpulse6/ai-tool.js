[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / AbortError

# Class: AbortError

BaseError class that extends the Error class.

**`Example`**

```ts
// Create a custom error
class CustomError extends BaseError {
  static code = 'customError';
  constructor(message: string) {
    super(message);
  }
}

// Throw the custom error
throw new CustomError('This is a custom error');
```

**`Description`**

This class is used to create custom errors that extend the built-in Error class. It provides a way to define custom error codes and additional data associated with the error.

**`Method`**

toJSON - Returns a JSON representation of the error.

**`Method`**

fromJSON - Creates a new BaseError instance from a JSON representation.

## Hierarchy

- [`CommonError`](CommonError.md)

  ↳ **`AbortError`**

## Table of contents

### Constructors

- [constructor](AbortError.md#constructor)

### Properties

- [caller](AbortError.md#caller)
- [cause](AbortError.md#cause)
- [code](AbortError.md#code)
- [data](AbortError.md#data)
- [message](AbortError.md#message)
- [name](AbortError.md#name)
- [stack](AbortError.md#stack)
- [code](AbortError.md#code-1)
- [prepareStackTrace](AbortError.md#preparestacktrace)
- [stackTraceLimit](AbortError.md#stacktracelimit)

### Methods

- [fromJSON](AbortError.md#fromjson)
- [toJSON](AbortError.md#tojson)
- [captureStackTrace](AbortError.md#capturestacktrace)
- [createErrorClass](AbortError.md#createerrorclass)

## Constructors

### constructor

• **new AbortError**(`what?`, `name?`): [`AbortError`](AbortError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what?` | `string` |
| `name?` | `string` \| `Record`\<`string`, `any`\> |

#### Returns

[`AbortError`](AbortError.md)

#### Overrides

[CommonError](CommonError.md).[constructor](CommonError.md#constructor)

#### Defined in

node_modules/.pnpm/@isdk+common-error@0.1.1/node_modules/@isdk/common-error/dist/index.d.ts:132

## Properties

### caller

• **caller**: `string`

The name of the function that threw the error.

#### Inherited from

[CommonError](CommonError.md).[caller](CommonError.md#caller)

#### Defined in

node_modules/.pnpm/@isdk+common-error@0.1.1/node_modules/@isdk/common-error/dist/index.d.ts:63

___

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[CommonError](CommonError.md).[cause](CommonError.md#cause)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• **code**: `ErrorCodeType`

#### Inherited from

[CommonError](CommonError.md).[code](CommonError.md#code)

#### Defined in

node_modules/.pnpm/@isdk+common-error@0.1.1/node_modules/@isdk/common-error/dist/index.d.ts:64

___

### data

• `Optional` **data**: `any`

Additional data associated with the error.

#### Inherited from

[CommonError](CommonError.md).[data](CommonError.md#data)

#### Defined in

node_modules/.pnpm/@isdk+common-error@0.1.1/node_modules/@isdk/common-error/dist/index.d.ts:65

___

### message

• **message**: `string`

#### Inherited from

[CommonError](CommonError.md).[message](CommonError.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

[CommonError](CommonError.md).[name](CommonError.md#name)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1076

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[CommonError](CommonError.md).[stack](CommonError.md#stack)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1078

___

### code

▪ `Static` **code**: [`ErrorCode`](../enums/ErrorCode.md)

The error code associated with the error.

#### Overrides

[CommonError](CommonError.md).[code](CommonError.md#code-1)

#### Defined in

node_modules/.pnpm/@isdk+common-error@0.1.1/node_modules/@isdk/common-error/dist/index.d.ts:131

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[CommonError](CommonError.md).[prepareStackTrace](CommonError.md#preparestacktrace)

#### Defined in

node_modules/.pnpm/@types+node@20.14.2/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[CommonError](CommonError.md).[stackTraceLimit](CommonError.md#stacktracelimit)

#### Defined in

node_modules/.pnpm/@types+node@20.14.2/node_modules/@types/node/globals.d.ts:30

## Methods

### fromJSON

▸ **fromJSON**(`json`): [`BaseError`](BaseError.md)

Creates a new BaseError instance from a JSON representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `any` | A JSON representation of the error. |

#### Returns

[`BaseError`](BaseError.md)

A new BaseError instance.

#### Inherited from

[CommonError](CommonError.md).[fromJSON](CommonError.md#fromjson)

#### Defined in

node_modules/.pnpm/@isdk+common-error@0.1.1/node_modules/@isdk/common-error/dist/index.d.ts:87

___

### toJSON

▸ **toJSON**(): `any`

Returns a JSON representation of the error.

#### Returns

`any`

A JSON representation of the error.

#### Inherited from

[CommonError](CommonError.md).[toJSON](CommonError.md#tojson)

#### Defined in

node_modules/.pnpm/@isdk+common-error@0.1.1/node_modules/@isdk/common-error/dist/index.d.ts:80

___

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[CommonError](CommonError.md).[captureStackTrace](CommonError.md#capturestacktrace)

#### Defined in

node_modules/.pnpm/@types+node@20.14.2/node_modules/@types/node/globals.d.ts:21

___

### createErrorClass

▸ **createErrorClass**(`aType`, `aErrorCode?`, `ParentErrorClass?`): typeof [`BaseError`](BaseError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aType` | `string` |
| `aErrorCode?` | `string` \| `number` \| typeof `AbstractError` |
| `ParentErrorClass?` | typeof [`BaseError`](BaseError.md) |

#### Returns

typeof [`BaseError`](BaseError.md)

#### Inherited from

[CommonError](CommonError.md).[createErrorClass](CommonError.md#createerrorclass)

#### Defined in

node_modules/.pnpm/@isdk+common-error@0.1.1/node_modules/@isdk/common-error/dist/index.d.ts:66
