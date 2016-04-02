contract StateChannels {
    event Log(string);
    
	mapping (address => uint) balances;

	function StateChannels() {
		balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		return true;
	}

    function getBalance(address addr) returns(uint) {
        return balances[addr];
    }
    
    function getChannelState(bytes32 channelId) returns(bytes) {
        return channels[channelId].state;
    }
    
    mapping (bytes32 => Channel) public channels;
    
    struct Channel {
        bytes32 channelId;
        bytes32 pubkey0;
        bytes32 pubkey1;
        uint hold_period;
        bytes32 fingerprint;
        bytes signature0;
        bytes signature1;
        uint8 phase;
        bytes state;
    }
    
    event Error(string message);
    
    function addChannel(
        bytes32 channelId,
        bytes32 pubkey0,
        bytes32 pubkey1,
        uint hold_period,
        bytes32 fingerprint,
        bytes signature0,
        bytes signature1,
        bytes state
    ) {
        if (channels[channelId].channelId == channelId) {
            Error("channel with that channelId already exists");
        } else {
            Channel memory ch = Channel(
                channelId,
                pubkey0,
                pubkey1,
                hold_period,
                fingerprint,
                signature0,
                signature1,
                0,
                state
            );
            
            channels[channelId] = ch;
        }
    }
}