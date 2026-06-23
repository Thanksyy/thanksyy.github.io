/**
 * GitHub Pages 构建后清理脚本
 * 作用：
 *  1. 从 dist/public/index.html 移除 Manus 开发期注入的 debug-collector 脚本
 *  2. 删除 dist/public/__manus__ 调试目录（GitHub Pages 不需要）
 *  3. 写入 .nojekyll，告诉 GitHub Pages 不要用 Jekyll 处理（保留 _ 开头资源等）
 *
 * 由 GitHub Actions 在 `vite build` 之后自动执行，无需手动运行。
 */
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist/public");

// 1. 清理 index.html 中的 debug-collector 注入
const indexPath = path.join(dist, "index.html");
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, "utf-8");
  html = html.replace(
    /<script[^>]*src="\/__manus__\/debug-collector\.js"[^>]*><\/script>/g,
    "",
  );
  fs.writeFileSync(indexPath, html, "utf-8");
  console.log("[postbuild] removed debug-collector script from index.html");
}

// 2. 删除 __manus__ 目录
const manusDir = path.join(dist, "__manus__");
if (fs.existsSync(manusDir)) {
  fs.rmSync(manusDir, { recursive: true, force: true });
  console.log("[postbuild] removed __manus__ directory");
}

// 3. 写入 .nojekyll
fs.writeFileSync(path.join(dist, ".nojekyll"), "", "utf-8");
console.log("[postbuild] wrote .nojekyll");

console.log("[postbuild] done.");
