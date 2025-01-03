/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const AddItemLazyImport = createFileRoute('/addItem')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AddItemLazyRoute = AddItemLazyImport.update({
  id: '/addItem',
  path: '/addItem',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/addItem.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/addItem': {
      id: '/addItem'
      path: '/addItem'
      fullPath: '/addItem'
      preLoaderRoute: typeof AddItemLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/addItem': typeof AddItemLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/addItem': typeof AddItemLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/addItem': typeof AddItemLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/addItem'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/addItem'
  id: '__root__' | '/' | '/addItem'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AddItemLazyRoute: typeof AddItemLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AddItemLazyRoute: AddItemLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/addItem"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/addItem": {
      "filePath": "addItem.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
