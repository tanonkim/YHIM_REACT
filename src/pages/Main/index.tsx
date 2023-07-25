import styled from 'styled-components';
import { flex } from 'styles';
import Category from './Category';
import { useCallback, useEffect, useState } from 'react';
import ProductInfo from './productInfo';

function Main() {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<number>();
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {}, [productList]);

  const uri =
    category !== undefined && !(category == 0)
      ? `${process.env.REACT_APP_API_ADDRESS}/rooms?category=${category}&page=0`
      : `${process.env.REACT_APP_API_ADDRESS}/rooms?page=0`;

  useEffect(() => {
    fetch(`${uri}&limit=${(offset + 1) * 8}`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.results);
      });
  }, [offset, category]);

  useEffect(() => {}, [productList]); // mount

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setOffset((prevOffset: number) => prevOffset + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [productList]);

  return (
    <ListContainer>
      <CategoryList>
        <Category setCategory={setCategory} setOffset={setOffset} />
      </CategoryList>
      <ContentList>
        <ContentListWrapper>
          {productList.map((product, i) => (
            <ProductInfo key={`product-${i}`} product={product} />
          ))}
        </ContentListWrapper>
      </ContentList>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  ${flex('', '', 'column')};
  height: 100%;
`;

const CategoryList = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const ContentList = styled.div`
  ${flex('center', '')};
  flex-wrap: wrap;
  padding: 100px 0;
`;

const ContentListWrapper = styled.div`
  ${flex('', '')};
  max-width: 1440px;
  flex-wrap: wrap;
`;

export default Main;
