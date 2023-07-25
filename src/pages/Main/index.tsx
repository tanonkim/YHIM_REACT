import styled from 'styled-components';
import { colors, flex, font } from 'styles';
import Category from './Category';
import { useCallback, useEffect, useState } from 'react';

function Main() {
  const [productList, setProductList] = useState<any[]>([]);
  const [category, setCategory] = useState<number>();
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {}, [productList]);

  const uri =
    category !== undefined && !(category === 0)
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
        <Category></Category>
      </CategoryList>
      <ContentList>
        <ContentListWrapper>
          {productList.map((product, i) => (
            <ProductInfo key={`product-${i}`}>
              <ImageBox>
                <LikeImg alt="heart" src="../images/heart.png" />
                <ProductImg alt="product" src={product.images[0]} />
              </ImageBox>
              <InfoBox>
                <Name>{product.room_name}</Name>
                <Detail>{product.room_address}</Detail>
                <Detail>{product.schedule}</Detail>
                <Price>
                  ₩{product.price.toLocaleString()} <span>/박</span>
                </Price>
              </InfoBox>
            </ProductInfo>
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

const ProductInfo = styled.div`
  ${flex('center', '', 'column')};
  padding: 0px 15px 25px 15px;
`;

const ImageBox = styled.div`
  position: relative;
  width: 330px;
  height: 330px;
  border-radius: 20px;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const LikeImg = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
`;

const InfoBox = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

const Name = styled.div`
  margin-top: 10px;
  padding: 10px 0px 0px 0px;
  ${font(20, 500)};
  color: ${colors.BLACK};
`;

const Detail = styled.div`
  padding: 7px 0px 10px 0px;
  ${font(18, 500, 5)};
  color: ${colors.GRAY};
`;

const Price = styled.div`
  margin-top: 10px;
  padding: 10px 0px 10px 0px;
  ${font(20, 500)};
  color: ${colors.BLACK};
`;

export default Main;
