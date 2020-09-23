import { GanacheProvider, JSONRPCRequestPayload } from 'ethereum-types';

import * as Ganache from 'ganache-core';

const toolchain = require('@eth-optimism/ovm-toolchain')

import { Callback, ErrorCallback } from '../types';

import { Subprovider } from './subprovider';

/**
 * This class implements the [web3-provider-engine](https://github.com/MetaMask/provider-engine) subprovider interface.
 * It intercepts all JSON RPC requests and relays them to an in-process ganache instance.
 */
export class OVMGanacheSubprovider extends Subprovider {
    private readonly _ganacheProvider: GanacheProvider;
    /**
     * Instantiates an OVMGanacheSubprovider
     * @param opts The desired opts with which to instantiate the Ganache provider
     */
    constructor(opts: Ganache.GanacheOpts) {
        super();
        console.log(`using ovm toolchain ganache`)
        this._ganacheProvider = toolchain.ganache.provider(opts);
    }
    /**
     * This method conforms to the web3-provider-engine interface.
     * It is called internally by the ProviderEngine when it is this subproviders
     * turn to handle a JSON RPC request.
     * @param payload JSON RPC payload
     * @param _next Callback to call if this subprovider decides not to handle the request
     * @param end Callback to call if subprovider handled the request and wants to pass back the request.
     */
    // tslint:disable-next-line:prefer-function-over-method async-suffix
    public async handleRequest(payload: JSONRPCRequestPayload, _next: Callback, end: ErrorCallback): Promise<void> {
        this._ganacheProvider.sendAsync(payload, (err: Error | null, result: any) => {
            end(err, result && result.result);
        });
    }
}
