import "../page.css";
import Card from "../../components/card/Card";
import Sidenote from "../../components/sidenote/Sidenote";
import Snippet from "../../components/snippet/Snippet";
import PageButtons from "../../components/pageButtons/PageButtons";
import PageNav from "../../components/pageNav/PageNav";

export default function WhatIsChainBlock() {
    const cards = [
        {id: 0, text: "Blockchains are typically managed by a peer-to-peer network for use as a publicly distributed ledger, where nodes collectively adhere to a protocol to communicate and validate new blocks💡"}
    ]

    const sidenotes = [
        {id: 0, text: "This is something we're working on adjusting in future releases."}
    ]

    const snippets = [
        {id: 0, code: "Some code"}
    ]

    const pagelinks = [
        {id: 0, headerLink: "What is ChainBlock?", url: "#header-1"},
        {id: 1, subheaderLink: "Subheader 1", url: "#subheader-1"},
        {id: 2, subheaderLink: "Subheader 2", url: "#subheader-2"},
        {id: 3, subheaderLink: "Subheader 3", url: "#subheader-3"},
        {id: 4, subheaderLink: "Subheader 4", url: "#subheader-4"}
    ]
    
    return (
        <div className="page">
            <div className="page-left">
                <h1 id="header-1">What is ChainBlock?</h1>
                <h2 id="subheader-1">Overview</h2>
                <p>A blockchain is a growing list of records, called blocks, that are linked together using cryptography.
                Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally 
                represented as a Merkle tree).</p>

                <p>The timestamp proves that the transaction data existed when the block was published in order to get into 
                its hash. As blocks each contain information about the block previous to it, they form a chain, with each 
                additional block reinforcing the ones before it. Therefore, blockchains are resistant to modification of their 
                data because once recorded, the data in any given block cannot be altered retroactively without altering all 
                subsequent blocks.</p>
                <div className="card-container">
                    {cards.map((element) => (
                        <Card card={element} key={element.id}/>
                    ))}
                </div>

                <h2 id="subheader-2">The Origin Story</h2>
                <p>Cryptographer David Chaum first proposed a blockchain-like protocol in his 1982 dissertation "Computer Systems 
                Established, Maintained, and Trusted by Mutually Suspicious Groups."</p>

                <p>Further work on a cryptographically secured chain of blocks was described in 1991 by Stuart Haber and W. Scott 
                Stornetta. They wanted to implement a system wherein document timestamps could not be tampered with. In 1992, Haber, 
                Stornetta, and Dave Bayer incorporated Merkle trees to the design, which improved its efficiency by allowing several 
                document certificates to be collected into one block.</p>

                <p>Under their company Surety, their document certificate hashes have been published in The New York Times every week 
                since 1995.</p>
                <div className="snippet-container">
                    {snippets.map((element) => (
                        <Snippet snippet={element} key={element.id}/>
                    ))}
                </div>

                <h2 id="subheader-3">Subheader 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident 
                hic repellat qui, quas delectus deserunt autem harum, aut eum eius maxime quaerat 
                cum voluptatibus ipsum tempora perferendis possimus alias quod impedit rem maiores 
                nostrum odit. Expedita voluptatum deserunt esse inventore? Iste incidunt alias 
                totam, sunt ipsum nesciunt modi inventore dignissimos quisquam ut laboriosam 
                nam consectetur asperiores recusandae in obcaecati molestias sequi earum animi q
                uod minus doloribus autem dolorum minima. Delectus, iusto eius assumenda 
                libero ducimus quasi minima eveniet. Minus reprehenderit qui veritatis velit 
                beatae est maxime maiores tempore, eaque eos. Fugiat, aut quidem ullam 
                exercitationem iusto eaque sint magnam.</p>
                <div className="sidenote-container">
                    {sidenotes.map((element) => (
                        <Sidenote sidenote={element} key={element.id}/>
                    ))}
                </div>

                <h2 id="subheader-4">Subheader 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident 
                hic repellat qui, quas delectus deserunt autem harum, aut eum eius maxime quaerat 
                cum voluptatibus ipsum tempora perferendis possimus alias quod impedit rem maiores 
                nostrum odit. Expedita voluptatum deserunt esse inventore? Iste incidunt alias 
                totam, sunt ipsum nesciunt modi inventore dignissimos quisquam ut laboriosam 
                nam consectetur asperiores recusandae in obcaecati molestias sequi earum animi q
                uod minus doloribus autem dolorum minima.</p>
                <PageButtons/>
            </div>
            <div className="page-right">
                {/* passes whole prop object to pageNav component, followed by pageNavLinks component */}
                <PageNav pageLinks={pagelinks}/>
            </div>
        </div>
    )
}
