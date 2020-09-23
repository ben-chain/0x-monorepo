import * as path from 'path';

    // TODO: once published these versions with standardized url, re-enable isOfflineMode=false in chainlink and patch getSolcJSReleasesAsync() instead.

let SOLC_BIN_PATHS: {
    [name: string]: string
} = {
    '0.5.12': 'soljsonv0.5.12+commit.7709ece9.js',
    '0.5.11': 'soljsonv0.5.11+commit.c082d0b4.js',
    '0.5.10': 'soljsonv0.5.10+commit.5a6ea5b1.js',
    '0.5.9': 'soljsonv0.5.9+commit.e560f70d.js',
    '0.5.8': 'soljsonv0.5.8+commit.23d335f2.js',
    '0.5.7': 'soljsonv0.5.7+commit.6da8b019.js',
    '0.5.6': 'soljsonv0.5.6+commit.b259423e.js',
    '0.5.5': 'soljsonv0.5.5+commit.47a71e8f.js',
    '0.5.4': 'soljsonv0.5.4+commit.9549d8ff.js',
    '0.5.3': 'soljsonv0.5.3+commit.10d17f24.js',
    '0.5.2': 'soljsonv0.5.2+commit.1df8f40c.js',
    '0.5.1': 'soljsonv0.5.1+commit.c8a2cb62.js',
    '0.5.0': 'soljsonv0.5.0+commit.1d4f565a.js',
    '0.4.26': 'soljsonv0.4.26+commit.4563c3fc.js',
    '0.4.25': 'soljsonv0.4.25+commit.59dbf8f1.js',
    '0.4.24': 'soljsonv0.4.24+commit.e67f0147.js',
    '0.4.23': 'soljsonv0.4.23+commit.124ca40d.js',
    '0.4.22': 'soljsonv0.4.22+commit.4cb486ee.js',
    '0.4.21': 'soljsonv0.4.21+commit.dfe3193c.js',
    '0.4.20': 'soljsonv0.4.20+commit.3155dd80.js',
    '0.4.19': 'soljsonv0.4.19+commit.c4cbbb05.js',
    '0.4.18': 'soljsonv0.4.18+commit.9cf6e910.js',
    '0.4.17': 'soljsonv0.4.17+commit.bdeb9e52.js',
    '0.4.16': 'soljsonv0.4.16+commit.d7661dd9.js',
    '0.4.15': 'soljsonv0.4.15+commit.bbb8e64f.js',
    '0.4.14': 'soljsonv0.4.14+commit.c2215d46.js',
    '0.4.13': 'soljsonv0.4.13+commit.fb4cb1a.js',
    '0.4.12': 'soljsonv0.4.12+commit.194ff033.js',
    '0.4.11': 'soljsonv0.4.11+commit.68ef5810.js',
    '0.4.10': 'soljsonv0.4.10+commit.f0d539ae.js',
    '0.4.9': 'soljsonv0.4.9+commit.364da425.js',
    '0.4.8': 'soljsonv0.4.8+commit.60cc1668.js',
    '0.4.7': 'soljsonv0.4.7+commit.822622cf.js',
    '0.4.6': 'soljsonv0.4.6+commit.2dabbdf0.js',
    '0.4.5': 'soljsonv0.4.5+commit.b318366e.js',
    '0.4.4': 'soljsonv0.4.4+commit.4633f3de.js',
    '0.4.3': 'soljsonv0.4.3+commit.2353da71.js',
    '0.4.2': 'soljsonv0.4.2+commit.af6afb04.js',
    '0.4.1': 'soljsonv0.4.1+commit.4fc6fc2c.js',
    '0.4.0': 'soljsonv0.4.0+commit.acd334c9.js',
    '0.3.6': 'soljsonv0.3.6+commit.3fc68da.js',
    '0.3.5': 'soljsonv0.3.5+commit.5f97274.js',
    '0.3.4': 'soljsonv0.3.4+commit.7dab890.js',
    '0.3.3': 'soljsonv0.3.3+commit.4dc1cb1.js',
    '0.3.2': 'soljsonv0.3.2+commit.81ae2a7.js',
    '0.3.1': 'soljsonv0.3.1+commit.c492d9b.js',
    '0.3.0': 'soljsonv0.3.0+commit.11d6736.js',
    '0.2.2': 'soljsonv0.2.2+commit.ef92f56.js',
    '0.2.1': 'soljsonv0.2.1+commit.91a6b35.js',
    '0.2.0': 'soljsonv0.2.0+commit.4dc2445.js',
    '0.1.7': 'soljsonv0.1.7+commit.b4e666c.js',
    '0.1.6': 'soljsonv0.1.6+commit.d41f8b7.js',
    '0.1.5': 'soljsonv0.1.5+commit.23865e3.js',
    '0.1.4': 'soljsonv0.1.4+commit.5f6c3cd.js',
    '0.1.3': 'soljsonv0.1.3+commit.28f561.js',
    '0.1.2': 'soljsonv0.1.2+commit.d0d36e3.js',
    '0.1.1': 'soljsonv0.1.1+commit.6ff4cd6.js',
}

for (let i = 0; i < 16; i++) {
    const solVersionString = '0.6.' + i + '_ovm'
    SOLC_BIN_PATHS[solVersionString] = 'soljson-v0_6-ovm.js'
}

export const constants = {
    SOLIDITY_FILE_EXTENSION: '.sol',
    BASE_COMPILER_URL: 'https://ethereum.github.io/solc-bin/bin/',
    LATEST_ARTIFACT_VERSION: '2.0.0',
    SOLC_BIN_DIR: path.join(__dirname, '..', '..', '..', 'solc_bin'),
    SOLC_BIN_PATHS
};
