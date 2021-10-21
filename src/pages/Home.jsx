import "./page.css";
import {Link} from "react-router-dom";

export default function Home() {
    const sidenotes = [
        {id: 0, text: "The words block and chain were used separately in Satoshi Nakamoto's original paper, but were eventually popularized as a single word, blockchain, by 2016."}
    ]

    return (
        <div className="page">
            <div className="page-left">
                <h1>Welcome to ChainBlock</h1>
                <h2>History of Blockchain</h2>
                <p>Cryptographer David Chaum first proposed a blockchain-like protocol in his 1982 dissertation 
                "Computer Systems Established, Maintained, and Trusted by Mutually Suspicious Groups." Further 
                work on a cryptographically secured chain of blocks was described in 1991 by Stuart Haber and W. 
                Scott Stornetta. They wanted to implement a system wherein document timestamps could not 
                be tampered with.</p>
                
                <p>The first blockchain was conceptualized by a person (or group of people) known as Satoshi Nakamoto 
                in 2008. Nakamoto improved the design in an important way using a Hashcash-like method to timestamp blocks 
                without requiring them to be signed by a trusted party and introducing a difficulty parameter to stabilize 
                rate with which blocks are added to the chain. The design was implemented the following year by Nakamoto 
                as a core component of the cryptocurrency bitcoin, where it serves as the public ledger for all transactions 
                on the network.</p>  
                <div className="next-button"><Link to="/intro-to-chainblock"><button>Next</button></Link></div>
            </div>
            <div className="page-right"></div>
        </div>
    )
}
