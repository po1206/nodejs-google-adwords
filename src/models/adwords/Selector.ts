/**
 * The operator to use for filtering the data returned.
 * https://developers.google.com/adwords/api/docs/reference/v201809/AdGroupAdService.Predicate.Operator
 *
 * @enum {number}
 */

namespace Predicate {
  export enum Operator {
    EQUALS = 'EQUALS',
    NOT_EQUALS = 'NOT_EQUALS',
    IN = 'IN',
    NOT_IN = 'NOT_IN',
    CONTAINS_ALL = 'CONTAINS_ALL'
  }
}

enum SortOrder {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING'
}

interface IPaging {
  startIndex: number;
  numberResults: number;
}

interface IDateRange {
  min: string;
  max: string;
}

/**
 * Specifies how an entity (eg. adgroup, campaign, criterion, ad) should be filtered.
 *
 * @author dulin
 * @interface IPredicates
 */
interface IPredicates {
  field: string;
  operator: Predicate.Operator;
  values: string[];
}

interface IOrderBy {
  field: string;
  sortOrder: SortOrder;
}

interface ISelector {
  fields: string[];
  predicates?: IPredicates[];
  dateRange?: IDateRange;
  ordering?: IOrderBy[];
  paging?: IPaging;
}

export { ISelector, Predicate, IPaging };
