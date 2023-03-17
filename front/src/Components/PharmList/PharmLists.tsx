//홈화면 옆에 약국 리스트
import styled from "styled-components";
import PharmItem from "./PharmItem";
import { zIndex_PharmList } from "../../Util/z-index";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

//데이터 들어오면 map으로 돌리기전에 하드코딩으로 두개해놨음
export default function PharmLists() {
  const [hidden, setHidden] = useState<boolean>(false);
  /* 조건부로 할려고 임의로 해놓은 것!
  나중에 데이터 넘어오면 바꿀것*/

  return (
    <ListContainer className={hidden ? "hide" : ""}>
      <ContainerWrap className={hidden ? "" : "hide"}>
        <EmptyContainer>
          <span className="partition" />
        </EmptyContainer>
        <PharmContainer>
          <PharmHeadContainer>
            <SearchContainer>
              <div>
                <BsSearch className="searchIcon" aria-hidden="true" />
              </div>
              <label htmlFor="search box" />
              <SearchInput id="search box" placeholder="약국 검색.." />
            </SearchContainer>
            <ButtonContainer>
              <Button>
                <img className="ourpharm_img" alt="pharm" src="Images/OurPharmGo.png" />
                <span className="ourpharm">우리 약국</span>
              </Button>
              <FilterButtons>
                <FilterButton>가까운순</FilterButton>
                <span className="partition" />
                <FilterButton>리뷰많은순</FilterButton>
                <span className="partition" />
                <FilterButton>별점높은순</FilterButton>
              </FilterButtons>
            </ButtonContainer>
          </PharmHeadContainer>
          <PharmItemContainer>
            <PharmItem />
            <PharmItem />
            <PharmItem />
            <PharmItem />
            <PharmItem />
          </PharmItemContainer>
        </PharmContainer>
        {hidden ? (
          <EmptyContainer className="hide">
            <ShowBtn className={hidden ? "" : "hide"} onClick={() => setHidden(false)}>
              {"> 눌러서 열기"}
            </ShowBtn>
          </EmptyContainer>
        ) : (
          <EmptyContainer className="hide">
            <ShowBtn className={hidden ? "hide" : ""} onClick={() => setHidden(true)}>
              {"< 눌러서 숨기기"}
            </ShowBtn>
          </EmptyContainer>
        )}
      </ContainerWrap>
    </ListContainer>
  );
}

//전체 컨테이너
const ListContainer = styled.aside`
  position: absolute;
  width: 38rem;
  height: calc(100vh - 50px);
  border-top: 1px solid var(--black-150);
  border-right: 1px solid var(--black-150);
  border-bottom: 1px solid var(--black-150);
  border-radius: 0 15px 15px 0;
  background-color: var(--white);
  box-shadow: var(--bs-lg);
  padding: 1.5rem 0 1rem 1.5rem;
  transition: 0.2s;
  &.hide {
    transform: translate(-550px, 0px);
  }
  @media (max-width: 768px) {
    transition: 0.2s;
    width: 33rem;
    &.hide {
      transform: translate(-470px, 0px);
    }
  }
  z-index: ${zIndex_PharmList.ListContainer};
`;
const ContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const EmptyContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 36px;
  &.hide {
    margin-right: 0;
  }
  .partition {
    width: 14px;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px inset, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px inset,
      rgba(0, 0, 0, 0.1) 0px -3px 0px, hsl(0, 0%, 100%, 0.1) 0 1px 0 0;
    transition: 0.2s;
    @media (max-width: 768px) {
      transition: 0.2s;
    }
  }
`;
const PharmContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 95px);
`;
const PharmHeadContainer = styled.header`
  margin-right: 42px;
  margin-bottom: 10px;
  transition: 0.2s;
  @media (max-width: 768px) {
    transition: 0.2s;
    margin-right: 22px;
  }
`;
const ShowBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: flex-start;
  margin: 0 20px;
  font-weight: 600;
  font-size: 20px;
  color: var(--black-200);
  :hover {
    color: var(--black-400);
  }
`;
const PharmItemContainer = styled.section`
  overflow-y: scroll;
  height: calc(100vh - 135px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 2px 2px 4px inset, rgba(0, 0, 0, 0.05) 0px 7px 7px -3px inset,
    rgba(0, 0, 0, 0.05) 0px -7px 7px -3px inset;
`;

//input
const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  .searchIcon {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    position: absolute;
    opacity: 0.4;
    margin: 0.8rem;
  }
`;
const SearchInput = styled.input`
  width: 26rem;
  height: 3rem;
  border-radius: 10px;
  border: 3px solid var(--blue-300);
  outline: none;
  font-size: 1.1rem;
  padding-left: 2.8rem;
  transition: 0.2s;
  :focus {
    border-color: var(--blue-400);
    box-shadow: var(--wrapped-shadow);
    transition: 0.2s;
  }
`;

//Buttons
const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 25px 5px 3px 5px;
`;
//우리약국 가기
const Button = styled.button`
  all: unset;
  cursor: pointer;
  margin-right: 88px;
  .ourpharm_img {
    margin-right: 0.3rem;
  }
  .ourpharm {
    font-size: 1rem;
    color: var(--blue-500);
    transition: 0.2s;
    &:hover {
      font-weight: 600;
      color: var(--blue-600);
      transition: 0.2s;
    }
  }
`;
const FilterButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .partition {
    width: 1.4px;
    height: 0.9rem;
    background-color: var(--black-300);
    margin: 0 15px;
  }
`;
const FilterButton = styled.button`
  cursor: pointer;
  background-color: var(--white);
  border: none;
  color: var(--black-350);
  font-size: 0.9rem;
  transition: 0.2s;
  &:hover {
    color: var(--blue-500);
    transition: 0.2s;
  }
`;
