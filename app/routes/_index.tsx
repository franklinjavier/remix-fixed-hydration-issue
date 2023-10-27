import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix - fix hydration issue' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <main>
      <h1>Remix - fix hydration issue</h1>
      <p>
        Open the console and you will see that the error messages no longer
        appear.{' '}
        <a
          href="https://github.com/remix-run/remix/issues/4822"
          target="_blank"
        >
          Issue 4822
        </a>
      </p>
    </main>
  )
}
