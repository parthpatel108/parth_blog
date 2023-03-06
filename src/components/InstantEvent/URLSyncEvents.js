import React, { Component } from "react";
import qs from "qs";

const updateAfter = 700;

const routeStateDefaultValues = {
  query: "",
  page: "1",
  brands: undefined,
  category: "",
  rating: "",
  price: "",
  free_shipping: "false",
  sortBy: "instant_search",
  hitsPerPage: "20",
  eventType: "",
  audience: "",
  region: "",
};

const encodedCategories = {
  Cameras: "Cameras & Camcorders",
  Cars: "Car Electronics & GPS",
  Phones: "Cell Phones",
  TV: "TV & Home Theater",
};

const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
  const newKey = encodedCategories[key];
  const newValue = key;

  return {
    ...acc,
    [newKey]: newValue,
  };
}, {});

// Returns a slug from the category name.
// Spaces are replaced by "+" to make
// the URL easier to read and other
// characters are encoded.
function getCategorySlug(name) {
  const encodedName = decodedCategories[name] || name;

  return encodedName
    .replace(/ > /g, "/")
    .split(" ")
    .map(encodeURIComponent)
    .join("+");
}

// Returns a name from the category slug.
// The "+" are replaced by spaces and other
// characters are decoded.
function getCategoryName(slug) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug
    .split("+")
    .map(decodeURIComponent)
    .join(" ")
    .replace(/\//g, " > ");
}

const searchStateToURL = (searchState,location) => {
  const routeState = {
    query: searchState.query,
    page: String(searchState.page),
    brands: searchState.menu && searchState.menu.brand,
    category:
      searchState.hierarchicalMenu &&
      searchState.hierarchicalMenu["hierarchicalCategories.lvl0"],
    rating:
      searchState.range &&
      searchState.range.rating &&
      String(searchState.range.rating.min),
    price:
      searchState.range &&
      searchState.range.price &&
      `${searchState.range.price.min || ""}:${
        searchState.range.price.max || ""
      }`,
    free_shipping:
      (searchState.toggle && String(searchState.toggle.free_shipping)) ||
      undefined,
    sortBy: searchState.sortBy,
    hitsPerPage:
      (searchState.hitsPerPage && String(searchState.hitsPerPage)) || undefined,
    eventType:
      searchState.menu &&
      searchState.menu["node.eventType"],
    region:
      searchState.menu && searchState.menu["node.region"],
    audience:
      searchState.menu && searchState.menu["node.audience"],
    month:
      searchState.menu && searchState.menu["node.month"],
  };

  const { protocol, hostname, port = "", pathname, hash } =location;
  const portWithPrefix = port === "" ? "" : `:${port}`;
  const urlParts =location.href.match(/^(.*?)\/search/);
  const baseUrl =
    (urlParts && urlParts[0]) ||
    `${protocol}//${hostname}${portWithPrefix}${pathname}search`;

  const categoryPath = routeState.category
    ? `${getCategorySlug(routeState.category)}/`
    : "";
  const queryParameters = {};

  if (routeState.query && routeState.query !== routeStateDefaultValues.query) {
    queryParameters.query = encodeURIComponent(routeState.query);
  }
  if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
    queryParameters.page = routeState.page;
  }
  if (
    routeState.brands &&
    routeState.brands !== routeStateDefaultValues.brands
  ) {
    queryParameters.brands = routeState.brands.map(encodeURIComponent);
  }
  if (
    routeState.rating &&
    routeState.rating !== routeStateDefaultValues.rating
  ) {
    queryParameters.rating = routeState.rating;
  }
  if (routeState.price && routeState.price !== routeStateDefaultValues.price) {
    queryParameters.price = routeState.price;
  }
  if (
    routeState.free_shipping &&
    routeState.free_shipping !== routeStateDefaultValues.free_shipping
  ) {
    queryParameters.free_shipping = routeState.free_shipping;
  }
  if (
    routeState.sortBy &&
    routeState.sortBy !== routeStateDefaultValues.sortBy
  ) {
    queryParameters.sortBy = routeState.sortBy;
  }
  if (
    routeState.hitsPerPage &&
    routeState.hitsPerPage !== routeStateDefaultValues.hitsPerPage
  ) {
    queryParameters.hitsPerPage = routeState.hitsPerPage;
  }

  // New Params added : Parth Patel
  // EVENT TYPE
  if (
    routeState.eventType &&
    routeState.eventType !== routeStateDefaultValues.eventType
  ) {
    // queryParameters.eventType = routeState.eventType.map(encodeURIComponent);
    queryParameters.eventType = routeState.eventType;
  }

  // REGIONS
  if (
    routeState.region &&
    routeState.region !== routeStateDefaultValues.region
  ) {
    // queryParameters.region = routeState.region.map(encodeURIComponent);
    queryParameters.region = routeState.region;

  }
  // AUDIENCE
  if (
    routeState.audience &&
    routeState.audience !== routeStateDefaultValues.audience
  ) {
    // queryParameters.audience = routeState.audience.map(encodeURIComponent);
    queryParameters.audience = routeState.audience;
  } // MONTH
  if (routeState.month && routeState.month !== routeStateDefaultValues.month) {
    // queryParameters.month = routeState.month.map(encodeURIComponent);
    queryParameters.month = routeState.month;
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  return `${baseUrl}/${categoryPath}${queryString}${hash}`;
};

const urlToSearchState = (location) => {
  const pathnameMatches = location.pathname.match(/search\/(.*?)\/?$/);
  const category = getCategoryName(
    (pathnameMatches && pathnameMatches[1]) || ""
  );
  const queryParameters = qs.parse(location.search.slice(1));
  const {
    query = "",
    page = 1,
    brands = [],
    price,
    free_shipping,
    hitsPerPage,
    sortBy,
    rating,
    eventType,
    audience,
    region,
    month,
  } = queryParameters;
  // `qs` does not return an array when there's a single value.
  const allBrands = Array.isArray(brands) ? brands : [brands].filter(Boolean);

  // NEW ADDED FOR EVENTS FILTER : PP
  const allEventType = Array.isArray(eventType)
    ? eventType
    : [eventType].filter(Boolean);
  const allRegion = Array.isArray(region) ? region : [region].filter(Boolean);
  const allAudience = Array.isArray(audience)
    ? audience
    : [audience].filter(Boolean);
  const allMonth = Array.isArray(month) ? month : [month].filter(Boolean);
  const searchState = { range: {} };

  if (query) {
    searchState.query = decodeURIComponent(query);
  }
  if (page) {
    searchState.page = page;
  }
  if (category) {
    searchState.hierarchicalMenu = {
      "hierarchicalCategories.lvl0": category,
    };
  }
  if (allBrands.length) {
    searchState.menu = {
      brand: allBrands.map(decodeURIComponent),
    };
  }
  if (rating) {
    searchState.range.rating = {
      min: Number(rating),
    };
  }
  if (price) {
    const [min, max = undefined] = price.split(":");
    searchState.range.price = {
      min: min || undefined,
      max: max || undefined,
    };
  }
  if (free_shipping) {
    searchState.toggle = {
      free_shipping: Boolean(free_shipping),
    };
  }
  if (sortBy) {
    searchState.sortBy = sortBy;
  }

  if (hitsPerPage) {
    searchState.hitsPerPage = hitsPerPage;
  }

  let filterList = {};
  // NEW ADDED FOR EVENTS FILTER : PP
  if (allEventType.length) {
    filterList["node.eventType"] = allEventType.map(decodeURIComponent);
    // searchState.menu = {
    //   "node.eventType": allEventType.map(decodeURIComponent),
    // };
  }

  if (allRegion.length) {
    filterList["node.region"] = allRegion.map(decodeURIComponent);
    // searchState.menu = {
    //   "node.region": allRegion.map(decodeURIComponent),
    // };
  }
  if (allAudience.length) {
    filterList["node.audience"] = allAudience.map(decodeURIComponent);
    // searchState.menu = {
    //   "node.audience": allAudience.map(decodeURIComponent),
    // };
  }
  if (allMonth.length) {
    filterList["node.month"] = allMonth.map(decodeURIComponent);
    // searchState.menu = {
    //   "node.month": allMonth.map(decodeURIComponent),
    // };
  }

  // Assign all filters to state : PP
  if (Object.keys(filterList).length) {
    searchState.menu = filterList;
  }
  console.log("SEARCH STATE", searchState);
  return searchState;
};

const withURLSyncEvents = (EventsGrid) =>
  class WithURLSync extends Component {
    state = {
      searchState: urlToSearchState(this.props.location),
    };

    componentDidMount() {
      window.addEventListener("popstate", this.onPopState);
    }

    componentWillUnmount() {
      clearTimeout(this.debouncedSetState);
      window.removeEventListener("popstate", this.onPopState);
    }

    onPopState = ({ state }) =>
      this.setState({
        searchState: state || {},
      });

    onSearchStateChange = (searchState) => {
      console.table("SEARCH STATE PARTH => ", searchState);
      clearTimeout(this.debouncedSetState);

      this.debouncedSetState = setTimeout(() => {
        window.history.pushState(
          searchState,
          null,
          searchStateToURL(searchState,this.props.location)
        );
      }, updateAfter);

      this.setState({ searchState });
    };

    render() {
      const { searchState } = this.state;

      return (
        <EventsGrid
          {...this.props}
          searchState={searchState}
          onSearchStateChange={this.onSearchStateChange}
          createURL={searchStateToURL}
        />
      );
    }
  };

export default withURLSyncEvents;
