
import { DateTime } from "luxon";
import Menu from "../../Menu";
import * as Styled from "./style"
import { MockedProducts } from "../../../Mocks";
import ProductsList from "../../ProductList";


const Home = () => {
  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayLong},${actualDate.day}, ${actualDate.monthLong}, ${actualDate.year}`;
  return (
    <Styled.HomeContainer>
      <Menu path={"home"} />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>MarketPlace</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            <Styled.CategoriesNavigationButton active>
              Produtos
            </Styled.CategoriesNavigationButton>
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Selecione o Produto</h2>
          </Styled.ProductsHeaderContainer>
<ProductsList list = {MockedProducts}/>
        </section>
      </Styled.HomeContentContainer>
      <aside>
        <header>
          <h2>Profile</h2>
        </header>
        <div>
          <div>
            <h3>Item</h3>
            <h3>Price</h3>
          </div>
        </div>
        <div>
          <div>
            <p>Sub total</p>
            <p>R$0.00</p>
          </div>
          <button>Continue to payment</button>
        </div>
      </aside>
    </Styled.HomeContainer>
  );
};

export default Home;