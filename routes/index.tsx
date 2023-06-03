import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Liberluna Blog Manager</title>
      </Head>
      <div class="mx-10">
        <div class="mx-auto">Liberluna Blog Manager</div>
        <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=7ad00edcde8a0a74d3e6">認証ボタン</a>
      </div>
    </>
  );
}
