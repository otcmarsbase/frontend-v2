import React from 'react';

export type RouterName = string;
export type RouterPath = (string | number)[];
export type RouterComponent<P = {}> = React.ComponentType<P>;

export type RouteMap<K, V> = [K, V][];
