let blockchain = document.querySelector("blockchain");

let blockID;
let name;
createBlock(5);
function createBlock(blockID, name = "Norbert BM") {
  let newChain = ` 
  <i class="fas fa-link"></i>
  `;
  let chain = document.createElement("chain-link");
  chain.innerHTML = newChain;

  let newBlock = `

  <div class="card-header">
    <span class="display-4">Block ${blockID} </span>
    <small class="text-muted">(${name})</small>
  </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <h5>Hash</h5>
      <span class="hash"
        >${generateHash()}</span
      >
      <h5>Hash of previous block</h5>
      <span class="text-muted"
        >${getPrevHash()}</span
      >
    </li>

    <li class="list-group-item">
      <h6>Nonce</h6>
      <span class="text-muted">0</span>
    </li>
    <li class="list-group-item">
      <h6>Timestamp</h6>
      <span class="text-muted">${blockTimestamp()}</span>
    </li>
  </ul>

    `;
  let block = document.createElement("block");
  block.className = "card block";
  block.innerHTML = newBlock;
  block.append(chain);
  blockchain.append(block);
  // blockchain.prepend(chain);
}

// Function to generate a new random Hash

function generateHash() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 256; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// Function to get previous Hash

function getPrevHash() {
  let blocks = blockchain.children;

  for (let i = 0; i < blocks.length; i++) {
    let blockHash = blocks[i];
    console.log(blockHash);
    return blockHash.children[1].children[0].children[1].innerText;
  }
}

function blockTimestamp() {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return (dateString =
    currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear);
}
console.log(blockTimestamp());
