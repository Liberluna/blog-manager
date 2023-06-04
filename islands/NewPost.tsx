import { useState, useEffect } from "preact/hooks";
import { Octokit } from "octokit";

export default function Counter(props: Props) {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("gh-token");
    const octokit = new Octokit({
      auth: token,
    });

    const owner = "liberluna"; // 所有者(ユーザー/組織)
    const repo = "liberluna.github.io"; // リポジトリ
    const branch = "main"; // ブランチ
    const folderPath = "src/pages/blog/posts"; // 取得するフォルダのパス

    const getFiles = async () => {
      const latestCommit = (await octokit.rest.repos.getBranch({ owner, repo, branch })).data.commit;
      const tree = (await octokit.rest.git.getTree({ owner, repo, tree_sha: latestCommit.sha })).data.tree;
      const folderHash = tree.find((item) => item.path === folderPath)?.sha;

      if (folderHash) {
        const folderTree = (await octokit.rest.git.getTree({ owner, repo, tree_sha: folderHash })).data.tree;
        const files = folderTree.filter((item) => item.type === "blob").map((item) => item.path);
        setFiles(files);
      }
    };

    getFiles();
  }, []);

  let last_file = files[files.length - 1];

  function nextfile(f) {
    return f;
  }

  last_file = nextfile(last_file);

  const PR = () => {
    // Pull Request 提出の
    
  };

  return (
    <div>
      <div>
        <div class="my-5">
          <span>タイトル</span>
          <input class="border" />
        </div>
        <div class="my-5">
          <span>表示名</span>
          <input class="border" />
        </div>
        <div class="my-5">
          <span>ID</span>
          <input class="border" />
        </div>
        <div class="my-5">
          <span>アイコンのPath</span>
          <input placeholder="nakasyou.png" class="border" />
        </div>
        <div class="my-5">
          <button class="rounded bg-green-500 text-white" onClick="{PR}">Pull Requestを提出する</button>
        </div>
        <div>
          <textarea class="border w-full h-screen" placeholder="ここにMarkdownを入力...">
          </textarea>
        </div>
      </div>

      <div>

        {files.map((file) => (
          <div key={file}>{file}</div>
        ))}
      </div>
    </div>
  );
}
