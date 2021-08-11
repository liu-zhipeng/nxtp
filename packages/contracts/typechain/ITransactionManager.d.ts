/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ITransactionManagerInterface extends ethers.utils.Interface {
  functions: {
    "addAssetId(address)": FunctionFragment;
    "addLiquidity(uint256,address)": FunctionFragment;
    "addLiquidityFor(uint256,address,address)": FunctionFragment;
    "addRouter(address)": FunctionFragment;
    "cancel(tuple,uint256,bytes)": FunctionFragment;
    "fulfill(tuple,uint256,bytes,bytes)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getStoredChainId()": FunctionFragment;
    "prepare(tuple,uint256,uint256,bytes,bytes,bytes)": FunctionFragment;
    "removeAssetId(address)": FunctionFragment;
    "removeLiquidity(uint256,address,address)": FunctionFragment;
    "removeRouter(address)": FunctionFragment;
    "renounced()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addAssetId", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityFor",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "addRouter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStoredChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prepare",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAssetId",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRouter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addAssetId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStoredChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prepare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAssetId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;

  events: {
    "AssetAdded(address,address)": EventFragment;
    "AssetRemoved(address,address)": EventFragment;
    "LiquidityAdded(address,address,uint256,address)": EventFragment;
    "LiquidityRemoved(address,address,uint256,address)": EventFragment;
    "RouterAdded(address,address)": EventFragment;
    "RouterRemoved(address,address)": EventFragment;
    "TransactionCancelled(address,address,bytes32,tuple,uint256,address)": EventFragment;
    "TransactionFulfilled(address,address,bytes32,tuple,uint256,bytes,bytes,address)": EventFragment;
    "TransactionPrepared(address,address,bytes32,tuple,address,bytes,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionPrepared"): EventFragment;
}

export class ITransactionManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ITransactionManagerInterface;

  functions: {
    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidityFor(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStoredChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    prepare(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounced(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAssetId(
    assetId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidity(
    amount: BigNumberish,
    assetId: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidityFor(
    amount: BigNumberish,
    assetId: string,
    router: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addRouter(
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancel(
    txData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      callDataHash: BytesLike;
      transactionId: BytesLike;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      amount: BigNumberish;
      expiry: BigNumberish;
      preparedBlockNumber: BigNumberish;
    },
    relayerFee: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fulfill(
    txData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      callDataHash: BytesLike;
      transactionId: BytesLike;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      amount: BigNumberish;
      expiry: BigNumberish;
      preparedBlockNumber: BigNumberish;
    },
    relayerFee: BigNumberish,
    signature: BytesLike,
    callData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getStoredChainId(overrides?: CallOverrides): Promise<BigNumber>;

  prepare(
    txData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      callDataHash: BytesLike;
      transactionId: BytesLike;
    },
    amount: BigNumberish,
    expiry: BigNumberish,
    encryptedCallData: BytesLike,
    encodedBid: BytesLike,
    bidSignature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeAssetId(
    assetId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    amount: BigNumberish,
    assetId: string,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeRouter(
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounced(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAssetId(assetId: string, overrides?: CallOverrides): Promise<void>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addLiquidityFor(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addRouter(router: string, overrides?: CallOverrides): Promise<void>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getStoredChainId(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    removeAssetId(assetId: string, overrides?: CallOverrides): Promise<void>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeRouter(router: string, overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    AssetAdded(
      addedAssetId?: string | null,
      caller?: string | null
    ): TypedEventFilter<
      [string, string],
      { addedAssetId: string; caller: string }
    >;

    AssetRemoved(
      removedAssetId?: string | null,
      caller?: string | null
    ): TypedEventFilter<
      [string, string],
      { removedAssetId: string; caller: string }
    >;

    LiquidityAdded(
      router?: string | null,
      assetId?: string | null,
      amount?: null,
      caller?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { router: string; assetId: string; amount: BigNumber; caller: string }
    >;

    LiquidityRemoved(
      router?: string | null,
      assetId?: string | null,
      amount?: null,
      recipient?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { router: string; assetId: string; amount: BigNumber; recipient: string }
    >;

    RouterAdded(
      addedRouter?: string | null,
      caller?: string | null
    ): TypedEventFilter<
      [string, string],
      { addedRouter: string; caller: string }
    >;

    RouterRemoved(
      removedRouter?: string | null,
      caller?: string | null
    ): TypedEventFilter<
      [string, string],
      { removedRouter: string; caller: string }
    >;

    TransactionCancelled(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      txData?: null,
      relayerFee?: null,
      caller?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        BigNumber,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        relayerFee: BigNumber;
        caller: string;
      }
    >;

    TransactionFulfilled(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      txData?: null,
      relayerFee?: null,
      signature?: null,
      callData?: null,
      caller?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        BigNumber,
        string,
        string,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        relayerFee: BigNumber;
        signature: string;
        callData: string;
        caller: string;
      }
    >;

    TransactionPrepared(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      txData?: null,
      caller?: null,
      encryptedCallData?: null,
      encodedBid?: null,
      bidSignature?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        string,
        string,
        string,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        caller: string;
        encryptedCallData: string;
        encodedBid: string;
        bidSignature: string;
      }
    >;
  };

  estimateGas: {
    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidityFor(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getStoredChainId(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounced(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityFor(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStoredChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepare(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounced(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
