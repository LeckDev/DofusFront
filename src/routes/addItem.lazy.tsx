import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/addItem')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/AddItem"!</div>
}
