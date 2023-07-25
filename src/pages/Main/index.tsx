import styled from 'styled-components';
import { flex } from 'styles';
import Category from './Category';

function Main() {
  return (
    <ListContainer>
      <CategoryList>
        <Category></Category>
      </CategoryList>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  ${flex('', '', 'column')};
  height: 100%;
  padding: 60px 0px;
  background-color: red;
`;

const CategoryList = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export default Main;
