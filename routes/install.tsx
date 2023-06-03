import { PageProps } from "$fresh/server.ts"
import Install from "../islands/Install.tsx"

export default function(props: PageProps) {
  return <>
    <div class="mx-10">
      <div class="text-2xl">
        Installed!
      </div>
      <Install/>
    </div>
  </>
}
