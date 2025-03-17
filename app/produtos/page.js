import Menu from "./components/Menu";
import Produto from "./components/Produto";

function Produtos() {
    return (
        <div>

            <Menu/>

            <h1>Produto</h1>
            <p>Bem-vindos a página de produtos</p>
            <hr/>
            
            <Produto nome="Maçã" disponivel="Sim" desconto="20" preco="4,92"/>
            <Produto nome="Uva" disponivel="Sim" preco="6,56"/>
            <Produto nome="Pera" preco="105,01"/>
            
        </div>
        
    );
}

export default Produtos;