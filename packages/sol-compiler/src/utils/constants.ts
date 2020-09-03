import * as path from 'path';

const solcjs_ovm_v0_6_filename = 'soljson-v0_6-ovm.js'

let SOLC_BIN_PATHS: {
    [name: string]: string
} = {}

for (let i = 0; i < 16; i++) {
    const solVersionString = '0.6.' + i
    SOLC_BIN_PATHS[solVersionString] = solcjs_ovm_v0_6_filename
}

export const constants = {
    SOLIDITY_FILE_EXTENSION: '.sol',
    BASE_COMPILER_URL: 'https://ethereum.github.io/solc-bin/bin/',
    LATEST_ARTIFACT_VERSION: '2.0.0',
    SOLC_BIN_DIR: path.join(__dirname, '..', '..', '..', 'solc_bin'),
    SOLC_BIN_PATHS,
};
