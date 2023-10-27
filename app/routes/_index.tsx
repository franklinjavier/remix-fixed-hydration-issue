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
      <img
        width="1790"
        alt="image"
        src="https://github.com/remix-run/remix/assets/440220/503c5e54-5d9b-45d5-9082-43db6168d175"
        style={{ border: '2px solid black', borderRadius: 10 }}
      />
    </main>
  )
}
