const bathroomsDecreaseBtn = ':nth-child(2) > .bt-range-filter >> .bt-range-filter__button--minus';
const bathroomsIncreseBtn = ':nth-child(2) > .bt-range-filter >> .bt-range-filter__button--plus';
const bathroomsNumber = '[id="bt-range-value--Minimum Bathrooms"]'
const bedroomIncreaseBtn = ':nth-child(1) > .bt-range-filter >> .bt-range-filter__button--plus';
const bedroomDecreaseBtn = ':nth-child(1) > .bt-range-filter >> .bt-range-filter__button--minus';
const bedroomNumber = '[id="bt-range-value--Minimum Bedrooms"]'
const clearFiltersBtn = '.bt-clear-filters.bt-button';
const viewResultsBtn = '.bt-modal-toggle.bt-modal-toggle--filters.bt-modal-toggle--close.bt-button--cta bt-button';
const filtersModal = '[aria-label="Filter Results"]';

export default {
    bathroomsDecreaseBtn,
    bathroomsIncreseBtn,
    bathroomsNumber,
    bedroomDecreaseBtn,
    bedroomIncreaseBtn,
    bedroomNumber,
    clearFiltersBtn,
    viewResultsBtn,
    filtersModal,
}