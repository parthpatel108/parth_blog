import algoliasearch from "algoliasearch"
import React, { useRef } from "react"
import moment from "moment"
import { graphql } from "gatsby"
import {
  ClearRefinements,
  Configure,
  Highlight,
  Hits,
  HitsPerPage,
  InstantSearch,
  Pagination,
  Panel,
  RefinementList,
  SearchBox,
  Snippet,
  Menu,
  VoiceSearch,
} from "react-instantsearch-dom"
import styled from "styled-components"
import "./instant-style.css"
// import "./instant-mobile-style.css";
import BrandIcon from "./BrandIcon"
import withURLSyncEvents from "./URLSyncEvents"
import {
  ClearFiltersMobile,
  NoResults,
  ResultsNumberMobile,
  SaveFiltersMobile,
  LNMenu,
  LNMonthMenu,
} from "./widgets"
import "./widgets/Pagination.css"

const EventIcon = styled.span`
  position: absolute;
  width: 120px;
  height: 64px;
  svg {
    opacity: 0.9;
    width: 100;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
`

const FilterRow = styled.div`
  padding: 5px 0px;
`
// const searchClient = algoliasearch(
//   'latency',
//   '6be0576ff61c053d5f9a3225e2a90f76'
// );
const blackOverlay = styled.div`
  background: radial-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)) 0% 0% /
    cover;
  width: 100%;
  height: 100%;
  /* position: absolute; */
  top: 0px;
  z-index: -3;
`
const BrandInfo = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 35px;
  flex-flow: wrap;
  color: #fff;
  font-size: 22px;
`

const EventImage = styled.img`
  opacity: 0.7;
  border-radius: 8px;
`

const EventInfoSpan = styled.p`
  width: 100%;
  text-align: center;
  z-index: 9;
  margin-top: 8px;
  margin-bottom: 10px;
  span {
    font-weight: 800;
  }
`

const EventInfoCity = styled.div`
  z-index: 9;
  font-weight: 600;
  text-align: center;
`

const EventInfoPanel = styled.div`
  background: #4d90fe;
  color: #fff;
  padding: 4px 8px;
  width: auto;
  display: inline;
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 16px;
`

const StyledName = (brandName, eventName, eventType, eventTime, eventPanel) => {
  let regexSTR = ["", ""]
  if (eventName) {
    regexSTR = eventName.split(/ (.*)/)
  }
  let audience = eventName.match(/^.*(CIO|CISO|CMO|CFO|HR|CX|DevSec|DevOp).*$/)
  let currentAudience = ""
  if (audience) {
    currentAudience = audience[1]
  } else {
    currentAudience = "NOA"
  }

  let brandType

  switch (currentAudience) {
    case "CIO":
      brandType = regexSTR[0].replace(currentAudience, "")
      if (brandType === "fintech") {
        return (
          <BrandInfo>
            <EventIcon>
              <BrandIcon brand={brandName} />
            </EventIcon>
            <EventInfoSpan>
              <span>{currentAudience}</span>
              {brandType}
            </EventInfoSpan>

            {regexSTR[1] && (
              <EventInfoCity>
                <span className={"category-tag-list"}>{regexSTR[1]}</span>
              </EventInfoCity>
            )}
          </BrandInfo>
        )
      } else {
        return (
          <BrandInfo>
            <EventIcon>
              <BrandIcon brand={brandName} />
            </EventIcon>
            <EventInfoSpan>
              <span>{currentAudience}</span>
              {brandType}
            </EventInfoSpan>
            {regexSTR[1] && (
              <EventInfoCity>
                <span className={"category-tag-list"}>{regexSTR[1]}</span>
              </EventInfoCity>
            )}
          </BrandInfo>
        )
      }
      break
    case "CISO":
      brandType = regexSTR[0].replace(currentAudience, "")
      if (brandType === "fintech") {
        return (
          <BrandInfo>
            <EventIcon>
              <BrandIcon brand={brandName} />
            </EventIcon>
            <EventInfoSpan>
              <span>{currentAudience}</span>
              {brandType}
            </EventInfoSpan>
            {regexSTR[1] && (
              <EventInfoCity>
                <span className={"category-tag-list"}>{regexSTR[1]}</span>
              </EventInfoCity>
            )}
          </BrandInfo>
        )
      } else if (eventType === "webinar") {
        return (
          <BrandInfo>
            <EventIcon>
              <BrandIcon brand={brandName} />
            </EventIcon>
            <EventInfoSpan>
              <span>{currentAudience}</span>
              {brandType}
            </EventInfoSpan>
            {regexSTR[1] && (
              <EventInfoCity>
                <span className={"category-tag-list"}>{regexSTR[1]}</span>
              </EventInfoCity>
            )}
          </BrandInfo>
        )
      } else {
        return (
          <BrandInfo>
            <EventIcon>
              <BrandIcon brand={brandName} />
            </EventIcon>
            <EventInfoSpan>
              <span>{currentAudience}</span>
              {brandType}
            </EventInfoSpan>
            {regexSTR[1] && (
              <EventInfoCity>
                <span className={"category-tag-list"}>{regexSTR[1]}</span>
              </EventInfoCity>
            )}
          </BrandInfo>
        )
      }
      break
    case "CMO":
      brandType = regexSTR[0].replace(currentAudience, "")
      return (
        <BrandInfo>
          <EventIcon>
            <BrandIcon brand={brandName} />
          </EventIcon>
          <EventInfoSpan>
            <span>{currentAudience}</span>
            {brandType}
          </EventInfoSpan>
          {regexSTR[1] && (
            <EventInfoCity>
              <span className={"category-tag-list"}>{regexSTR[1]}</span>
            </EventInfoCity>
          )}
        </BrandInfo>
      )
      break
    case "CFO":
      brandType = regexSTR[0].replace(currentAudience, "")
      return (
        <BrandInfo>
          <EventIcon>
            <BrandIcon brand={brandName} />
          </EventIcon>
          <EventInfoSpan>
            <span>{currentAudience}</span>
            {brandType}
          </EventInfoSpan>
          {regexSTR[1] && (
            <EventInfoCity>
              <span className={"category-tag-list"}>{regexSTR[1]}</span>
            </EventInfoCity>
          )}
        </BrandInfo>
      )
      break
    case "HR":
      brandType = regexSTR[0].replace(currentAudience, "")
      return (
        <BrandInfo>
          <EventIcon>
            <BrandIcon brand={brandName} />
          </EventIcon>
          <EventInfoSpan>
            <span>{currentAudience}</span>
            {brandType}
          </EventInfoSpan>
          {regexSTR[1] && (
            <EventInfoCity>
              <span className={"category-tag-list"}>{regexSTR[1]}</span>
            </EventInfoCity>
          )}
        </BrandInfo>
      )
      break
    case "CX":
      brandType = regexSTR[0].replace(currentAudience, "")
      return (
        <BrandInfo>
          <EventIcon>
            <BrandIcon brand={brandName} />
          </EventIcon>
          <EventInfoSpan>
            <span>{currentAudience}</span>
            {brandType}
          </EventInfoSpan>
          {regexSTR[1] && (
            <EventInfoCity>
              <span className={"category-tag-list"}>{regexSTR[1]}</span>
            </EventInfoCity>
          )}
        </BrandInfo>
      )
      break
    case "DevSec":
      brandType = regexSTR[0].replace(currentAudience, "")
      return (
        <BrandInfo>
          <EventIcon>
            <BrandIcon brand={brandName} />
          </EventIcon>
          <EventInfoSpan>
            <span>{currentAudience}</span>
            {brandType}
          </EventInfoSpan>
          {regexSTR[1] && (
            <EventInfoCity>
              <span className={"category-tag-list"}>{regexSTR[1]}</span>
            </EventInfoCity>
          )}
        </BrandInfo>
      )
      break
    case "DevOp":
      brandType = regexSTR[0].replace(currentAudience, "")
      return (
        <BrandInfo>
          <EventIcon>
            <BrandIcon brand={brandName} />
          </EventIcon>
          <EventInfoSpan>
            <span>{currentAudience}</span>
            {brandType}
          </EventInfoSpan>
          {regexSTR[1] && (
            <EventInfoCity>
              <span className={"category-tag-list"}>{regexSTR[1]}</span>
            </EventInfoCity>
          )}
        </BrandInfo>
      )
      break
    default:
      return ""
  }
}

const DateBox = styled.div`
  width: 52px;
  /* height: 70px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -35px;
  float: right;
  right: 3px;
  border-radius: 7px;
  overflow: hidden;
`
const DateMonth = styled.div`
  width: 100%;
  text-align: center;
  background: #ebecf3;
  padding: 2px 2px;
  font-size: 13px;
  font-family: inherit;
`

const DateIndex = styled.div`
  width: 100%;
  text-align: center;
  background: #ebecf31f;
  padding: 3px 3px;
  font-size: 17px;
  font-family: inherit;
  font-weight: 600;
`
const DateYear = styled.div`
  width: 100%;
  text-align: center;
  background: #ebecf3;
  padding: 2px 2px;
  font-size: 13px;
  font-family: inherit;
`

const Hit = ({ hit }) => {
  let day = moment(hit.node.date).format("D")
  let month = moment(hit.node.date).format("MMM")
  let year = moment(hit.node.date).format("YYYY")

  return (
    <article className="hit">
      <header className="hit-image-container">
        <EventImage
          src={hit.node.image}
          alt={hit.node.eventTitle}
          className="hit-image"
        />
        {hit.node.panel && <EventInfoPanel>{hit.node.panel}</EventInfoPanel>}
        {StyledName(hit.node.brand, hit.node.eventTitle, hit.node.eventType)}
      </header>

      <div className="hit-info-container">
        <p className="hit-category">{hit.node.brand}</p>
        <h1>
          <Highlight attribute="node.eventTitle" tagName="mark" hit={hit} />
        </h1>
        {/* <p className="hit-description">
      <Snippet attribute="description" tagName="mark" hit={hit} />
    </p> */}
        <DateBox>
          <DateMonth>{month}</DateMonth>
          <DateIndex>{day}</DateIndex>
          <DateYear>{year}</DateYear>
        </DateBox>
      </div>
    </article>
  )
}

const EventsGrid = props => {
  // Instatiate algolia search client : Paerth Patel
  const searchClient = algoliasearch(
    "6P2T762XA3",
    "9d0f381d714844f4912fb731edb8f1eb"
  )

  const searchClientOP = algoliasearch(
    "6P2T762XA3",
    "730d9813b2480967ebf29623c3dfe535"
  )

  const indiceEvent = searchClientOP.initIndex("dataset_gatsby_netlify_events")

  indiceEvent.exists().then(result => {
    console.log("Index is exist : ", result)
  })
  if (props.dataset.length) {
    const dataset = props.dataset
    
    // dataset.map((dataset_item,index) => {
    //   dataset[index] = dataset_item.node;

    // });
    console.log(dataset)
    indiceEvent.clearObjects().then(() => {
      // done
      console.log("Record cleared.")
      indiceEvent
        .saveObjects(dataset, { autoGenerateObjectIDIfNotExist: true })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  // console.log("DATA PROP", props)
  const containerRef = useRef(null)
  const headerRef = useRef(null)

  function openFilters() {
    document.body.classList.add("filtering")
    window.scrollTo(0, 0)
    window.addEventListener("keyup", onKeyUp)
    window.addEventListener("click", onClick)
  }

  function closeFilters() {
    document.body.classList.remove("filtering")
    containerRef.current.scrollIntoView()
    window.removeEventListener("keyup", onKeyUp)
    window.removeEventListener("click", onClick)
  }

  function onKeyUp(event) {
    if (event.key !== "Escape") {
      return
    }

    closeFilters()
  }

  function onClick(event) {
    if (event.target !== headerRef.current) {
      return
    }

    closeFilters()
  }

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="dataset_gatsby_netlify_events"
      searchState={props.searchState}
      createURL={props.createURL}
      onSearchStateChange={props.onSearchStateChange}
    >
      <Configure
        attributesToSnippet={["description:10"]}
        snippetEllipsisText="…"
        removeWordsIfNoResults="allOptional"
      />

      <main className="container" ref={containerRef}>
        <div className="container-wrapper">
          <section className="container-filters" onKeyUp={onKeyUp}>
            {/* <div className="container-header">
            

              <div className="clear-filters" data-layout="mobile">
                <ResultsNumberMobile />
              </div>
            </div> */}

            <div className="container-body">
              <FilterRow>
                <LNMenu
                  menuTitle="Type"
                  attribute="node.eventType"
                  searchable={false}
                  translations={{
                    placeholder: "Search for event type..",
                  }}
                  transformItems={items =>
                    items.map(item => ({
                      ...item,
                      label: item.label.toUpperCase(),
                    }))
                  }
                />
              </FilterRow>
              <FilterRow>
                <LNMenu
                  menuTitle="Audience"
                  attribute="node.audience"
                  searchable={false}
                  translations={{
                    placeholder: "Search for audience..",
                  }}
                  transformItems={items =>
                    items.map(item => ({
                      ...item,
                      label: item.label.toUpperCase(),
                    }))
                  }
                />
              </FilterRow>
              <FilterRow>
                <LNMenu
                  menuTitle="Region"
                  attribute="node.region"
                  searchable={false}
                  translations={{
                    placeholder: "Search for region..",
                  }}
                  transformItems={items =>
                    items.map(item => ({
                      ...item,
                      label: item.label.toUpperCase(),
                    }))
                  }
                />
              </FilterRow>
              <FilterRow>
                <LNMonthMenu
                  menuTitle="Month"
                  attribute="node.month"
                  searchable={false}
                  translations={{
                    placeholder: "Search for month..",
                  }}
                  // transformItems={(items) =>
                  //   items.map((item) => ({
                  //     ...item,
                  //     label: item.label.toUpperCase(),
                  //   }))
                  // }
                />
              </FilterRow>
            </div>
          </section>

          {/* <footer className="container-filters-footer" data-layout="mobile">
            <div className="container-filters-footer-button-wrapper">
              <ClearFiltersMobile containerRef={containerRef} />
            </div>

            <div className="container-filters-footer-button-wrapper">
              <SaveFiltersMobile onClick={closeFilters} />
            </div>
          </footer> */}
        </div>

        <section className="container-results">
          <header className="container-header container-options">
            <SearchBox
              translations={{
                placeholder: "Search events..",
              }}
              submit={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.67"
                    transform="translate(1 1)"
                  >
                    <circle cx="7.11" cy="7.11" r="7.11" />
                    <path d="M16 16l-3.87-3.87" />
                  </g>
                </svg>
              }
            />
            <HitsPerPage
              className="container-option"
              items={[
                {
                  label: "12 per page",
                  value: 12,
                },
                {
                  label: "24 per page",
                  value: 24,
                },
                {
                  label: "48 per page",
                  value: 48,
                },
              ]}
              defaultRefinement={12}
            />
            <div className="clear-filters" data-layout="desktop">
              <ClearRefinements
                translations={{
                  reset: <>Clear filters</>,
                }}
              />
            </div>
          </header>

          <Hits hitComponent={Hit} />
          <NoResults />

          <footer className="container-footer">
            <Pagination
              padding={2}
              showFirst={false}
              showLast={false}
              translations={{
                previous: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.143"
                    >
                      <path d="M9 5H1M5 9L1 5l4-4" />
                    </g>
                  </svg>
                ),
                next: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.143"
                    >
                      <path d="M1 5h8M5 9l4-4-4-4" />
                    </g>
                  </svg>
                ),
              }}
            />
          </footer>
        </section>
      </main>

      {/* <aside data-layout="mobile">
        <button
          className="filters-button"
          data-action="open-overlay"
          onClick={openFilters}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 14">
            <path
              d="M15 1H1l5.6 6.3v4.37L9.4 13V7.3z"
              stroke="#fff"
              strokeWidth="1.29"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Filters
        </button>
      </aside> */}
    </InstantSearch>
  )
}

export default (EventsGrid)
// export default withURLSyncEvents(EventsGrid)
