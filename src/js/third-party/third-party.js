import constants from '../constants.js';
import utils from '../utils.js';

import * as HSTSPreload from './hsts-preload.js';
import * as SecurityHeaders from './security-headers.js';
import * as SSLLabs from './ssl-labs.js';
import * as TLSImirhil from './tls-imirhil.js';


const load = async () => {
  await Promise.all([
    HSTSPreload.load(),
    SecurityHeaders.load(),
    SSLLabs.load(),
    TLSImirhil.load(),
  ]);
}


export default { load, HSTSPreload, SecurityHeaders, SSLLabs, TLSImirhil };
