import "../page.css";
import Card from "../../components/card/Card";
import Sidenote from "../../components/sidenote/Sidenote";
import PageButtons from "../../components/pageButtons/PageButtons";
import PageNav from "../../components/pageNav/PageNav";


export default function IntroToChainBlock() {
    const firstCards = [
        {id: 0, text: "Blockchains are typically managed by a peer-to-peer network for use as a publicly distributed ledger, where nodes collectively adhere to a protocol to communicate and validate new blocks."},  
        {id: 1, text: "Although blockchain records are not unalterable as forks are possible, blockchains may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance."}
    ]

    const firstSidenote = [
        {id: 0, text: "Blockchain is also being used in peer-to-peer energy trading."}
    ]

    const snippets = [
        {id: 0, code: "Some code"}
    ]

    const pagelinks = [
        {id: 0, headerLink: "Intro to ChainBlock", url: "#intro-to-chainblock"},
        {id: 1, subheaderLink: "What is a blockchain?", url: "#what-is-a-blockchain"},
        {id: 2, subheaderLink: "Structure of Blockchains", url: "#structure-of-blockchains"},
        {id: 3, subheaderLink: "Use Cases", url: "#use-cases"},
        {id: 4, subheaderLink: "Types of Blockchains", url: "#types-of-blockchains"}
    ]

    const pagebuttons = {
        previousPage: "/",
        nextPage: "/what-is-chainblock"
    }

    return (
        <div className="page">
            <div className="page-left">
                <h1 id="intro-to-chainblock">Intro to ChainBlock</h1>
                <h2 id="what-is-a-blockchain">What is a blockchain?</h2>
                <p>A blockchain is a growing list of records, called blocks, that are linked together 
                using cryptography. Each block contains a cryptographic hash of the previous block, 
                a timestamp, and transaction data (generally represented as a Merkle tree). The timestamp 
                proves that the transaction data existed when the block was published in order to get 
                into its hash.</p> 

                <p>As blocks each contain information about the block previous to it, they form a chain, 
                with each additional block reinforcing the ones before it. Therefore, blockchains are resistant 
                to modification of their data because once recorded, the data in any given block cannot be 
                altered retroactively without altering all subsequent blocks.</p>
                <div className="card-container">
                    {firstCards.map((element) => (
                        <Card card={element} key={element.id}/>
                    ))}
                </div>

                <h2 id="structure-of-blockchains">Structure of Blockchains</h2>
                <p>A blockchain is a decentralized, distributed, and oftentimes public, digital ledger consisting 
                of records called blocks that is used to record transactions across many computers so that any 
                involved block cannot be altered retroactively, without the alteration of all subsequent blocks. 
                This allows the participants to verify and audit transactions independently and relatively inexpensively.</p>

                <p>A blockchain database is managed autonomously using a peer-to-peer network and a distributed timestamping 
                server. They are authenticated by mass collaboration powered by collective self-interests. </p>

                <p> Such a design facilitates robust workflow where participants' uncertainty regarding data security is marginal. 
                The use of a blockchain removes the characteristic of infinite reproducibility from a digital asset. It confirms 
                that each unit of value was transferred only once, solving the long-standing problem of double spending.</p>
                

                <h2 id="use-cases">Use Cases</h2>
                <p>Blockchain technology can be integrated into multiple areas. The primary use of blockchains is as a distributed 
                ledger for cryptocurrencies such as bitcoin; there were also a few other operational products which had matured 
                from proof of concept by late 2016.[47] As of 2016, some businesses have been testing the technology and conducting 
                low-level implementation to gauge blockchain's effects on organizational efficiency in their back office.</p>

                <h3>Cryptocurrencies</h3>
                <p>Most cryptocurrencies use blockchain technology to record transactions. For example, the bitcoin network and Ethereum 
                network are both based on blockchain. On 8 May 2018 Facebook confirmed that it would open a new blockchain group 
                which would be headed by David Marcus, who previously was in charge of Messenger. Facebook's planned cryptocurrency 
                platform, Libra (now known as Diem), was formally announced on June 18, 2019.</p>

                <p>The criminal enterprise Silk Road, which operated on Tor, utilized cryptocurrency for payments, some of which the US 
                federal government has seized through research on the blockchain and forfeiture.</p>

                <p>Governments have mixed policies on the legality of their citizens or banks owning cryptocurrencies. China implements 
                blockchain technology in several industries including a national digital currency which launched in 2020. In order to strengthen 
                their respective currencies, Western governments including the European Union and the United States have initiated similar 
                projects.</p>

                <h3>Smart Contracts</h3>
                <p>Blockchain-based smart contracts are proposed contracts that can be partially or fully executed or enforced without human 
                interaction.[78] One of the main objectives of a smart contract is automated escrow. A key feature of smart contracts is that 
                they do not need a trusted third party (such as a trustee) to act as an intermediary between contracting entities -the blockchain 
                network executes the contract on its own. This may reduce friction between entities when transferring value and could subsequently 
                open the door to a higher level of transaction automation.</p>

                <h3>Financial Services</h3>
                <p>According to Reason, many banks have expressed interest in implementing distributed ledgers for use in banking and are cooperating 
                with companies creating private blockchains, and according to a September 2016 IBM study, this is occurring faster than expected.</p>

                <p>Banks are interested in this technology because it has potential to speed up back office settlement systems. Banks such as UBS 
                are opening new research labs dedicated to blockchain technology in order to explore how blockchain can be used in financial services 
                to increase efficiency and reduce costs.</p>

                <p>In December 2018, Bitwala launched Europe's first regulated blockchain banking solution that enables users to manage both their bitcoin 
                and euro deposits in one place with the safety and convenience of a German bank account. The bank account is hosted by the Berlin-based 
                solarisBank.</p>
                
                <p>The blockchain has also given rise to Initial coin offerings (ICOs) as well as a new category of digital asset called Security Token 
                Offerings (STOs), also sometimes referred to as Digital Security Offerings (DSOs).[94] STO/DSOs may be conducted privately or on a public, 
                regulated stock exchange and are used to tokenize traditional assets such as company shares as well as more innovative ones like intellectual 
                property, real estate, art, or individual products.</p>
                <div className="sidenote-container">
                    {firstSidenote.map((element) => (
                        <Sidenote sidenote={element} key={element.id}/>
                    ))}
                </div>

                <h2 id="types-of-blockchains">Types of Blockchains</h2>
                <p>Currently, there are at least four types of blockchain networks — public blockchains, private blockchains, consortium blockchains and 
                hybrid blockchains.</p>

                <h3>Public Blockchains</h3>
                <p>A public blockchain has absolutely no access restrictions. Anyone with an Internet connection can send transactions to it as well as become 
                a validator (i.e., participate in the execution of a consensus protocol). Usually, such networks offer economic incentives for those who secure 
                them and utilize some type of a Proof of Stake or Proof of Work algorithm.</p>

                <p>Some of the largest, most known public blockchains are the bitcoin blockchain and the Ethereum blockchain.</p>

                <h3>Private Blockchains</h3>
                <p>A private blockchain is permissioned.[48] One cannot join it unless invited by the network administrators. Participant and validator access 
                is restricted. To distinguish between open blockchains and other peer-to-peer decentralized database applications that are not open ad-hoc compute 
                clusters, the terminology Distributed Ledger (DLT) is normally used for private blockchains.</p>

                <h3>Hybrid Blockchains</h3>
                <p>A hybrid blockchain has a combination of centralized and decentralized features. The exact workings of the chain can vary based on which portions 
                of centralization decentralization are used.</p>

                <h3>Sidechains</h3>
                <p>A sidechain is a designation for a blockchain ledger that runs in parallel to a primary blockchain. Entries from the primary blockchain 
                (where said entries typically represent digital assets) can be linked to and from the sidechain; this allows the sidechain to otherwise operate independently 
                of the primary blockchain (e.g., by using an alternate means of record keeping, alternate consensus algorithm, etc.)</p>

                <PageButtons pageButtons={pagebuttons}/>
            </div>
            <div className="page-right">
                {/* passes whole prop object to pageNav component, followed by pageNavLinks component */}
                <PageNav pageLinks={pagelinks}/>
            </div>
        </div>
    )
}
