import "../page.css";
import Card from "../../components/card/Card";
import Sidenote from "../../components/sidenote/Sidenote";
import Snippet from "../../components/snippet/Snippet";
import PageButtons from "../../components/pageButtons/PageButtons";
import PageNav from "../../components/pageNav/PageNav";

export default function WhyChooseChainBlock() {
    const cards = [
        {id: 0, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident hic repellat qui, quas delectus."},  
        {id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident hic repellat qui, quas delectus."}
    ]

    const sidenotes = [
        {id: 0, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident hic repellat qui, quas delectus."}
    ]

    const snippets = [
        {id: 0, code: "Some code"}
    ]

    const pagelinks = [
        {id: 0, headerLink: "Why Choose ChainBlock?", url: "#header-1"},
        {id: 1, subheaderLink: "Subheader 1", url: "#subheader-1"},
        {id: 2, subheaderLink: "Subheader 2", url: "#subheader-2"},
        {id: 3, subheaderLink: "Subheader 3", url: "#subheader-3"},
        {id: 4, subheaderLink: "Subheader 4", url: "#subheader-4"}
    ]

    const pagebuttons = {
        previousPage: "/how-does-it-work",
        nextPage: "/basic-functionality"
    }

    return (
        <div className="page">
            <div className="page-left">
                <h1 id="header-1">Why Choose ChainBlock?</h1>
                <h2 id="subheader-1">Subheader 1</h2>
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
                <div className="card-container">
                    {cards.map((element, id) => (
                        <Card card={element} key={id}/>
                    ))}
                </div>

                <h2 id="subheader-2">Subheader 2</h2>
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
                    {snippets.map((element, id) => (
                        <Snippet snippet={element} key={id}/>
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
                    {sidenotes.map((element, id) => (
                        <Sidenote sidenote={element} key={id}/>
                    ))}
                </div>

                <h2>Subheader 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident 
                hic repellat qui, quas delectus deserunt autem harum, aut eum eius maxime quaerat 
                cum voluptatibus ipsum tempora perferendis possimus alias quod impedit rem maiores 
                nostrum odit. Expedita voluptatum deserunt esse inventore? Iste incidunt alias 
                totam, sunt ipsum nesciunt modi inventore dignissimos quisquam ut laboriosam 
                nam consectetur asperiores recusandae in obcaecati molestias sequi earum animi q
                uod minus doloribus autem dolorum minima.</p>
                <PageButtons pageButtons={pagebuttons}/>
            </div>
            <div className="page-right">
                {/* passes whole prop object to pageNav component, followed by pageNavLinks component */}
                <PageNav pageLinks={pagelinks}/>
            </div>
        </div>
    )
}
