<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('comp-counter');

  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<button onclick={increment}>
  count is {count}
</button>

<h1>{$content.helloWorld}</h1>