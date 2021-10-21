import "./page.css";
import Card from "../components/card/Card";
import Sidenote from "../components/sidenote/Sidenote";
import Snippet from "../components/snippet/Snippet";
import PageButtons from "../components/pageButtons/PageButtons";

export default function Home() {
    const cards = [
        {id: 0, text: "Maybe consider architecting your code like this. Sometimes if you don't do it this way, things can go wrong."},  
        {id: 1, text: "We just added this new feature to make your life easier! If you need more information, you can find it here."}
    ]

    return (
        <div className="page">
            <div className="page-left">
                <h1>Welcome to ChainBlock</h1>
                <h2 id="home-subheader-01">Subheader 1</h2>
                <p>A blockchain is a growing list of records, called blocks, that are linked together using cryptography.
                Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally 
                represented as a Merkle tree).</p>
                
                <p>The timestamp proves that the transaction data existed when the block was 
                published in order to get into its hash. As blocks each contain information about the block previous to it, 
                they form a chain, with each additional block reinforcing the ones before it. Therefore, blockchains are 
                resistant to modification of their data because once recorded, the data in any given block cannot be altered 
                retroactively without altering all subsequent blocks.</p>  
                <div className="card-container">
                    {cards.map((element, id) => (
                    <Card card={element} key={element.id}/>
                    ))}
                </div>

                <h1>Header 2</h1>
                <h2 id="home-subheader-02">Subheader 2</h2>
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
                <div className="snippet-container">
                    <Snippet/>
                </div>

                <h1>Header 3</h1>
                <h2 id="home-subheader-03">Subheader 3</h2>
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
                    <Sidenote/>
                </div>
                <h2 id="home-subheader-04">Subheader 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident 
                hic repellat qui, quas delectus deserunt autem harum, aut eum eius maxime quaerat 
                cum voluptatibus ipsum tempora perferendis possimus alias quod impedit rem maiores 
                nostrum odit. Expedita voluptatum deserunt esse inventore? Iste incidunt alias 
                totam, sunt ipsum nesciunt modi inventore dignissimos quisquam ut laboriosam 
                nam consectetur asperiores recusandae in obcaecati molestias sequi earum animi q
                uod minus doloribus autem dolorum minima.</p>
                <PageButtons/>
            </div>
            <div className="page-right"></div>
        </div>
    )
}
