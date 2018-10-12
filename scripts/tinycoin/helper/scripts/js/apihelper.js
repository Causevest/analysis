/* Handles all the events of API calls in index.html page */
/* Globals */
var currtxnid="";
var serveraddress=" ";

/* Version Handling */
function getVersion(evt) {
	console.debug("Get tinycoin version");
	resetActiveClass(evt);

	eraseResults();
	clrVersion();
	perform("version", '')
}

/* Miner Address Handling */
function getMiner(evt) {
	console.debug("Get Miner Address");
	resetActiveClass(evt);

	var id = document.getElementById("miner");
	console.debug("Displayed Miner Address: "+id.value);

	eraseResults();
	perform("get_miner_address", '')
}

function updateMiner(evt) {
	console.debug("Update Miner Address");
	resetActiveClass(evt);

	var id = document.getElementById("miner");
	console.debug("Displayed Miner Address: "+id.value);

	var options = {};
	var data = {}
	data['miner_address'] = id.value;

	eraseResults();
	perform("update_miner_address", JSON.stringify(data))
}

/* Peers Handling */
function getPeers(evt) {
	console.debug("Get peers");
	resetActiveClass(evt);

	eraseResults();
	perform("peers", '')
}

function addPeers(evt) {
	console.debug("Add peers");
	resetActiveClass(evt);

	var input = document.getElementById("peerinput")
	var peerlst = input.value;

	var data = peerList(peerlst)

	eraseResults();
	perform("add_peers", data)
}

function appPeers(evt) {
	console.debug("Append peers")
	resetActiveClass(evt);

	var input = document.getElementById("peerinput")
	var peerlst = input.value;

	var data = peerList(peerlst);
	eraseResults();	
	perform("append_peers", data)
}

function detectPeers(evt) {
	console.debug("Detect peers");
	resetActiveClass(evt);

	eraseResults();
	perform("connect_to_peers_of_peers", '')
}

function connect(evt) {
	console.debug("Perform connect");
	resetActiveClass(evt);

	eraseResults();
	perform("connect_to_peers_of_peers", '')
}

/* Transaction */
function transaction(evt) {
	console.debug("Perform transaction");
	resetActiveClass(evt);

	var src = document.getElementById("from")
	var tgt = document.getElementById("to")
	var amt = document.getElementById("amount")
	var results = document.getElementById("results")
	var mineraddr = document.getElementById("miner").value;

	var data = {}
	data['from'] = src.value;
	data['to'] = tgt.value;
	data['amount'] = parseInt(amt.value);
	data['timestamp'] = generateTimeStamp();
	if(currtxnid.length == 0)
		currtxnid = mineraddr;
	data['txnid'] = generateTxnid(mineraddr, currtxnid);
	data['signature'] = generateTxnSignature(mineraddr);

	eraseResults();
	perform("transaction", JSON.stringify(data))
}

/* Other operations */
function mine(evt) {
	console.debug("Perform mine");
	resetActiveClass(evt);

	eraseResults();
	perform("mine", '')
}

function consensus(evt) {
	console.debug("Perform consensus");
	resetActiveClass(evt);

	eraseResults();
	perform("consensus", '')
}

function blocks(evt) {
	console.debug("Perform blocks");
	resetActiveClass(evt);

	eraseResults();
	perform("blocks", '')
}
