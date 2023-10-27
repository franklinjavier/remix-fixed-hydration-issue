# Fix hydration issue in remix

Add this script tag in your root.tsx

```ts
<script
  dangerouslySetInnerHTML={{
    __html: `document.querySelectorAll("html > script").forEach((s) => s.parentNode?.removeChild(s));`,
  }}
/>
```

### Before

<img width="1912" alt="image" src="https://github.com/remix-run/remix/assets/440220/a7ce4bd4-8d1c-4ecd-bf76-5d1b1ee49adf">

### After

<img width="1912" alt="image" src="https://github.com/remix-run/remix/assets/440220/d5820bf5-24f8-4cee-93cb-253a670a5d9c">
