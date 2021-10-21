// Redirect all paths one level higher
import "./page.css";
import Card from "../components/card/Card";
import Sidenote from "../components/sidenote/Sidenote";
import Snippet from "../components/snippet/Snippet";
import PageButtons from "../components/pageButtons/PageButtons";
import PageNav from "../components/pageNav/PageNav";

export default function Layout() {
    const cards = [
        {id: 0, text: "This is some sample text. "},  
        {id: 1, text: "Here's some more sample text. Enjoy!"}
    ]

    const sidenotes = [
        {id: 0, text: "This is something we're working on adjusting in future releases."}
    ]

    const snippets = [
        {id: 0, code: "Some code"}
    ]

    return (
        <div className="page">
            <div className="page-left">
                <h1>Header 1</h1>
                <h2 id="subheader-01">Subheader 1</h2>
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
                    <Card card={element} key={element.id}/>
                    ))}
                </div>

                <h2 id="subheader-02">Subheader 2</h2>
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

                <h2 id="subheader-03">Subheader 3</h2>
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

                <h2 id="subheader-04">Subheader 4</h2>
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
                <PageNav/>
            </div>
        </div>
    )
}
