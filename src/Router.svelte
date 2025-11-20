<script lang="ts">
import Router from "svelte-spa-router";
import { wrap } from "svelte-spa-router/wrap";
import { localeFlatMap } from "intlayer";
import App from "./App.svelte";
import { useIntlayerEditor } from "svelte-intlayer";

useIntlayerEditor();

const routes = Object.fromEntries(
    localeFlatMap(({locale, urlPrefix}) => [
    [
        urlPrefix || '/',
        wrap({
            component: App as any,
            props: {
                locale,
            },
        }),
    ],
    ])
);
</script>
  
<Router {routes} />
  