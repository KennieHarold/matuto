// Credits to blocknative for some of the glossary definitions
// We create some of the difinition and modify some definition from blocknative
// https://www.blocknative.com/glossary
const glossary = [
    {
        term: "Web3",
        definition: "It is the current evolution of the internet characterized by decentralization and digital ownership, unlike Web 1.0 and Web 2.0 which were characterized by users being able to read (Web 1.0) and write (Web 2.0) content."
    },
    {
        term: "Ethereum",
        definition: "A decentralized, open-source blockchain network that was launched in 2015 by its founder, Vitalik Buterin. Ethereum is the leading smart contract-enabled blockchain in the world, and it's native token, ETH, is the 2nd largest digital asset by marketcap. Blocknative's APIs support the Ethereum blockchain and the Ethereum Goerli testnet."
    },
    {
        term: "Ethereum Virtual Machine (EVM)",
        definition: "A software application that blockchain developers use to deploy decentralized applications (Dapp) on the Ethereum blockchain. The EVM interacts with Ethereum's accounts, smart contracts, and distributed ledger."
    },
    {
        term: "Base Fee",
        definition: "The base fee is an algorithmically determined fee that users on the Ethereum blockchain must pay to complete a transaction. The base fee is designed to help smooth transaction fees and prevent sudden spikes by targeting 50% full blocks. Depending on how full the new block is, the Base Fee is automatically increased (the block is more than 50% full) or decreased (the block is less than 50% full)."
    },
    {
        term: "Blockchain",
        definition: "A blockchain is a distributed database that is shared among the nodes of a computer network. Blockchains store a continuously growing historical ledger of information (e.g. accounts and transactions) into blocks."
    },
    {
        term: "Smart Contract",
        definition: "A smart contract is a piece of code that executes according to it's instructions exactly like a traditional contract between two people would be executed. Smart contracts are used by developers to build decentralized applications on blockchain networks like Ethereum to enable users to permissionlessly transact in a secure way."
    },
    {
        term: "Solidity",
        definition: "A high-level programming language used for writing smart contracts on the Ethereum blockchain. It offers a secure and robust framework for creating decentralized applications (dApps) and self-executing contracts with predefined rules. With a syntax resembling popular programming languages, Solidity allows developers to build sophisticated applications on the Ethereum network, leveraging features like inheritance, libraries, and complex data structures."
    },
    {
        term: "Testnet",
        definition: "A testnet (test network) is where developers can test protocol upgrades and smart contracts before deploying them on mainnet."
    },
    {
        term: "Gas",
        definition: "Gas is a unit of measurement that represents the computational effort required to complete a transaction. How much a user spends to complete a transaction is determined by the total amount of gas multiplied by the gas price."
    },
    {
        term: "Gas Fees",
        definition: "Gas fees are the fees users must pay in Ethereum's native currency, Ether (ETH), to complete a transaction. Gas fees are used to compensate miners for providing the computational work required to process and validate transactions."
    },
    {
        term: "Metamask",
        definition: "A browser extension wallet that enables users to securely store and manage digital assets on the decentralized web (Web3). It serves as a gateway to interact with blockchain networks, allowing users to connect their browsers to decentralized applications (dApps) and execute transactions. With its user-friendly interface, MetaMask facilitates seamless access to the world of cryptocurrencies, non-fungible tokens (NFTs), and decentralized finance (DeFi) applications."
    },
    {
        term: "Sidechain",
        definition: "A side chain is a blockchain that allows tokens from one blockchain to be securely used within a completely separate blockchain, but still move back to the original chain if necessary. Sidechains like xDai are popular because they offer distinct advantages to developers including cost savings and greater transaction speed"
    },
    {
        term: "EIP-1559",
        definition: "Also known as Ethereum Improvement Proposal 1559, EIP-1559 was part of Ethereum's London hard fork and it was deployed across the Ethereum network on August 5th, 2021. EIP-1559 introduced a Base Fee which is paid by users and is eventually burned (i.e. removed from circulation), and it replaced the current gas limit with two values: a “long-term average target” (equal to the current gas limit), and a “hard per-block cap” (twice the current gas limit)."
    },
    {
        term: "Ethereum Name Service (ENS)",
        definition: "The Ethereum Name Service (ENS) is a decentralized naming service that allows users to register human-readable domain names for their Ethereum addresses. ENS names can be used to send and receive transactions, interact with smart contracts, and resolve decentralized websites."
    },
    {
        term: "Non-Fungible Token (NFT)",
        definition: "A non-fungible token (NFT) is a unique digital asset that is stored on a blockchain. NFTs are used to represent real-world items like art, music, in-game items, and videos."
    },
    {
        term: "Decentralized Finance (DeFi)",
        definition: "Decentralized finance (DeFi) is a blockchain-based form of finance that does not rely on central financial intermediaries such as brokerages, exchanges, or banks to offer traditional financial instruments, and instead utilizes smart contracts on blockchains, the most common being Ethereum."
    },
    {
        term: "ERC-20",
        definition: "ERC-20 is a technical standard used for smart contracts on the Ethereum blockchain for implementing tokens (fungible). ERC stands for Ethereum Request for Comment, and 20 is the number that was assigned to this request."
    },
    {
        term: "ERC-721",
        definition: "ERC-721 is a technical standard used for smart contracts on the Ethereum blockchain for implementing non-fungible tokens (NFTs). ERC stands for Ethereum Request for Comment, and 721 is the number that was assigned to this request."
    },
    {
        term: "ERC-1155",
        definition: "ERC-1155 is a technical standard used for smart contracts on the Ethereum blockchain for implementing both fungible and non-fungible tokens (NFTs). ERC stands for Ethereum Request for Comment, and 1155 is the number that was assigned to this request."
    },
    {
        term: "ERC-4907",
        definition: "ERC-4907 is a proposed Ethereum standard that extends ERC-721 to introduce \"owner\" and \"user\" roles. It streamlines NFT rentals with an automated \"expires\" function that enforces time-limited user roles, ending usage terms automatically without a second transaction."
    },
    {
        term: "ERC-6551",
        definition: "ERC-6551 is a new token standard for non-fungible tokens (NFTs) that enhances the functionality and value of NFTs by giving them smart contract capabilities. It suggests creating a dedicated cryptocurrency wallet for each ERC-721 token, effectively transforming NFTs into Token Bound Accounts (TBAs). With smart contract capabilities, NFTs can now hold other assets, interact with smart contracts, and have their own on-chain identity."
    },
    {
        term: "ERC-4337",
        definition: "ERC-4337 is an Ethereum standard that achieves account abstraction on the protocol without any consensus-layer changes. It makes it possible to transact and create contracts in a single contract account. ERC-4337 is a standard for Ethereum that aims to make user accounts work more like smart contracts, a phenomenon called \"account abstraction.\""
    },
];

// get id of term and definition
const term = document.getElementById('term');
const definition = document.getElementById('definition');
// get random term and definition from glossary array
let usedTerms = []; // keep track of used terms
let randomTerm, randomDefinition;

// generate a random term and definition that haven't been used before
do {
    randomTerm = glossary[Math.floor(Math.random() * glossary.length)];
} while (usedTerms.includes(randomTerm.term));

// add the term to the used terms array
usedTerms.push(randomTerm.term);

// get a random definition that hasn't been used with this term before
do {
    randomDefinition = glossary[Math.floor(Math.random() * glossary.length)];
} while (randomDefinition.term === randomTerm.term || usedTerms.includes(randomDefinition.term));

// add the definition term to the used terms array
usedTerms.push(randomDefinition.term);

// set term and definition to random term and definition
term.innerHTML = randomTerm.term;
definition.innerHTML = randomDefinition.definition;
// set term and definition to random term and definition
term.innerHTML = randomTerm.term;
definition.innerHTML = randomTerm.definition;