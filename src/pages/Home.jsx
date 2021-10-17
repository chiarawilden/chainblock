import "./page.css";
import Card from "../components/card/Card";
import Sidenote from "../components/sidenote/Sidenote";

export default function Home() {
    return (
        <div className="page">
            <h1>Getting Started</h1>
            <h2>Subheader 1</h2>
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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <h1>Header 2</h1>
            <h2>Subheader 2</h2>
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

            <h1>Header 3</h1>
            <h2>Subheader 3</h2>
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
        </div>
    )
}
