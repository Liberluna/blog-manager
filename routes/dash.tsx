import { PageProps } from "$fresh/server.ts"
import HomeDash from "../islands/HomeDash.tsx"

export default function(props: PageProps) {
  return <>
    <div class="mx-10">
      <div class="text-2xl">
        Dash
      </div>
    </div>
  </>
}
