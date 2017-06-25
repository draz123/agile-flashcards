/**
 * Created by SG0222865 on 6/24/2017.
 */
'use strict';
const isFunction = input => typeof input === 'function';
export default predicate => elemOrThunk =>
    predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;