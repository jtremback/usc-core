"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var StateChannels = (function (_Pudding) {
    _inherits(StateChannels, _Pudding);

    function StateChannels() {
      _classCallCheck(this, StateChannels);

      _get(Object.getPrototypeOf(StateChannels.prototype), "constructor", this).apply(this, arguments);
    }

    return StateChannels;
  })(Pudding);

  ;

  // Set up specific data for this class.
  StateChannels.abi = [{ "constant": false, "inputs": [{ "name": "channelId", "type": "bytes32" }, { "name": "pubkey0", "type": "bytes32" }, { "name": "pubkey1", "type": "bytes32" }, { "name": "hold_period", "type": "uint256" }, { "name": "fingerprint", "type": "bytes32" }, { "name": "signature0", "type": "bytes" }, { "name": "signature1", "type": "bytes" }, { "name": "state", "type": "bytes" }], "name": "addChannel", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "bytes32" }], "name": "channels", "outputs": [{ "name": "channelId", "type": "bytes32" }, { "name": "pubkey0", "type": "bytes32" }, { "name": "pubkey1", "type": "bytes32" }, { "name": "hold_period", "type": "uint256" }, { "name": "fingerprint", "type": "bytes32" }, { "name": "signature0", "type": "bytes" }, { "name": "signature1", "type": "bytes" }, { "name": "phase", "type": "uint8" }, { "name": "state", "type": "bytes" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "sendCoin", "outputs": [{ "name": "sufficient", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "channelId", "type": "bytes32" }], "name": "getChannelState", "outputs": [{ "name": "", "type": "bytes" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "addr", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "", "type": "string" }], "name": "Log", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "message", "type": "string" }], "name": "Error", "type": "event" }];
  StateChannels.binary = "6060604052600160a060020a0332166000908152602081905260409020612710905561086d8061002f6000396000f3606060405260e060020a600035046368573fa081146100475780637a7ebd7b1461021d57806390b98a111461026a578063d18da8b114610299578063f8b2cb4f14610315575b005b60408051602060a435600481810135601f8101849004840285018401909552848452610045948135946024803595604435956064359560843595909460c49490939201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a0190935282825296989760e4979196506024919091019450909250829150840183828082843750506040805160209735808a0135601f81018a90048a0283018a0190935282825296989761010497919650602491909101945090925082915084018382808284375094965050505050505060408051602081810180845260008084529081905282840181905260608301819052608083018190528351808301855281815260a08401528351808301855281815260c084015260e08301819052835180830185528181526101008401528b8152600190915291909120548914156105ed57604080516020808252602a908201527f6368616e6e656c20776974682074686174206368616e6e656c496420616c7265818301527f6164792065786973747300000000000000000000000000000000000000000000606082015290517f08c379a0afcc32b1a39302f7cb8073359698411ab5fd6e3edb2c02c0b5fba8aa9181900360800190a16105e2565b61033a6004356001602081905260009182526040909120805491810154600282015460038301546004840154600785015493949293919290916005820191600681019160ff169060080189565b6104ee60043560243533600160a060020a03166000908152602081905260408120548290101561056e576105a0565b6105006004356040805160208181018352600080835284815260018083529084902060080180548551600293821615610100026000190190911692909204601f810184900484028301840190955284825292939092918301828280156105d15780601f106105a6576101008083540402835291602001916105d1565b6104ee600435600160a060020a0381166000908152602081905260409020545b919050565b604080518a8152602081018a9052908101889052606081018790526080810186905260ff831660e082015261012060a082018181528654600260018216156101009081026000190190921604928401839052909160c0840191840190610140850190899080156103eb5780601f106103c0576101008083540402835291602001916103eb565b820191906000526020600020905b8154815290600101906020018083116103ce57829003601f168201915b5050848103835287546002600182161561010002600019019091160480825260209190910190889080156104605780601f1061043557610100808354040283529160200191610460565b820191906000526020600020905b81548152906001019060200180831161044357829003601f168201915b5050848103825285546002600182161561010002600019019091160480825260209190910190869080156104d55780601f106104aa576101008083540402835291602001916104d5565b820191906000526020600020905b8154815290600101906020018083116104b857829003601f168201915b50509c5050505050505050505050505060405180910390f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156105605780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b50505050509050610335565b505050505b505050505050505050565b610120604051908101604052808a81526020018981526020018881526020018781526020018681526020018581526020018481526020016000815260200183815260200150905080600160005060008b8152602001908152602001600020600050600082015181600001600050556020820151816001016000505560408201518160020160005055606082015181600301600050556080820151816004016000505560a0820151816005016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106fc57805160ff19168380011785555b5061072c9291505b8082111561078b57600081556001016106e8565b828001600101855582156106e0579182015b828111156106e057825182600050559160200191906001019061070e565b505060c0820151816006016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061078f57805160ff19168380011785555b506107bf9291506106e8565b5090565b8280016001018555821561077f579182015b8281111561077f5782518260005055916020019190600101906107a1565b505060e08201518160070160006101000a81548160ff02191690830217905550610100820151816008016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061083d57805160ff19168380011785555b506105dd9291506106e8565b82800160010185558215610831579182015b8281111561083157825182600050559160200191906001019061084f56";

  if ("0x6e692977e14cec1007d52e1c07d530f02775389d" != "") {
    StateChannels.address = "0x6e692977e14cec1007d52e1c07d530f02775389d";

    // Backward compatibility; Deprecated.
    StateChannels.deployed_address = "0x6e692977e14cec1007d52e1c07d530f02775389d";
  }

  StateChannels.generated_with = "1.0.3";
  StateChannels.contract_name = "StateChannels";

  return StateChannels;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.StateChannels = factory;
}